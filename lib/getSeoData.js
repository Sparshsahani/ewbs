const API_BASE = process.env.NEXT_PUBLIC_API_URL || process.env.REACT_APP_API_URL || "https://newcrm.ewbsbusiness.ae/api/v1";

export async function getSeoData(pageId) {
  try {
    const res = await fetch(`${API_BASE}/PageSeo/GetById/${pageId}`, {
      next: { revalidate: 3600 }, // revalidate every 1 hour
    });

    if (!res.ok) return null;

    const json = await res.json();

    if (!json.status || !json.data) return null;

    return json.data;
  } catch {
    return null;
  }
}

export function buildMetadata(seoData) {
  if (!seoData) return {};

  return {
    title: seoData.title,
    description: seoData.description,
    keywords: seoData.metaKeywords,
    openGraph: {
      title: seoData.metaName || seoData.title,
      description: seoData.description,
    },
    twitter: {
      title: seoData.metaName || seoData.title,
      description: seoData.description,
    },
  };
}
