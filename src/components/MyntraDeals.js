import React from 'react';

const deals = [
  { 
    title: 'Get everything',
    subtitle: 'Under ₹299',
    cashback: 'Upto 6% Cashback',
    tag: 'Limited period offer',
    imageSrc: '/images/m-1.png',
    href: '#'
  },
  { 
    title: 'Shop for Products',
    subtitle: 'worth ₹1200 or more',
    cashback: 'Flat ₹350 Cashback',
    tag: null,
    imageSrc: '/images/m-2.png',
    href: '#'
  },
  { 
    title: 'Get Flat 70% off',
    subtitle: '',
    cashback: 'Flat ₹350 Cashback',
    tag: null,
    imageSrc: '/images/m-3.png',
    href: '#'
  },
  { 
    title: 'Get everything',
    subtitle: 'Under ₹299',
    cashback: 'Upto 6% Cashback',
    tag: null,
    imageSrc: '/images/m-4.png', // Reusing image
    href: '#'
  },
];

const MyntraDealCard = ({ deal }) => (
    <a href={deal.href} className="relative flex-shrink-0 w-[85vw] max-w-[340px] sm:w-80 rounded-2xl p-4 overflow-hidden
                                  bg-[#FAE9E1] text-gray-800
                                  transition-transform duration-300 hover:-translate-y-1">
        
        {deal.tag && <span className="absolute top-4 right-4 text-[11px] text-white bg-red-600 font-bold px-3 py-1 rounded-full">{deal.tag}</span>}
        
        <div className="relative z-10 flex flex-col h-full">
            <div className="bg-white p-2 rounded-md self-start flex items-center space-x-2">
                <img src="/images/myntra-logo.png" alt="Myntra Logo" className="h-4" />
                <span className="font-bold text-sm">Myntra</span>
            </div>
            
            <div className="flex-grow grid grid-cols-2 items-center gap-2">
                {/* Left Column: Text */}
                <div className="flex flex-col">
                    <p className="text-sm text-gray-600">{deal.title}</p>
                    <h3 className="text-xl font-extrabold leading-tight">{deal.subtitle}</h3>
                </div>

                {/* Right Column: Image */}
                <div className="flex items-center justify-center h-full">
                    <img src={deal.imageSrc} alt={deal.title} className="max-h-28 w-auto object-contain"/>
                </div>
            </div>

            <div className="flex justify-between items-center mt-2">
                <div className="flex items-center space-x-2">
                    <div className="bg-blue-600 text-white font-bold text-sm px-2 py-1 rounded-md">CK</div>
                    <span className="font-semibold text-sm text-gray-700">{deal.cashback}</span>
                </div>
                <button className="bg-white text-gray-800 font-bold py-2 px-6 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                    Grab Deal
                </button>
            </div>
        </div>
    </a>
);


export default function MyntraDeals() {
  return (
    <section className="py-8 w-full overflow-hidden bg-white">
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-xl font-bold text-gray-800">Myntra- Best Deals</h2>
        <a href="#" className="text-blue-500 font-semibold text-sm flex items-center">
          View All <span className="ml-1">→</span>
        </a>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-4 pl-4 pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {deals.map((deal, index) => (
          <MyntraDealCard key={index} deal={deal} />
        ))}
      </div>
    </section>
  );
};