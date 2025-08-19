import React from 'react';

// Data structured to perfectly match the card's content needs
const offers = [
  { brand: 'amazon.in', tag: { text: 'Increased Cashback', color: 'bg-pink-500' }, terms: 'Rewards rates & terms', rewardType: 'Flat', rewardValue: '5% Rewards', href: '#' },
  { brand: 'themancompany.com', tag: { text: 'Limited Period Offer', color: 'bg-pink-600' }, terms: 'Cashback rates & terms', rewardType: 'Upto', rewardValue: '39% Cashback', href: '#' },
  { brand: 'flipkart.com', endsIn: '23: 59: 59', terms: 'Cashback rates & terms', rewardType: 'Flat', rewardValue: '5% Rewards', href: '#' },
  { brand: 'myntra.com', endsIn: '23: 59: 59', terms: 'Cashback rates & terms', rewardType: 'Flat', rewardValue: '5% Rewards', href: '#' },
  { brand: 'sbicard.com', tag: { text: 'Live now', color: 'bg-red-500' }, terms: 'Reward rates & terms', rewardType: 'Upto', rewardValue: '₹1,800 Rewards', href: '#' },
  { brand: 'magzter.com', tag: { text: 'Live now', color: 'bg-red-500' }, terms: 'Cashback rates & terms', rewardType: 'Flat', rewardValue: '₹3,999 Cashback', href: '#' },
];
// Duplicate the array to create the second row shown in the image
const allOffers = [...offers, ...offers.slice().reverse()]; 

// The Card Component - rebuilt for accuracy
const OfferCard = ({ offer }) => (
  // The card is a link, positioned relative to place pseudo-elements for the cutouts
  <a
    href={offer.href}
    className="relative block bg-white border border-gray-200 rounded-xl transition-shadow duration-300 hover:shadow-lg group
              before:content-[''] before:absolute before:top-1/2 before:left-0 before:-translate-x-1/2 before:-translate-y-1/2 before:w-5 before:h-5 before:bg-gray-50 before:rounded-full
              after:content-[''] after:absolute after:top-1/2 after:right-0 after:translate-x-1/2 after:-translate-y-1/2 after:w-5 after:h-5 after:bg-gray-50 after:rounded-full"
  >
    <div className="flex flex-col h-full">
      {/* Top part of the card */}
      <div className="flex-grow flex flex-col items-center justify-center text-center p-4 pt-6">
        {offer.tag && (
          <span className={`absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[11px] text-white font-bold px-3 py-1 rounded-full ${offer.tag.color}`}>
            {offer.tag.text}
          </span>
        )}
        <img src={`https://logo.clearbit.com/${offer.brand}`} alt={`${offer.brand} logo`} className="h-8 mb-3 object-contain" />
        
        {offer.endsIn ? (
          <p className="text-xs text-red-600 font-semibold">
            <span className="text-red-400">🕒</span> Ends in {offer.endsIn}
          </p>
        ) : (
          <p className="text-xs text-blue-500 font-medium group-hover:underline">{offer.terms}</p>
        )}
      </div>
      
      {/* Dotted Separator Line */}
      <div className="border-t-2 border-dashed border-gray-200"></div>

      {/* Bottom part of the card */}
      <div className="p-4">
        <div className="bg-blue-600 text-white rounded-lg p-3 text-center">
          <span className="text-xs">{offer.rewardType}</span>
          <p className="font-bold text-sm">{offer.rewardValue}</p>
        </div>
      </div>
    </div>
  </a>
);

export default function ExclusiveOffers() {
  return (
    <section className="px-4 py-8 bg-gray-50">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-bold text-gray-800">Exclusive Offers for You</h2>
        <a href="#" className="text-blue-500 font-semibold text-sm flex items-center">
          View All <span className="ml-1">→</span>
        </a>
      </div>
      
      {/* Responsive Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-x-6 gap-y-8">
        {allOffers.map((offer, index) => (
          <OfferCard key={index} offer={offer} />
        ))}
      </div>
    </section>
  );
};