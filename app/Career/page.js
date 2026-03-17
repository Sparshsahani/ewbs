import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import Navbar from '@/components/Navbar'
import React from 'react'
import Careers from './Careers'

// Page ID 15 = Career
export async function generateMetadata() {
  const seo = await getSeoData(15);
  return buildMetadata(seo);
}

export default function page() {
    return (
        <>
            <Navbar />
            <Careers />
        </>
    )
}
