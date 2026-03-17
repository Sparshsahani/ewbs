import Navbar from '@/components/Navbar'
import React from 'react'
import BlogDetail from './BlogDetail'

const API_BASE = process.env.REACT_APP_API_URL || "https://newcrm.ewbsbusiness.ae/api/v1";
const IMG_BASE = process.env.REACT_APP_IMG_URL || "https://newcrm.ewbsbusiness.ae";

async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE}/Blog/GetBySlug/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    return json.status ? json.data : null;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const blog = await getBlogBySlug(params.slug);

  if (!blog) return {};

  return {
    title: blog.pageTitle || blog.blogTitle,
    description: blog.metaDescription,
    keywords: blog.metaKeywords,
    openGraph: {
      title: blog.blogTitle,
      description: blog.metaDescription,
      images: blog.mainImage
        ? [{ url: `${IMG_BASE}${blog.mainImage}`, alt: blog.imageAlt }]
        : [],
    },
    twitter: {
      title: blog.blogTitle,
      description: blog.metaDescription,
    },
  };
}

export default async function Page({ params }) {
  const blog = await getBlogBySlug(params.slug);

  return (
    <>
      <Navbar />
      <BlogDetail blog={blog} />
    </>
  );
}
