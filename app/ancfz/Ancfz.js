import ContactOverview from '@/components/ContactOverview'
import DubaiImg from "../../public/images/gallery/ifza-freezone-banner.jpg"
import mainImage1 from "../../public/images/gallery/ancfimg2.jpg"
import topImage1 from "../../public/images/gallery/ancfzimg.jpg"
import bottomImage1 from "../../public/images/gallery/dubai-mainland-3.jpg"
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
import Button from '@/components/Button'
import Image from 'next/image'

export default function Ancfz() {
    return (
        <>
            <section data-aos="fade-up"
                className="relative w-full min-h-[600px] md:min-h-[700px] lg:h-[800px] bg-[url('/images/media/home-banner-red-phone.png')] lg:bg-[url('/images/media/dubai-mainland-bannerred.jpg')] bg-cover bg-center flex items-center">
                <div className=" mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20 w-full flex justify-around gap-x-50">
                    <div data-aos="fade-left" className="flex flex-col justify-center gap-y-6 md:gap-y-8 lg:gap-y-12 text-white max-w-3xl">
                        <h1 className="main-heading font-semibold leading-tight 2xl:text-8xl">
                            Establish Your <br /> Company <br /> in the UAE
                        </h1>
                        <Button className="w-40 md:w-44 lg:w-48 xl:w-50 text-base md:text-lg xl:text-xl 2xl:text-2xl text-black font-medium bg-[var(--button-color)] rounded-full">
                            Let&apos;s Talk →
                        </Button>
                    </div>
                    <div data-aos="fade-right" className='max-w-xl'>
                        <ContactOverview
                            showRightContent={false}
                            showImageInsteadOfForm={false}
                            showForm={true}
                        />
                    </div>
                </div>
            </section>

            <section className="w-full flex flex-col lg:flex-row">

                {/* LEFT RED SECTION */}
                <div className="max-w-7xl mx-auto lg:w-[50%] bg-[var(--bg-red)] flex items-center justify-center px-10 py-8 lg:py-0">
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-light">
                        FREEZONE{" "}
                        <span className="italic font-semibold underline underline-offset-4 decoration-2">
                            Details
                        </span>
                    </h2>
                </div>

                {/* RIGHT YELLOW SECTION */}
                <div className="max-w-7xl mx-auto lg:w-[50%] bg-[var(--button-color)] flex items-center justify-center">

                    {/* INNER WRAPPER (Important) */}
                    <div className="w-full flex flex-col md:flex-row items-center justify-between px-10 py-8">

                        {/* REGULATION */}
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-10 h-10 flex items-center justify-center border border-black rounded-full">
                                👤
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide">
                                    REGULATION
                                </p>
                                <p className="text-lg font-medium">
                                    Ajman Nuventure Freezone
                                </p>
                            </div>
                        </div>

                        {/* DOTTED DIVIDER */}
                        <div className="hidden md:block h-16 border-r border-dashed border-black/50 mx-8"></div>

                        {/* TYPE */}
                        <div className="flex items-center gap-4 flex-1">
                            <div className="w-10 h-10 flex items-center justify-center border border-black rounded-lg">
                                📄
                            </div>

                            <div>
                                <p className="text-xs font-semibold uppercase tracking-wide">
                                    TYPE
                                </p>
                                <p className="text-lg font-medium">
                                    Freezone
                                </p>
                            </div>
                        </div>

                    </div>

                </div>
            </section>
            <OverviewComp
                overline="OVERVIEW"
                title={`Establish your company in Ajman Nuventure Freezone`}
                paragraphs={[
                    `Ajman Nuventure Freezone Free Zone (ANCFZ) is a free zone located in Ajman, one of the seven emirates of the United Arab Emirates (UAE). While it is not located in Dubai, it is in close proximity to the city and serves as an alternative for businesses looking to establish themselves in the UAE.`,
                    `Some of the benefits of setting up a business in ANCFZ include 100% ownership of the company, 0% corporate and personal income tax, 100% repatriation of capital and profits, and a simplified and fast registration process. ANCFZ also provides a range of business facilities and services such as flexible office spaces, meeting rooms, and business support services.`,

                ]}
                mainImage={mainImage1}
                topRightImage={topImage1}
                bottomRightImage={bottomImage1}
            />
            <Progress
                overline="PROCESS"
                title="Advantages Of Ajman Nuventure Freezone Free Zone Company Formation"
                subtitle="Ajman Nuventure Freezone Free Zone offers a range of advantages for businesses looking to establish a presence in the UAE. With its strategic location, tax benefits, easy company formation process, and world-class infrastructure, it is a popular choice for entrepreneurs and investors from around the world."
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
                heading="Find out which ANC package matches with your needs"
                plans={[
                    {
                        title: "0 Visa",
                        currency: "AED",
                        price: "4,888",
                        features: [
                            "Business License",
                            "Unlimited Shareholders",
                            "Up to 10 Mix & Match Activities",
                            "Lease Agreement",
                            "MOA/AOA (if applicable)",
                            "Commercial Registry",
                            "Share Certificate",
                            "Certificate of Incorporation",
                            "Certificate of Incumbency",
                            "Bank Letter (to open A/C)",
                            "Branch Registration Certificate (if applicable)",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "1 Visa",
                        currency: "AED",
                        price: "8,900",
                        features: [
                            "Business License",
                            "Unlimited Shareholders",
                            "Up to 10 Mix & Match Activities",
                            "Lease Agreement",
                            "MOA/AOA (if applicable)",
                            "Commercial Registry",
                            "Share Certificate",
                            "Certificate of Incorporation",
                            "Certificate of Incumbency",
                            "Bank Letter (to open A/C)",
                            "Branch Registration Certificate (if applicable)",
                            "Investor(s) Security Approval – New Registration (Included x 1)",
                            "E-Channel Registration (New/Renewal)",
                            "E-Channel Guarantee (New)",
                            "Establishment Card (New/Renewal)",
                            "ICP- License Activation (Renewal) (Included x 1)",
                            "Entry Permit (Included x 1)",
                            "Visa Status Change (if applicable) (Included x 1)",
                            "Visa Medical - Normal (New/Renewal) (Included x 1)",
                            "Residency Visa (New/Renewal) (Included x 1)",
                            "Emirates ID (New/Renewal) (Included x 1)",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "2 Visa",
                        currency: "AED",
                        price: "13,000",
                        features: [
                            "Business License",
                            "Unlimited Shareholders",
                            "Up to 10 Mix & Match Activities",
                            "Lease Agreement",
                            "MOA/AOA (if applicable)",
                            "Commercial Registry",
                            "Share Certificate",
                            "Certificate of Incorporation",
                            "Certificate of Incumbency",
                            "Bank Letter (to open A/C)",
                            "Branch Registration Certificate (if applicable)",
                            "Investor(s) Security Approval – New Registration (Included x 1)",
                            "E-Channel Registration (New/Renewal)",
                            "E-Channel Guarantee (New)",
                            "Establishment Card (New/Renewal)",
                            "ICP- License Activation (Renewal)",
                            "Entry Permit (Included x 2)",
                            "Visa Status Change (if applicable) (Included x 2)",
                            "Visa Medical - Normal (New/Renewal) (Included x 2)",
                            "Residency Visa (New/Renewal) (Included x 2)",
                            "Emirates ID (New/Renewal) (Included x 2)",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "3 Visa",
                        currency: "AED",
                        price: "15,500",
                        features: [
                            "Business License",
                            "Unlimited Shareholders",
                            "Up to 10 Mix & Match Activities",
                            "Lease Agreement",
                            "MOA/AOA (if applicable)",
                            "Commercial Registry",
                            "Share Certificate",
                            "Certificate of Incorporation",
                            "Certificate of Incumbency",
                            "Bank Letter (to open A/C)",
                            "Branch Registration Certificate (if applicable)",
                            "Investor(s) Security Approval – New Registration (Included x 1)",
                            "E-Channel Registration (New/Renewal)",
                            "E-Channel Guarantee (New)",
                            "Establishment Card (New/Renewal)",
                            "ICP- License Activation (Renewal)",
                            "Entry Permit (Included x 2)",
                            "Visa Status Change (if applicable) (Included x 2)",
                            "Visa Medical - Normal (New/Renewal) (Included x 2)",
                            "Residency Visa (New/Renewal) (Included x 2)",
                            "Emirates ID (New/Renewal) (Included x 2)",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "4 Visa",
                        currency: "AED",
                        price: "16,500",
                        features: [
                            "Business License",
                            "Unlimited Shareholders",
                            "Up to 10 Mix & Match Activities",
                            "Lease Agreement",
                            "MOA/AOA (if applicable)",
                            "Commercial Registry",
                            "Share Certificate",
                            "Certificate of Incorporation",
                            "Certificate of Incumbency",
                            "Bank Letter (to open A/C)",
                            "Branch Registration Certificate (if applicable)",
                            "Investor(s) Security Approval – New Registration (Included x 1)",
                            "E-Channel Registration (New/Renewal)",
                            "E-Channel Guarantee (New)",
                            "Establishment Card (New/Renewal)",
                            "ICP- License Activation (Renewal)",
                            "Entry Permit (Included x 2)",
                            "Visa Status Change (if applicable) (Included x 2)",
                            "Visa Medical - Normal (New/Renewal) (Included x 2)",
                            "Residency Visa (New/Renewal) (Included x 2)",
                            "Emirates ID (New/Renewal) (Included x 2)",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "5 Visa",
                        currency: "AED",
                        price: "19,500",
                        features: [
                            "Business License",
                            "Unlimited Shareholders",
                            "Up to 10 Mix & Match Activities",
                            "Lease Agreement",
                            "MOA/AOA (if applicable)",
                            "Commercial Registry",
                            "Share Certificate",
                            "Certificate of Incorporation",
                            "Certificate of Incumbency",
                            "Bank Letter (to open A/C)",
                            "Branch Registration Certificate (if applicable)",
                            "Investor(s) Security Approval – New Registration (Included x 1)",
                            "E-Channel Registration (New/Renewal)",
                            "E-Channel Guarantee (New)",
                            "Establishment Card (New/Renewal)",
                            "ICP- License Activation (Renewal)",
                            "Entry Permit (Included x 2)",
                            "Visa Status Change (if applicable) (Included x 2)",
                            "Visa Medical - Normal (New/Renewal) (Included x 2)",
                            "Residency Visa (New/Renewal) (Included x 2)",
                            "Emirates ID (New/Renewal) (Included x 2)",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "6 Visa",
                        currency: "AED",
                        price: "21,500",
                        features: [
                            "Business License",
                            "Unlimited Shareholders",
                            "Up to 10 Mix & Match Activities",
                            "Lease Agreement",
                            "MOA/AOA (if applicable)",
                            "Commercial Registry",
                            "Share Certificate",
                            "Certificate of Incorporation",
                            "Certificate of Incumbency",
                            "Bank Letter (to open A/C)",
                            "Branch Registration Certificate (if applicable)",
                            "Investor(s) Security Approval – New Registration (Included x 1)",
                            "E-Channel Registration (New/Renewal)",
                            "E-Channel Guarantee (New)",
                            "Establishment Card (New/Renewal)",
                            "ICP- License Activation (Renewal)",
                            "Entry Permit (Included x 2)",
                            "Visa Status Change (if applicable) (Included x 2)",
                            "Visa Medical - Normal (New/Renewal) (Included x 2)",
                            "Residency Visa (New/Renewal) (Included x 2)",
                            "Emirates ID (New/Renewal) (Included x 2)",
                        ],
                        ctaText: "Begin your journey today.",
                        ctaLink: "/contact",
                    },
                    {
                        title: "7 Visa",
                        currency: "AED",
                        price: "23,500",
                        features: [
                            "Business License",
                            "Unlimited Shareholders",
                            "Up to 10 Mix & Match Activities",
                            "Lease Agreement",
                            "MOA/AOA (if applicable)",
                            "Commercial Registry",
                            "Share Certificate",
                            "Certificate of Incorporation",
                            "Certificate of Incumbency",
                            "Bank Letter (to open A/C)",
                            "Branch Registration Certificate (if applicable)",
                            "Investor(s) Security Approval – New Registration (Included x 1)",
                            "E-Channel Registration (New/Renewal)",
                            "E-Channel Guarantee (New)",
                            "Establishment Card (New/Renewal)",
                            "ICP- License Activation (Renewal)",
                            "Entry Permit (Included x 2)",
                            "Visa Status Change (if applicable) (Included x 2)",
                            "Visa Medical - Normal (New/Renewal) (Included x 2)",
                            "Residency Visa (New/Renewal) (Included x 2)",
                            "Emirates ID (New/Renewal) (Included x 2)",
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

                showImageInsteadOfForm={true}
                imageSrc="/images/gallery/ancfzimg.jpg"
                showForm={false}
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
