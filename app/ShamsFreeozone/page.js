import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import React from 'react'
import Navbar2 from '@/components/Navbar2'
import ShamsFreezone from './ShamsFreezone'

// Page ID 6 = SHAMS Freezone
export async function generateMetadata() {
  const seo = await getSeoData(6);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar2 />
            <ShamsFreezone />
        </>
    )
}
