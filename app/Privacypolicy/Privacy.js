import Footer from '@/components/Footer'
import MapSection from '@/components/MapSection'
import ServiceBanner from '@/components/ServiceBanner'
import WhatToChat from '@/pages/banner/WhatToChat'
import React from 'react'

export default function Privacy() {
    return (
        <>
            <ServiceBanner
                imageSrc='/images/gallery/services-banner.jpg'
                title="EWBS"
                title2="Privacy Policy"
            />
            <section className="w-full py-16 bg-[#f5f5f5]">
                <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 2xl:px-25 text-gray-700 leading-relaxed space-y-8">

                    {/* 1 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            1 - Browsing the Website
                        </h2>
                        <p className="mb-4">
                            When you visit the website to review the content, you will do so as an anonymous user, unless you choose to provide your personal information to us. No personal information is obtained from users who are merely reading content, viewing images or downloading data, except for data used for website administration and statistical usage. Such information can also be used to comply with court orders or to prevent illegal activities.
                        </p>

                        <p className="mb-4">
                            The following is a review of the kind of data that is gathered and stored automatically on your visit to the website:
                        </p>

                        <ul className="list-decimal pl-6 space-y-2">
                            <li>Domain name and IP of the site you entered our website from.</li>
                            <li>Your browser and operating system.</li>
                            <li>Date and time on which you visited our website.</li>
                            <li>Our website pages you visited.</li>
                            <li>If you reached our website from another website, then the domain name and IP of that website.</li>
                            <li>If you reached our website through a search engine, then the name of the search engine and search term.</li>
                        </ul>
                    </div>

                    {/* 2 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            2 - Browsing the Website:
                        </h2>
                        <p>
                            Unless otherwise stipulated, if you register to get an account and benefit from related services such as: e-services, using e-forms; then you will need to provide personal information such as your name, email, P.O. and other information. Such information will be used to create your registration and ensure you have access to the available e-services. If registered users choose to receive notifications and updates, they may receive such notices and updates regarding Establishment Card , Visas and payment cheques via email.
                        </p>
                        <p>
                            EBS does not guarantee that its website is completely error-free or that its server is always connected. From time to time, EBS may suspend the website for maintenance or security enhancements, so registered users need to take suitable measures to back- up their data to prevent data loss.
                        </p>
                    </div>

                    {/* 3 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            3 - Sending Emails or Enquiry Forms
                        </h2>
                        <p className="mb-4">
                            Unless otherwise stipulated, in case you elect to send enquiries or comments using the e-form, and provide your name and email address, we will use such information only to answer your enquiry or comment.
                        </p>
                        <ul className="list-decimal pl-6 space-y-2">
                            <li>We will not share your name, email address and P.O. number with a third party.</li>
                            <li> We will not create a profile with the information you provide us with.</li>
                            <li>We will not share your name, email or P.O number with any third party.</li>
                        </ul>
                    </div>

                    {/* 4 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            4 - Management of Cookies
                        </h2>
                        <p>
                            When you visit the EWBS website, a cookies may be installed in your computer, to record your login and facilitate easy access to our website. The cookie may save your username and could be preserved for up to one year. When you return to the EWBS website, the cookie will automatically help to recognize your user name. Those using public computers are urged to log-out of registration, so that their data cannot be misused by other users.
                        </p>
                        <p>
                            For any disputes arising from the use of this website, only the laws of the UAE shall be enforced. The UAE Courts have the sole jurisdiction to settle any such disputes.
                        </p>

                    </div>

                    {/* 5 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            5 - Notification for Changes
                        </h2>
                        <p>
                            If we decide to change our privacy policy, we will publish such changes on our main page, so that our users can be made aware of any changes to the information we gather and use and under what circumstances, if any.
                        </p>
                    </div>

                    {/* 6 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            6 - Governing Law & Jurisdiction.
                        </h2>
                        <p className="mb-4">
                            Your use of the website are governed in accordance with the laws of Dubai, United Arab Emirates.
                            Our postal address is:
                        </p>

                        <p className="font-medium">
                            Office #603 <br />
                            Dubai National Insurance Building Port Saeed Deira <br />
                            Dubai, U.A.E.
                        </p>

                        <p className="mt-3">
                            We can be reached via e-mail at <span className="font-medium">info@easywaybusiness.ae </span> <br />
                            You can also reach us by telephone at <span className="font-medium">+971525437077.</span>
                        </p>
                    </div>
                    {/* 7 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            7 - Collection and use of consumer information
                        </h2>
                        <p className="mb-4">
                            For each visitor to our Web page, our Web server automatically recognizes only the consumerâ€™s domain name, but not the e-mail address (where possible).
                        </p>

                        <p >
                            We collect only the domain name, but not the e-mail address of visitors to our Web page, aggregate information on what pages consumersâ€™ access or visit, information volunteered by the consumer, such as survey information and/or site registrations. The information we collect is used to improve the content of our Web page, used to customize the content and/or layout of our page for each individual visitor.
                        </p>

                        <p className="mt-3">

                            With respect to cookies: We use cookies to record session information, such as items that consumers add to their shopping cart, customize web page content based on visitorsâ€™ browser type or other information that the visitor sends. If you do not want to receive e-mail from us in the future, please let us know by sending us e-mail at the above address, calling us at the above telephone number, writing to us at the above address or updating your online profile (via our email subscription platform).
                        </p>
                    </div>
                    {/* 8 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            8 - Customer email lists: collection, usage and preference options
                        </h2>
                        <p className="mb-4">
                            By supplying EWBS with your email address (while completing an enquiry on our website, booking a service through our sales office, requesting a quote or other information, or during an EWBS hosted event, etc.), we will use that email address for EWBS marketing solicitations and electronic newsletter deployments. You can opt-out of these electronic communications at anytime by following the instructions in our emails. In addition to the emails just described, all EWBS clients, receive EWBS updates and other useful information pertaining to business setup in UAE. If you are a EWBS client and would like to opt-out of receiving these EWBS emails, you may email info@easywaybusiness.in, or call us atÂ +971 55 1745764.
                        </p>

                    </div>
                    {/* 9 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            9 - Online behavioral advertising
                        </h2>
                        <p className="mb-4">
                            EWBS E uses third party vendors to display relevant ads on sites throughout the internet. Many times these third party vendors use cookies to serve ads based on your interaction with EWBS web properties. Users may opt out of some, many, or all Online Behavioral Advertising targeting by emailingÂ info@easywaybusiness.in
                        </p>
                    </div>
                    {/* 10 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            10 - Customer mailing lists/postal addresses
                        </h2>
                        <p className="mb-4">
                            If you supply us with your postal address on-line you may receive periodic mailings from us with information on new products and services or upcoming events. If you do not wish to receive such mailings, please let us know by calling us at the number provided above, e-mailing us at the above address, or writing to us at the above address. Please provide us with your exact name and address.
                        </p>
                    </div>
                    {/* 11 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            11 - Customer telephone numbers
                        </h2>
                        <p className="mb-4">
                            Persons who supply us with their telephone or fax numbers on-line may receive telephone contact from us with information regarding orders they have placed on-line or information regarding new products and services or upcoming events. If you do not wish to receive such telephone calls, please let us know by sending an e-mail to the above address, calling the above telephone number, or writing to us at the above address. Please provide us with your correct phone number. We will be sure your name is removed from the list. We do not share telephone numbers with anyone outside of the organization.
                        </p>
                        <p className='my-2'>
                            With respect to Ad Servers: We do not partner with or have special relationships with any ad server companies.
                        </p>
                        <p className='my-2'>
                            Upon request we provide site visitors with access to contact information (e.g., name, address, phone number) that we maintain about them. Consumers can access this information by e-mailing us at the above address, writing to us at the above address or accessing your profile.
                        </p>
                        <p className='my-2'>
                            Upon request we offer visitors the ability to have inaccuracies corrected in contact information. Consumers can have this information corrected by sending us e-mail at the above address, calling us at the above telephone number, writing to us at the above address or changing your online profile.
                        </p>
                    </div>
                    {/* 12 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            12 - Security
                        </h2>
                        <p className="mb-4">
                            The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage, is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
                        </p>
                    </div>
                    {/* 13 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            13 - Credit card transactions
                        </h2>
                        <p className="mb-4">
                            EWBS has a â€˜Secureâ€™ transaction system in place to verify and protect your credit card information. Online payments for events are conducted through a secure and powerful 228 bit encryption to protect your details.
                        </p>
                    </div>
                    {/* 14   */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            14 - Links To Other Sites
                        </h2>
                        <p className="mb-4">
                            Our Site may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third partyâ€™s site. We strongly advise you to review the Privacy Policy of every site you visit. EWBS has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party sites or services.
                        </p>
                    </div>
                    {/* 15 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            15 - Changes To This Privacy Policy
                        </h2>
                        <p className="mb-4">
                            EWBS may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on the Site. You are advised to review this Privacy Policy periodically for any changes.
                        </p>
                    </div>
                    {/* 16 */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            16 - Customer email lists: collection, usage and preference options
                        </h2>
                        <p className="mb-4">
                            By supplying EWBS with your email address (while completing an enquiry on our website, booking a service through our sales office, requesting a quote or other information, or during an EWBS hosted event, etc.), we will use that email address for EWBS marketing solicitations and electronic newsletter deployments and also share same data with our Business Associates / Partners so that they can offer you their Discount Products and Services for your Benefit.
                        </p>
                    </div>
                    {/* Final Contact */}
                    <div>
                        <h2 className="text-3xl font-semibold text-red-600 mb-4">
                            Contact Us
                        </h2>
                        <p>
                            If you have any questions about this Privacy Policy, please contact us at{" "}
                            <span className="font-medium">info@easywaybusiness.ae</span> or call{" "}
                            <span className="font-medium">+971525437077</span>.
                        </p>
                    </div>

                </div>
            </section>
            <WhatToChat />
            <Footer />
        </>
    )
}
