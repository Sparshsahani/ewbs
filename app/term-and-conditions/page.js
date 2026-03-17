import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import Navbar from '@/components/Navbar'
import React from 'react'
import Terms from './Terms'

// Page ID 17 = TermsAndConditions
export async function generateMetadata() {
  const seo = await getSeoData(17);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar />
            <Terms/>
        </>
    )
}
