"use client";
import Footer from "@/components/Footer";
import MapSection from "@/components/MapSection";
import ServiceBanner from "@/components/ServiceBanner";
import WhatToChat from "@/pages/banner/WhatToChat";
import React, { useState, useEffect } from "react";
import Link from "next/link";

const API_BASE = process.env.NEXT_PUBLIC_BLOG_API_URL || "https://api.ewbsbusiness.ae/api/v1";
const IMG_BASE = process.env.NEXT_PUBLIC_BLOG_IMG_BASE || "https://api.ewbsbusiness.ae";

function formatDate(dateStr) {
  if (!dateStr) return "";
  const date = new Date(dateStr);
  return date.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" });
}

export default function Blog() {
  const [basicBlogs, setBasicBlogs] = useState([]);
  const [blogDetails, setBlogDetails] = useState({});
  const [categories] = useState([
    "All",
    "FREEZONE",
    "UAE BUSINESS SETUP",
    "E-COMMERCE LICENSE",
    "MARKET TRENDS"
  ]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [loadingList, setLoadingList] = useState(true);
  const [loadingDetails, setLoadingDetails] = useState(false);

  useEffect(() => {
    async function fetchData() {
      try {
        const listRes = await fetch(`${API_BASE}/Blog`);
        if (!listRes.ok) return;
        const listJson = await listRes.json();
        if (!listJson.status || !listJson.data) return;

        setBasicBlogs(listJson.data);
      } catch (err) {
        console.error("Failed to fetch blog data:", err);
      } finally {
        setLoadingList(false);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    if (basicBlogs.length === 0) {
      setLoadingDetails(false);
      return;
    }

    let cancelled = false;
    let remaining = basicBlogs.length;
    setLoadingDetails(true);

    basicBlogs.forEach((b) => {
      fetch(`${API_BASE}/Blog/GetById/${b.id}`)
        .then((r) => (r.ok ? r.json() : null))
        .then((j) => {
          if (j && j.status && !cancelled) {
            setBlogDetails((prev) => ({ ...prev, [b.id]: j.data }));
          }
        })
        .catch(() => null)
        .finally(() => {
          remaining -= 1;
          if (!cancelled && remaining <= 0) {
            setLoadingDetails(false);
          }
        });
    });

    return () => {
      cancelled = true;
    };
  }, [basicBlogs]);

  const allBlogs = basicBlogs.map((b) => blogDetails[b.id] || b);

  const filteredBlogs =
    activeCategory === "All"
      ? allBlogs
      : allBlogs.filter(
          (b) =>
            (b.blogCategory || b.categoryName || b.category || "")
              .replace(/\s/g, "")
              .toLowerCase() === activeCategory.replace(/\s/g, "").toLowerCase()
        );

  const recentBlogs = [...allBlogs]
    .sort((a, b) => new Date(b.publishedAt || b.createdAt || 0) - new Date(a.publishedAt || a.createdAt || 0))
    .slice(0, 4);

  return (
    <>
      <ServiceBanner
        imageSrc="/images/gallery/services-banner.jpg"
        title="Explore Our"
        title2="Blogs"
        subtitle="Meet our experts, guiding you through financial intricacies with precision"
      />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-5 xl:px-30 2xl:px-20 py-12">
        {loadingList ? (
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
                filteredBlogs.map((blog) => {
                  const isPlaceholder = !blog.slug || !blog.mainImage || !blog.blogTitle;
                  const title = blog.blogTitle || blog.title || "Loading blog...";
                  const category = blog.blogCategory || blog.categoryName || blog.category || "MARKET TRENDS";
                  const dateText = formatDate(blog.publishedAt || blog.createdAt);

                  return (
                    <div
                      key={blog.id || blog.slug}
                      className={`bg-[#f5f5f5] rounded-[2rem] overflow-hidden transition duration-300 ${isPlaceholder ? "animate-pulse" : ""}`}
                    >
                      <div className="relative w-full">
                        <img
                          src={blog.mainImage ? `${IMG_BASE}${blog.mainImage}` : "/images/gallery/services-banner.jpg"}
                          alt={blog.imageAlt || title}
                          className={`w-full h-auto object-cover object-top aspect-[16/9] sm:aspect-[21/9] ${isPlaceholder ? "opacity-60" : ""}`}
                        />
                        <div className="absolute bottom-5 left-6 bg-white px-4 py-1.5 rounded text-sm font-semibold text-[#E32128]">
                          {dateText || "Loading date..."}
                        </div>
                      </div>
                      <div className="p-8 sm:p-10 relative">
                        <h3 className="text-[15px] font-medium text-gray-500 uppercase tracking-widest mb-3">
                          {category}
                        </h3>
                        {blog.slug ? (
                          <Link href={`/Blog/${blog.slug}`} target="_blank">
                            <h2 className="text-[28px] sm:text-[32px] font-bold text-[#E32128] hover:text-red-700 cursor-pointer pr-16 leading-tight">
                              {title}
                            </h2>
                          </Link>
                        ) : (
                          <h2 className="text-[28px] sm:text-[32px] font-bold text-[#E32128] pr-16 leading-tight">
                            {title}
                          </h2>
                        )}
                        {blog.slug ? (
                          <div className="absolute bottom-8 right-8">
                            <Link href={`/Blog/${blog.slug}`}>
                              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm hover:shadow-md hover:scale-105 transition-all cursor-pointer">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-5 h-5 text-[#E32128]">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                                </svg>
                              </div>
                            </Link>
                          </div>
                        ) : null}
                      </div>
                    </div>
                  );
                })
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
                          className="w-full h-full object-cover object-top group-hover:scale-105 transition duration-500"
                        />
                      </div>
                      <div>
                        <p className="text-[13px] text-gray-500 mb-1.5">
                          {formatDate(blog.publishedAt || blog.createdAt)}
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
