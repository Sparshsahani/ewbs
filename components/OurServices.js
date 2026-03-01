"use client";
import React from "react";
import Image from "next/image";

const services = [
    {
        title: "Business Setup",
        desc: "Comprehensive business setup solutions tailored to suit both Freezone and Mainland requirements.",
        icon: "/images/icon/icon_06.svg",
    },
    {
        title: "VAT Registration & Filing",
        desc: "End-to-end solutions, including VAT registration, compliance, reporting, and filing.",
        icon: "/images/icon/icon_08.svg",
    },
    {
        title: "IT & Digital Marketing",
        desc: "Range of solutions including website development, digital marketing, SEO, and social media marketing.",
        icon: "/images/icon/icon_07.svg",
    },
    {
        title: "Auditing",
        desc: "Professional auditing services to ensure the accuracy and integrity of your financial records.",
        icon: "/images/icon/icon_41.svg",
    },
    {
        title: "License Renewal",
        desc: "Timely and hassle-free renewal of your business licenses. Focus on your core operations without any disruptions.",
        icon: "/images/icon/icon_40.svg",
    },
    {
        title: "PRO Services",
        desc: "Streamline government-related processes, minimising administrative burdens and ensuring compliance.",
        icon: "/images/icon/icon_42.svg",
    },
    {
        title: "Company Liquidation",
        desc: "Dedicated support and guidance to facilitate a smooth liquidation process.",
        icon: "/images/icon/icon_95.svg",
    },
    {
        title: "Document Attestation",
        desc: "Ensuring the authenticity and legality of your important business documents.",
        icon: "/images/icon/icon_07.svg",
    },
    {
        title: "Real Estate",
        desc: "Helping you find the ideal commercial space to support your business expansion.",
        icon: "/images/icon/icon_23.svg",
    },
];

export default function OurServices() {
    return (
        <section data-aos="fade-up" className="relative w-full py-16 sm:py-20 md:py-24 bg-[#f8f6f5]">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 md:px-10 lg:px-20">

                {/* Heading */}
                <div className="mb-10 sm:mb-14">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl 2xl:text-6xl font-semibold text-red-600 ">
                        Our Services
                    </h2>
                    <p className="mt-2 text-sm sm:text-base md:text-lg 2xl:text-2xl text-gray-600 max-w-5xl">
                        We offer a comprehensive range of services designed to propel your business forward.
                    </p>
                </div>

                {/* Cards */}
                <div data-aos="fade-up" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                    {services.map((s, i) => (
                        <div
                            key={i}
                            className="rounded-2xl bg-white p-6 sm:p-8 shadow-lg space-y-6 hover:bg-yellow-300 duration-200"
                        >
                            {/* Icon Wrapper (Red circle + light blob) */}
                            <div className="relative mb-5 w-12 h-12">
                            

                                {/* icon image */}
                                <Image
                                    src={s.icon}
                                    alt={s.title}
                                    width={50}
                                    height={50}
                                    className="relative z-10"
                                />
                            </div>

                            {/* Title */}
                            <h3 className="text-base sm:text-lg md:text-xl 2xl:text-2xl font-semibold text-red-600 mb-2">
                                {s.title}
                            </h3>

                            {/* Description */}
                            <p className="text-sm sm:text-base 2xl:text-xl text-gray-600 leading-relaxed">
                                {s.desc}
                            </p>

                            {/* Arrow */}
                            <div className="mt-4 text-gray-400">→</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}