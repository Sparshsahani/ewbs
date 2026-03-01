import Footer from '@/components/Footer'
import DubaiImg from '../../public/images/gallery/amc-freezone-banner.jpg'
import mainImage1 from "../../public/images/gallery/amc-gallery-1.jpg"
import topImage1 from "../../public/images/gallery/amc-gallery-2.jpg"
import bottomImage1 from "../../public/images/gallery/dubai-mainland-3.jpg"
import MapSection from '@/components/MapSection'
import ReusableBanner from '@/components/ReusableBanner'
import WhatToChat from '@/pages/banner/WhatToChat'
import React from 'react'
import ContactOverview from '@/components/ContactOverview'
import Reviews from '@/pages/section7/Reviews'
import PricingPlans from '@/components/PricingPlans'
import Progress from '@/components/Progress'
import OverviewComp from '@/components/OverviewComp'
import { IoIosSend } from 'react-icons/io'
import { PiFileTextLight } from 'react-icons/pi'
import { FiCheckCircle } from 'react-icons/fi'

export default function AmcFreezone() {
    return (
        <>

            <ReusableBanner
                imageSrc={DubaiImg}
                tag="FREEZONE"
                title={`Esttablish Your Company `}
                title2={`In Ajman Media City`}
            />

            <OverviewComp
                title={`Establish your company in Ajman Media City`}
                paragraphs={[
                    `Ajman Media City Free Zone (AMCFZ) is a free zone located in Ajman, one of the seven emirates of the United Arab Emirates (UAE). While it is not located in Dubai, it is in close proximity to the city and serves as an alternative for businesses looking to establish themselves in the UAE.`,

                    `Some of the benefits of setting up a business in AMCFZ include 100% ownership of the company, 0% corporate and personal income tax, 100% repatriation of capital and profits, and a simplified and fast registration process. AMCFZ also provides a range of business facilities and services such as flexible office spaces, meeting rooms, and business support services.`,

                ]}
                mainImage={mainImage1}
                topRightImage={topImage1}
                bottomRightImage={bottomImage1}
            />

            <Progress
                overline="PROCESS"
                title="Advantages Of Ajman Media City Free Zone Company Formation"
                subtitle="Ajman Media City Free Zone offers a range of advantages for businesses looking to establish a presence in the UAE. With its strategic location, tax benefits, easy company formation process, and world-class infrastructure, it is a popular choice for entrepreneurs and investors from around the world."
                cols={2}
                advantages={[
                    "Strategic Location",
                    "Easy Company Formation",
                    "Visa Facilities",
                    "100% Foreign Ownership",
                    "Range of Business Activities",
                    "Tax Benefits",
                    "Infrastructure",
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
                heading="Find out which AMC package matches with your needs"
                plans={[
                    {
                        title: "0 Visa",
                        currency: "INR",
                        price: "210,460",
                        features: [
                            "Licence Zero Visa Allocation",
                            "Free Dubai Office Address",
                            "Free Company Stamp",
                            "Free 2 Hours Meeting Room",
                            "Free Shared Dubai P.O. Box",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                    {
                        title: "1 Visa",
                        currency: "INR",
                        price: "284,740",
                        features: [
                            "Licence Zero Visa Allocation",
                            "Free Dubai Office Address",
                            "Free Company Stamp",
                            "Free 2 Hours Meeting Room",
                            "Free Shared Dubai P.O. Box",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                    {
                        title: "2 Visa",
                        currency: "INR",
                        price: "359,050",
                        features: [
                            "Licence Zero Visa Allocation",
                            "Free Dubai Office Address",
                            "Free Company Stamp",
                            "Free 2 Hours Meeting Room",
                            "Free Shared Dubai P.O. Box",
                        ],
                        ctaText: "Begin your journey today",
                        ctaLink: "/contact",
                    },
                    {
                        title: "3 Visa",
                        currency: "INR",
                        price: "433,300",
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
