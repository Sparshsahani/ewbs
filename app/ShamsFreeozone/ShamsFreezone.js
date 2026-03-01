import Footer from '@/components/Footer'
import DubaiImg from '../../public/images/gallery/shams-freezone-banner.jpg'
import mainImage1 from "../../public/images/gallery/shams-gallery-1.jpg"
import topImage1 from "../../public/images/gallery/shams-gallery-2.jpg"
import bottomImage1 from "../../public/images/gallery/dubai-freezone-gallery-3.png"
import ReusableBanner from '@/components/ReusableBanner'
import React from 'react'
import OverviewComp from '@/components/OverviewComp'
import Progress from '@/components/Progress'
import { IoIosSend } from 'react-icons/io'
import { PiFileTextLight } from 'react-icons/pi'
import { FiCheckCircle } from 'react-icons/fi'
import PricingPlans from '@/components/PricingPlans'
import Reviews from '@/pages/section7/Reviews'
import WhatToChat from '@/pages/banner/WhatToChat'
import ContactOverview from '@/components/ContactOverview'
import MapSection from '@/components/MapSection'

export default function ShamsFreezone() {
    return (
        <>
            <ReusableBanner
                imageSrc={DubaiImg}
                tag="FREEZONE"
                title={`Setup Your Business `}
                title2={`In Shams Freezone`}
            />
            <OverviewComp
                title={`Establish Your Company in SHARJAH MEDIA CITY`}
                paragraphs={[
                    `SHAMS FREEZONE is an ideal place for businesses looking to establish their presence in the region. It provides businesses with access to tax-free profits, 100% foreign ownership, and full repatriation of profits. The freezone offers competitive advantages such as a zero-tax regime, 100% foreign ownership, access to world-class infrastructure, and business-friendly policies. Shams Free Zone offers various business services and facilities, including company formation, licensing, and registration services. It is designed to support entrepreneurs and small to medium-sized businesses by providing them access to affordable office spaces, flexible licensing options, and a range of support services.`,

                ]}
                mainImage={mainImage1}
                topRightImage={topImage1}
                bottomRightImage={bottomImage1}
            />
            <Progress
                overline="PROCESS"
                title="Why Shams?"
                subtitle="SHAMS FREEZONE is an ideal destination for businesses looking to explore the Middle East market. Here are various benefits of incorporating a company with Shams free zone. Some of them are listed below:"
                cols={2}
                advantages={[
                    "Low cost for setting up a company",
                    "Shams is located in a tax-free jurisdiction",
                    "The entire capital and profits can be repatriated",
                    "Quick registration",
                    "Zero corporate tax",
                    "100% foreign ownership is permissible",
                    "Various business activities on a single license",
                    "Zero personal tax",
                    "Hassle-free and streamlined procedures"
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
                heading="Get a dubai mainland trade licence with 100% foreign ownership"
                plans={[
                    {
                        title: "0 Visa",
                        currency: "INR",
                        price: "142,370",
                        features: [
                            "Business Bank Account Assistance",
                            "Package Excludes Visa Cost",
                            "Free Dubai Office Address",
                            "Free Meeting Room Access",
                            "Free Company Stamp",
                            "100% Ownership",
                            "Free P.O. Box",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                    {
                        title: "1 Visa",
                        currency: "INR",
                        price: "290,757",
                        features: [
                            "Business Bank Account Assistance",
                            "Package Excludes Visa Cost",
                            "Free Dubai Office Address",
                            "Free Meeting Room Access",
                            "Free Company Stamp",
                            "100% Ownership",
                            "Free P.O. Box",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                    {
                        title: "2 Visa",
                        currency: "INR",
                        price: "318,488",
                        features: [
                            "Business Bank Account Assistance",
                            "Package Excludes Visa Cost",
                            "Free Dubai Office Address",
                            "Free Meeting Room Access",
                            "Free Company Stamp",
                            "100% Ownership",
                            "Free P.O. Box",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                    {
                        title: "3 Visa",
                        currency: "INR",
                        price: "346,219",
                        features: [
                            "Business Bank Account Assistance",
                            "Package Excludes Visa Cost",
                            "Free Dubai Office Address",
                            "Free Meeting Room Access",
                            "Free Company Stamp",
                            "100% Ownership",
                            "Free P.O. Box",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                    {
                        title: "4 Visa",
                        currency: "INR",
                        price: "373,950",
                        features: [
                            "Business Bank Account Assistance",
                            "Package Excludes Visa Cost",
                            "Free Dubai Office Address",
                            "Free Meeting Room Access",
                            "Free Company Stamp",
                            "100% Ownership",
                            "Free P.O. Box",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                    {
                        title: "5 Visa",
                        currency: "INR",
                        price: "401,681",
                        features: [
                            "Business Bank Account Assistance",
                            "Package Excludes Visa Cost",
                            "Free Dubai Office Address",
                            "Free Meeting Room Access",
                            "Free Company Stamp",
                            "100% Ownership",
                            "Free P.O. Box",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                ]}
                ctaText="Want a custom pricing plan for your business?"
                ctaLinkText="Let's Talk"
                ctaLink="/contact"
            />

            <Reviews />.
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
