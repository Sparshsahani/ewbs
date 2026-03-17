import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import Navbar from '@/components/Navbar'
import React from 'react'
import Blog from './Blog'

// Page ID 12 = Blog
export async function generateMetadata() {
  const seo = await getSeoData(12);
  return buildMetadata(seo);
}

export default function page() {
    return (
        <>
            <Navbar />
            <Blog />
        </>
    )
}
