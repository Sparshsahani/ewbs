import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import React from 'react'
import BlogDetail from './BlogDetail'

const API_BASE = process.env.NEXT_PUBLIC_API_URL || "https://newcrm.ewbsbusiness.ae/api/v1";
const IMG_BASE = process.env.NEXT_PUBLIC_IMG_BASE || "https://newcrm.ewbsbusiness.ae";

async function getBlogBySlug(slug) {
  try {
    const res = await fetch(`${API_BASE}/Blog/GetBySlug/${slug}`, {
      next: { revalidate: 3600 },
    });
    if (!res.ok) return null;
    const json = await res.json();
    if (!json.status) return null;
    const blog = json.data;
    if (blog.description) {
      blog.description = Buffer.from(blog.description, 'base64').toString('utf-8');
    }
    return blog;
  } catch {
    return null;
  }
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

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
  const { slug } = await params;
  const blog = await getBlogBySlug(slug);

  return (
    <>
      <Navbar />
      <BlogDetail blog={blog} imgBase={IMG_BASE} />
      <Footer />
    </>
  );
}
