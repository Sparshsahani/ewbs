import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import React from 'react'
import AmcFreezone from './AmcFreezone'
import Navbar2 from '@/components/Navbar2'

// Page ID 7 = AMC Freezone
export async function generateMetadata() {
  const seo = await getSeoData(7);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar2 />
            <AmcFreezone />
        </>
    )
}
