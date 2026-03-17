import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import Navbar from '@/components/Navbar'
import React from 'react'
import AboutUs from './AboutUs'

// Page ID 13 = About Us
export async function generateMetadata() {
  const seo = await getSeoData(13);
  return buildMetadata(seo);
}

export default function page() {
    return (
        <>
            <Navbar />
            <AboutUs />
        </>
    )
}
