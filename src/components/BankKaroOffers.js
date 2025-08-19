import React from 'react';

const offers = [
  {
    logoSrc: '/images/bank/sbi.png',
    cardSrc: '/images/bank/sbi-card.png',
    title: '5% Cashback',
    subtitle: 'on online spends',
    rewards: '₹1,500 - ₹1,800 Rewards',
    endsIn: '23: 59: 59',
    href: '#'
  },
  {
    logoSrc: '/images/bank/hdfc.png',
    cardSrc: '/images/bank/hdfc-card.png',
    title: '10% Cashback on Swiggy',
    subtitle: '5% on online spends',
    rewards: '₹1,500 - ₹1,800 Rewards',
    endsIn: '23: 59: 59',
    href: '#'
  },
  {
    logoSrc: '/images/bank/axis.png',
    cardSrc: '/images/bank/axis-card.png',
    title: 'Up to 40% off on',
    merchants: ['myntra', 'zomato', 'bigbasket'], // for the small merchant logos
    rewards: '₹1,000 - ₹1,500 Rewards',
    endsIn: '23: 59: 59',
    href: '#'
  },
  // Duplicate for scrolling example
  {
    logoSrc: '/images/bank/logo-axis.png',
    cardSrc: '/images/bank/card-axis.png',
    title: 'Up to 40% off on',
    merchants: ['myntra', 'zomato', 'bigbasket'],
    rewards: '₹1,000 - ₹1,500 Rewards',
    endsIn: '23: 59: 59',
    href: '#'
  },
];

const BankOfferCard = ({ offer }) => (
    <a href={offer.href} className="relative flex-shrink-0 w-[85vw] max-w-[340px] sm:w-80 rounded-2xl p-4 overflow-hidden
                                  bg-gradient-to-br from-blue-100 via-blue-200 to-purple-200 text-gray-800
                                  transition-transform duration-300 hover:-translate-y-1">
        
        <span className="absolute top-4 right-4 text-[11px] text-white bg-red-600 font-bold px-3 py-1 rounded-full">Special offer</span>
        
        <div className="relative z-10 flex flex-col h-full">
            <div className="flex justify-between items-start">
                <div className="bg-white p-2 rounded-md self-start">
                    <img src={offer.logoSrc} alt="Bank Logo" className="h-4" />
                </div>
                <img src={offer.cardSrc} alt="Credit Card" className="h-12 -mr-8 mt-8 object-contain"/>
            </div>

            <div className="mt-2">
                <h3 className="text-xl font-bold">{offer.title}</h3>
                {offer.subtitle && <p className="text-sm text-gray-600">{offer.subtitle}</p>}
                {offer.merchants && (
                    <div className="flex items-center space-x-1 mt-1">
                        <img src="https://logo.clearbit.com/myntra.com" alt="Myntra" className="h-5 w-5 rounded" />
                        <img src="https://logo.clearbit.com/zomato.com" alt="Zomato" className="h-5 w-5 rounded" />
                        <img src="https://logo.clearbit.com/bigbasket.com" alt="Bigbasket" className="h-5 w-5 rounded" />
                    </div>
                )}
            </div>

            {/* Spacer to push content to the bottom */}
            <div className="flex-grow"></div>

            <div className="mt-4 space-y-3">
                <div className="flex items-center space-x-2">
                    <div className="bg-blue-600 text-white font-bold text-sm px-2 py-1 rounded-md">CK</div>
                    <span className="font-semibold text-sm text-gray-700">{offer.rewards}</span>
                    <span className="text-green-600 font-bold">↑</span>
                </div>
                <div className="flex justify-between items-center">
                    <p className="text-xs text-red-600 font-semibold">
                        <span className="text-red-400">🕒</span> Ends in {offer.endsIn}
                    </p>
                    <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                        Apply Now
                    </button>
                </div>
            </div>
        </div>
    </a>
);


export default function BankKaroOffers() {
  return (
    <section className="py-8 w-full overflow-hidden bg-white">
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-xl font-bold text-gray-800">Best of BankKaro</h2>
        <a href="#" className="text-blue-500 font-semibold text-sm flex items-center">
          View All <span className="ml-1">→</span>
        </a>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-4 pl-4 pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {offers.map((offer, index) => (
          <BankOfferCard key={index} offer={offer} />
        ))}
      </div>
    </section>
  );
};