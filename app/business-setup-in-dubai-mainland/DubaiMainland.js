
import ReusableBanner from '@/components/ReusableBanner'
import React from 'react'
import DubaiImg from "../../public/images/gallery/dubai-mainland-banner.jpg"
import mainImage1 from "../../public/images/media/dubai-mainland-1.jpg"
import topImage1 from "../../public/images/media/dubai-mainland-2.jpg"
import bottomImage1 from "../../public/images/gallery/dubai-mainland-3.jpg"
import OverviewComp from '@/components/OverviewComp'
import Progress from '@/components/Progress'
import { IoIosSend } from "react-icons/io";
import { PiFileTextLight } from "react-icons/pi";
import { FiCheckCircle } from "react-icons/fi";
import PricingPlans from '@/components/PricingPlans'
import Reviews from '@/pages/section7/Reviews'
import Footer from '@/components/Footer'
import WhatToChat from '@/pages/banner/WhatToChat'
import MapSection from '@/components/MapSection'
import ContactOverview from '@/components/ContactOverview'

export default function DubaiMainland() {
    return (
        <>
            <ReusableBanner
                imageSrc={DubaiImg}
                tag="MAINLAND"
                title={`Company Setup `}
                title2={`In Dubai Mainland`}
            />
            <OverviewComp
                title={`MAINLAND - DUBAI - Why Dubai?`}
                paragraphs={[
                    `Dubai is known for being a business-friendly city with a rapidly growing economy, making it a popular destination for entrepreneurs and investors looking to set up their businesses. Dubai is also known as “The Smart City and The Economic Capital of the UAE.`,

                    `You will find the world's top universities, a financial ecosystem that supports many different currencies and languages, world-class research centers, and an infrastructure that nurtures innovation.`,

                    `Dubai offers an unmatched combination of talent and opportunity, providing access to over 200 million consumers around the world.Plus, Dubai has been built from scratch as a tech - friendly metropolis with modern infrastructure - all geared towards boosting economic growth.`

                ]}
                mainImage={mainImage1}
                topRightImage={topImage1}
                bottomRightImage={bottomImage1}
            />
            <Progress
                overline="PROCESS"
                title="Advantages Of Dubai Mainland Company Formation"
                subtitle="A few reasons why businesses choose to set up in Dubai Mainland:"
                cols={3}
                advantages={[
                    "Investment protection",
                    "Efficient logistics networks",
                    "Multicultural Environment",
                    "Infrastructure",
                    "Business-friendly Policies",
                    "Access to Talent",
                    "Strategic Location",
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
                        title: "Professional Licence",
                        currency: "INR",
                        price: "346,895",
                        features: [
                            "Professional & Services License (LLC)",
                            "Company Name Approval",
                            "Company Name Reservation",
                            "Arabic Trade Name",
                            "Initial Approval",
                            "Dubai Invest Verification",
                            "Memorandum of Association",
                            "Dubai Chamber of Commerce",
                            "Ministry of Economy",
                            "Dubai Municipality",
                            "Administration Fees",
                            "Dubai Mainland Trade License",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                    {
                        title: "Commercial Licence",
                        currency: "INR",
                        price: "359,310",
                        features: [
                            "Trading Commercial License (LLC)",
                            "Company Name Approval",
                            "Company Name Reservation",
                            "Arabic Trade Name",
                            "Initial Approval",
                            "Dubai Invest Verification",
                            "Memorandum of Association",
                            "Dubai Chamber of Commerce",
                            "Ministry of Economy",
                            "Dubai Municipality",
                            "Administration Fees",
                            "Dubai Mainland Trade License",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                    {
                        title: "General Trading",
                        currency: "INR",
                        price: "805,350",
                        features: [
                            "General Trading License (LLC)",
                            "Company Name Approval",
                            "Company Name Reservation",
                            "Arabic Trade Name",
                            "Initial Approval",
                            "Dubai Invest Verification",
                            "Memorandum of Association",
                            "Dubai Chamber of Commerce",
                            "Ministry of Economy",
                            "Dubai Municipality",
                            "Administration Fees",
                            "Dubai Mainland Trade License",
                        ],
                        ctaText: "Begin your journey today",
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
