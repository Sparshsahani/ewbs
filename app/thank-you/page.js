import React from 'react'
import Navbar from '@/components/Navbar'
import Thanks from './Thanks'

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
  return (
    <>
      <Thanks />
    </>
  )
}
