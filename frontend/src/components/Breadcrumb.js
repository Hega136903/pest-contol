import React from 'react';
import { Helmet } from 'react-helmet';
import { Link, useLocation } from 'react-router-dom';

const Breadcrumb = () => {
  const location = useLocation();

  const breadcrumbMap = {
    '/': [{ label: 'Home', path: '/' }],
    '/services': [{ label: 'Home', path: '/' }, { label: 'Services', path: '/services' }],
    '/book': [{ label: 'Home', path: '/' }, { label: 'Book Service', path: '/book' }],
    '/contact': [{ label: 'Home', path: '/' }, { label: 'Contact', path: '/contact' }],
    '/about': [{ label: 'Home', path: '/' }, { label: 'About', path: '/about' }],
    '/pest-control-porur': [{ label: 'Home', path: '/' }, { label: 'Pest Control', path: '/services' }, { label: 'Porur', path: '/pest-control-porur' }],
    '/pest-control-velachery': [{ label: 'Home', path: '/' }, { label: 'Pest Control', path: '/services' }, { label: 'Velachery', path: '/pest-control-velachery' }],
    '/pest-control-anna-nagar': [{ label: 'Home', path: '/' }, { label: 'Pest Control', path: '/services' }, { label: 'Anna Nagar', path: '/pest-control-anna-nagar' }],
    '/pest-control-tambaram': [{ label: 'Home', path: '/' }, { label: 'Pest Control', path: '/services' }, { label: 'Tambaram', path: '/pest-control-tambaram' }],
    '/pest-control-avadi': [{ label: 'Home', path: '/' }, { label: 'Pest Control', path: '/services' }, { label: 'Avadi', path: '/pest-control-avadi' }],
    '/pest-control-ambattur': [{ label: 'Home', path: '/' }, { label: 'Pest Control', path: '/services' }, { label: 'Ambattur', path: '/pest-control-ambattur' }],
    '/pest-control-omr': [{ label: 'Home', path: '/' }, { label: 'Pest Control', path: '/services' }, { label: 'OMR', path: '/pest-control-omr' }],
    '/pest-control-pallavaram': [{ label: 'Home', path: '/' }, { label: 'Pest Control', path: '/services' }, { label: 'Pallavaram', path: '/pest-control-pallavaram' }],
  };

  const breadcrumbs = breadcrumbMap[location.pathname] || [{ label: 'Home', path: '/' }];

  const schemaData = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": breadcrumbs.map((crumb, index) => ({
      "@type": "ListItem",
      "position": index + 1,
      "name": crumb.label,
      "item": `https://vishwa-pestcontrol.vercel.app${crumb.path}`
    }))
  };

  return (
    <>
      <Helmet>
        <script type="application/ld+json">
          {JSON.stringify(schemaData)}
        </script>
      </Helmet>
      <nav className="bg-gray-50 border-b border-gray-200 px-4 py-3">
        <div className="max-w-4xl mx-auto">
          <ol className="flex flex-wrap items-center gap-2 text-sm">
            {breadcrumbs.map((crumb, index) => (
              <li key={index} className="flex items-center gap-2">
                {index > 0 && <span className="text-gray-400">/</span>}
                {index === breadcrumbs.length - 1 ? (
                  <span className="text-gray-600 font-medium">{crumb.label}</span>
                ) : (
                  <Link to={crumb.path} className="text-primary hover:underline">{crumb.label}</Link>
                )}
              </li>
            ))}
          </ol>
        </div>
      </nav>
    </>
  );
};

export default Breadcrumb;
