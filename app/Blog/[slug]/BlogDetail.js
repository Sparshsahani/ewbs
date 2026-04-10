"use client";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import ServiceBanner from "@/components/ServiceBanner";
import WhatToChat from "@/pages/banner/WhatToChat";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const API_BASE = "https://newcrm.ewbsbusiness.ae/api/v1";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function BlogDetail({ blog, imgBase }) {
  const [recentBlogs, setRecentBlogs] = useState([]);
  const [categories] = useState([
    "All",
    "FREEZONE",
    "UAE BUSINESS SETUP",
    "E-COMMERCE LICENSE",
    "MARKET TRENDS"
  ]);

  useEffect(() => {
    async function fetchRecent() {
      try {
        const res = await fetch(`${API_BASE}/Blog`);
        if (!res.ok) return;
        const json = await res.json();
        if (!json.status || !json.data) return;

        // List API returns no slug/mainImage — fetch full details in parallel
        const details = await Promise.all(
          json.data.map((b) =>
            fetch(`${API_BASE}/Blog/GetById/${b.id}`)
              .then((r) => (r.ok ? r.json() : null))
              .then((j) => (j && j.status ? j.data : null))
              .catch(() => null)
          )
        );
        const sorted = details
          .filter(Boolean)
          .sort((a, b) => new Date(b.publishedAt || b.createdAt || 0) - new Date(a.publishedAt || a.createdAt || 0))
          .slice(0, 4);
        setRecentBlogs(sorted);
      } catch (err) {
        console.error("Failed to fetch recent blogs", err);
      }
    }
    fetchRecent();
  }, []);

  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Blog post not found.</p>
      </div>
    );
  }

  return (
    <>
      <ServiceBanner
        imageSrc="/images/gallery/services-banner.jpg"
        title="Explore Our"
        title2="News"
        subtitle="Meet our experts, guiding you through financial intricacies with precision"
      />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-12 lg:gap-16">
          
          {/* Main Content (Left Side) */}
          <div className="font-sans">
            {/* Image */}
            {blog.mainImage && (
              <img
                src={`${imgBase}${blog.mainImage}`}
                alt={blog.imageAlt || blog.blogTitle}
                className="w-full rounded-[2rem] mb-8 object-cover object-top aspect-[16/9] sm:aspect-[21/9]"
              />
            )}

            {/* Category */}
            <p className="uppercase text-gray-900 text-[15px] mb-2 font-semibold tracking-wide">
              {blog.categoryId?.categoryName || blog.categoryName || blog.category || "FREEZONE"}
            </p>

             {/* Title */}
            <h1 className="text-[28px] sm:text-[32px] font-bold text-[#E32128] mb-6 leading-tight">
              {blog.blogTitle}
            </h1>

            {/* Content */}
            <div
              className="text-gray-500 text-[15px] sm:text-[16px] leading-relaxed
              [&_p]:!m-0 [&_p]:!p-0 [&_p]:!mb-3
              [&_br]:hidden
              [&_h1]:text-black [&_h1]:font-bold [&_h1]:text-2xl [&_h1]:!mt-5 [&_h1]:!mb-2
              [&_h2]:text-black [&_h2]:font-bold [&_h2]:text-[20px] [&_h2]:!mt-5 [&_h2]:!mb-2
              [&_h3]:text-black [&_h3]:font-bold [&_h3]:text-[17px] [&_h3]:!mt-4 [&_h3]:!mb-1
              [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:!m-0 [&_ul]:!mb-3
              [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:!m-0 [&_ol]:!mb-3
              [&_li]:!m-0 [&_li]:!mb-1
              [&_a]:text-[#E32128] hover:[&_a]:text-red-700
              [&_strong]:text-black
              [&>*:first-child]:!mt-0"
              dangerouslySetInnerHTML={{ 
                __html: blog.description
                  ?.replace(/<p>\s*(<br\s*\/?>|\s|&nbsp;)*\s*<\/p>/gi, '')
                  ?.replace(/(<br\s*\/?>){2,}/gi, '')
              }}
            />
          </div>

          {/* Sidebar (Right Side) */}
          <div className="space-y-12">
            {/* Categories */}
            <div>
              <h3 className="text-[26px] font-bold text-[#E32128] mb-4">CATEGORY</h3>
              <div className="border-t border-gray-200 mb-6 w-full"></div>
              <ul className="space-y-5">
                {categories.map((cat, idx) => (
                  <li
                    key={idx}
                    className="flex items-center space-x-3 cursor-pointer group"
                  >
                    <div className="w-5 h-5 rounded-full bg-[#E32128] flex items-center justify-center text-white shrink-0 shadow-sm">
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <Link href="/Blog">
                      <span className="text-[15px] uppercase tracking-wider text-gray-600 group-hover:text-[#E32128] transition">
                        {cat}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Blogs */}
            <div className="pt-4">
              <h3 className="text-[26px] font-bold text-[#E32128] mb-6">Recent Blogs</h3>
              <div className="space-y-8">
                {recentBlogs.map((b) => (
                  <div key={b.id || b.slug} className="flex flex-col space-y-3 group cursor-pointer">
                    <div className="relative w-full rounded-[14px] overflow-hidden aspect-[16/9]">
                      <img
                        src={b.mainImage ? `${imgBase}${b.mainImage}` : "/images/gallery/services-banner.jpg"}
                        alt={b.imageAlt || b.blogTitle}
                        className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                      />
                    </div>
                    <div>
                      <p className="text-[13px] text-gray-500 mb-1.5">
                        {formatDate(b.publishedAt || b.createdAt)}
                      </p>
                      <Link href={`/Blog/${b.slug}`}>
                        <h4 className="text-[17px] font-bold text-[#E32128] group-hover:text-red-700 leading-snug line-clamp-2">
                          {b.blogTitle}
                        </h4>
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <MapSection />
      <WhatToChat />
      <Footer />
    </>
  );
}
