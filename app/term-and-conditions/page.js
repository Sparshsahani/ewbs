import React from 'react'
import Terms from './Terms'

export const metadata = {
  robots: {
    index: false,
    follow: false,
  },
};

export default function Page() {
    return (
        <>
            <Navbar />
            <Terms/>
        </>
    )
}
