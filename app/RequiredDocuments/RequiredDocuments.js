import React from 'react'
import ReusableBanner from '@/components/ReusableBanner'
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

export default function RequiredDocuments() {
    return (
        <>
            <div>
                <ReusableBanner
                    imageSrc={DubaiImg}
                    tag="MAINLAND"
                    title={`Dubai Mainland`}
                    title2={`Required Documents`}
                />
                <OverviewComp
                    title={`Documents Required for Mainland Companies`}
                    paragraphs={[
                        `It has never been easier to start a business in the U.A.E. With EWBS; it is no longer a source of concern or delay. If you have decided to register with EWBS, our team of specialists is ready to provide you with the best possible assistance and guide you through the entire process of establishing a successful business. We provide quick registration and document verification. We always try to keep our clients one step ahead of the game regarding company formation.`,
                    ]}
                    mainImage={mainImage1}
                    topRightImage={topImage1}
                    bottomRightImage={bottomImage1}
                />
                <Progress
                    overline="PROCESS"
                    title="Required documents for Dubai Mainland"
                    subtitle="We offer convenient virtual help 24 hours a day, seven days a week, to assure your safety and comfort during the process. Our techniques for documenting are adaptable and straightforward."
                    steps={[
                        {
                            title: "N.O.C. Residents of the United Arab Emirates",
                            description: "If you are a U.A.E. resident, a No Objection Certificate from your sponsor is required; otherwise, if you are on a tourist or visitor visa, no N.O.C. is required.",
                            icon: <IoIosSend className="h-6 w-6" />,
                        },
                        {
                            title: "Copies of Passports and Visas",
                            description: "The shareholder and the manager must give copies of their passports and visas.",
                            icon: <PiFileTextLight className="h-6 w-6" />,
                        },
                        {
                            title: "Information about Yourself",
                            description: "The Company’s manager and shareholder may be asked to give personal information.",
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
            </div>
        </>
    )
}
