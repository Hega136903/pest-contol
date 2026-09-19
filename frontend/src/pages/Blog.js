import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const articles = [
  {
    title: 'How to Get Rid of Cockroaches in Chennai Homes',
    description: 'Understand why cockroaches thrive in Chennai, what signs to watch for and how professional treatment supports long-term control.',
    path: '/blog/cockroach-control-chennai',
  },
  {
    title: 'Signs of Termite Infestation Every Chennai Homeowner Should Know',
    description: 'Learn how to identify mud tubes, hollow wood, discarded wings and other early warning signs of termite activity.',
    path: '/blog/termite-infestation-signs',
  },
  {
    title: 'Pest Control Cost in Chennai: What Affects the Price?',
    description: 'A practical guide to property size, pest type, treatment method, follow-up visits and getting a transparent quote.',
    path: '/blog/pest-control-cost-chennai',
  },
  {
    title: 'Rodent Control Guide for Chennai Homes and Businesses',
    description: 'Find common entry points, signs of rat activity and sensible prevention steps for kitchens, shops and offices.',
    path: '/blog/rodent-control-guide',
  },
];

const Blog = () => (
  <div className="px-4 py-8 max-w-4xl mx-auto">
    <Helmet>
      <title>Pest Control Guides for Chennai Homes and Businesses | WildGreen</title>
    </Helmet>
    <header className="mb-8">
      <h1 className="text-3xl font-bold text-primary mb-4">Pest Control Guides for Chennai</h1>
      <p className="text-gray-700 text-lg leading-relaxed">
        Reliable pest control starts with understanding the problem. These guides explain common pest activity in Chennai, practical prevention steps, treatment expectations and when professional help is worthwhile. Use them to prepare your home or business before requesting an inspection.
      </p>
    </header>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {articles.map((article) => (
        <article key={article.path} className="bg-white rounded-lg shadow p-6">
          <h2 className="text-xl font-bold text-primary mb-3">{article.title}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">{article.description}</p>
          <Link to={article.path} className="text-primary font-semibold hover:underline">Read the guide →</Link>
        </article>
      ))}
    </div>
    <section className="mt-10 bg-green-50 border-l-4 border-primary p-6 rounded">
      <h2 className="text-2xl font-bold text-primary mb-3">Need help with an active infestation?</h2>
      <p className="text-gray-700 mb-4">Guides can help you identify the signs, but an inspection is the fastest way to choose the right treatment for your property.</p>
      <Link to="/book" className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-green-700">Book an inspection</Link>
    </section>
  </div>
);

export default Blog;