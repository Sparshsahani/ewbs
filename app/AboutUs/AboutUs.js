import AboutSection from '@/components/AboutSection'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import LogoCarousel from '@/components/LogoCarousel'
import MapSection from '@/components/MapSection'
import OurServices from '@/components/OurServices'
import ServiceBanner from '@/components/ServiceBanner'
import StatsSection from '@/components/StatsSection'
import WhatToChat from '@/pages/banner/WhatToChat'
import Provide from '@/pages/section3/Provide'
import Question from '@/pages/section5/Question'
import Reviews from '@/pages/section7/Reviews'
import Image from 'next/image'
import React from 'react'
import { FaUser, FaCheckCircle, FaComments, FaDollarSign } from "react-icons/fa";
export default function AboutUs() {
    const logos = [
        "/images/logo/sp-tamil.jpg",
        "/images/logo/konan.jpeg",
        "/images/logo/ad-ingenious.jpg",
        "/images/logo/reem.jpg",
        "/images/logo/may-seven.jpg",
    ];

    return (
        <>

            <ServiceBanner
                imageSrc='/images/gallery/services-banner.jpg'
                title="We're top rated"
                title2="Company"
                subtitle="Say Goodbye to Business Setup Hassles. We Make Business Incorporation with Ease!"
                hashtag="#ewbsbusiness"
            />
            <AboutSection
                variant="text"
                tag="About Us"
                title="5,000+ Clients across over 50 nations use our services."
                description="EWBS Star Businessmen Services LLC is your premier partner for seamless business expansion in the Emirates."
                rightTitle="Company's Journey"
                rightText="At EWBS Star Businessmen Services LLC, we have been on a remarkable journey since our inception. With years of experience in providing seamless business expansion solutions in the Emirates, we have established ourselves as the premier partner for ambitious business owners and entrepreneurs. Our unwavering commitment to excellence has enabled us to guide numerous clients to success in both the Freezone and Mainland sectors."
                rightTitle2="Purpose and Goals"
                rightText2="Our purpose is simple yet powerful – to transform your vision into reality. We understand the challenges and complexities involved in establishing and growing a business in the vibrant economic landscape of the Emirates. Our goal is to provide tailored solutions that cater to your specific needs, ensuring your business thrives and navigates the ever-evolving market dynamics."
            />
            <StatsSection />
            <Provide />
            <section data-aos="fade-up" className="w-full bg-[#f5f5f5] py-10 md:py-20">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center gap-10">

                    {/* <!-- LEFT CONTENT --> */}
                    <div data-aos="fade-right" className="w-full lg:w-1/2">

                        <p className="text-red-600 text-sm font-semibold mb-2">
                            About Our Leaders
                        </p>

                        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-red-600 leading-tight mb-6">
                            Mr. Jafar Abbas,<br />
                            CEO of EWBS Star <br className="hidden sm:block" />
                            Businessmen Services LLC
                        </h2>

                        {/* <!-- Section 1 --> */}
                        <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-2">
                            Visionary Leadership & Proven Success in Business Growth
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                            Indian Businessman Mr. Jafar Abbas is the CEO of EWBS Star Businessmen Services LLC,
                            a trusted advisor guiding entrepreneurs and startups through all stages of the business lifecycle,
                            from ideation to execution and expansion. With over 10 years of experience in business consulting,
                            he leverages expertise in strategic planning, market research, financial analysis, and legal compliance
                            to help clients achieve peak performance and sustainable growth.
                        </p>

                        {/* <!-- Section 2 --> */}
                        <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-2">
                            Building a Collaborative & Innovative Culture
                        </h3>
                        <p data-aos="fade-right" className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                            Mr. Jafar leads a team of dedicated consultants known for their collaborative
                            and data-driven approach. They work closely with clients to understand their unique
                            needs and tailor solutions that yield measurable results.
                        </p>

                        {/* <!-- Section 3 --> */}
                        <h3 className="text-lg md:text-xl font-semibold text-red-600 mb-2">
                            Passionate About Empowering Businesses & Creating Impact
                        </h3>
                        <p className="text-gray-700 text-sm md:text-base leading-relaxed mb-6">
                            He actively champions the use of emerging technologies and data-driven insights
                            while advocating sustainable practices that contribute to business growth and
                            positive societal impact.
                        </p>

                        {/* <!-- Button --> */}
                        <a href="#"
                            className="inline-flex items-center text-black font-semibold border-b-2 border-black hover:text-red-600 hover:border-red-600 transition">
                            Request a Callback →
                        </a>

                    </div>

                    {/* <!-- RIGHT IMAGE --> */}
                    <div className="w-full lg:w-1/2 flex justify-center">
                        <div className="w-full max-w-md md:max-w-lg rounded-2xl overflow-hidden shadow-lg">
                            <Image src="/images/gallery/jafar.jpeg"
                                alt="Mr Jafar Abbas"
                                width={500}
                                height={500}
                                className="w-full h-auto object-cover" />
                        </div>
                    </div>

                </div>
            </section>
            <Reviews />
            <LogoCarousel logos={logos} />
            <MapSection />
            <WhatToChat />
            <Footer />
        </>
    )
}
