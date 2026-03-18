import React from 'react'

export default function BlogDetail({ blog, imgBase }) {
  if (!blog) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500 text-xl">Blog post not found.</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-3xl font-bold mb-6">{blog.blogTitle}</h1>
      {blog.mainImage && (
        <img
          src={`${imgBase}${blog.mainImage}`}
          alt={blog.imageAlt || blog.blogTitle}
          className="w-full rounded-lg mb-6"
        />
      )}
      {blog.author && (
        <p className="text-sm text-gray-500 mb-6">By {blog.author}</p>
      )}
      <div
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: blog.description }}
      />
    </div>
  );
}
