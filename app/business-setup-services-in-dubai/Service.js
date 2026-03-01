import AboutSection from '@/components/AboutSection'
import ContactInfo from '@/components/ContactInfo'
import Footer from '@/components/Footer'
import LogoCarousel from '@/components/LogoCarousel'
import MapSection from '@/components/MapSection'
import OurServices from '@/components/OurServices'
import ServiceBanner from '@/components/ServiceBanner'
import WhatToChat from '@/pages/banner/WhatToChat'
import Question from '@/pages/section5/Question'
import Reviews from '@/pages/section7/Reviews'
import React from 'react'
import { FaUser, FaCheckCircle, FaComments, FaDollarSign } from "react-icons/fa";
export default function Service() {
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
                title="Our offerings"
                title2="& Services"
                subtitle="Start Strong in Dubai! Transform Your Ideas into Profitable Ventures"
                hashtag="#ewbsbusiness"
            />
            <AboutSection
                variant="features"

                title="5000+ clients base & growing."
                description="Our mission is to transform your vision into reality in the dynamic landscape of the Emirates. We provide tailored solutions for your business to thrive amidst evolving market dynamics."
                features={[
                    { icon: <FaUser />, title: "Expert Advisors", desc: "Our experts bring in-depth knowledge across various domains" },
                    { icon: <FaCheckCircle />, title: "Effective Support", desc: "Our dedicated team offers comprehensive support" },
                    { icon: <FaComments />, title: "Low Fees", desc: "Cost effective solution for ensuring compliance" },
                    { icon: <FaDollarSign />, title: "Flexible Payments", desc: "Payment in installments available through Tabby" },
                ]}
            />
            <OurServices />
            <Reviews />
            <Question />
            <LogoCarousel logos={logos} />
            <MapSection />
            <WhatToChat />
            <Footer />
        </>
    )
}
