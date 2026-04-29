"use client";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import ServiceBanner from "@/components/ServiceBanner";
import WhatToChat from "@/pages/banner/WhatToChat";
import React, { useState, useEffect } from "react";
import Image from "next/image";

const API_BASE = "https://api.ewbsbusiness.ae/api/v1";
const IMG_BASE = "https://api.ewbsbusiness.ae";

export default function Gallery() {
  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [lightbox, setLightbox] = useState(null); // index of open image

  useEffect(() => {
    async function fetchGallery() {
      try {
        const res = await fetch(`${API_BASE}/Gallery`);
        if (!res.ok) return;
        const json = await res.json();
        if (!json.status || !Array.isArray(json.data)) return;
        setImages(json.data);
      } catch (err) {
        console.error("Failed to fetch gallery:", err);
      } finally {
        setLoading(false);
      }
    }
    fetchGallery();
  }, []);

  // Close lightbox on Escape key
  useEffect(() => {
    function onKey(e) {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowRight") setLightbox((i) => (i !== null ? (i + 1) % images.length : null));
      if (e.key === "ArrowLeft") setLightbox((i) => (i !== null ? (i - 1 + images.length) % images.length : null));
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [images.length]);

  const getImgSrc = (item) => {
    const src = item.image || item.imageUrl || item.url || item.path || "";
    return src.startsWith("http") ? src : `${IMG_BASE}${src}`;
  };

  return (
    <>
      <ServiceBanner
        imageSrc="/images/gallery/services-banner.jpg"
        title="Explore Our"
        title2="Gallery"
        subtitle="A glimpse into our world — moments, milestones, and the people behind the passion"
      />

      <section className="bg-white py-14 md:py-20">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-16 2xl:px-20">

          {/* Section Header */}
          <div className="mb-10">
            <p className="text-[var(--bg-red)] font-semibold uppercase tracking-widest text-sm mb-2">Our Moments</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900">Gallery</h2>
          </div>

          {loading ? (
            <div className="flex justify-center items-center min-h-[300px]">
              <div className="animate-spin rounded-full h-14 w-14 border-4 border-[var(--bg-red)] border-t-transparent"></div>
            </div>
          ) : images.length === 0 ? (
            <p className="text-center text-gray-500 py-16 text-lg">No images available.</p>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 justify-items-center">
              {images.map((item, idx) => (
                <div
                  key={item.id ?? idx}
                  onClick={() => setLightbox(idx)}
                  className="relative overflow-hidden rounded-2xl cursor-pointer group w-full"
                >
                  <Image
                    src={getImgSrc(item)}
                    alt={item.title || item.alt || `Gallery image ${idx + 1}`}
                    width={600}
                    height={400}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 15.803 7.5 7.5 0 0015.803 15.803zM10.5 7.5v6m3-3h-6" />
                    </svg>
                  </div>
                  {/* Title badge */}
                  {item.title && (
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-white text-sm font-semibold line-clamp-2">{item.title}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightbox !== null && images[lightbox] && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={() => setLightbox(null)}
        >
          {/* Close button */}
          <button
            className="absolute top-4 right-4 text-white bg-[var(--bg-red)] rounded-full w-10 h-10 flex items-center justify-center hover:bg-red-700 transition z-10"
            onClick={() => setLightbox(null)}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Prev */}
          <button
            className="absolute left-4 text-white bg-white/10 hover:bg-[var(--bg-red)] rounded-full w-10 h-10 flex items-center justify-center transition z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox - 1 + images.length) % images.length); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
          </button>

          {/* Image */}
          <div onClick={(e) => e.stopPropagation()} className="relative max-w-4xl w-full max-h-[85vh]">
            <Image
              src={getImgSrc(images[lightbox])}
              alt={images[lightbox].title || `Gallery image ${lightbox + 1}`}
              width={1200}
              height={800}
              className="w-full h-auto max-h-[85vh] object-contain rounded-xl"
            />
            {images[lightbox].title && (
              <p className="text-white text-center mt-3 text-sm font-medium">{images[lightbox].title}</p>
            )}
            <p className="text-gray-400 text-center text-xs mt-1">{lightbox + 1} / {images.length}</p>
          </div>

          {/* Next */}
          <button
            className="absolute right-4 text-white bg-white/10 hover:bg-[var(--bg-red)] rounded-full w-10 h-10 flex items-center justify-center transition z-10"
            onClick={(e) => { e.stopPropagation(); setLightbox((lightbox + 1) % images.length); }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
      )}

      <MapSection />
      <WhatToChat />
      <Footer />
    </>
  );
}
