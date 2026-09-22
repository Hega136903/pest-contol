import React from 'react';
import { Helmet } from 'react-helmet';

const BlogPostSchema = ({ headline, description, path, image = '/logo.png' }) => {
  const schema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline,
    description,
    image: `https://www.wildgreenpest.in/${image}`,
    datePublished: '2026-01-01',
    dateModified: '2026-09-19',
    author: {
      '@type': 'Organization',
      '@id': 'https://www.wildgreenpest.in/#organization',
      name: 'WildGreen Pest Management',
    },
    publisher: {
      '@type': 'Organization',
      '@id': 'https://www.wildgreenpest.in/#organization',
      name: 'WildGreen Pest Management',
      logo: {
        '@type': 'ImageObject',
        url: 'https://www.wildgreenpest.in//logo.png',
      },
    },
    mainEntityOfPage: `https://www.wildgreenpest.in/${path}`,
  };

  return (
    <Helmet>
      <script type="application/ld+json">{JSON.stringify(schema)}</script>
    </Helmet>
  );
};

export default BlogPostSchema;