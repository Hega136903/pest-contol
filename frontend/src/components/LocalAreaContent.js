import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const areas = {
  '/pest-control-porur': {
    name: 'Porur',
    intro: 'Porur combines established residential streets, apartment communities, offices and busy commercial roads. Pest activity can vary between kitchens, utility shafts, parking areas and garden edges, so a useful visit looks at the property rather than treating every building the same way.',
    neighborhoods: 'Porur Main Road, Ramakrishnapuram, Mugalivakkam and nearby Vanagaram communities',
    propertyTypes: 'apartments, independent houses, offices, clinics, restaurants and small warehouses',
    concern: 'Monsoon moisture, open drains and construction activity can create new entry points for cockroaches and rodents.',
  },
  '/pest-control-velachery': {
    name: 'Velachery',
    intro: 'Velachery homes and businesses often share dense residential layouts with restaurants, shops and apartment blocks. Effective pest control here means checking kitchens, drainage lines, service ducts, balcony storage and the boundary between neighbouring properties.',
    neighborhoods: 'Velachery Main Road, Vijayanagar, Tansi Nagar and surrounding apartment communities',
    propertyTypes: 'flats, villas, rented homes, restaurants, retail stores and offices',
    concern: 'Humidity, food-service activity and shared drainage can allow cockroach and rodent activity to move between connected spaces.',
  },
  '/pest-control-anna-nagar': {
    name: 'Anna Nagar',
    intro: 'Anna Nagar includes independent homes, high-rise apartments, offices, cafés and established retail streets. Customers may need a discreet treatment plan for kitchens, false ceilings, storerooms or commercial food areas, with clear guidance for occupants and staff.',
    neighborhoods: 'Anna Nagar West, Anna Nagar East, Shanthi Colony and nearby collectorate roads',
    propertyTypes: 'apartments, independent houses, cafés, restaurants, clinics, schools and offices',
    concern: 'Older woodwork, concealed plumbing and busy food areas can provide shelter and regular food sources for pests.',
  },
  '/pest-control-tambaram': {
    name: 'Tambaram',
    intro: 'Tambaram has a mix of family homes, student accommodation, shops and expanding residential developments. An inspection should consider the building age, open spaces, waste storage and how frequently doors and service entrances are used.',
    neighborhoods: 'Tambaram East, Tambaram West, Selaiyur, Chitlapakkam and nearby residential streets',
    propertyTypes: 'homes, paying guest accommodation, shops, offices, schools and restaurants',
    concern: 'Open plots, garden areas and frequent movement around shops can increase the chance of rodent entry and insect activity.',
  },
  '/pest-control-avadi': {
    name: 'Avadi',
    intro: 'Avadi properties range from independent houses and apartment communities to workshops, stores and institutional buildings. Treatment works best when indoor activity is considered alongside outdoor storage, boundary walls, drains and utility connections.',
    neighborhoods: 'Avadi Main Road, Kamaraj Nagar, Thirumullaivoyal and nearby residential areas',
    propertyTypes: 'family homes, apartments, workshops, shops, schools and small commercial buildings',
    concern: 'Outdoor storage, vegetation and gaps around utility lines can make it easier for rodents and termites to reach structures.',
  },
  '/pest-control-ambattur': {
    name: 'Ambattur',
    intro: 'Ambattur includes residential neighbourhoods as well as industrial and commercial properties. Pest control planning may need separate attention for offices, production-adjacent spaces, staff areas, kitchens, storage rooms and loading points.',
    neighborhoods: 'Ambattur Estate, Mogappair West, Padi and surrounding residential communities',
    propertyTypes: 'homes, factories, warehouses, offices, canteens and retail properties',
    concern: 'Large storage areas, packaging materials and multiple access doors can create hiding places and entry routes for rodents and insects.',
  },
  '/pest-control-omr': {
    name: 'OMR',
    intro: 'The OMR corridor has fast-growing apartment communities, offices, restaurants and construction sites. Pest control often needs coordination with residents, facility teams or business staff, especially when several units share service ducts, waste areas or common kitchens.',
    neighborhoods: 'Sholinganallur, Thoraipakkam, Perungudi, Navalur and nearby OMR communities',
    propertyTypes: 'high-rise apartments, IT offices, cafés, restaurants, villas and construction sites',
    concern: 'New construction, shared waste rooms and high-density occupancy can create temporary entry points and repeated food or moisture sources.',
  },
  '/pest-control-pallavaram': {
    name: 'Pallavaram',
    intro: 'Pallavaram has older homes, apartments, shops, restaurants and transport-linked commercial activity. A local treatment plan should check kitchen plumbing, wall cracks, roof or loft storage, waste collection points and the spaces behind appliances.',
    neighborhoods: 'Pallavaram Main Road, Chromepet border areas, Zamin Pallavaram and nearby streets',
    propertyTypes: 'homes, flats, restaurants, shops, offices and rented properties',
    concern: 'Older structures and shared walls can conceal termite pathways, cockroach harbourage and rodent access points.',
  },
  '/pest-control-chromepet': {
    name: 'Chromepet',
    intro: 'Chromepet has a busy mix of homes, student accommodation, shops, clinics and restaurants. A careful inspection helps separate occasional sightings from an established infestation and identifies whether activity is coming through plumbing, storage, doors or shared walls.',
    neighborhoods: 'Chromepet Main Road, Hasthinapuram, Radha Nagar and nearby residential streets',
    propertyTypes: 'apartments, independent homes, hostels, restaurants, clinics, shops and offices',
    concern: 'High-use kitchens, rented properties and shared building services can make recurring cockroach and rodent activity harder to control without prevention steps.',
  },
};

