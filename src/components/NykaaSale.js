import React from 'react';

const deals = [
  { 
    title: 'Upto 60% off', 
    subtitle: 'on Luxury beauty & perfumes', 
    cashback: 'Upto 7% Cashback',
    bonus: '+ ₹50 Bonus Cashback',
    imageSrc: '/images/1.png',
    href: '#'
  },
  { 
    title: 'Upto 35% off', 
    subtitle: 'on Loreal Paris products', 
    cashback: 'Upto 7% Cashback',
    bonus: null,
    imageSrc: '/images/2.png',
    href: '#'
  },
  { 
    title: 'Upto 35% off', 
    subtitle: 'on Loreal Paris products', 
    cashback: 'Upto 7% Cashback',
    bonus: null,
    imageSrc: '/images/3.png', // Using same image for example
    href: '#'
  },
  { 
    title: 'Buy 2 get 1 Free', 
    subtitle: 'on MAC + Flat 15% off', 
    cashback: 'Upto 7% Cashback',
    bonus: null,
    imageSrc: '/images/4.png',
    href: '#'
  },
];

const NykaaDealCard = ({ deal }) => (
    <a href={deal.href} className="relative object-center flex-shrink-0 w-[85vw] max-w-[340px] sm:w-80 rounded-2xl p-4 overflow-hidden text-white
                                  bg-gradient-to-br from-purple-500 via-purple-600 to-indigo-700
                                  transition-transform duration-300 hover:-translate-y-1">
        
        {/* Absolute positioned elements */}
        <span className="absolute top-4 right-4 text-[11px] bg-red-600 font-bold px-3 py-1 rounded-full">Limited period offer</span>
        <img src={deal.imageSrc} alt={deal.title} className="absolute bottom-0 right-0 h-1/2 w-auto object-contain pointer-events-none" />

        {/* Content Flow Container */}
        <div className="relative z-10 flex flex-col h-full">
            <div className="flex items-center space-x-2">
                <div className="bg-white p-2 rounded-md">
                    <img src="/images/nykaa.png" alt="Nykaa Logo" className="h-4" />
                </div>
                
            </div>

            <h3 className="text-2xl font-bold mt-4">{deal.title}</h3>
            <p className="text-sm text-purple-200">{deal.subtitle}</p>

            {/* This pushes the bottom content down */}
            <div className="flex-grow"></div> 

            <div className="mt-4">
                <div className="flex items-center space-x-2">
                    <div className="bg-blue-600 text-white font-bold text-sm px-2 py-1 rounded-md">CK</div>
                    <span className="font-semibold text-sm">{deal.cashback}</span>
                </div>
                {deal.bonus && <p className="text-xs text-purple-200 mt-1">{deal.bonus}</p>}
            </div>

            <button className="mt-3 bg-white text-purple-700 font-bold py-2 px-6 rounded-lg self-start hover:bg-gray-200 transition-colors">
                Grab Deal
            </button>
        </div>
    </a>
);

export default function NykaaSale() {
  return (
    <section className="py-8 w-full overflow-hidden bg-white">
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-xl font-bold text-gray-800">Nykaa- Pink Friday Sale</h2>
        <a href="#" className="text-blue-500 font-semibold text-sm flex items-center">
          View All <span className="ml-1">→</span>
        </a>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-4 pl-4 pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {deals.map((deal, index) => (
          <NykaaDealCard key={index} deal={deal} />
        ))}
      </div>
    </section>
  );
};