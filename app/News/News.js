"use client";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import ServiceBanner from "@/components/ServiceBanner";
import WhatToChat from "@/pages/banner/WhatToChat";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const API_BASE = "https://api.ewbsbusiness.ae/api/v1";
const IMG_BASE = "https://api.ewbsbusiness.ae";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
}

function CalendarIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4 text-[var(--bg-red)]" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
    </svg>
  );
}

function ArrowIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" className="w-4 h-4" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
    </svg>
  );
}

export default function News() {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`${API_BASE}/News`);
        if (!res.ok) return;
        const json = await res.json();
        if (!json.status || !Array.isArray(json.data)) return;
        setNews(json.data);
      } catch (err) {
        console.error("Failed to fetch news:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchNews();
  }, []);

  return (
    <>
      <ServiceBanner
        imageSrc="/images/gallery/services-banner.jpg"
        title="Explore Our"
        title2="News"
        subtitle="Meet our experts, guiding you through financial intricacies with precision"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20">

          {/* Section Header */}
          <div className="mb-10">
            <p className="text-[var(--bg-red)] font-semibold uppercase tracking-widest text-sm mb-2">Latest Updates</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">News &amp; Insights</h2>
          </div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-spin rounded-full h-14 w-14 border-4 border-[var(--bg-red)] border-t-transparent"></div>
            </div>
          ) : news.length === 0 ? (
            <p className="text-center text-gray-500 py-16 text-lg">No news available at the moment.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7">
              {news.map((item) => {
                const imgSrc = item.image
                  ? item.image.startsWith("http")
                    ? item.image
                    : `${IMG_BASE}${item.image}`
                  : "/images/gallery/services-banner.jpg";

                const category = item.category || item.categoryName || item.newsCategory || "BUSINESS";
                const date = formatDate(item.publishedAt || item.createdAt || item.date);
                const title = item.title || item.newsTitle || "";
                const excerpt = item.description || item.excerpt || item.summary || "";
                const link = item.link || item.url || "#";

                return (
                  <div
                    key={item.id}
                    className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col"
                  >
                    {/* Image + Badge */}
                    <div className="relative w-full aspect-[16/10] overflow-hidden">
                      <Image
                        src={imgSrc}
                        alt={title}
                        fill
                        className="object-cover hover:scale-105 transition-transform duration-500"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      {/* Category Badge */}
                      <span className="absolute top-3 left-3 bg-[var(--bg-red)] text-white text-xs font-bold uppercase px-3 py-1 rounded-md tracking-wider">
                        {category}
                      </span>
                    </div>

                    {/* Card Body */}
                    <div className="p-5 flex flex-col flex-1">
                      {/* Date */}
                      {date && (
                        <div className="flex items-center gap-1.5 text-gray-400 text-sm mb-3">
                          <CalendarIcon />
                          <span>{date}</span>
                        </div>
                      )}

                      {/* Title */}
                      <h3 className="text-gray-900 font-bold text-[17px] leading-snug mb-2 line-clamp-2">
                        {title}
                      </h3>

                      {/* Excerpt */}
                      {excerpt && (
                        <p className="text-gray-500 text-sm leading-relaxed line-clamp-3 mb-4 flex-1">
                          {excerpt}
                        </p>
                      )}

                      {/* Read More */}
                      <a
                        href={link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-auto inline-flex items-center gap-2 text-[var(--bg-red)] font-semibold text-sm hover:gap-3 transition-all duration-200"
                      >
                        Read More
                        <ArrowIcon />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
        </div>
      </section>

      <MapSection />
      <WhatToChat />
      <Footer />
    </>
  );
}
