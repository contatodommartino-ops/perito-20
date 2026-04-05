import { useEffect } from "react";

import { useEffect } from "react";

type SEOProps = {
  title: string;
  description: string;
  canonicalPath?: string;
  ogType?: "website" | "article";
  structuredData?: Record<string, unknown> | Record<string, unknown>[];
};

const SITE_NAME = "Veritas Assessoria Pericial";

const getOrigin = () => {
  if (typeof window === "undefined") return "";
  return window.location.origin;
};

const setMetaTag = (selector: string, attribute: "name" | "property", key: string, content: string) => {
  const existing = document.head.querySelector<HTMLMetaElement>(selector);
  if (existing) {
    existing.setAttribute("content", content);
    return;
  }

  const meta = document.createElement("meta");
  meta.setAttribute(attribute, key);
  meta.setAttribute("content", content);
  document.head.appendChild(meta);
};

const SEO = ({
  title,
  description,
  canonicalPath,
  ogType = "website",
  structuredData,
}: SEOProps) => {
  useEffect(() => {
    const fullTitle = `${title} | ${SITE_NAME}`;
    const canonicalUrl = canonicalPath ? `${getOrigin()}${canonicalPath}` : window.location.href;

    document.title = fullTitle;
    setMetaTag('meta[name="description"]', "name", "description", description);
    setMetaTag('meta[name="robots"]', "name", "robots", "index,follow,max-image-preview:large,max-snippet:-1,max-video-preview:-1");
    setMetaTag('meta[property="og:title"]', "property", "og:title", fullTitle);
    setMetaTag('meta[property="og:description"]', "property", "og:description", description);
    setMetaTag('meta[property="og:type"]', "property", "og:type", ogType);
    setMetaTag('meta[property="og:url"]', "property", "og:url", canonicalUrl);
    setMetaTag('meta[property="og:site_name"]', "property", "og:site_name", SITE_NAME);
    setMetaTag('meta[name="twitter:card"]', "name", "twitter:card", "summary_large_image");
    setMetaTag('meta[name="twitter:title"]', "name", "twitter:title", fullTitle);
    setMetaTag('meta[name="twitter:description"]', "name", "twitter:description", description);

    const existingCanonical = document.head.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (existingCanonical) {
      existingCanonical.setAttribute("href", canonicalUrl);
    } else {
      const link = document.createElement("link");
      link.setAttribute("rel", "canonical");
      link.setAttribute("href", canonicalUrl);
      document.head.appendChild(link);
    }

    const existingJsonLd = document.head.querySelector<HTMLScriptElement>('script[data-seo="json-ld"]');
    if (existingJsonLd) existingJsonLd.remove();

    if (structuredData) {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.setAttribute("data-seo", "json-ld");
      script.textContent = JSON.stringify(structuredData);
      document.head.appendChild(script);
    }
  }, [canonicalPath, description, ogType, structuredData, title]);

  return null;
};

export default SEO;
export { SITE_NAME };
