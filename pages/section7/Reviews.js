"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

export default function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Mian Zain",
      time: "1 year ago",
      text: "I had an exceptional experience working with Miss Iqra Jassim at EWBS. She expertly guided me through the process of obtaining ...",
      avatarColor: "bg-gray-400",
      initial: "M",
    },
    {
      id: 2,
      name: "Kristo",
      time: "1 year ago",
      text: "I recently had the pleasure of working with EWBS Business Services, and I couldn't be happier with the experience. Jerin Philip an...",
      avatarColor: "bg-amber-700",
      initial: "K",
    },
    {
      id: 3,
      name: "Ronalyn Salvador",
      time: "1 year ago",
      text: "We recently utilized EWBS Consultancy for our business setup, and the experience was outstanding. Renu Gil, in particular...",
      avatarColor: "bg-green-700",
      initial: "R",
    },
    {
      id: 4,
      name: "Mustafe Ali alahema",
      time: "1 year ago",
      text: "We thank the EWBS Company for completing the transactions for their good service and high-quality treatment. Our company was...",
      avatarColor: "bg-gray-400",
      initial: "M",
    },
    {
      id: 5,
      name: "John Doe",
      time: "2 months ago",
      text: "Excellent service and very professional team. They helped me set up my company in Dubai Mainland without any hassle.",
      avatarColor: "bg-blue-600",
      initial: "J",
    },
  ];

  const StarIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="w-4 h-4 text-yellow-400"
    >
      <path
        fillRule="evenodd"
        d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
        clipRule="evenodd"
      />
    </svg>
  );

  const GoogleIcon = () => (
    <svg viewBox="0 0 24 24" className="w-5 h-5">
      <path
        fill="#4285F4"
        d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
      />
      <path
        fill="#34A853"
        d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
      />
      <path
        fill="#FBBC05"
        d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
      />
      <path
        fill="#EA4335"
        d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
      />
    </svg>
  );

  const ArrowIcon = () => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={3}
      stroke="currentColor"
      className="w-3 h-3"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M4.5 19.5l15-15m0 0H8.25m11.25 0v11.25"
      />
    </svg>
  );

  return (
    <section data-aos="fade-up" className="pt-12 md:pt-20 pb-16 md:pb-20 font-sans">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20">
        {/* Top Google Review Banner */}
        <div data-aos="fade-up" data-aos-delay="100" className="bg-[#f4f4f4] rounded-xl p-4 sm:p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-4 mb-10 md:mb-12 shadow-sm">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xl md:text-2xl font-bold tracking-tighter">
                <span className="text-[#4285F4]">G</span>
                <span className="text-[#EA4335]">o</span>
                <span className="text-[#FBBC05]">o</span>
                <span className="text-[#4285F4]">g</span>
                <span className="text-[#34A853]">l</span>
                <span className="text-[#EA4335]">e</span>
              </span>
              <span className="text-lg md:text-xl font-semibold text-gray-800">
                Review
              </span>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xl md:text-2xl font-bold">4.8</span>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>
              <span className="text-sm text-gray-500">264</span>
            </div>
          </div>
          <button className="bg-[#1a73e8] hover:bg-blue-600 text-white font-medium py-2.5 px-6 rounded-md transition-colors w-full md:w-auto">
            Review us on Google
          </button>
        </div>

        {/* Swiper Carousel */}
        <div className="mb-8 md:mb-10">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={16}
            slidesPerView={1}
            loop={true}
            speed={1000}
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            breakpoints={{
              480: {
                slidesPerView: 1,
                spaceBetween: 16,
              },
              640: {
                slidesPerView: 2,
                spaceBetween: 20,
              },
              1024: {
                slidesPerView: 3,
                spaceBetween: 24,
              },
              1280: {
                slidesPerView: 4,
                spaceBetween: 24,
              },
            }}
            className="pb-4"
          >
            {[...reviews, ...reviews].map((review, index) => (
              <SwiperSlide key={`${review.id}-${index}`}>
                <div className="bg-[#f4f4f4] rounded-xl p-4 sm:p-6 h-[360px] sm:h-[380px] md:h-[400px]  xl:h-[350px] 2xl:h-[350px] flex flex-col justify-between shadow-sm">
                  <div>
                    {/* User Info */}
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative">
                        {/* Avatar Placeholder */}
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center text-white font-bold ${review.avatarColor}`}
                        >
                          {review.initial}
                        </div>
                        {/* Small Google Badge on Avatar */}
                        <div className="absolute -bottom-1 -right-1 bg-white rounded-full p-0.5 shadow-sm">
                          <GoogleIcon />
                        </div>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm text-gray-800">
                          {review.name}
                        </h4>
                        <p className="text-xs text-gray-500">{review.time}</p>
                      </div>
                    </div>

                    {/* Stars */}
                    <div className="flex mb-3">
                      {[...Array(5)].map((_, i) => (
                        <StarIcon key={i} />
                      ))}
                    </div>

                    {/* Review Text */}
                    <p className="text-sm sm:text-base md:text-lg text-gray-600 leading-relaxed line-clamp-4">
                      {review.text}
                    </p>
                    <button className="text-xs text-gray-400 mt-1 hover:text-gray-600">
                      Read more
                    </button>
                  </div>

                  {/* Footer */}
                  <div className="flex items-center gap-2 mt-4 pt-4 border-t border-gray-200/50">
                    <GoogleIcon />
                    <span className="text-xs text-gray-400">
                      Posted on <br />
                      <span className="text-[#4285F4]">Google</span>
                    </span>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* See all reviews link */}
        <div className="flex justify-center md:justify-end mt-6 md:mt-0">
          <a
            href="#"
            className="flex items-center text-[var(--bg-red)] font-medium text-lg md:text-xl hover:underline underline-offset-4 italic"
          >
            See all Review
            <span className="ml-2 bg-[var(--bg-red)] text-white rounded-full w-6 h-6 flex items-center justify-center not-italic">
              <ArrowIcon />
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
