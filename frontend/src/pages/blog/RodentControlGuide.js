import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';

const RodentControlGuide = () => (
  <div className="px-4 py-8 max-w-3xl mx-auto">
    <Helmet>
      <title>Complete Rodent Control Guide for Chennai Homes | Rat & Mouse Elimination</title>
      <meta name="description" content="Expert rodent control guide for Chennai. Learn how to identify, prevent, and eliminate rats and mice. Professional treatment and DIY prevention tips." />
      <meta name="keywords" content="rodent control Chennai, rat control, mouse control, rodent removal, how to get rid of rats" />
      <meta property="og:title" content="Complete Rodent Control Guide for Chennai Homes" />
      <meta property="og:description" content="Comprehensive guide to rodent elimination and prevention in Chennai homes." />
    </Helmet>

    <article className="bg-white rounded-lg shadow-lg p-8">
      <h1 className="text-4xl font-bold text-primary mb-6">Complete Rodent Control Guide for Chennai Homes: Eliminate Rats and Mice Permanently</h1>

      <p className="text-gray-700 mb-6 text-lg leading-relaxed">
        Rodents—rats and mice—are among the most common household pests in Chennai. They don't just cause property damage; they pose serious health risks to your family. Rats can chew through electrical wiring (fire hazard), contaminate food with disease-carrying droppings, and leave an unbearable odor. If you've noticed signs of rodent activity in your home, this comprehensive guide will help you understand the problem and take effective action.
      </p>

      <div className="bg-red-50 border-l-4 border-red-500 p-6 mb-8 rounded">
        <p className="text-lg text-red-800 font-semibold">
          ⚠️ Quick Fact: A single pair of rats can produce 1,000+ offspring in a year under ideal conditions. What starts as one sighting can become a severe infestation within weeks.
        </p>
      </div>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Why Chennai Has a Rodent Problem</h2>
        <p className="text-gray-700 mb-4">
          Several factors make Chennai an ideal habitat for rodents:
        </p>
        <ul className="list-disc ml-6 space-y-2 text-gray-700 mb-4">
          <li><strong>Urban Development:</strong> Dense construction with multiple buildings creates connected pathways for rodents to travel</li>
          <li><strong>Food Waste:</strong> Garbage dumps, open food preparation, and improper storage attract rodents</li>
          <li><strong>Water Sources:</strong> Leaky pipes and drain systems provide constant water supply</li>
          <li><strong>Warm Climate:</strong> Year-round breeding season means continuous rodent reproduction</li>
          <li><strong>Shelter:</strong> Walls, attics, and dark spaces offer perfect nesting locations</li>
        </ul>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Common Rodents in Chennai</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="border-2 border-primary rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">🐭 House Rats (Norway Rats)</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Size:</strong> 20-25 cm body length</li>
              <li><strong>Color:</strong> Brown/grey with darker back</li>
              <li><strong>Behavior:</strong> Excellent swimmers, active at dusk/dawn</li>
              <li><strong>Damage:</strong> Severe (chew wiring, structural damage)</li>
              <li><strong>Signs:</strong> Large droppings (12-18mm), loud squeaking</li>
            </ul>
          </div>

          <div className="border-2 border-primary rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">🐭 Roof Rats</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Size:</strong> 17-20 cm body length</li>
              <li><strong>Color:</strong> Black/dark brown with lighter belly</li>
              <li><strong>Behavior:</strong> Excellent climbers, active at night</li>
              <li><strong>Damage:</strong> Focus on attics and upper areas</li>
              <li><strong>Signs:</strong> Small droppings (6-8mm), found in high areas</li>
            </ul>
          </div>

          <div className="border-2 border-primary rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">🐁 Mice (House Mice)</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Size:</strong> 7-10 cm body length</li>
              <li><strong>Color:</strong> Grey-brown with white belly</li>
              <li><strong>Behavior:</strong> Very curious, exploratory, active 24/7</li>
              <li><strong>Damage:</strong> Moderate (holes in walls, food contamination)</li>
              <li><strong>Signs:</strong> Tiny droppings (3-6mm), musty odor</li>
            </ul>
          </div>

          <div className="border-2 border-primary rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary mb-3">🐁 Squirrels (Sometimes)</h3>
            <ul className="text-sm text-gray-700 space-y-2">
              <li><strong>Size:</strong> 20-25 cm body (with tail)</li>
              <li><strong>Color:</strong> Reddish-brown with white belly</li>
              <li><strong>Behavior:</strong> Active during daytime</li>
              <li><strong>Damage:</strong> High (insulation damage, electrical)</li>
              <li><strong>Signs:</strong> Seen in daylight, loud noise in attic</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Health Risks of Rodent Infestations</h2>
        <p className="text-gray-700 mb-4">
          Rodents aren't just annoying—they're dangerous vectors for serious diseases:
        </p>
        <div className="space-y-3">
          <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
            <h3 className="font-semibold text-gray-800 mb-1">Hantavirus</h3>
            <p className="text-sm text-gray-700">Spread through infected rodent droppings. Can cause severe respiratory illness.</p>
          </div>
          <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
            <h3 className="font-semibold text-gray-800 mb-1">Leptospirosis</h3>
            <p className="text-sm text-gray-700">Bacterial infection transmitted through urine-contaminated water and soil. Causes fever, kidney damage.</p>
          </div>
          <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
            <h3 className="font-semibold text-gray-800 mb-1">Salmonella</h3>
            <p className="text-sm text-gray-700">Contaminates food, causing severe gastroenteritis. Dangerous for children and elderly.</p>
          </div>
          <div className="bg-red-50 p-4 rounded border-l-4 border-red-500">
            <h3 className="font-semibold text-gray-800 mb-1">Plague</h3>
            <p className="text-sm text-gray-700">Rare but extremely serious. Rodents carry fleas that transmit the disease.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Signs of Rodent Infestation</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-gray-800 mb-3">Visual Signs</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Live or dead rodents</li>
              <li>✓ Droppings (dark, rice-grain shaped)</li>
              <li>✓ Gnaw marks on food packages</li>
              <li>✓ Chewed holes in walls/baseboards</li>
              <li>✓ Nesting material (shredded fabric, paper)</li>
            </ul>
          </div>
          <div className="bg-yellow-50 border-l-4 border-yellow-500 p-4 rounded">
            <h3 className="font-semibold text-gray-800 mb-3">Other Indicators</h3>
            <ul className="text-sm text-gray-700 space-y-1">
              <li>✓ Scratching sounds in walls/attic</li>
              <li>✓ Musty, unpleasant odor</li>
              <li>✓ Greasy smudges on surfaces</li>
              <li>✓ Unusual pet behavior (alert, focused)</li>
              <li>✓ Entry holes near doors/windows</li>
            </ul>
          </div>
        </div>

        <div className="bg-red-50 border border-red-200 p-4 rounded">
          <p className="text-sm text-gray-700"><strong>Important:</strong> If you notice even one sign of rodent activity, don't delay. Rodents multiply rapidly. Early intervention prevents severe infestations.</p>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">DIY Prevention Tips</h2>
        <p className="text-gray-700 mb-4">
          While professional treatment is essential for active infestations, prevention can reduce risk:
        </p>

        <div className="space-y-3">
          <div className="flex gap-4 items-start">
            <span className="text-primary font-bold text-xl">1</span>
            <div>
              <h3 className="font-semibold text-gray-800">Seal Entry Points</h3>
              <p className="text-sm text-gray-700">Rodents squeeze through holes as small as 6mm. Seal cracks, gaps, and holes in walls, foundations, and around pipes with steel wool and caulk.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-primary font-bold text-xl">2</span>
            <div>
              <h3 className="font-semibold text-gray-800">Store Food Properly</h3>
              <p className="text-sm text-gray-700">Use airtight containers for pantry items. Store dried goods in sealed, rodent-proof containers. Never leave pet food out overnight.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-primary font-bold text-xl">3</span>
            <div>
              <h3 className="font-semibold text-gray-800">Eliminate Water Sources</h3>
              <p className="text-sm text-gray-700">Fix leaky pipes, keep drains clean, and don't leave standing water. Rodents need water—denying it forces them elsewhere.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-primary font-bold text-xl">4</span>
            <div>
              <h3 className="font-semibold text-gray-800">Declutter Spaces</h3>
              <p className="text-sm text-gray-700">Remove hiding places. Keep attics, basements, and storage areas organized and free of clutter.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-primary font-bold text-xl">5</span>
            <div>
              <h3 className="font-semibold text-gray-800">Maintain Garbage</h3>
              <p className="text-sm text-gray-700">Use sealed trash bins. Empty kitchen waste daily. Don't leave garbage outside overnight.</p>
            </div>
          </div>

          <div className="flex gap-4 items-start">
            <span className="text-primary font-bold text-xl">6</span>
            <div>
              <h3 className="font-semibold text-gray-800">Professional Prevention</h3>
              <p className="text-sm text-gray-700">Annual inspections and preventive treatments are more cost-effective than emergency treatments for active infestations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Why DIY Methods Don't Work</h2>
        <p className="text-gray-700 mb-4">
          Many homeowners try DIY rodent control first. Here's why it usually fails:
        </p>

        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded border-l-4 border-red-500">
          <ul className="space-y-3">
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">✗</span>
              <div>
                <p className="font-semibold text-gray-800">Traps catch only visible rodents</p>
                <p className="text-sm text-gray-700">Most rodents remain hidden in walls. Catching one or two doesn't eliminate the colony.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">✗</span>
              <div>
                <p className="font-semibold text-gray-800">Poison is risky</p>
                <p className="text-sm text-gray-700">Poison is dangerous for children, pets, and can create foul odors as dead rodents decompose in walls.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">✗</span>
              <div>
                <p className="font-semibold text-gray-800">Infestations resurface</p>
                <p className="text-sm text-gray-700">Without sealing entry points and treating hidden areas, new rodents quickly reinfest.</p>
              </div>
            </li>
            <li className="flex gap-3">
              <span className="text-red-500 font-bold">✗</span>
              <div>
                <p className="font-semibold text-gray-800">No guarantee or follow-up</p>
                <p className="text-sm text-gray-700">If infestation continues, you're on your own with no recourse.</p>
              </div>
            </li>
          </ul>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Professional Rodent Control Process</h2>

        <div className="space-y-4">
          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-semibold text-primary mb-2">Step 1: Detailed Inspection</h3>
            <p className="text-sm text-gray-700">Technicians examine your entire property—attic, basement, walls, drains—to identify rodent entry points, nests, and food sources.</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-semibold text-primary mb-2">Step 2: Strategic Baiting</h3>
            <p className="text-sm text-gray-700">Professional-grade bait stations are placed along rodent pathways and near identified nests. Baits eliminate the entire colony, not just visible rodents.</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-semibold text-primary mb-2">Step 3: Trapping & Monitoring</h3>
            <p className="text-sm text-gray-700">Strategic trap placement catches remaining rodents. Regular monitoring ensures effectiveness and quick removal of dead animals.</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-semibold text-primary mb-2">Step 4: Exclusion & Sealing</h3>
            <p className="text-sm text-gray-700">All entry points are sealed with steel mesh and caulk, preventing future infestations.</p>
          </div>

          <div className="bg-green-50 border-l-4 border-green-500 p-4 rounded">
            <h3 className="font-semibold text-primary mb-2">Step 5: Follow-up Visits</h3>
            <p className="text-sm text-gray-700">Multiple follow-up visits ensure all rodents are eliminated and reinfestations are caught early. Backed by 1-year warranty.</p>
          </div>
        </div>
      </section>

      <section className="mb-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Frequently Asked Questions</h2>
        <div className="space-y-4">
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold text-primary mb-2">Q: How long does rodent treatment take?</h3>
            <p className="text-gray-700">A: Initial treatment is 30-60 minutes. Complete elimination typically requires 3-4 follow-up visits over 4-6 weeks.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold text-primary mb-2">Q: Is professional treatment safe for my family?</h3>
            <p className="text-gray-700">A: Yes! We use child and pet-safe bait stations and treatments. Baits are placed in secure stations inaccessible to children and pets.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold text-primary mb-2">Q: How much does professional rodent control cost?</h3>
            <p className="text-gray-700">A: Professional rodent treatment in Chennai starts from ₹799 for a single visit, with package deals starting at ₹2,500 for 3-4 visits. Free inspections help assess your situation.</p>
          </div>
          <div className="bg-gray-50 p-4 rounded">
            <h3 className="font-semibold text-primary mb-2">Q: Can rodents return after treatment?</h3>
            <p className="text-gray-700">A: Our 1-year warranty ensures that if rodents return, we provide free follow-up treatment. However, proper sealing prevents 95%+ of reinfestation.</p>
          </div>
        </div>
      </section>

      <div className="bg-gradient-to-r from-primary to-green-600 text-white p-8 rounded-lg mb-8">
        <h2 className="text-2xl font-bold mb-4">Stop Rodent Problems Now</h2>
        <p className="mb-6">
          Rodent infestations worsen rapidly. What seems like a minor problem today becomes a major infestation in weeks. Professional, certified treatment is your safest and most effective solution.
        </p>
        <div className="flex gap-4 flex-wrap">
          <Link to="/book" className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
            Book Rodent Control
          </Link>
          <a href="tel:+918939320492" className="inline-block bg-white text-primary px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
            Call: +91 8939 320 492
          </a>
        </div>
      </div>

      <div className="text-center text-sm text-gray-500 border-t pt-6">
        <p>Last updated: June 2025 | By Vishwa Pest Control, Chennai</p>
      </div>
    </article>
  </div>
);

export default RodentControlGuide;
