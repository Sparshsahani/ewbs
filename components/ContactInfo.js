import React from 'react';
import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

export default function ContactInfo({
  address = {
    title: "Our Address",
    line1: "Office 903, 9th floor, Aspin Commercial Tower,",
    line2: "Shaikh Zayed Road, Dubai, UAE",
    link: "https://maps.google.com/?q=Office+903,+9th+floor,+Aspin+Commercial+Tower,+Shaikh+Zayed+Road,+Dubai,+UAE"
  },
  phone = {
    title: "Our Phone",
    line1: "Open a chat or give us call at",
    line2: "+971 42 559 901",
    link: "tel:+97142559901"
  },
  email = {
    title: "Our Email",
    line1: "Write to us at",
    line2: "info@ewbsbusiness.ae",
    link: "mailto:info@ewbsbusiness.ae"
  }
}) {
  const contactData = [
    {
      icon: <FaMapMarkerAlt className="text-3xl text-white" />,
      ...address
    },
    {
      icon: <FaPhoneAlt className="text-3xl text-white" />,
      ...phone
    },
    {
      icon: <FaEnvelope className="text-3xl text-white" />,
      ...email
    }
  ];

  return (
    <section className="w-full py-16 md:py-24 bg-white font-sans">
      <div className="max-w-7xl mx-auto px-4 md:px-8 lg:px-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 text-center">
          {contactData.map((item, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center group"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <a href={item.link} className="block mb-6 transform transition-transform duration-300 hover:scale-110">
                  <div className="w-20 h-20 bg-[#d9232d] rounded-full flex items-center justify-center shadow-lg mx-auto">
                    {item.icon}
                  </div>
              </a>
              
              <h3 className="text-xl md:text-2xl font-bold text-[#d9232d] mb-4">
                {item.title}
              </h3>
              
              <div className="text-gray-600 leading-relaxed text-base md:text-lg max-w-xs mx-auto">
                <p>{item.line1}</p>
                <p className="mt-1">{item.line2}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
