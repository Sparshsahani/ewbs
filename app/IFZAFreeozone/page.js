import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import Navbar2 from '@/components/Navbar2'
import React from 'react'
import IfzaFreezone from './IfzaFreezone'

// Page ID 9 = IFZA Freezone
export async function generateMetadata() {
  const seo = await getSeoData(9);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar2 />
            <IfzaFreezone />
        </>
    )
}
