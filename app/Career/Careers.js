import Footer from '@/components/Footer'
import MapSection from '@/components/MapSection'
import ServiceBanner from '@/components/ServiceBanner'
import WhatToChat from '@/pages/banner/WhatToChat'
import React from 'react'

export default function Careers() {
    return (
        <>
            <ServiceBanner
                imageSrc='/images/gallery/services-banner.jpg'
                title="Career"
                title2="with Us"
            />
            <MapSection />
            <WhatToChat />
            <Footer />
        </>
    )
}
