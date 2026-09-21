import React from 'react';
import { Helmet } from 'react-helmet';

const BlogPostSchema = ({ headline, description, path, image = '/logo.png' }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: `https://wildgreenpestmanagement.vercel.app/${image}`,
    datePublished: '2026-01-01',
    dateModified: '2026-09-19',
    author: {
      '@type': 'Organization',
      '@id': 'https://wildgreenpestmanagement.vercel.app/#organization',
      name: 'WildGreen Pest Management',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://wildgreenpestmanagement.vercel.app/#organization',
      name: 'WildGreen Pest Management',
      logo: {
        '@type': 'ImageObject',
        url: 'https://wildgreenpestmanagement.vercel.app//logo.png',
      },
    },
    mainEntityOfPage: `https://wildgreenpestmanagement.vercel.app/${path}`,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default BlogPostSchema;