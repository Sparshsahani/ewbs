"use client";
import { useState, useEffect } from "react";

const IPIFY_URL    = process.env.NEXT_PUBLIC_IPIFY_URL || "https://api.ipify.org?format=json";  // step 1: get real public IP
const IPINFO_URL   = process.env.NEXT_PUBLIC_IPINFO_URL || "https://api.ipinfo.io/lite/";        // step 2: ipinfo with that IP
const IPINFO_TOKEN = process.env.NEXT_PUBLIC_IPINFO_TOKEN || "b0beada749205e";
const CURRENCY_URL = process.env.NEXT_PUBLIC_CURRENCY_URL || "https://newcrm.ewbsbusiness.ae/api/v1/Currency";
// Separate cache keys so IP lookup is stored once and currency rates refresh daily
const IP_CACHE_KEY  = "ewbs_ip_v1";       // never expires – country doesn't change
const CACHE_KEY     = "ewbs_currency_v6"; // full result, expires after 24 h
const CACHE_TTL     = 24 * 60 * 60 * 1000; // 24 hours in ms

// Only these three countries get a non-AED currency.
// Every other country defaults to AED.
const COUNTRY_TO_CURRENCY = {
  IN: "INR", // India
  PK: "PKR", // Pakistan
  DE: "EUR", // Germany
};

// Default fallback – AED for everyone unless overridden above
const DEFAULT_DATA = {
  countryCode: null,
  currencyCode: "AED",
  rate: 1,          // 1 AED = 1 AED
  inrRate: 25.448632,
  baseCurrency: "AED",
  cachedAt: 0,
};

/**
 * Fetches the user's local currency once, caches it in localStorage for 24 h.
 *
 * Returns:
 *   loading      – true while the async work is in flight
 *   currencyCode – ISO 4217 code for the user's currency (e.g. "EUR", "AED")
 *   rate         – 1 AED = `rate` units of `currencyCode`
 *                  (1 for AED itself, since that is the base)
 *   inrRate      – 1 AED = `inrRate` INR  (needed to convert stored INR prices)
 */
export function useCurrency() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let cancelled = false;

    async function init() {
      // ── 1. Try the localStorage cache ──────────────────────────────
      try {
        const raw = localStorage.getItem(CACHE_KEY);
        if (raw) {
          const cached = JSON.parse(raw);
          if (
            cached &&
            typeof cached.cachedAt === "number" &&
            Date.now() - cached.cachedAt < CACHE_TTL
          ) {
            if (!cancelled) {
              setData(cached);
              setLoading(false);
            }
            return;
          }
        }
      } catch (_) {
        /* ignore parse errors */
      }

      // ── 2. Get country code (from IP cache or API – called only once ever) ──
      try {
        let countryCode = null;

        // Check if we already have the IP/country cached (no TTL – country never changes)
        try {
          const rawIp = localStorage.getItem(IP_CACHE_KEY);
          if (rawIp) {
            const cachedIp = JSON.parse(rawIp);
            if (cachedIp && cachedIp.country_code) {
              countryCode = cachedIp.country_code;
            }
          }
        } catch (_) {}

        if (!countryCode) {
          // Step 1: get user's real public IP
          const ipifyRes = await fetch(IPIFY_URL);
          if (!ipifyRes.ok) throw new Error("ipify failed");
          const { ip } = await ipifyRes.json();

          // Step 2: pass that IP to ipinfo
          const ipRes = await fetch(`${IPINFO_URL}${ip}?token=${IPINFO_TOKEN}`);
          if (ipRes.ok) {
            const ipData = await ipRes.json();
            countryCode = ipData.country_code ?? null;
            try {
              localStorage.setItem(IP_CACHE_KEY, JSON.stringify({ country_code: countryCode }));
            } catch (_) {}
          }
        }

        // ── 3. Fetch currency rates ────────────────────────────────────
        const currRes = await fetch(CURRENCY_URL);
        if (!currRes.ok) throw new Error("Currency API error");
        const currData = await currRes.json();
        const currencyCode = COUNTRY_TO_CURRENCY[countryCode] ?? "AED";
        const rates = Array.isArray(currData.data) ? currData.data : [];

        // Rate for the user's target currency (AED → target)
        const targetRecord = rates.find((r) => r.currencyCode === currencyCode);
        // Always grab the INR rate so we can back-convert stored INR prices
        const inrRecord = rates.find((r) => r.currencyCode === "INR");

        // Truncate to 2 decimal places (floor, not round) e.g. 25.448632 → 25.44
        const truncate2 = (n) => Math.floor(n * 100) / 100;

        const result = {
          countryCode,
          currencyCode,
          // For AED: rate = 1 (1 AED = 1 AED, no conversion)
          rate: targetRecord ? truncate2(targetRecord.amt) : 1,
          inrRate: inrRecord ? truncate2(inrRecord.amt) : DEFAULT_DATA.inrRate,
          baseCurrency: "AED",
          cachedAt: Date.now(),
        };

        // Only cache if we successfully got a countryCode – never persist a null/failed result
        if (result.countryCode) {
          try {
            localStorage.setItem(CACHE_KEY, JSON.stringify(result));
          } catch (_) {}
        }

        if (!cancelled) {
          setData(result);
          setLoading(false);
        }
      } catch (err) {
        console.error("[useCurrency] fetch failed, using fallback:", err);
        if (!cancelled) {
          setData(DEFAULT_DATA);
          setLoading(false);
        }
      }
    }

    init();
    return () => {
      cancelled = true;
    };
  }, []);

  return { loading, ...(data ?? DEFAULT_DATA) };
}

