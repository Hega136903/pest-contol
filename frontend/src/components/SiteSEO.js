import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.wildgreenpest.in';

const routeDescriptions = {
  '/': 'Trusted pest control in Chennai for termites, cockroaches and rodents. Get safe treatment, transparent pricing and fast service from WildGreen Pest Management.',
  '/services': 'Compare rodent, termite and cockroach control services in Chennai. Learn about treatment methods, timelines, pricing and how to book a safe inspection.',
  '/services/rodent-control': 'Rodent control services in Chennai for rats and mice in homes, apartments, offices, restaurants and storage areas.',
  '/services/termite-control': 'Termite control services in Chennai for homes, furniture, woodwork, apartments, offices and construction areas.',
  '/services/cockroach-control': 'Cockroach control services in Chennai for kitchens, apartments, restaurants, offices, shops and commercial food areas.',
  '/about': 'Learn about WildGreen Pest Management, a Chennai pest control team providing practical, family-conscious treatments for homes, offices and shops.',
  '/contact': 'Contact WildGreen Pest Management for pest control in Chennai. Call, message or book an inspection for rodent, termite and cockroach problems.',
  '/book': 'Book pest control in Chennai for rodent, termite or cockroach problems. Choose a service date and request a quick appointment online.',
  '/blog': 'Practical pest control guides for Chennai homes and businesses, including termite prevention, cockroach treatment, rodent control and service costs.',
};

const SiteSEO = () => {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;
  const isAdminRoute = pathname.startsWith('/admin');
  const description = routeDescriptions[pathname] || 'Professional pest control services in Chennai for homes, offices and commercial properties.';

  return (
    <Helmet>
      <link rel="canonical" href={canonicalUrl} />
      <meta name="description" content={description} />
      <meta property="og:url" content={canonicalUrl} />
      <meta property="og:title" content="WildGreen Pest Management | Pest Control Chennai" />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${SITE_URL}/logo.webp`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content="WildGreen Pest Management | Pest Control Chennai" />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={`${SITE_URL}/logo.webp`} />
      {isAdminRoute && <meta name="robots" content="noindex, nofollow" />}
    </Helmet>
  );
};

export default SiteSEO;