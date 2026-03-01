// components/PricingPlans.jsx
"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import { IoIosCheckmarkCircle } from "react-icons/io";

export default function PricingPlans({
    heading,
    plans,
    ctaText,
    ctaLinkText,
    ctaLink,
    onlyCTA = false,
    // AOS animation and related attributes for the outer section
    aos = 'zoom-in',
    aosDelay,
    aosOffset,
}) {
    // if the caller only wants the custom pricing CTA section, render that alone
    if (onlyCTA) {
        return (
            // reduce vertical padding when only showing CTA to avoid large empty space
            <section
                data-aos={aos}
                data-aos-delay={aosDelay}
                data-aos-offset={aosOffset}
                className="w-full py-8 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-20 2xl:px-8">
                    {/* Custom Pricing CTA */}
                    <div className="w-full rounded-2xl  border-gray-300 bg-white px-6 py-8 md:px-10 md:py-10">
                        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                            {/* Left */}
                            <div className="flex items-center gap-5">
                                <div className="h-14 w-14 md:h-16 md:w-16 2xl:h-40 2xl:w-40 flex items-center justify-center ">
                                    <Image
                                        src="/images/assets/ils_04.svg"
                                        alt="Help Icon"
                                        width={60}
                                        height={60}
                                        className="w-full h-full object-contain"
                                    />
                                </div>

                                <h4 className="max-w-xl text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-red-600 leading-snug">
                                    {ctaText}
                                </h4>
                            </div>

                            {/* Right */}
                            <a
                                href={ctaLink}
                                className="group inline-flex items-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-red-600 font-medium transition hover:bg-red-50"
                            >
                                {ctaLinkText}
                                <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white transition group-hover:translate-x-0.5">
                                    →
                                </span>
                            </a>
                        </div>

                        {/* dotted divider */}
                        <div className="mt-8 border-t border-dashed border-gray-300" />
                    </div>
                </div>
            </section>
        );
    }

    // if there are no plans (and no heading) don't render anything – avoids leaving blank space
    if (plans.length === 0 && !heading) {
        return null;
    }

    // keep the currently selected plan object (null when modal closed)
    const [selectedPlan, setSelectedPlan] = useState(null);

    // when the modal is open we want to lock the document scroll
    // and restore it when the modal closes
    useEffect(() => {
        if (selectedPlan) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    }, [selectedPlan]);

    return (
        <section
            data-aos={aos}
            data-aos-delay={aosDelay}
            data-aos-offset={aosOffset}
            className="w-full py-16 bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-20 2xl:px-8">

                {/* Heading */}
                <p className="mb-10 text-start xl:text-xl 2xl:text-2xl ">
                    {heading}
                </p>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-14">
                    {plans.map((plan, i) => {
                        const visibleFeatures = plan.features ? plan.features.slice(0, 5) : [];
                        const hasMore = plan.features && plan.features.length > 5;
                        return (
                            <div
                                key={i}
                                className="flex h-full flex-col overflow-hidden rounded-2xl bg-[#f7f7f7] p-0"
                            >
                                {/* Full-width yellow header */}
                                <div className="rounded-t-2xl bg-yellow-400 py-5 text-center text-xl 2xl:text-3xl font-semibold text-black">
                                    {plan.title}
                                </div>

                                {/* Body */}
                                <div className="flex flex-col p-6 h-full">
                                    {/* Price */}
                                    <div className="my-6 flex justify-center">
                                        <div className="rounded-xl bg-gray-200 px-6 py-3 ">
                                            <span className="mr-2 text-sm 2xl:text-2xl font-medium text-gray-600">
                                                {plan.currency}
                                            </span>
                                            <span className="text-3xl 2xl:text-5xl font-bold text-red-600">
                                                {plan.price}
                                            </span>
                                        </div>
                                    </div>

                                    {/* Features */}
                                    {plan.features && plan.features.length > 0 && (
                                        <>
                                            <ul className="space-y-3 text-sm ">
                                                {visibleFeatures.map((f, idx) => (
                                                    <li key={idx} className="flex items-start gap-3">
                                                        <span className="mt-1 inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-full text-red-600 text-xs 2xl:text-5xl leading-none">
                                                            <IoIosCheckmarkCircle />
                                                        </span>
                                                        <span className="leading-snug text-base font-medium">{f}</span>
                                                    </li>
                                                ))}
                                            </ul>

                                            {hasMore && (
                                                <div className="mt-4 text-center">
                                                    <button
                                                        onClick={() => setSelectedPlan(plan)}
                                                        className="text-red-600 underline hover:text-red-800"
                                                    >
                                                        See more
                                                    </button>
                                                </div>
                                            )}
                                        </>
                                    )}

                                    {/* Button */}
                                    {(plan.ctaLink || plan.ctaText) && (
                                        <div className="mt-auto pt-10 text-center">
                                            <a
                                                href={plan.ctaLink || "#"}
                                                className="inline-block rounded-full bg-red-600 px-7 py-2.5 text-base underline font-normal text-white transition hover:opacity-90"
                                            >
                                                {plan.ctaText || "Begin your journey today"}
                                                <div className="text-xs opacity-90">Choose Package</div>
                                            </a>
                                        </div>
                                    )}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* modal — rendered via portal so fixed positioning is never broken by AOS transforms */}
                {selectedPlan && createPortal(
                    <div
                        className="fixed inset-0 z-[9999] flex items-center justify-center"
                        onClick={() => setSelectedPlan(null)}
                    >
                        {/* full-screen overlay */}
                        <div className="absolute inset-0 bg-black/70 backdrop-blur-md" />

                        {/* card */}
                        <div
                            className="relative z-10 w-[95%] max-w-2xl max-h-[90vh] bg-white rounded-3xl shadow-2xl flex flex-col"
                            onClick={(e) => e.stopPropagation()}
                        >
                            {/* close button */}
                            <button
                                onClick={() => setSelectedPlan(null)}
                                className="absolute top-4 right-4 h-9 w-9 rounded-full bg-white shadow hover:bg-gray-100 z-20 flex items-center justify-center"
                                aria-label="Close"
                            >
                                ✕
                            </button>

                            {/* yellow header */}
                            <div className="shrink-0 bg-yellow-400 py-6 text-center text-2xl font-semibold rounded-t-3xl">
                                {selectedPlan.title}
                            </div>

                            {/* scrollable body */}
                            <div className="flex-1 overflow-y-auto p-6">

                                {/* price */}
                                <div className="my-6 flex justify-center">
                                    <div className="rounded-xl bg-gray-200 px-6 py-3">
                                        <span className="mr-2 text-sm text-gray-600">
                                            {selectedPlan.currency}
                                        </span>
                                        <span className="text-3xl font-bold text-red-600">
                                            {selectedPlan.price}
                                        </span>
                                    </div>
                                </div>

                                {/* full features */}
                                <ul className="space-y-4 mb-10">
                                    {selectedPlan.features?.map((f, idx) => (
                                        <li key={idx} className="flex items-start gap-3">
                                            <IoIosCheckmarkCircle className="text-red-600 mt-1 shrink-0 text-lg" />
                                            <span className="text-base font-medium">{f}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* CTA */}
                                <div className="text-center">
                                    <a
                                        href={selectedPlan.ctaLink || "#"}
                                        className="inline-block rounded-full bg-red-600 px-8 py-3 text-white font-medium hover:opacity-90 transition"
                                    >
                                        {selectedPlan.ctaText || "Choose Package"}
                                        <div className="text-xs opacity-90">Choose Package</div>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>,
                    document.body
                )}
                {/* Custom Pricing CTA */}
                <div className="w-full rounded-2xl  border-gray-300 bg-white px-6 py-8 md:px-10 md:py-10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                        {/* Left */}
                        <div className="flex items-center gap-5">
                            <div className="h-14 w-14 md:h-16 md:w-16 2xl:h-40 2xl:w-40 flex items-center justify-center ">
                                <Image
                                    src="/images/assets/ils_04.svg"
                                    alt="Help Icon"
                                    width={60}
                                    height={60}
                                    className="w-full h-full object-contain"
                                />
                            </div>

                            <h4 className="max-w-xl text-xl md:text-2xl lg:text-3xl 2xl:text-4xl font-semibold text-red-600 leading-snug">
                                {ctaText}
                            </h4>
                        </div>

                        {/* Right */}
                        <a
                            href={ctaLink}
                            className="group inline-flex items-center gap-2 rounded-full border border-red-200 px-5 py-2.5 text-red-600 font-medium transition hover:bg-red-50"
                        >
                            {ctaLinkText}
                            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-red-600 text-white transition group-hover:translate-x-0.5">
                                →
                            </span>
                        </a>
                    </div>

                    {/* dotted divider */}
                    <div className="mt-8 border-t border-dashed border-gray-300" />
                </div>
            </div>
        </section>
    );
}