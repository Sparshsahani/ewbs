import React from 'react'

export default function Thanks() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 text-center px-4 py-16">
      <h1 className="text-7xl md:text-7xl font-semibold text-red-600 mb-6">THANK YOU</h1>
      <p className="max-w-2xl text-gray-700 mb-10 leading-relaxed text-justify text-xl">
        EWBS offers a wide range of services including business setup in Freezone and
        Mainland, accounting and bookkeeping, IT and digital marketing services, real
        estate services, VAT registration and filing, auditing, license renewal, PRO
        services, company liquidation services, document attestation, and more.
      </p>
      <a
        href="/"
        className="inline-block bg-red-600 hover:bg-red-700 text-white font-semibold px-8 py-3 rounded-full transition"
      >
        Let&apos;s Go
      </a>
    </div>
  )
} 
