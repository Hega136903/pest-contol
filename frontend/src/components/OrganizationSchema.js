import React from 'react';

const SITE_URL = 'https://wildgreenpestmanagement.vercel.app/';

const OrganizationSchema = () => (
  <script type="application/ld+json">
    {JSON.stringify({
      '@context': 'https://schema.org',
      '@type': 'Organization',
      '@id': `${SITE_URL}#organization`,
      name: 'WildGreen Pest Management',
      url: SITE_URL,
      logo: `${SITE_URL}logo.png`,
      telephone: '+918939320492',
      email: 'wildgreenpestcontrol@gmail.com',
      sameAs: ['https://www.youtube.com/@WildGreenPestManagement'],
    })}
  </script>
);

export default OrganizationSchema;
