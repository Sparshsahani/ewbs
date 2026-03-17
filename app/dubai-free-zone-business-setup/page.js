import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import React from 'react'
import DubaiFreezone from './DubaiFreezone'
import Navbar2 from '@/components/Navbar2'

// Page ID 5 = Dubai Freezone
export async function generateMetadata() {
  const seo = await getSeoData(5);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar2 />
            <DubaiFreezone />
        </>
    )
}
