import Image from 'next/image';
import React from 'react';

export default function ServiceBanner({
    imageSrc = '/images/gallery/services-banner.jpg', // Assuming a default, can be overridden
    title,
    title2,
    subtitle,
    hashtag,
    height = 'h-96 md:h-[500px] lg:h-[500px]',
}) {
    return (
        <section data-aos="fade-up" className={`relative w-full ${height} overflow-hidden font-sans mt-15`}>
            {/* Background Image */}
            <Image
                src={imageSrc}
                alt="Services Banner"
                fill
                priority
                className="object-cover object-center"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content Container */}
            <div className="relative z-10 w-full h-full max-w-screen-2xl mx-auto px-4 md:px-8 lg:px-20 flex flex-col md:flex-row items-center justify-center md:justify-between gap-6">

                {/* Left: White Box with Red Text */}
                <div data-aos="fade-left" className="bg-white rounded-2xl px-6 py-6 md:px-10 md:py-8 shadow-lg max-w-lg w-full md:w-auto text-left">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl 2xl:text-6xl font-bold text-[var(--bg-red)] leading-tight">
                        {title} <br className="hidden sm:block" /> {title2}
                    </h1>
                </div>

                {/* Right: Subtitle Text */}
                <div data-aos="fade-right" className="text-white text-center md:text-left max-w-lg">
                    <p className="text-lg md:text-2xl 2xl:text-3xl font-medium leading-relaxed mb-1">
                        {subtitle}
                    </p>
                    <p className="text-base md:text-xl 2xl:text-4xl font-light">
                        {hashtag}
                    </p>
                </div>

            </div>
        </section>
    );
}
