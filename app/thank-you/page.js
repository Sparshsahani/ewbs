import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import React from 'react'
import Navbar from '@/components/Navbar'
import Thanks from './Thanks'

// Page ID 18 = ThankYou
export async function generateMetadata() {
  const seo = await getSeoData(18);
  return buildMetadata(seo);
}

export default function Page() {
  return (
    <>
      <Thanks />
    </>
  )
}
