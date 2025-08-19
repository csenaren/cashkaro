import React from 'react';

const deals = [
  { 
    title: 'Whisky smoke & mafia combo 50ml each', 
    price: '₹427', 
    oldPrice: '₹1498',
    imageSrc: '/images/whis.png',
    href: '#'
  },
  { 
    title: 'Charcoal facewash & peel off mask combo', 
    price: '₹170', 
    oldPrice: '₹608',
    imageSrc: '/images/char.png',
    href: '#'
  },
  { 
    title: 'Aircase vegan leather travel kit', 
    price: '₹189', 
    oldPrice: '₹999',
    tag: 'Limited period offer',
    imageSrc: '/images/bag.png',
    href: '#'
  },
  { 
    title: 'Charcoal facewash & peel off mask combo', 
    price: '₹170', 
    oldPrice: '₹608',
    imageSrc: '/images/2.png', // Reusing image for example
    href: '#'
  },
];

const BuykaroDealCard = ({ deal }) => (
    <a href={deal.href} className="relative flex-shrink-0 w-[85vw] max-w-[340px] sm:w-80 rounded-2xl p-4 overflow-hidden text-white
                                  bg-gradient-to-br from-blue-500 to-indigo-600
                                  transition-transform duration-300 hover:-translate-y-1">
        
        {deal.tag && <span className="absolute top-4 right-4 text-[11px] bg-red-600 font-bold px-3 py-1 rounded-full">{deal.tag}</span>}

        <div className="relative z-10 flex flex-col h-full">
            <div className="bg-white p-2 rounded-md self-start">
                <img src="/images/buykaro.png" alt="Buykaro Logo" className="h-4" />
            </div>
            
            <div className="flex-grow grid grid-cols-2 items-center gap-4">
                {/* Left Column: Text */}
                <div className="flex flex-col">
                    <h3 className="text-lg font-bold leading-tight">{deal.title}</h3>
                </div>

                {/* Right Column: Image */}
                <div className="flex items-center justify-center h-full">
                    <img src={deal.imageSrc} alt={deal.title} className="max-h-28 w-auto object-contain"/>
                </div>
            </div>

            <div className="flex justify-between items-center mt-2">
                <p className="text-xl font-extrabold">
                    {deal.price} 
                    <span className="text-base line-through text-blue-200 font-medium ml-2">{deal.oldPrice}</span>
                </p>
                <button className="bg-white text-blue-700 font-bold py-2 px-6 rounded-lg text-sm hover:bg-gray-200 transition-colors">
                    Grab Deal
                </button>
            </div>
        </div>
    </a>
);

export default function BuykaroDeals() {
  return (
    <section className="py-8 w-full overflow-hidden bg-gray-50">
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-xl font-bold text-gray-800">Buykaro at Lowest Prices</h2>
        <a href="#" className="text-blue-500 font-semibold text-sm flex items-center">
          View All <span className="ml-1">→</span>
        </a>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-4 pl-4 pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {deals.map((deal, index) => (
          <BuykaroDealCard key={index} deal={deal} />
        ))}
      </div>
    </section>
  );
};