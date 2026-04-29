"use client";
import Image from "next/image";
import React, { useState, useEffect } from "react";

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://newcrm.ewbsbusiness.ae/api/v1";
const IMG_BASE = process.env.NEXT_PUBLIC_IMG_BASE || "https://newcrm.ewbsbusiness.ae";

export default function Achievements() {
  const [stories, setStories] = useState([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    async function fetchNews() {
      try {
        const res = await fetch(`${API_BASE}/News/GetLatest`);
        if (!res.ok) return;
        const json = await res.json();
        if (!json.status || !Array.isArray(json.data)) return;
        setStories(json.data);
      } catch (err) {
        console.error("Failed to fetch latest news:", err);
      }
    }
    fetchNews();
  }, []);

  useEffect(() => {
    if (stories.length === 0) return;
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) => (prevIndex + 1) % stories.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [stories.length]);

  if (stories.length === 0) return null;
  const activeStory = stories[activeIndex] ?? stories[0];

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
    <section data-aos="zoom-in" className="bg-[#f4f4f4] pt-12 md:pt-20 pb-16 md:pb-20 font-sans">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20">
        {/* Header */}
        <div data-aos="fade-right" className="flex flex-col md:flex-row justify-between items-start md:items-end mb-10 gap-4">
          <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-4xl 2xl:text-6xl font-bold text-[var(--bg-red)]">
            Our New achievements.
          </h2>
          <a
            href="/News"
            className="flex items-center text-[var(--bg-red)] font-medium text-lg hover:underline underline-offset-4"
          >
            See News
            <span className="ml-2 bg-[var(--bg-red)] text-white rounded-full w-6 h-6 flex items-center justify-center">
              <ArrowIcon />
            </span>
          </a>
        </div>

        {/* Top Section: Hero + List */}
        <div data-aos="fade-up" className="flex flex-col lg:flex-row gap-10 mb-10">
          {/* Hero Image */}
          <div className="w-full lg:w-2/3 relative rounded-xl overflow-hidden bg-gray-300 h-[300px] md:h-[400px]">
            <div  className="absolute inset-0 flex items-center justify-center text-gray-500">
              <Image
                key={activeStory.id}
                src={`${IMG_BASE}${activeStory.image}`}
                alt={activeStory.title}
                width={2000}
                height={2000}
                className="w-full h-full object-cover animate-fade-in"
              />
            </div>

            {/* Overlay */}
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 flex justify-between items-end">
              <h3 className="text-white text-xl md:text-2xl xl:text-xl 2xl:text-2xl font-bold w-2/3 leading-tight line-clamp-2">
                {activeStory.title}
              </h3>
              <a href={activeStory.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-3 py-1.5 rounded-full flex items-center text-sm font-bold">
                View
                <span className="ml-2 bg-[var(--bg-red)] text-white rounded-full w-6 h-6 flex items-center justify-center">
                  <ArrowIcon />
                </span>
              </a>
            </div>
          </div>

          {/* List */}
          <div data-aos="fade-left" className="w-full lg:w-1/3 flex flex-col justify-between gap-6">
            {stories.map((story, index) => {
              const isActive = index === activeIndex;
              return (
                <div
                  key={story.id}
                  onClick={() => setActiveIndex(index)}
                  className="flex items-start gap-6 cursor-pointer group"
                >
                  <span
                    className={`text-5xl 2xl:text-6xl font-bold leading-none transition-colors duration-300 ${
                      isActive
                        ? "text-[var(--bg-red)]"
                        : "text-gray-400 group-hover:text-gray-600"
                    }`}
                  >
                    {index + 1}
                  </span>
                  <p
                    className={`text-sm md:text-xl xl:text-md 2xl:text-2xl pt-2 transition-colors duration-300 ${
                      isActive
                        ? "font-bold text-black"
                        : "text-gray-500 font-medium group-hover:text-gray-800"
                    }`}
                  >
                    <span className="line-clamp-2">{story.title}</span>
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom Section: Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stories.map((story, index) => {
            const isActive = index === activeIndex;
            return (
              <div
                key={story.id}
                onClick={() => setActiveIndex(index)}
                className={`rounded-xl p-4 flex flex-col justify-between h-[360px] cursor-pointer transition-all duration-300 ${
                  isActive
                    ? "bg-[var(--bg-red)] text-white scale-[1.02] shadow-lg"
                    : "bg-white text-gray-600 shadow-sm hover:shadow-md"
                }`}
              >
                <div>
                  {/* Card Image */}
                  <div className="w-full h-32 rounded-lg mb-4 overflow-hidden relative">
                    <Image
                      src={`${IMG_BASE}${story.image}`}
                      alt={story.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <p
                    className={`text-lg md:text-xl xl:text-[16px] 2xl:text-xl line-clamp-2 ${
                      isActive ? "font-bold" : "font-medium"
                    }`}
                  >
                    {story.title}
                  </p>
                  <p
                    className={`text-sm mt-2 line-clamp-2 ${
                      isActive ? "text-white/80" : "text-gray-400"
                    }`}
                  >
                    {story.description}
                  </p>
                </div>

                <div className="flex justify-end mt-4">
                  {isActive ? (
                    <a href={story.link} target="_blank" rel="noopener noreferrer" className="bg-white text-black px-3 py-1.5 rounded-full flex items-center text-sm font-bold">
                      View
                      <span className="ml-2 bg-[var(--bg-red)] text-white rounded-full w-6 h-6 flex items-center justify-center">
                        <ArrowIcon />
                      </span>
                    </a>
                  ) : (
                    <a href={story.link} target="_blank" rel="noopener noreferrer" className="text-black flex items-center text-sm font-bold italic">
                      View
                      <span className="ml-2 bg-[var(--bg-red)] text-white rounded-full w-6 h-6 flex items-center justify-center not-italic">
                        <ArrowIcon />
                      </span>
                    </a>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
