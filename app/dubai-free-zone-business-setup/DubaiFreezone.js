import ContactOverview from '@/components/ContactOverview'
import DubaiImg from '../../public/images/gallery/dubai-freezone-banner.jpg'
import mainImage1 from "../../public/images/gallery/dubai-freezone-gallery-1.jpg"
import topImage1 from "../../public/images/gallery/dubai-freezone-gallery-2.jpg"
import bottomImage1 from "../../public/images/gallery/dubai-freezone-gallery-3.jpg"
import Footer from '@/components/Footer'
import MapSection from '@/components/MapSection'
import ReusableBanner from '@/components/ReusableBanner'
import WhatToChat from '@/pages/banner/WhatToChat'
import Reviews from '@/pages/section7/Reviews'
import React from 'react'
import OverviewComp from '@/components/OverviewComp'
import Progress from '@/components/Progress'
import { IoIosSend } from 'react-icons/io'
import { PiFileTextLight } from 'react-icons/pi'
import { FiCheckCircle } from 'react-icons/fi'
import PricingPlans from '@/components/PricingPlans'

export default function DubaiFreezone() {
    return (
        <>
            <ReusableBanner
                imageSrc={DubaiImg}
                tag="FREEZONE"
                title={`Setup Your Business `}
                title2={`In Dubai Freezone`}
            />
            <OverviewComp
                title={`Establish Your Company in Dubai Freezone`}
                paragraphs={[
                    `The Dubai free zone model has been successful in attracting foreign investment and stimulating economic growth. With over 30 free zones to choose from, investors can find a free zone that suits their industry and business needs. Companies registered in a Dubai freezone can benefit from a range of advantages, including 100% foreign ownership, no tax on corporate profits or personal income, and simplified customs procedures.`,

                ]}
                mainImage={mainImage1}
                topRightImage={topImage1}
                bottomRightImage={bottomImage1}
            />
            <Progress
                overline="PROCESS"
                title="Advantages Of Dubai Freezone Company Formation"
                subtitle="A few reasons why businesses choose to set up in Dubai Mainland:"
                cols={2}
                advantages={[
                    "100% foreign ownership",
                    "Simplified customs procedures",
                    "Easy company set-up and registration process",
                    "No tax on corporate profits or personal income",
                    "Access to advanced infrastructure and facilities",
                    "No customs duty on imports or exports",
                    "Business-friendly environment and regulations",
                ]}
                steps={[
                    {
                        title: "Application",
                        description: "An application is submitted for the registration of company",
                        icon: <IoIosSend className="h-6 w-6" />,
                    },
                    {
                        title: "Documentation",
                        description: "Submission of documents and signing of application forms",
                        icon: <PiFileTextLight className="h-6 w-6" />,
                    },
                    {
                        title: "Registered",
                        description: "Company registration and formation is complete",
                        icon: <FiCheckCircle className="h-6 w-6" />,
                    },
                ]} />
            <PricingPlans
                onlyCTA
                ctaText="Want a custom pricing plan for your business?"
                ctaLinkText="Let's Talk"
                ctaLink="/contact"
            />
            <Reviews />
            <ContactOverview
                titleTop="BEGIN YOUR JOURNEY"
                titleMain="Connect with us today."
                description="Say Goodbye to Business Setup Hassles. We Make Business Incorporation Easy!"
                hashtag="#ewbsbusiness"
                points={[
                    "Client-Centric Approach",
                    "Expertise Across Domains",
                    "Strategic Location Insights",
                ]}
                stats={[
                    { value: "5000+", label: "Businesses Incorporated" },
                    { value: "4.8★", label: "Highly rated on Google" },
                ]}
                bgColor="bg-[#f3efef]"
                submitText="Submit"
                onSubmit={""}
            />
            <MapSection />
            <WhatToChat />
            <Footer />
        </>
    )
}
