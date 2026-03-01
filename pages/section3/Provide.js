import Card from "@/components/Card";
import Link from "next/link";
import { BsArrowRight } from "react-icons/bs";

const defaultServices = [
  {
    iconSrc: "/images/icon/icon_05.svg",
    title: "Business Setup",
    description:
      "Comprehensive business setup solutions tailored to suit both Freezone and Mainland requirements.",
  },
  {
    iconSrc: "/images/icon/icon_05.svg",
    title: "VAT Registration & Filing",
    description:
      "End-to-end solutions, including VAT registration, compliance, reporting, and filing.",
  },
  {
    iconSrc: "/images/icon/icon_05.svg",
    title: "IT & Digital Marketing",
    description:
      "Range of solutions including website development, digital marketing, SEO, and social media marketing.",
  },
];

export default function Provide({ services = defaultServices }) {
  return (
    <section data-aos="zoom-in" className="relative w-full">
      {/* Top Section */}
      <div className="bg-[var(--bg-light-red)] pt-12 md:pt-20 pb-28 md:pb-40">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20 flex flex-col md:flex-row justify-between items-start md:items-center gap-3">
          <h1 data-aos="fade-left" className="text-3xl md:text-4xl lg:text-4xl xl:text-4xl 2xl:text-6xl font-bold text-[var(--bg-red)] leading-snug">
            Provide quality <br className="hidden md:block" />
            Services.
          </h1>

          <div data-aos="fade-right" >
            <p className="text-lg md:text-xl xl:text-sm 2xl:text-xl text-gray-600 font-light">
              We provide a full range of services to drive your
              <br className="hidden md:block" /> business forward.
            </p>

            <div className="mt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-black font-medium underline"
              >
                See All Services
                <BsArrowRight className="text-xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Cards Section */}
      <div data-aos="zoom-in-up" className="-mt-16 md:-mt-24 relative z-10 pb-16">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {services.map((svc, idx) => (
              <Card
                key={idx}
                iconSrc={svc.iconSrc}
                title={svc.title}
                description={svc.description}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
