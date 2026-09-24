import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.wildgreenpest.in';

const routeDescriptions = {
  // ==========================================
  // Main Pages
  // ==========================================

  '/':
    'Trusted pest control in Chennai for termites, cockroaches and rodents. Get safe treatment, transparent pricing and fast service from WildGreen Pest Management.',

  '/services':
    'Compare rodent, termite and cockroach control services in Chennai. Learn about treatment methods, timelines, pricing and how to book a safe inspection.',

  '/services/rodent-control':
    'Rodent control services in Chennai for rats and mice in homes, apartments, offices, restaurants and storage areas.',

  '/services/termite-control':
    'Termite control services in Chennai for homes, furniture, woodwork, apartments, offices and construction areas.',

  '/services/cockroach-control':
    'Cockroach control services in Chennai for kitchens, apartments, restaurants, offices, shops and commercial food areas.',

  '/about':
    'Learn about WildGreen Pest Management, a Chennai pest control team providing practical, family-conscious treatments for homes, offices and shops.',

  '/contact':
    'Contact WildGreen Pest Management for pest control in Chennai. Call, message or book an inspection for rodent, termite and cockroach problems.',

  '/book':
    'Book pest control in Chennai for rodent, termite or cockroach problems. Choose a service date and request a quick appointment online.',

  '/blog':
    'Practical pest control guides for Chennai homes and businesses, including termite prevention, cockroach treatment, rodent control and service costs.',

  // ==========================================
  // Location Pages
  // ==========================================

  '/pest-control-porur':
    'Pest control in Porur, Chennai for cockroaches, termites and rodents. WildGreen Pest Management provides home and commercial pest treatment with inspection and booking support.',

  '/pest-control-velachery':
    'Pest control in Velachery, Chennai for cockroach, termite and rodent problems. Get professional treatment for homes, apartments, offices and shops.',

  '/pest-control-anna-nagar':
    'Pest control in Anna Nagar, Chennai for termites, cockroaches and rodents. WildGreen Pest Management serves homes, apartments, offices and nearby areas.',

  '/pest-control-tambaram':
    'Pest control in Tambaram, Chennai for cockroach, termite and rodent infestations. Book professional pest treatment for homes, apartments and businesses.',

  '/pest-control-avadi':
    'Pest control in Avadi, Chennai for cockroaches, termites and rodents. Get pest treatment for homes, apartments, shops and commercial properties.',

  '/pest-control-ambattur':
    'Pest control in Ambattur, Chennai for termites, cockroaches and rodents. WildGreen Pest Management provides pest treatment for homes, businesses and industrial areas.',

  '/pest-control-omr':
    'Pest control in OMR, Chennai for cockroach, termite and rodent problems. Professional pest treatment for apartments, offices, restaurants and businesses.',

  '/pest-control-pallavaram':
    'Pest control in Pallavaram, Chennai for termites, cockroaches and rodents. Book pest treatment for homes, apartments, shops and commercial properties.',

  '/pest-control-chromepet':
    'Pest control in Chromepet, Chennai for cockroach, termite and rodent infestations. Get professional treatment for homes, apartments, offices and shops.',
};

const SiteSEO = () => {
  const { pathname } = useLocation();

  const canonicalUrl = `${SITE_URL}${pathname === '/' ? '' : pathname}`;

  const isAdminRoute = pathname.startsWith('/admin');

  const description =
    routeDescriptions[pathname] ||
    'Professional pest control services in Chennai for homes, offices and commercial properties.';

  return (
    <Helmet>

      {/* ==========================================
          Canonical
      ========================================== */}

      <link
        rel="canonical"
        href={canonicalUrl}
      />

      {/* ==========================================
          Meta Description
      ========================================== */}

      <meta
        name="description"
        content={description}
      />

      {/* ==========================================
          Open Graph
      ========================================== */}

      <meta
        property="og:url"
        content={canonicalUrl}
      />

      <meta
        property="og:title"
        content="WildGreen Pest Management | Pest Control Chennai"
      />

      <meta
        property="og:description"
        content={description}
      />

      <meta
        property="og:type"
        content="website"
      />

      <meta
        property="og:image"
        content={`${SITE_URL}/logo.webp`}
      />

      {/* ==========================================
          Twitter
      ========================================== */}

      <meta
        name="twitter:card"
        content="summary_large_image"
      />

      <meta
        name="twitter:title"
        content="WildGreen Pest Management | Pest Control Chennai"
      />

      <meta
        name="twitter:description"
        content={description}
      />

      <meta
        name="twitter:image"
        content={`${SITE_URL}/logo.webp`}
      />

      {/* ==========================================
          Admin Protection
      ========================================== */}

      {isAdminRoute && (
        <meta
          name="robots"
          content="noindex, nofollow"
        />
      )}

    </Helmet>
  );
};

export default SiteSEO;