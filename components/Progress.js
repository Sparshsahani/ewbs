// components/AdvantagesProcess.jsx
"use client";
import Image from "next/image";

export default function Progress({
    overline ,
    title ,
    subtitle ,
    advantages = [],
    steps = [],
    cols = 3, // number of columns for the advantages list (1‑3)
}) {
    // build Tailwind classes dynamically based on `cols` value
    let colClasses = "grid-cols-1";
    if (cols === 2) {
        colClasses = "grid-cols-1 sm:grid-cols-2";
    } else if (cols === 3) {
        colClasses = "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";
    }

    return (
        <section data-aos="fade-down" className="w-full bg-white">
            <div className="max-w-7xl mx-auto px-4 lg:px-6 xl:px-20 2xl:px-8">

                {/* Heading */}
                <div className="max-w-7xl mb-10">
                    <p className="text-xs 2xl:text-lg uppercase tracking-widest text-gray-600 mb-3">
                        {overline}
                    </p>

                    <h2 data-aos="fade-down" className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-red-600 mb-10">
                        {title}
                    </h2>

                    {subtitle && (
                        <p data-aos="fade-left" className="max-w-7xl mt-6 space-y-6 text-2xl xl:text-lg 2xl:text-2xl leading-tight text-black/50">
                            {subtitle}
                        </p>
                    )}
                </div>

                {/* Advantages List */}
                <div className={`grid ${colClasses} gap-y-5 gap-x-10 mb-12`}>
                    {advantages.map((item, i) => (
                        <div key={i} className="flex items-center gap-3">
                            <span data-aos="zoom-in" className="flex h-7 w-7 items-center justify-center rounded-full bg-yellow-400 text-black text-sm font-bold">
                                ✓
                            </span>
                            <span data-aos="zoom-out" className="font-medium 2xl:text-2xl text-gray-800">
                                {item}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Divider */}
                {/* <div className="my-10 border-t border-dashed border-gray-300" /> */}

                {/* Steps */}
                <div data-aos="zoom-in" className="grid grid-cols-1 md:grid-cols-3 gap-10 items-start text-center border-y border-dashed border-gray-300 py-16">
                    {steps.map((step, i) => (
                        <div key={i} className="relative">
                            {/* Icon */}
                            <div data-aos="zoom-in" className="mx-auto text-xl mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-yellow-400">
                                {step.icon}
                            </div>

                            {/* Title */}
                            <h4 data-aos="fade-up" data-aos-duration="1000" className="text-lg xl:text-2xl font-semibold text-red-600">
                                {step.title}
                            </h4>

                            {/* Desc */}
                            <p data-aos="fade-up" data-aos-duration="2000" className="mt-2 text-sm xl:text-lg text-gray-600 max-w-xs mx-auto">
                                {step.description}
                            </p>

                            {/* Arrow */}
                            {i !== steps.length - 1 && (
                                <div data-aos="zoom-in" className="hidden md:block absolute top-7 -right-6 ">
                                    <svg width="80" height="24" viewBox="0 0 80 24" fill="none">
                                        <path
                                            d="M2 12 C 25 0, 55 24, 78 12"
                                            stroke="#999"
                                            strokeDasharray="3 3"
                                            strokeWidth="1.5"
                                            fill="none"
                                        />
                                        <path
                                            d="M72 8 L78 12 L72 16"
                                            stroke="#999"
                                            strokeWidth="1.5"
                                            fill="none"
                                        />
                                    </svg>
                                </div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}