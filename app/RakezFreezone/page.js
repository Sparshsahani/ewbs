import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import Navbar2 from '@/components/Navbar2'
import React from 'react'
import RakezFreezone from './RakezFreezone'

// Page ID 8 = RAKEZ Freezone
export async function generateMetadata() {
  const seo = await getSeoData(8);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar2 />
            <RakezFreezone />
        </>
    )
}
