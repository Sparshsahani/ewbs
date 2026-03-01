import Button from "@/components/Button";
import React from "react";
// import MobileBgImg from "../../public/images/media/home-banner-red-phone.png"; // unused, background handled via Tailwind classes

export default function Hero({ bgcolor = ` bg-[var(--button-color)]` }) {
  return (
    <>
      <section data-aos="fade-up"
        className="relative w-full min-h-[600px] md:min-h-[700px] lg:h-screen bg-[url('/images/media/home-banner-red-phone.png')] lg:bg-[url('/images/media/home-banner-red.png')] bg-cover bg-center flex items-center">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20 w-full">
          <div data-aos="fade-left" className="flex flex-col justify-center gap-y-6 md:gap-y-8 lg:gap-y-12 text-white max-w-3xl">
            <h1 className="main-heading font-semibold leading-tight">
              Ready to Start <br /> Your Business <br /> in Dubai?
            </h1>
            <p className="paragraph  leading-relaxed">
              From idea to reality: UAE business setup simplified <br className="hidden md:block" />
              with EWBS expertise! #ewbsbusiness
            </p>
            <Button bgcolor={bgcolor} className="w-40 md:w-44 lg:w-48 xl:w-50 text-base md:text-lg xl:text-xl 2xl:text-2xl text-black font-medium">
              Let&apos;s Talk →
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
