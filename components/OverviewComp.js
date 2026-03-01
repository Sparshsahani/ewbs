import Image from 'next/image'
import React from 'react'

export default function OverviewComp({
    overline,
    title,
    paragraphs, 
    mainImage,       // big left image
    topRightImage,   // small right top
    bottomRightImage, // small right bottom
    caption = ""     // optional small caption/text beneath the grid
}) {
    return (
        <>
            <section data-aos="fade-down" data-aos-duration="1000" className="w-full py-16 bg-white">
                <div className="max-w-7xl mx-auto px-4 lg:px-8 xl:px-20 2xl:px-8">

                    {/* Heading */}
                    <div data-aos="fade-right" className="max-w-7xl">
                        <p className="text-xs  2xl:text-lg uppercase tracking-widest text-gray-600 mb-3">
                            {overline}
                        </p>

                        <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-5xl font-semibold text-red-600">
                            {title}
                        </h2>

                        <div className="mt-3 h-[1px] w-full bg-gray-200" />
                    </div>

                    {/* Text */}
                    <div data-aos="fade-left" className="max-w-7xl mt-6 space-y-6 text-2xl xl:text-lg 2xl:text-2xl leading-tight text-black/50 text-justify">
                        {paragraphs.map((p, i) => (
                            <p key={i}>{p}</p>
                        ))}
                    </div>

                    <div className="mt-15 grid grid-cols-1 lg:grid-cols-12 gap-5 items-stretch">
                        {/* Big Left Image (8/12) */}
                        <div data-aos="fade-left" className="lg:col-span-8 relative h-[260px] sm:h-[320px] md:h-[380px] lg:h-[440px] xl:h-[550px]  rounded-[28px] overflow-hidden">
                            <Image
                                src={mainImage}
                                alt="main"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>

                        {/* Right Stacked Images (4/12) */}
                        <div data-aos="fade-right" className="lg:col-span-4 grid grid-rows-2 gap-5">
                            <div className="relative h-[120px] sm:h-[150px] md:h-[190px] lg:h-[210px] xl:h-[380px] rounded-[28px] overflow-hidden bg-gray-100">
                                <Image
                                    src={topRightImage}
                                    alt="top-right"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            <div className="relative h-[120px] sm:h-[150px] md:h-[190px] lg:h-[210px] xl:h-[290px] rounded-[28px] overflow-hidden">
                                <Image
                                    src={bottomRightImage}
                                    alt="bottom-right"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
