import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import FAQSection from '../components/FAQSection';

const testimonials = [
  {
    name: 'Vasanth A.',
    area: 'Velachery',
    text: 'Quick and professional rodent control service. Highly recommended in Chennai!'
  },
  {
    name: 'Vishwa S.',
    area: 'Tambaram',
    text: 'Termite treatment was effective and affordable. Great team!'
  },
  {
    name: 'Mahesh M.',
    area: 'Anna Nagar',
    text: 'No more cockroaches! Booking was easy and service was prompt.'
  }
];

const Home = ({ onBookClick }) => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control Chennai | Rodent, Termite, Cockroach | Book Now</title>
      <meta name="description" content="Best pest control services in Chennai for Rodent, Termite, Cockroach. Book online for home & commercial pest control." />
      <meta name="keywords" content="pest control chennai, rodent control, termite control, cockroach control, home pest control" />

      {/* Open Graph Tags */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://vishwa-pestcontrol.vercel.app/" />
      <meta property="og:title" content="Pest Control Chennai | Rodent, Termite, Cockroach | Book Now" />
      <meta property="og:description" content="Best pest control services in Chennai. Expert rodent, termite & cockroach control. Same day service available." />
      <meta property="og:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://vishwa-pestcontrol.vercel.app/" />
      <meta name="twitter:title" content="Pest Control Chennai | Rodent, Termite, Cockroach" />
      <meta name="twitter:description" content="Professional pest control in Chennai - rodent, termite & cockroach elimination. Book now!" />
      <meta name="twitter:image" content="https://vishwa-pestcontrol.vercel.app/logo.png" />

      {/* Local Business Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "LocalBusiness",
          "name": "Vishwa Pest Control",
          "image": "https://vishwa-pestcontrol.vercel.app/logo.png",
          "description": "Professional pest control services in Chennai. Expert termite control, cockroach treatment, rodent control, mosquito control and residential pest management.",
          "telephone": "+91-8939-320-492",
          "email": "visvishwa6903@gmail.com",
          "address": {
            "@type": "PostalAddress",
            "streetAddress": "201, Kamadhenu Nagar, Sheikmaniyam, Porur",
            "addressLocality": "Chennai",
            "addressRegion": "Tamil Nadu",
            "postalCode": "600116",
            "addressCountry": "IN"
          },
          "url": "https://vishwa-pestcontrol.vercel.app",
          "priceRange": "₹799 - ₹5000",
          "areaServed": {
            "@type": "City",
            "name": "Chennai"
          },
          "serviceType": ["Rodent Control", "Termite Control", "Cockroach Control", "Mosquito Control", "Residential Pest Control", "Commercial Pest Control"],
          "openingHoursSpecification": {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
            "opens": "08:00",
            "closes": "22:00"
          },
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.7",
            "ratingCount": "500"
          }
        })}
      </script>

      {/* Review/Rating Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Review",
          "itemReviewed": {
            "@type": "LocalBusiness",
            "name": "Vishwa Pest Control"
          },
          "reviewRating": {
            "@type": "Rating",
            "ratingValue": "5",
            "bestRating": "5"
          },
          "author": [
            {
              "@type": "Person",
              "name": "Vasanth A.",
              "address": "Velachery, Chennai"
            },
            {
              "@type": "Person",
              "name": "Vishwa S.",
              "address": "Tambaram, Chennai"
            },
            {
              "@type": "Person",
              "name": "Mahesh M.",
              "address": "Anna Nagar, Chennai"
            }
          ]
        })}
      </script>

      {/* FAQ Schema */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [
            {
              "@type": "Question",
              "name": "Is pest control safe for pets and children in Chennai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! Our professional pest control in Chennai uses eco-certified, child & pet-safe chemicals approved by government health departments."
              }
            },
            {
              "@type": "Question",
              "name": "How fast can you schedule pest control in Chennai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "We offer same-day or next-day appointments in most areas of Chennai. Call +91 8939 320 492 or book online."
              }
            },
            {
              "@type": "Question",
              "name": "Do you offer commercial pest control in Chennai?",
              "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes! We serve residential pest control and commercial pest control Chennai across all major areas."
              }
            }
          ]
        })}
      </script>
    </Helmet>
    <section className="mb-8">
      <div className="flex flex-col md:flex-row items-center gap-4 md:gap-6">
        <div className="w-full md:w-1/2">
          <img src="/hero.png" alt="Pest Control Chennai" className="w-full h-40 sm:h-48 object-cover rounded-lg" />
        </div>
        <div className="w-full md:w-1/2 text-center md:text-left px-2 md:px-0">
          <div className="mb-3">
            <span className="inline-block bg-yellow-50 text-yellow-800 px-3 py-1 rounded-full text-xs sm:text-sm font-semibold">4.7 stars rating | 500+ Homes Protected</span>
          </div>
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary mb-3">Chennai's Trusted Pest Control Experts</h1>
          <p className="text-sm sm:text-base text-gray-700 mb-4 font-semibold">Best Pest Control Near Me in Chennai | Rodent, Termite & Cockroach Control | Eco Safe Treatment | Same Day Visit</p>
          <div className="flex flex-wrap gap-2 mb-4 justify-center md:justify-start">
            <span className="text-xs bg-green-50 text-green-800 px-2 py-1 rounded">Safe for children & pets</span>
            <span className="text-xs bg-blue-50 text-blue-800 px-2 py-1 rounded">Serving Chennai</span>
            <span className="text-xs bg-orange-50 text-orange-800 px-2 py-1 rounded">Same day service</span>
          </div>
          <div className="flex gap-3 justify-center md:justify-start">
            <Link to="/book" className="inline-block bg-primary text-white px-4 py-2 sm:px-6 sm:py-3 rounded shadow hover:bg-green-700 font-medium text-sm sm:text-base">Book Now</Link>
            <button onClick={onBookClick} className="inline-block bg-white text-primary px-4 py-2 sm:px-6 sm:py-3 rounded shadow hover:bg-gray-100 font-medium text-sm sm:text-base border-2 border-primary">Free Inspection</button>
          </div>
        </div>
      </div>
    </section>

    {/* Customer Reviews Section */}
    <section className="mb-8 bg-gradient-to-r from-green-50 to-blue-50 rounded-lg p-6 sm:p-8">
      <h2 className="text-2xl font-bold text-primary mb-6 text-center">What Chennai Customers Say</h2>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <div key={i} className="bg-white rounded-lg shadow p-4 border-l-4 border-primary">
            <div className="flex items-center mb-2">
              <span className="text-yellow-400 text-sm">5 stars</span>
            </div>
            <p className="text-sm text-gray-700 mb-3 italic">"{t.text}"</p>
            <div className="border-t pt-2">
              <p className="font-semibold text-gray-900 text-sm">{t.name}</p>
              {t.area && <p className="text-xs text-gray-500">{t.area}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>

    {/* Before/After Services Section */}
    <section className="mb-12">
      <div className="text-center mb-8">
        <h2 className="text-2xl md:text-3xl font-bold text-primary mb-4">Real Results from Chennai Homes & Businesses</h2>
        <p className="text-gray-600 max-w-2xl mx-auto">Over 500+ successful pest elimination projects across Chennai. See actual transformations from our certified technicians.</p>
      </div>
      
      {/* Multiple Before/After Cases */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Case 1: Rodent Control */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-3 text-center">Residential Kitchen - Rodent Control</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 mb-2">
                <img src="/rat.webp" alt="Before professional rodent control - rat droppings and damage in residential kitchen in Chennai" className="w-full h-24 object-cover rounded" />
              </div>
              <span className="text-xs font-medium text-red-600">Before: Rat droppings & damage</span>
            </div>
            <div className="text-center">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3 mb-2">
                <img src="/rat-after.png" alt="After professional rodent control - clean kitchen free from rats and droppings in Chennai" className="w-full h-24 object-cover rounded" />
              </div>
              <span className="text-xs font-medium text-green-600">After: 100% rodent-free</span>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Completed in 2 days</span>
          </div>
        </div>

        {/* Case 2: Termite Control */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-3 text-center">Commercial Building - Termite Treatment</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 mb-2">
                <img src="/termite-control-service-in-ahmedabad-500x500.webp" alt="Before termite control - wood damage and termite tunnels in commercial building in Chennai" className="w-full h-24 object-cover rounded" />
              </div>
              <span className="text-xs font-medium text-red-600">Before: Wood damage & tunnels</span>
            </div>
            <div className="text-center">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3 mb-2">
                <img src="/termite-after.svg" alt="After professional termite control - fully protected structure free from termite damage in Chennai" className="w-full h-24 object-contain rounded" />
              </div>
              <span className="text-xs font-medium text-green-600">After: Fully protected structure</span>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">5-year warranty</span>
          </div>
        </div>

        {/* Case 3: Cockroach Control */}
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h3 className="text-lg font-semibold text-primary mb-3 text-center">Restaurant Kitchen - Cockroach Control</h3>
          <div className="space-y-4">
            <div className="text-center">
              <div className="bg-red-50 border-2 border-red-200 rounded-lg p-3 mb-2">
                <img src="/cockroaches-pest-control-services-1499757056-3120325-1000x1000.webp" alt="Before cockroach control - heavy cockroach infestation in restaurant kitchen in Chennai" className="w-full h-24 object-cover rounded" />
              </div>
              <span className="text-xs font-medium text-red-600">Before: Heavy infestation</span>
            </div>
            <div className="text-center">
              <div className="bg-green-50 border-2 border-green-200 rounded-lg p-3 mb-2">
                <img src="/cockroach-after-new.svg" alt="After professional cockroach control - food-safe clean environment free from cockroaches in Chennai" className="w-full h-24 object-contain rounded" />
              </div>
              <span className="text-xs font-medium text-green-600">After: Food-safe environment</span>
            </div>
          </div>
          <div className="mt-3 text-center">
            <span className="bg-yellow-100 text-yellow-800 text-xs px-2 py-1 rounded-full">Same-day results</span>
          </div>
        </div>
      </div>

      {/* Services Video Section */}
      <div className="bg-gradient-to-r from-green-50 to-blue-50 rounded-xl p-6 md:p-8 mb-8">
        <h3 className="text-xl md:text-2xl font-bold text-primary mb-6 text-center">Watch Our Expert Services in Action</h3>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Main Service Video */}
          <div className="bg-white rounded-lg p-4 shadow-md">
            <div className="bg-gray-200 rounded-lg h-48 md:h-56 flex items-center justify-center mb-4 relative overflow-hidden cursor-pointer group">
              <img src="/pestcontrol-thumbnail.png" alt="Video: Complete professional pest control process showing expert technician providing rodent, termite, and cockroach elimination service in Chennai" className="w-full h-full object-contain transition-transform group-hover:scale-105" />
              <div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
                <button 
                  className="bg-white text-primary w-16 h-16 rounded-full flex items-center justify-center hover:bg-gray-100 transition-all transform hover:scale-110"
                  onClick={() => window.open('https://youtube.com/watch?v=YOUR_VIDEO_ID', '_blank')}
                >
                  <svg className="w-6 h-6 ml-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </button>
              </div>
            </div>
            <h4 className="font-semibold text-gray-800 mb-2">Complete Pest Control Process</h4>
            <p className="text-sm text-gray-600 mb-3">Watch our team safely eliminate pest infestations in Chennai properties</p>
            <div className="flex items-center justify-between mt-3">
              <span className="text-xs text-gray-500">Duration: 4:30</span>
              <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded">Live Service</span>
            </div>
            <Link 
              to="/services" 
              className="mt-3 block w-full text-center bg-primary text-white py-2 px-4 rounded hover:bg-green-700 transition-colors text-sm font-medium"
            >
              View All Services
            </Link>
          </div>

          {/* Service Types Video Grid */}
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg p-3 shadow cursor-pointer hover:shadow-md transition-shadow">
              <div
                className="bg-gray-200 rounded h-20 flex items-center justify-center mb-2 relative cursor-pointer"
                onClick={() => window.open('https://youtube.com/watch?v=RODENT_VIDEO_ID', '_blank')}
              >
                <img src="/rodent-pest-control-services-500x500.webp" alt="Rodent Control" className="w-full h-full object-contain rounded" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs text-center font-medium">Rodent Control</p>
              <p className="text-xs text-center text-gray-500 mb-2">2:15</p>
              <Link 
                to="/services?service=rodent" 
                className="block w-full text-center bg-primary text-white py-1 px-2 rounded hover:bg-green-700 transition-colors text-xs"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-lg p-3 shadow cursor-pointer hover:shadow-md transition-shadow">
              <div
                className="bg-gray-200 rounded h-20 flex items-center justify-center mb-2 relative cursor-pointer"
                onClick={() => window.open('https://youtube.com/watch?v=TERMITE_VIDEO_ID', '_blank')}
              >
                <img src="/termite-control-service-in-ahmedabad-500x500.webp" alt="Termite Treatment" className="w-full h-full object-contain rounded" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs text-center font-medium">Termite Treatment</p>
              <p className="text-xs text-center text-gray-500 mb-2">3:20</p>
              <Link 
                to="/services?service=termite" 
                className="block w-full text-center bg-primary text-white py-1 px-2 rounded hover:bg-green-700 transition-colors text-xs"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-lg p-3 shadow cursor-pointer hover:shadow-md transition-shadow">
              <div
                className="bg-gray-200 rounded h-20 flex items-center justify-center mb-2 relative cursor-pointer"
                onClick={() => window.open('https://youtube.com/watch?v=COCKROACH_VIDEO_ID', '_blank')}
              >
                <img src="/cockroaches-pest-control-services-1499757056-3120325-1000x1000.webp" alt="Cockroach Control" className="w-full h-full object-contain rounded" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs text-center font-medium">Cockroach Control</p>
              <p className="text-xs text-center text-gray-500 mb-2">1:45</p>
              <Link 
                to="/services?service=cockroach" 
                className="block w-full text-center bg-primary text-white py-1 px-2 rounded hover:bg-green-700 transition-colors text-xs"
              >
                Learn More
              </Link>
            </div>
            <div className="bg-white rounded-lg p-3 shadow cursor-pointer hover:shadow-md transition-shadow">
              <div
                className="bg-gray-200 rounded h-20 flex items-center justify-center mb-2 relative cursor-pointer"
                onClick={() => window.open('https://youtube.com/watch?v=SAFETY_VIDEO_ID', '_blank')}
              >
                <img src="/OIP.webp" alt="Safe Eco-Friendly Pest Control Methods - Child & Pet Safe Treatment Process" className="w-full h-full object-contain rounded" />
                <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <p className="text-xs text-center font-medium">Safety Methods</p>
              <p className="text-xs text-center text-gray-500 mb-2">2:30</p>
              <Link 
                to="/about" 
                className="block w-full text-center bg-primary text-white py-1 px-2 rounded hover:bg-green-700 transition-colors text-xs"
              >
                Learn More
              </Link>
            </div>
          </div>
        </div>
        
        {/* Service Guarantees */}
        <div className="mt-6 text-center">
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <span className="bg-white px-4 py-2 rounded-full text-primary font-medium shadow">✓ Eco-Friendly Methods</span>
            <span className="bg-white px-4 py-2 rounded-full text-primary font-medium shadow">✓ Child & Pet Safe</span>
            <span className="bg-white px-4 py-2 rounded-full text-primary font-medium shadow">✓ 24/7 Emergency Service</span>
            <span className="bg-white px-4 py-2 rounded-full text-primary font-medium shadow">✓ 1-Year Warranty</span>
          </div>
        </div>
      </div>

      {/* Detailed Process Steps */}
      <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
        <h3 className="text-2xl font-semibold text-primary mb-6 text-center">Our Professional 6-Step Process</h3>

        {/* Mobile Version - Compact */}
        <div className="block md:hidden">
          <div className="grid grid-cols-2 gap-4">
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">1</div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">Inspection</h4>
              <p className="text-xs text-gray-600">Free assessment</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">2</div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">Plan</h4>
              <p className="text-xs text-gray-600">Custom solution</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">3</div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">Treatment</h4>
              <p className="text-xs text-gray-600">Safe & effective</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">4</div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">Monitor</h4>
              <p className="text-xs text-gray-600">Follow-up checks</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">5</div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">Prevention</h4>
              <p className="text-xs text-gray-600">Seal entry points</p>
            </div>
            <div className="flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm mb-2">6</div>
              <h4 className="font-semibold text-gray-800 text-sm mb-1">Warranty</h4>
              <p className="text-xs text-gray-600">1-year guarantee</p>
            </div>
          </div>
        </div>

        {/* Desktop Version - Detailed */}
        <div className="hidden md:grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">1</div>
            <h4 className="font-semibold text-gray-800 mb-2">Free Inspection</h4>
            <p className="text-sm text-gray-600">Comprehensive property assessment using advanced detection tools</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">2</div>
            <h4 className="font-semibold text-gray-800 mb-2">Custom Treatment Plan</h4>
            <p className="text-sm text-gray-600">Tailored solution based on pest type, severity, and property layout</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">3</div>
            <h4 className="font-semibold text-gray-800 mb-2">Safe Treatment</h4>
            <p className="text-sm text-gray-600">Eco-friendly chemicals with child & pet safety certification</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">4</div>
            <h4 className="font-semibold text-gray-800 mb-2">Monitoring</h4>
            <p className="text-sm text-gray-600">Regular follow-ups to ensure complete elimination</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">5</div>
            <h4 className="font-semibold text-gray-800 mb-2">Prevention</h4>
            <p className="text-sm text-gray-600">Seal entry points and apply protective barriers</p>
          </div>
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center text-white font-bold text-xl mb-4">6</div>
            <h4 className="font-semibold text-gray-800 mb-2">Warranty</h4>
            <p className="text-sm text-gray-600">Guaranteed protection with service warranty up to 1 year</p>
          </div>
        </div>
      </div>
    </section>

    <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
        <img src="/rodent.svg" alt="Professional Rodent Control Service Icon - Pest Elimination in Chennai" className="h-20 w-20 object-contain mb-3" />
        <h2 className="font-semibold text-primary text-lg mb-2">Rodent Control Chennai</h2>
        <p className="text-sm text-gray-600 leading-relaxed">Best professional rodent control in Chennai. Safe, eco-friendly rodent removal for kitchens, gardens, and offices.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
        <img src="/termite.svg" alt="Professional Termite Control Treatment Service Icon - Long-Lasting Protection" className="h-20 w-20 object-contain mb-3" />
        <h2 className="font-semibold text-primary text-lg mb-2">Termite Control Chennai</h2>
        <p className="text-sm text-gray-600 leading-relaxed">Expert Termite Control in Chennai. Odor & Odorless, child-safe long-lasting termite treatment for wood, furniture, and buildings.</p>
      </div>
      <div className="bg-white rounded-lg shadow p-6 flex flex-col items-center text-center">
        <img src="/cockroach.svg" alt="Professional Cockroach Control Service Icon - Safe Elimination Solution" className="h-20 w-20 object-contain mb-3" />
        <h2 className="font-semibold text-primary text-lg mb-2">Cockroach Control Chennai</h2>
        <p className="text-sm text-gray-600 leading-relaxed">Professional Cockroach Control in Chennai. Odorless, child-safe cockroach elimination for homes and restaurants.</p>
      </div>
    </section>

    <FAQSection />
  </div>
);

export default Home;
