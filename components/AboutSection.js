import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaArrowRight } from "react-icons/fa6";
import { IoCheckmarkCircle } from "react-icons/io5";

export default function AboutSection({
    variant = "image", // "image" | "text" | "features"
    tag,
    title,
    description,
    buttonText,
    buttonLink = "/AboutUs",
    imageSrc,
    checklist = [],
    rightTitle,
    rightText,
    rightTitle2,
    rightText2,
    features = [],
}) {
    return (
        <section data-aos="fade-down" className="py-10 md:py-20 lg:py-28 overflow-hidden">
            <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20 flex flex-col md:flex-row justify-between items-center gap-10">

                {/* LEFT SIDE (Always text) */}
                <div data-aos="fade-right" className="w-full md:w-1/2 flex flex-col justify-center gap-6 md:gap-10">
                    <h2 className="text-[var(--bg-red)] font-semibold uppercase tracking-wider">{tag}</h2>

                    <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-6xl font-semibold text-[var(--bg-red)] leading-snug">
                        {title}
                    </h1>

                    <p className="text-lg md:text-xl xl:text-md 2xl:text-2xl font-light text-gray-700">
                        {description}
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 sm:items-center mt-4">
                        {buttonText && (
                            <Link href={buttonLink} className="w-fit">
                                <button className="bg-[var(--bg-red)] text-white px-6 py-3 rounded-full font-semibold hover:bg-[var(--button-color)] hover:text-black transition-colors duration-300 w-fit">
                                    {buttonText}
                                </button>
                            </Link>
                        )}
                        <Link
                            href={buttonLink}
                            className="flex items-center gap-2 text-black font-medium underline hover:text-blue-700 w-fit"
                        >
                            Request a Callback <FaArrowRight />
                        </Link>
                    </div>
                </div>

                {/* RIGHT SIDE */}
                <div data-aos="fade-left" className="w-full md:w-1/2 relative mt-8 md:mt-0">

                    {/* VARIANT 1: IMAGE + CHECKLIST (1st screenshot) */}
                    {variant === "image" && imageSrc && (
                        <div className="relative rounded-3xl overflow-hidden">
                            <Image
                                src={imageSrc}
                                alt="about"
                                width={2000}
                                height={2000}
                                className="w-full h-auto object-cover"
                            />

                            <div className="absolute inset-0 flex flex-col p-4 sm:p-6 gap-2 sm:gap-4 justify-end items-start">
                                {checklist.map((text, i) => (
                                    <div
                                        key={i}
                                        className="flex items-center bg-white rounded-full px-3 py-2 shadow-sm max-w-[85%]"
                                    >
                                        <span className="p-1 rounded-full bg-white flex-shrink-0">
                                            <IoCheckmarkCircle className="text-[var(--bg-red)] text-xl" />
                                        </span>
                                        <span className="text-sm font-medium 2xl:text-xl leading-snug ml-2">
                                            {text}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {/* VARIANT 2: TEXT CONTENT (2nd screenshot) */}
                    {variant === "text" && (
                        <div className="flex flex-col gap-6">
                            <h3 className="text-[var(--bg-red)] text-2xl font-semibold">{rightTitle}</h3>
                            <p className="text-gray-700 leading-relaxed">{rightText}</p>
                            <h3 className="text-[var(--bg-red)] text-2xl font-semibold">{rightTitle2}</h3>
                            <p className="text-gray-700 leading-relaxed">{rightText2}</p>
                        </div>
                    )}

                    {/* VARIANT 3: FEATURES GRID (3rd screenshot) */}
                    {variant === "features" && (
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {features.map((f, i) => (
                                <div key={i} className="flex flex-col gap-2">
                                    <div className="w-12 h-12 rounded-full border flex items-center justify-center text-[var(--bg-red)]">
                                        {f.icon}
                                    </div>
                                    <h4 className="text-[var(--bg-red)] font-semibold 2xl:text-2xl">{f.title}</h4>
                                    <p className="text-gray-600 2xl:text-xl">{f.desc}</p>
                                </div>
                            ))}
                        </div>
                    )}

                </div>
            </div>
        </section>
    );
}