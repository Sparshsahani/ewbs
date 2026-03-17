import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import React from 'react'
import Contact from './Contact'
import Navbar from '@/components/Navbar'

// Page ID 14 = Contact Us
export async function generateMetadata() {
  const seo = await getSeoData(14);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar />
            <Contact />
        </>
    )
}
