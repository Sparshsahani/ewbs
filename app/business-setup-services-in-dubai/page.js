import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import React from 'react'
import Service from './Service'
import Navbar from '@/components/Navbar'

// Page ID 11 = Services
export async function generateMetadata() {
  const seo = await getSeoData(11);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>  
            <Navbar />
            <Service />
        </>
    )
}
