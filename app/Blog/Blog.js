"use client";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import ServiceBanner from "@/components/ServiceBanner";
import WhatToChat from "@/pages/banner/WhatToChat";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const API_BASE = "https://newcrm.ewbsbusiness.ae/api/v1";
const IMG_BASE = "https://newcrm.ewbsbusiness.ae";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  const [allBlogs, setAllBlogs] = useState([]);
  const [categories] = useState([
    "All",
    "FREEZONE",
    "UAE BUSINESS SETUP",
    "E-COMMERCE LICENSE",
    "MARKET TRENDS"
  ]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      try {
        const blogsRes = await fetch(`${API_BASE}/Blog`);

        if (blogsRes.ok) {
          const blogsJson = await blogsRes.json();
          if (blogsJson.status && blogsJson.data) {
            setAllBlogs(blogsJson.data);
          }
        }
      } catch (err) {
        console.error("Failed to fetch blog data:", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []);

  const filteredBlogs =
    activeCategory === "All"
      ? allBlogs
      : allBlogs.filter(
          (b) =>
            (b.categoryName || b.category || "")
              .toLowerCase()
              .trim() === activeCategory.toLowerCase().trim()
        );

  const recentBlogs = [...allBlogs]
    .sort((a, b) => new Date(b.publishedDate || b.createdDate || 0) - new Date(a.publishedDate || a.createdDate || 0))
    .slice(0, 4);

  return (
    <>
      <ServiceBanner
        imageSrc="/images/gallery/services-banner.jpg"
        title="Explore Our"
        title2="News"
        subtitle="Meet our experts, guiding you through financial intricacies with precision"
      />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20 py-12">
        {loading ? (
          <div className="flex justify-center items-center min-h-[300px]">
            <div className="animate-spin rounded-full h-14 w-14 border-4 border-[#E32128] border-t-transparent"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-[2.5fr_1fr] gap-12 lg:gap-16">

            {/* Main Content (Left Side) */}
            <div className="space-y-12">
              {filteredBlogs.length === 0 ? (
                <p className="text-gray-500 text-center py-16 text-lg">No blogs found in this category.</p>
              ) : (
                filteredBlogs.map((blog) => (
                  <div
                    key={blog.id || blog.slug}
                    className="bg-[#f5f5f5] rounded-[2rem] overflow-hidden transition duration-300"
                  >
                    <div className="relative w-full">
                      <img
                        src={blog.mainImage ? `${IMG_BASE}${blog.mainImage}` : "/images/gallery/services-banner.jpg"}
                        alt={blog.imageAlt || blog.blogTitle}
                        className="w-full h-auto object-cover aspect-[16/9] sm:aspect-[21/9]"
                      />
                      <div className="absolute bottom-5 left-6 bg-white px-4 py-1.5 rounded text-sm font-semibold text-[#E32128]">
                        {formatDate(blog.publishedDate || blog.createdDate)}
                      </div>
                    </div>
                    <div className="p-8 sm:p-10 relative">
                      <h3 className="text-[15px] font-medium text-gray-500 uppercase tracking-widest mb-3">
                        {blog.categoryName || blog.category || "MARKET TRENDS"}
                      </h3>
                      <Link href={`/Blog/${blog.slug}`}>
                        <h2 className="text-[28px] sm:text-[32px] font-bold text-[#E32128] hover:text-red-700 cursor-pointer pr-16 leading-tight">
                          {blog.blogTitle}
                        </h2>
                      </Link>
                      <div className="absolute bottom-8 right-8">
                        <Link href={`/Blog/${blog.slug}`}>
                          <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-[#E32128]">
                              <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                            </svg>
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                ))
              )}
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
                      onClick={() => setActiveCategory(cat)}
                      className="flex items-center space-x-3 cursor-pointer group"
                    >
                      <div className="w-5 h-5 rounded-full bg-[#E32128] flex items-center justify-center text-white shrink-0 shadow-sm">
                        <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className={`text-[15px] uppercase tracking-wider group-hover:text-[#E32128] transition ${
                        activeCategory === cat ? "text-gray-900 font-semibold" : "text-gray-600"
                      }`}>
                        {cat}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Recent Blogs */}
              <div className="pt-4">
                <h3 className="text-[26px] font-bold text-[#E32128] mb-6">Recent Blogs</h3>
                <div className="space-y-8">
                  {recentBlogs.map((blog) => (
                    <div key={blog.id || blog.slug} className="flex flex-col space-y-3 group cursor-pointer">
                      <div className="relative w-full rounded-[14px] overflow-hidden aspect-[16/9]">
                        <img
                          src={blog.mainImage ? `${IMG_BASE}${blog.mainImage}` : "/images/gallery/services-banner.jpg"}
                          alt={blog.imageAlt || blog.blogTitle}
                          className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div>
                        <p className="text-[13px] text-gray-500 mb-1.5">
                          {formatDate(blog.publishedDate || blog.createdDate)}
                        </p>
                        <Link href={`/Blog/${blog.slug}`}>
                          <h4 className="text-[17px] font-bold text-[#E32128] group-hover:text-red-700 leading-snug line-clamp-2">
                            {blog.blogTitle}
                          </h4>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

          </div>
        )}
      </div>

      <MapSection />
      <WhatToChat />
      <Footer />
    </>
  );
}
