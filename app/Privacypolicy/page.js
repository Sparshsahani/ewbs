import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import Navbar from '@/components/Navbar'
import React from 'react'
import Privacy from './Privacy'

// Page ID 16 = PrivacyPolicy
export async function generateMetadata() {
  const seo = await getSeoData(16);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar />
            <Privacy />
        </>
    )
}
