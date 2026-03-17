import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import Navbar2 from '@/components/Navbar2'
import React from 'react'
import Ancfz from './Ancfz'

// Page ID 14 = ANCFZ
export async function generateMetadata() {
  const seo = await getSeoData(14);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar2 />
            <Ancfz />
        </>
    )
}
