import { getSeoData, buildMetadata } from '@/lib/getSeoData'
import React from 'react'
import RequiredDocuments from './RequiredDocuments'
import Navbar2 from '@/components/Navbar2'

// Page ID 4 = Required Document
export async function generateMetadata() {
  const seo = await getSeoData(4);
  return buildMetadata(seo);
}

export default function Page() {
    return (
        <>
            <Navbar2 />
            <RequiredDocuments />
        </>
    )
}
