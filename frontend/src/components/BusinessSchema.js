import React from 'react';

const SITE_URL = 'https://www.wildgreenpest.in/';

const BusinessSchema = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'PestControl',
      '@id': `${SITE_URL}#business`,
      name: 'WildGreen Pest Management',
      url: SITE_URL,
      image: `${SITE_URL}logo.png`,
      description: 'Professional pest control services in Chennai for homes, offices and commercial properties.',
      telephone: '+918939320492',
      email: 'wildgreenpestcontrol@gmail.com',
      priceRange: '₹799 - ₹5000',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '41, Jayalakshmi Nagar, 4th Street, Vanagaram',
        addressLocality: 'Chennai',
        addressRegion: 'Tamil Nadu',
        postalCode: '600095',
        addressCountry: 'IN',
      },
      areaServed: {
        '@type': 'City',
        name: 'Chennai',
      },
      serviceType: [
        'Rodent Control',
        'Termite Control',
        'Cockroach Control',
        'Mosquito Control',
        'Residential Pest Control',
        'Commercial Pest Control',
      ],
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '08:00',
        closes: '22:00',
      },
    })}
  </script>
);

export default BusinessSchema;
