import Image from "next/image";
import Link from "next/link";
import React from "react";
import LogoComp from "./LogoComp";

export default function Footer() {
  return (
    <footer data-aos="fade-up" className="relative  text-gray-600 pt-16 pb-8 text-sm overflow-hidden border-t">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0 opacity-80 pointer-events-none">
        {/* Replace with your actual city skyline image if available, otherwise it's just a subtle bg */}
        <Image
          src="/images/media/city-skyline.jpg"
          alt="dubai skyline"
          fill
          className="object-cover object-bottom"
        />
      </div>

      <div className="relative z-10 container mx-auto px-5 md:px-20">
        <div className="flex flex-col lg:flex-row justify-between gap-10">

          {/* Left Column: Offices Address & Info */}
          <div className="lg:w-1/2 space-y-6">
            {/* Logo area */}
            <div className="mb-8">
              <div className="w-32 mb-4 relative h-12">
                {/* Using generic logo path, user can update */}
                <LogoComp />
              </div>
              <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 border-b pb-4 border-gray-300 w-full max-w-md">EWBS STAR BUSINESSMEN SERVICES LLC</p>
            </div>

            {/* Dubai Office */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800 text-base">Dubai Headquarter</h3>
              <div className="border-b border-gray-300 pb-4 max-w-md space-y-2">
                <p className="leading-relaxed text-gray-500">
                  Office 903, 9th floor, Aspin Commercial Tower, Shaikh Zayed Road, Dubai, UAE
                </p>
                <p className="font-medium text-gray-700">Contact : +971 42 559 901</p>
              </div>
            </div>

            {/* Germany Office */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800 text-base">Germany Office</h3>
              <div className="border-b border-gray-300 pb-4 max-w-md space-y-2">
                <p className="leading-relaxed text-gray-500">
                  Street name : Steintorweg<br />
                  Building no : 8<br />
                  Zipcode : 20099
                </p>
                <p className="font-medium text-gray-700">Contact : +49 163 9844453</p>
              </div>
            </div>

            {/* Russia Office */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800 text-base">Russia Office</h3>
              <div className="border-b border-gray-300 pb-4 max-w-md space-y-2">
                <p className="leading-relaxed text-gray-500">
                  37 Pyatnitskaya St.,<br />
                  Unit 1/1, Moscow, 119017, Russia
                </p>
              </div>
            </div>

            {/* India Office (Visual divider only if needed, image shows simple text block at end) */}
            <div className="space-y-2">
              <h3 className="font-semibold text-gray-800 text-base">India Office Delhi NCR</h3>
              <div className="border-b border-gray-300 pb-4 max-w-md space-y-2">
                <p className="leading-relaxed text-gray-500">
                  MGF Megacity Mall, Unit No.1, MG Road,<br />
                  A Block, DLF Phase-1, Sector 28.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Links Grid */}
          <div className="lg:w-1/2 flex flex-col md:flex-row lg:justify-end gap-10 lg:gap-24 text-left md:text-right mt-10 lg:mt-0">

            {/* Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[var(--bg-red)] font-bold text-lg">Links</h4>
              <div className="flex flex-col gap-3 text-gray-500">
                <Link href="/" className="hover:text-[var(--bg-red)] transition-colors">Home</Link>
                <Link href="/AboutUs" className="hover:text-[var(--bg-red)] transition-colors">About Us</Link>
                <Link href="/business-setup-services-in-dubai" className="hover:text-[var(--bg-red)] transition-colors">Our Services</Link>


              </div>
            </div>

            {/* Other Links */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[var(--bg-red)] font-bold text-lg">Other Links</h4>
              <div className="flex flex-col gap-3 text-gray-500">
                <Link href="/blog" className="hover:text-[var(--bg-red)] transition-colors">Blog</Link>
                <Link href="/ContactUs" className="hover:text-[var(--bg-red)] transition-colors">Contact Us</Link>
                <Link href="/term-and-conditions" className="hover:text-[var(--bg-red)] transition-colors">Terms & Conditions</Link>
                <Link href="/Privacypolicy" className="hover:text-[var(--bg-red)] transition-colors">Privacy Policy</Link>
                {/* <Link href="/business-setup-in-dubai-mainland" className="hover:text-[var(--bg-red)] transition-colors">Dubai Mainland Setup</Link>
                <Link href="/RequiredDocuments" className="hover:text-[var(--bg-red)] transition-colors">Required Documents</Link>
                <Link href="/dubai-free-zone-business-setup" className="hover:text-[var(--bg-red)] transition-colors">Dubai Free Zone Setup</Link> */}
              </div>
            </div>

            {/* Freezone */}
            <div className="flex flex-col gap-4">
              <h4 className="text-[var(--bg-red)] font-bold text-lg">Freezone</h4>
              <div className="flex flex-col gap-3 text-gray-500">
                <Link href="/dubai-free-zone-business-setup" className="hover:text-[var(--bg-red)] transition-colors">Dubai Freezone</Link>
                <Link href="/ShamsFreeozone" className="hover:text-[var(--bg-red)] transition-colors">Shams Freezone</Link>
                <Link href="/AMCFreeozone" className="hover:text-[var(--bg-red)] transition-colors">AMC Freezone</Link>
                <Link href="/RakezFreezone" className="hover:text-[var(--bg-red)] transition-colors">Rakez Freezone</Link>
                <Link href="/IFZAFreeozone" className="hover:text-[var(--bg-red)] transition-colors">IFZA Freezone</Link>
                <Link href="/SPCFreeozone" className="hover:text-[var(--bg-red)] transition-colors">SPC Freezone</Link>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
}
