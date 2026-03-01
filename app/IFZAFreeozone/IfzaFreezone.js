import ContactOverview from '@/components/ContactOverview'
import DubaiImg from "../../public/images/gallery/ifza-freezone-banner.jpg"
import mainImage1 from "../../public/images/gallery/ifza-gallery-1.jpg"
import topImage1 from "../../public/images/gallery/ifza-gallery-2.jpg"
import bottomImage1 from "../../public/images/gallery/ifza-gallery-3.jpg"
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

export default function IfzaFreezone() {
    return (
        <>
            <ReusableBanner
                imageSrc={DubaiImg}
                tag="Freezone"
                title={`Establish Your Company`}
                title2={`In IFZA Freezone`}
            />
            <OverviewComp
                overline="OVERVIEW"
                title={`Establish Your Company in IFZA Freezone.`}
                paragraphs={[
                    `IFZA (International Free Zone Authority) is a free zone located in the Emirate of Dubai, United Arab Emirates (UAE). It was established in 2015 to provide a world-class business environment for companies to start and grow their businesses in a tax-free and customs-free environment. One of the unique features of IFZA is that it allows for 100% foreign ownership of companies, and there are no restrictions on the repatriation of capital or profits. It also offers flexible visa options for investors and their employees, making it an attractive destination for businesses looking to establish a presence in the UAE.`,

                ]}
                mainImage={mainImage1}
                topRightImage={topImage1}
                bottomRightImage={bottomImage1}
            />
            <Progress
                overline="PROCESS"
                title="Why IFZA Freezone?"
                subtitle="IFZA (International Free Zone Authority) is a free zone located in the Emirate of Dubai, United Arab Emirates. IFZA is a popular choice for entrepreneurs and businesses looking to establish a company in the UAE for several reasons:"
                cols={3}
                advantages={[
                    "Easy setup",
                    "Strategic location",
                    "Cost-effective",
                    "Business-friendly environment",
                    "Low Operating Costs",
                    "Wide range of business activities",
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
                heading="Get a Find out which IFZA package matches with your needs"
                plans={[
                    {
                        title: "0 Visa",
                        currency: "INR",
                        price: "319,533",
                        features: [
                            "Licence Zero Visa Allocation",
                            "Free Dubai Office Address",
                            "Free Company Stamp",
                            "Free 2 Hours Meeting Room",
                            "Free Shared Dubai P.O. Box",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "1 Visa",
                        currency: "INR",
                        price: "369,073",
                        features: [
                            "Licence 1 Visa Allocation",
                            "Free Dubai Office Address",
                            "Free Company Stamp",
                            "Free 2 Hours Meeting Room",
                            "Free Shared Dubai P.O. Box",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "2 Visa",
                        currency: "INR",
                        price: "418,613",
                        features: [
                            "Licence 2 Visa Allocation",
                            "Free Dubai Office Address",
                            "Free Company Stamp",
                            "Free 2 Hours Meeting Room",
                            "Free Shared Dubai P.O. Box",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "3 Visa",
                        currency: "INR",
                        price: "468,153",
                        features: [
                            "Licence 3 Visa Allocation",
                            "Free Dubai Office Address",
                            "Free Company Stamp",
                            "Free 2 Hours Meeting Room",
                            "Free Shared Dubai P.O. Box",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "4 Visa",
                        currency: "INR",
                        price: "517,693",
                        features: [
                            "Licence 4 Visa Allocation",
                            "Free Dubai Office Address",
                            "Free Company Stamp",
                            "Free 2 Hours Meeting Room",
                            "Free Shared Dubai P.O. Box",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "5 Visa",
                        currency: "INR",
                        price: "567,233",
                        features: [
                            "Licence 5 Visa Allocation",
                            "Free Dubai Office Address",
                            "Free Company Stamp",
                            "Free 2 Hours Meeting Room",
                            "Free Shared Dubai P.O. Box",
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
