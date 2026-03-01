import ContactInfo from '@/components/ContactInfo'
import ContactOverview from '@/components/ContactOverview'
import Footer from '@/components/Footer'
import MapSection from '@/components/MapSection'
import ServiceBanner from '@/components/ServiceBanner'
import WhatToChat from '@/pages/banner/WhatToChat'
import React from 'react'

export default function Contact() {
    return (
        <>
            <ServiceBanner
                bgImage="/images/services-banner.jpg"
                title="Contact us "
                title2="for inquiries"
                subtitle="Get our all info and message us directly from here."
                hashtag="#ewbsbusiness"
            />
            <ContactInfo
                address={{
                    title: "Our Address",
                    line1: "Office 903, 9th floor, Aspin Commercial Tower,",
                    line2: "Shaikh Zayed Road, Dubai, UAE",
                    link: "https://maps.google.com/?q=Office+903,+9th+floor,+Aspin+Commercial+Tower,+Shaikh+Zayed+Road,+Dubai,+UAE"
                }}
                phone={{
                    title: "Our Phone",
                    line1: "Open a chat or give us call at",
                    line2: "+971 42 559 901",
                    link: "tel:+97142559901"
                }}
                email={{
                    title: "Our Email",
                    line1: "Write to us at",
                    line2: "info@ewbsbusiness.ae",
                    link: "mailto:info@ewbsbusiness.ae"
                }}
            />
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
