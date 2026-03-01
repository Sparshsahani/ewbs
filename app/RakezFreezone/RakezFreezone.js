import ContactOverview from '@/components/ContactOverview'
import DubaiImg from "../../public/images/gallery/dubai-mainland-banner.jpg"
import mainImage1 from "../../public/images/gallery/rakez-gallery-1.jpg"
import topImage1 from "../../public/images/gallery/rakez-gallery-2.jpg"
import bottomImage1 from "../../public/images/gallery/rakez-gallery-3.jpg"
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

export default function RakezFreezone() {
    return (
        <>
            <ReusableBanner
                imageSrc={DubaiImg}
                // tag="MAINLAND"
                title={`Begin Your Entrepreneurial`}
                title2={`Journey Today!`}
            />
            <OverviewComp
                overline="OVERVIEW"
                title={`Establish Your Company in RAKEZ Freezone.`}
                paragraphs={[
                    `RAKEZ Freezone, established by the Ras Al Khaimah Economic Zone (RAKEZ) in the United Arab Emirates (UAE), stands as a testament to fostering economic growth in the region. It provides businesses with top-tier infrastructure and a conducive environment aimed at facilitating growth and prosperity. With its array of incentives such as 100% tax exemption, profit repatriation, streamlined visa processing, and access to premier infrastructure, RAKEZ Freezone beckons both local and foreign investors.`,

                    `Positioned as an ideal gateway to the Middle East, it offers businesses unparalleled opportunities to thrive and expand their footprint in the dynamic market landscape. Its goal is to bolster the economy of the region and attract both foreign and local investors. RAKEZ Freezone is an ideal destination for businesses looking to establish their presence in the Middle East region.`,
                ]}
                mainImage={mainImage1}
                topRightImage={topImage1}
                bottomRightImage={bottomImage1}
            />
            <Progress
                overline="PROCESS"
                title="Why Choose Us"
                cols={3}
                advantages={[
                    "No Upfront costs",
                    "Flexible visa options",
                    "Multiple business activities",
                    "Complete ownership",
                    "Hassle-free setup",
                ]}
            />
            <Progress
                overline="PROCESS"
                title="Advantages Of Ras Al Khaimah Economic Zone (RAKEZ) Company Formation"
                subtitle="Ras Al Khaimah Economic Zone (RAKEZ) is a business hub in the United Arab Emirates (UAE) that offers several benefits for companies looking to set up its operations in the region. Here are some advantages of RAKEZ company formation:"
                cols={3}
                advantages={[
                    "Strategic Location",
                    "Attractive Business Environment",
                    "100% Foreign Ownership",
                    "Tax Benefits",
                    "Low Operating Costs",
                    "Fast and Efficient Licensing",
                    "Flexible Business Structures",
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
                heading="Get a RAKEZ trade licence with 100% foreign ownership"
                plans={[
                    {
                        title: "1 Visa",
                        currency: "INR",
                        price: "247,600",
                        features: [
                            "Business License for 1 year",
                            "1 Investor visa Included",
                            "Free Meeting room access",
                            "Free Dubai office address",
                            "100% Ownership",
                            "Free PRO Services",
                            "Free Company Stamp",
                            "Free P.O.Box",
                        ],
                        ctaText: "Pay Upfront INR 99.015 for 1 Visa",
                        ctaLink: "/contact",
                    },
                    {
                        title: "2 Visa",
                        currency: "INR",
                        price: "396,160",
                        features: [
                            "Business License for 1 year",
                            "2 Investor visas for 2 years",
                            "Free Meeting room access",
                            "Free Dubai office address",
                            "100% Ownership",
                            "Free PRO Services",
                            "Free Company Stamp",
                            "Free P.O.Box",
                        ],
                        ctaText: "Pay Upfront INR 99.015 for 2 Visa ",
                        ctaLink: "/contact",
                    },
                    {
                        title: "4 Visa",
                        currency: "INR",
                        price: "581,860",
                        features: [
                            "4 Investor visa Included",
                            "4 Investor visas for 2 years",
                            "Business License for 1 Year",
                            "Business bank acccount assistance",
                            "Installments based on eligibility",
                            "Inclusive of benefits from the other 2 packages",
                        ],
                        ctaText: "Pay Upfront INR 99.015 for 4 Visa ",
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
