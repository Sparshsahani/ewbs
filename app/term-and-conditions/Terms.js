import Footer from '@/components/Footer'
import MapSection from '@/components/MapSection'
import ServiceBanner from '@/components/ServiceBanner'
import WhatToChat from '@/pages/banner/WhatToChat'
import React from 'react'

export default function Terms() {
    return (
        <>
            <ServiceBanner
                imageSrc='/images/gallery/services-banner.jpg'
                title="Terms &"
                title2="Conditions"
            />
            <section className="w-full py-16 bg-[#f5f5f5]">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-25">

                    {/* Heading */}
                    <h2 className="text-3xl md:text-4xl font-semibold text-red-600 mb-6">
                        1-Browsing the Website:
                    </h2>

                    {/* Paragraph */}
                    <p className="text-gray-700 leading-relaxed mb-6">
                        When you visit the website to review the content, you will do so as an anonymous user, unless you choose to provide your personal information to us. No personal information is obtained from users who are merely reading content, viewing images or downloading data, except for data used for website administration and statistical usage. Such information can also be used to comply with court orders or to prevent illegal activities.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        The following is a review of the kind of data that is gathered and stored automatically on your visit to the website:
                    </p>

                    {/* List */}
                    <ul className="text-gray-700 leading-relaxed space-y-2 mb-10 list-decimal pl-5">
                        <li>Domain name and IP of the site you entered our website from.</li>
                        <li>Your browser and operating system.</li>
                        <li>Date and time on which you visited our website.</li>
                        <li>Our website pages you visited.</li>
                        <li>If you reached our website from another website, then the domain name and IP of that website.</li>
                        <li>If you reached our website through a search engine, then the name of the search engine and search term.</li>
                    </ul>

                    {/* Contact Heading */}
                    <h3 className="text-3xl md:text-4xl font-semibold text-red-600 mb-4">
                        Contact Us
                    </h3>

                    {/* Contact Text */}
                    <p className="text-gray-700 leading-relaxed">
                        If you have any questions about this Privacy Policy, please contact us on
                        <span > info@easywaybusiness.ae </span>
                        or call hotline
                        <span > +971525437077.</span>
                    </p>

                </div>
            </section>
            <WhatToChat />
            <Footer />
        </>
    )
}
