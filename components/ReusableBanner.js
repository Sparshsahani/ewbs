import Image from 'next/image'
import React from 'react'

export default function ReusableBanner({
    tag,
    title,
    title2,
    imageSrc,
    height = 'h-96 md:h-[500px] lg:h-[500px]',
    // AOS animation type (e.g. "fade-up", "zoom-in").
    aos = 'fade-up',
    // optional additional AOS attributes
    aosDelay,
    aosOffset,
}) {
    return (
        <>
            <section
                data-aos={aos}
                data-aos-delay={aosDelay}
                data-aos-offset={aosOffset}
                className={`relative w-full ${height} overflow-hidden mt-20`}>
                {/* Background Image */}
                <Image
                    src={imageSrc}
                    alt={title}
                    fill
                    priority
                    className="object-cover"
                />

                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-black/40" />

                {/* Content */}
                <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-4">
                    {tag && (
                        <span className="mb-3 inline-block rounded-full bg-white px-4 py-1 text-xs md:text-sm font-semibold tracking-wide">
                            {tag}
                        </span>
                    )}

                    <h1 data-aos={aos} data-aos-delay={aosDelay} className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
                        {title}<br />{title2}
                    </h1>
                </div>
            </section>
        </>
    )
}
