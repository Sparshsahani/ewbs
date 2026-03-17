import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import React from 'react'
import DubaiMainland from './DubaiMainland'
import Navbar2 from '@/components/Navbar2'

// Page ID 3 = Dubai Mainland
export async function generateMetadata() {
  const seo = await getSeoData(3);
  return buildMetadata(seo);
}

export default function page() {
    return (
        <>
            <Navbar2 />
            <DubaiMainland  />
        </>
    )
}
