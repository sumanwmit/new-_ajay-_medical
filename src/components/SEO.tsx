import React, { useEffect } from 'react';

interface SEOProps {
  title: string;
  description: string;
  keywords?: string;
  canonicalUrl?: string;
  ogImage?: string;
  schema?: object;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords = "New Ajay Medical Hall, Pharmacy in Jehanabad, Medical Store Mallachak More, Genuine Medicines Jehanabad, Buy Medicine Bihar, WhatsApp Medicine Order Jehanabad, Chemist Mallachak",
  canonicalUrl = "https://newajaymedicalhall.com",
  ogImage = "https://images.unsplash.com/photo-1586015555751-63c233145d55?q=80&w=1200&auto=format&fit=crop",
  schema
}) => {
  useEffect(() => {
    // Document Title
    document.title = title;

    // Meta Description
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', description);

    // Meta Keywords
    let metaKeywords = document.querySelector('meta[name="keywords"]');
    if (!metaKeywords) {
      metaKeywords = document.createElement('meta');
      metaKeywords.setAttribute('name', 'keywords');
      document.head.appendChild(metaKeywords);
    }
    metaKeywords.setAttribute('content', keywords);

    // Open Graph Title
    let ogTitle = document.querySelector('meta[property="og:title"]');
    if (!ogTitle) {
      ogTitle = document.createElement('meta');
      ogTitle.setAttribute('property', 'og:title');
      document.head.appendChild(ogTitle);
    }
    ogTitle.setAttribute('content', title);

    // Open Graph Description
    let ogDesc = document.querySelector('meta[property="og:description"]');
    if (!ogDesc) {
      ogDesc = document.createElement('meta');
      ogDesc.setAttribute('property', 'og:description');
      document.head.appendChild(ogDesc);
    }
    ogDesc.setAttribute('content', description);

    // Open Graph Image
    let ogImg = document.querySelector('meta[property="og:image"]');
    if (!ogImg) {
      ogImg = document.createElement('meta');
      ogImg.setAttribute('property', 'og:image');
      document.head.appendChild(ogImg);
    }
    ogImg.setAttribute('content', ogImage);

    // Open Graph Type
    let ogType = document.querySelector('meta[property="og:type"]');
    if (!ogType) {
      ogType = document.createElement('meta');
      ogType.setAttribute('property', 'og:type');
      document.head.appendChild(ogType);
    }
    ogType.setAttribute('content', 'website');

    // Twitter Card
    let twCard = document.querySelector('meta[name="twitter:card"]');
    if (!twCard) {
      twCard = document.createElement('meta');
      twCard.setAttribute('name', 'twitter:card');
      document.head.appendChild(twCard);
    }
    twCard.setAttribute('content', 'summary_large_image');

    // Canonical link
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', canonicalUrl);

    // JSON-LD Schema
    const defaultPharmacySchema = {
      "@context": "https://schema.org",
      "@type": "Pharmacy",
      "name": "New Ajay Medical Hall",
      "image": ogImage,
      "@id": "https://newajaymedicalhall.com/#pharmacy",
      "url": "https://newajaymedicalhall.com",
      "telephone": "+919939467567",
      "priceRange": "₹",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Ajay Medical Hall, New, Mallachak More",
        "addressLocality": "Jehanabad",
        "addressRegion": "Bihar",
        "postalCode": "804408",
        "addressCountry": "IN"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 25.2133,
        "longitude": 84.9892
      },
      "openingHoursSpecification": [
        {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "07:00",
          "closes": "22:30"
        }
      ],
      "sameAs": [
        "https://wa.me/919939467567"
      ]
    };

    let scriptTag = document.getElementById('json-ld-schema');
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'json-ld-schema';
      scriptTag.setAttribute('type', 'application/ld+json');
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schema || defaultPharmacySchema);

  }, [title, description, keywords, canonicalUrl, ogImage, schema]);

  return null;
};
