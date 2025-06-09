// src/components/SEO/SEO.js
import React from 'react';
import { Helmet } from 'react-helmet-async';

const SEO = ({
    title = '',
    description = '',
    keywords = '',
    image = '',
    url = '',
    type = 'website'
}) => {
  const siteTitle = 'Alchemity';
  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const siteUrl = 'https://alchemity.com'; 
  const fullUrl = url ? `${siteUrl}${url}` : siteUrl;
  const defaultImage = `${siteUrl}/images/alchemity-og-default.jpg`;
  const ogImage = image ? `${siteUrl}${image}` : defaultImage;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={ogImage} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:site_name" content={siteTitle} />

      {/* Twitter Card Tags */}
      {/* <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={ogImage} /> */}

      {/* Additional Tags */}
      <meta name="theme-color" content="#25abe0" />
    </Helmet>
  );
};

export default SEO;