/**
 * Converts a price stored in INR into the user's currency.
 * Direct multiplication: price × (targetRate / inrRate)
 * All rates come from the CRM API — nothing is hardcoded.
 *
 * @param {string|number} inrPrice   – stored price in INR (may contain commas)
 * @param {number}        inrRate    – 1 AED = inrRate INR   (from API)
 * @param {string}        targetCode – ISO 4217 target currency code
 * @param {number}        targetRate – 1 AED = targetRate target-currency (from API; 1 for AED)
 * @returns {{ amount: string, code: string }}
 */
export function convertPriceFromINR(inrPrice, inrRate, targetCode, targetRate) {
  const inrNum =
    typeof inrPrice === "string"
      ? parseFloat(inrPrice.replace(/,/g, ""))
      : Number(inrPrice);

  if (!isFinite(inrNum) || inrNum <= 0)
    return { amount: inrPrice.toString(), code: targetCode };

  // Direct multiplier: how many target-currency units equals 1 INR
  // For INR→INR: 1  |  For INR→AED: 1/inrRate  |  For INR→PKR/EUR: targetRate/inrRate
  const multiplier = targetCode === "INR" ? 1 : targetRate / inrRate;
  const converted  = inrNum * multiplier;

  const formatted = Math.round(converted).toLocaleString("en-US");
  return { amount: formatted, code: targetCode };
}

/**
 * Converts a price stored in AED into the user's currency.
 * Direct multiplication: price × targetRate  (where 1 AED = targetRate target-currency)
 * All rates come from the CRM API — nothing is hardcoded.
 *
 * @param {string|number} aedPrice   – stored price in AED (may contain commas)
 * @param {string}        targetCode – ISO 4217 target currency code
 * @param {number}        targetRate – 1 AED = targetRate target-currency (from API; 1 for AED)
 * @param {number}        inrRate    – 1 AED = inrRate INR (from API; used for INR target)
 * @returns {{ amount: string, code: string }}
 */
export function convertPriceFromAED(aedPrice, targetCode, targetRate, inrRate) {
  const aedNum =
    typeof aedPrice === "string"
      ? parseFloat(aedPrice.replace(/,/g, ""))
      : Number(aedPrice);

  if (!isFinite(aedNum) || aedNum <= 0)
    return { amount: aedPrice.toString(), code: targetCode };

  // Direct multiplier: 1 AED = targetRate target-currency (API value)
  // AED→AED: 1  |  AED→INR: inrRate  |  AED→PKR/EUR: targetRate (all from API)
  const multiplier = targetCode === "AED" ? 1 : targetCode === "INR" ? inrRate : targetRate;
  const converted  = aedNum * multiplier;

  const formatted = Math.round(converted).toLocaleString("en-US");
  return { amount: formatted, code: targetCode };
}
