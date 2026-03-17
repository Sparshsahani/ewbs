import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import Navbar2 from '@/components/Navbar2'
import React from 'react'
import SpcFreezone from './SpcFreezone'

// Page ID 10 = SPC Freezone
export async function generateMetadata() {
  const seo = await getSeoData(10);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar2 />
            <SpcFreezone />
        </>
    )
}
