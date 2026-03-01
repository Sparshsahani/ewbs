"use client";
import React from "react";

export default function Question() {
  const faqs = [
    {
      question: "What services does EWBS Star Businessmen Services LLC offer?",
      answer:
        "EWBS offers a wide range of services including business setup in Freezone and Mainland, accounting and bookkeeping, IT and digital marketing services, real estate services, VAT registration and filing, auditing, license renewal, PRO services, company liquidation services, document attestation, and more.",
    },
    {
      question: "How can EWBS assist in business setup in Dubai?",
      answer:
        "EWBS provides personalized consultation and end-to-end support for business setup in both Freezone and Mainland areas of Dubai. They handle the entire process from company registration to obtaining necessary licenses and permits, ensuring a smooth and efficient setup experience.",
    },
    {
      question: "What expertise does the team at EWBS possess?",
      answer:
        "The team at EWBS consists of industry professionals with years of experience and expertise across various domains including legal frameworks, accounting, IT, digital marketing, real estate, and more. They are dedicated to delivering exceptional services and achieving outstanding results for their clients.",
    },
    {
      question: "How can I renew my business license with EWBS?",
      answer:
        "EWBS assists clients in the timely and hassle-free renewal of their business licenses, allowing them to focus on their core operations without disruptions. They handle all the necessary paperwork and ensure compliance with all requirements.",
    },
    {
      question: "Can EWBS help with VAT registration and filing?",
      answer:
        "Yes, EWBS has a team of VAT experts who assist businesses in navigating the complex landscape of Value Added Tax. They provide end-to-end solutions including VAT registration, compliance, reporting, and filing, enabling clients to fulfill their tax obligations seamlessly.",
    },
  ];

  const [openIndex, setOpenIndex] = React.useState(0);

  const toggle = (idx) => {
    setOpenIndex((prev) => (prev === idx ? -1 : idx));
  };

  return (
    <>
      <section data-aos="fade-up" className="py-10 md:py-20 lg:py-28">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20 flex flex-col md:flex-row gap-10 md:gap-16">
          {/* left column */}
          <div data-aos="fade-right" className="w-full md:w-1/3 flex flex-col gap-6">
            <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-6xl font-bold text-[var(--bg-red)] leading-tight">
              Questions & Answers
            </h2>
            <p className="text-lg md:text-xl text-gray-600">Don't find the answer? We can help</p>
            <button className="bg-[var(--bg-red)] py-3 px-8 text-white rounded-full font-bold hover:bg-[var(--button-color)] hover:text-black transition-colors duration-300 w-fit">
              Contact Us
            </button>
          </div>

          {/* right column - accordion */}
          <div data-aos="fade-left" className="w-full md:w-2/3 flex flex-col gap-4 mt-8 md:mt-0">
            {faqs.map((item, idx) => (
              <div key={idx} className="border-b border-gray-200 last:border-0">
                <button
                  onClick={() => toggle(idx)}
                  className={`w-full flex justify-between items-center text-left py-4 px-4 sm:px-6 rounded-lg transition-all duration-300 ${
                    openIndex === idx ? "bg-yellow-100" : "hover:bg-gray-50"
                  }`}
                >
                  <span className="text-lg md:text-xl font-medium text-[var(--bg-red)]">
                    {item.question}
                  </span>
                  <span className="text-2xl font-bold ml-4 text-[var(--bg-red)] shrink-0">
                    {openIndex === idx ? "−" : "+"}
                  </span>
                </button>
                <div
                  className={`px-4 sm:px-6 text-gray-600 transition-all duration-500 overflow-hidden ${
                    openIndex === idx
                      ? "max-h-96 opacity-100 py-4"
                      : "max-h-0 opacity-0 py-0"
                  }`}
                >
                  <p className="text-base md:text-lg leading-relaxed">{item.answer}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
