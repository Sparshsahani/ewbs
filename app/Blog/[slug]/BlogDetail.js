'use client'
import React from 'react'

const IMG_BASE = process.env.NEXT_PUBLIC_IMG_URL || "https://newcrm.ewbsbusiness.ae";

export default function BlogDetail({ blog }) {
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-4">{blog.blogTitle}</h1>
      {blog.mainImage && (
        <img
          src={`${IMG_BASE}${blog.mainImage}`}
          alt={blog.imageAlt || blog.blogTitle}
          className="w-full rounded-lg mb-6"
        />
      )}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{
          __html: Buffer.from(blog.description, 'base64').toString('utf-8'),
        }}
      />
    </div>
  );
}
