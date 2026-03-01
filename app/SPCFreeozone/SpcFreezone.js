import ContactOverview from '@/components/ContactOverview'
import DubaiImg from "../../public/images/gallery/spc-banner.jpg"
import mainImage1 from "../../public/images/gallery/spc-gallery-1.jpg"
import topImage1 from "../../public/images/gallery/spc-gallery-2.jpg"
import bottomImage1 from "../../public/images/gallery/spc-gallery-3.jpg"
import Footer from '@/components/Footer'
import MapSection from '@/components/MapSection'
import WhatToChat from '@/pages/banner/WhatToChat'
import Reviews from '@/pages/section7/Reviews'
import React from 'react'
import ReusableBanner from '@/components/ReusableBanner'
import OverviewComp from '@/components/OverviewComp'
import Progress from '@/components/Progress'
import { IoIosSend } from 'react-icons/io'
import { PiFileTextLight } from 'react-icons/pi'
import { FiCheckCircle } from 'react-icons/fi'
import PricingPlans from '@/components/PricingPlans'

export default function SpcFreezone() {
    return (
        <>
            <ReusableBanner
                imageSrc={DubaiImg}
                tag="Freezone"
                title={`Setup Your Business`}
                title2={`In SPC Freezone`}
            />
            <OverviewComp
                overline="OVERVIEW"
                title={`Start your business today in SPC Freezone`}
                paragraphs={[
                    `There are over 1,500 different industries represented by our diverse group of businesses. We guarantee your company the best possible rates and the most competitive terms for all your business needs.`,
                    `Freezone that specialises in everything from office spaces to warehouse-lofts, retail spaces to co-working spaces. If you're an entrepreneur, we've got you covered! Let us help you grow your business and make your dream come true!`,
                    `Own a business in the Freezone and want to expand to the mainland? With our duallicensing opportunity, you can. Our team has helped entrepreneurs in the Freezone to grow their businesses without having to relocate.`

                ]}
                mainImage={mainImage1}
                topRightImage={topImage1}
                bottomRightImage={bottomImage1}
            />
            <Progress
                overline="PROCESS"
                title="Advantages Of SPC Freezone Company Formation"
                subtitle="A few reasons why businesses choose to set up in SPC Freezone:"
                cols={2}
                advantages={[
                    "100% foreign ownership",
                    "Access to advanced infrastructure and facilities",
                    "No tax on corporate profits or personal income",
                    "Business-friendly environment and regulations",
                    "No customs duty on imports or exports",
                    "Easy company set-up and registration process",
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
                heading="At SPC FREE ZONE we offer a wide range of facilities and solutions for all your business needs."
                plans={[
                    {
                        title: "0 Visa",
                        currency: "INR",
                        price: "161,005",
                        features: [
                            "Combine any activities (Service, Commercial and Ecommerce)",
                            "Up to 5 Shareholders",
                            "Choose any 3 activities under one License",
                            "Stamped License, MOA and Lease Agreement",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "1 Visa",
                        currency: "INR",
                        price: "198,160",
                        features: [
                            "Combine any activities (Service, Commercial and Ecommerce)",
                            "Up to 5 Shareholders",
                            "Choose any 3 activities under one License",
                            "Stamped License, MOA and Lease Agreement",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "3 Year Visa",
                        currency: "INR",
                        price: "371,550",
                        features: [
                            "1 year license with a 3 year visa",
                            "Combine any activities (Service, Commercial and Ecommerce)",
                            "Up to 5 Shareholders",
                            "Choose any 3 activities under one License",
                            "Stamped License, MOA and Lease Agreement",
                            "Trade license, Establishment card",
                            "E Channel and One Investor Visa"
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                ]}
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