const LocalAreaContent = () => {
  const { pathname } = useLocation();
  const area = areas[pathname];

  if (!area) return null;

  return (
    <section className="px-4 pb-8 max-w-4xl mx-auto">
      <div className="bg-white border border-gray-200 rounded-lg p-6 sm:p-8">
        <h2 className="text-2xl font-bold text-primary mb-4">Local Pest Control Guidance for {area.name}</h2>
        <p className="text-gray-700 leading-relaxed mb-4">{area.intro}</p>
        <p className="text-gray-700 leading-relaxed mb-6">We serve {area.neighborhoods}, with treatment planning for {area.propertyTypes}. {area.concern} Before a visit, note where you saw activity, whether it appears during the day or at night, and whether there are children, pets, food preparation areas or sensitive rooms that need special instructions.</p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
          <div className="bg-green-50 rounded p-4">
            <h3 className="font-semibold text-primary mb-2">Before treatment</h3>
            <p className="text-sm text-gray-700">Clear access to sinks, cabinets, lofts and utility areas. Store food and remove open water sources where practical.</p>
          </div>
          <div className="bg-blue-50 rounded p-4">
            <h3 className="font-semibold text-primary mb-2">During inspection</h3>
            <p className="text-sm text-gray-700">Show the technician droppings, damage, live sightings, odour or noises. These details help locate the source instead of treating only the visible symptom.</p>
          </div>
          <div className="bg-yellow-50 rounded p-4">
            <h3 className="font-semibold text-primary mb-2">After treatment</h3>
            <p className="text-sm text-gray-700">Follow re-entry guidance, keep treated areas clean as instructed and seal gaps or moisture sources that could invite pests back.</p>
          </div>
        </div>

        <h2 className="text-2xl font-bold text-primary mb-4">Questions Customers in {area.name} Ask</h2>
        <div className="space-y-4 mb-6">
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Can you treat apartments and rented properties?</h3>
            <p className="text-gray-700 leading-relaxed">Yes. We can discuss access, occupants and shared areas before recommending treatment. Tenants should also inform the owner or building manager when the issue may involve common plumbing, walls or waste areas.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">Do I need to know which pest it is?</h3>
            <p className="text-gray-700 leading-relaxed">No. A photo, sample description or explanation of the damage is useful, but the inspection is intended to identify the pest and its activity. Avoid touching unknown insects or contaminated droppings.</p>
          </div>
          <div>
            <h3 className="font-semibold text-gray-900 mb-1">What is the next step?</h3>
            <p className="text-gray-700 leading-relaxed">Use the booking form to share your name, phone number, address, pest-control service and preferred time. We can then discuss the property and appointment requirements.</p>
          </div>
        </div>
        <Link to="/book" className="inline-block bg-primary text-white px-6 py-3 rounded font-semibold hover:bg-green-700">Book pest control in {area.name}</Link>
      </div>
    </section>
  );
};

export default LocalAreaContent;