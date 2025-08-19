import React from 'react';

const deals = [
  { 
    logo: '/images/beato-logo.png', 
    title: 'Diabetic care 1 month plan month plan',
    subtitle: '+ FREE Glucometer & 10 strips',
    price: '₹99', 
    oldPrice: '₹999', 
    discount: '70% off', 
    image: '/images/beato.png' 
  },
  { 
    logo: '/images/beco-logo.png', 
    title: 'Any 5 home & hygiene products',
    subtitle: null,
    price: '@ ₹196', 
    oldPrice: null, 
    discount: '70% off', 
    image: '/images/beco.png' 
  },
  { 
    logo: '/images/xyxx-logo.png', 
    title: 'Any cosy hoodie for men',
    subtitle: null,
    price: '₹975', 
    oldPrice: '₹2,599', 
    discount: '70% off', 
    image: '/images/hoodie.png' 
  },
  { 
    logo: '/images/magzter-logo.png', 
    title: 'Annual gold membership',
    subtitle: null,
    price: '₹1,000', 
    oldPrice: '₹2,400', 
    discount: null, 
    image: '/images/magzter.png' 
  },
  // Add more deals to see seamless scrolling
  { 
    logo: 'https://placehold.co/100x30/ffffff/000000?text=Extra', 
    title: 'Another Great Deal Item',
    subtitle: null,
    price: '₹499', 
    oldPrice: '₹1,299', 
    discount: '62% off', 
    image: '/images/beato.png' 
  },
];

const DealCard = ({ deal }) => (
    // Card with a fixed width and flex-shrink-0 to prevent squishing
    <div className="flex-shrink-0 w-[280px] sm:w-[300px] bg-white rounded-2xl border border-gray-200 p-4 flex flex-col text-left">
        
        {/* Top section: Logo and Image */}
        <div className="relative h-28">
            <img src={deal.logo} alt="Brand Logo" className="h-5 w-auto absolute top-0 left-0" />
            
            <div className="absolute top-0 right-0 h-full w-40">
                <img
                    src={deal.image}
                    alt={deal.title}
                    className="h-full w-full object-contain"
                />
                 {deal.discount && (
                    <div 
                        className="absolute top-3/7 -translate-y-1/2 right-0 -mx-4 bg-red-600 text-white text-xs font-bold px-3 py-1.5"
                        style={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%, 10% 50%)' }}
                    >
                        {deal.discount}
                    </div>
                )}
            </div>
        </div>

        {/* Middle section: Title and subtitle */}
        <div className="flex-grow mt-2">
            <h3 className="font-bold text-gray-800 leading-tight text-base">{deal.title}</h3>
            {deal.subtitle && <p className="text-xs text-gray-500 mt-1">{deal.subtitle}</p>}
        </div>
        
        {/* Bottom section: Price and Button */}
        <div className="flex justify-between items-center mt-4 pt-2">
            <p className="text-xl font-extrabold text-gray-900">
                {deal.price} 
                {deal.oldPrice && <span className="text-sm line-through text-gray-400 font-medium ml-1.5">{deal.oldPrice}</span>}
            </p>
            <button className="bg-blue-600 text-white font-bold py-2 px-5 rounded-lg text-sm hover:bg-blue-700 transition-colors">
                Grab deal
            </button>
        </div>
    </div>
);

export default function FlashDeal() {
  return (
    <section className="py-12 bg-cover bg-center w-full overflow-hidden" style={{backgroundImage: "url('/images/flash-deal-bg.jpg')"}}>
      <div className="text-center mb-8">
        <h2 className="text-5xl font-extrabold text-gray-900 tracking-wide">FLASH DEAL</h2>
        <div className="inline-block bg-white bg-opacity-80 text-gray-700 font-semibold px-4 py-2 rounded-full mt-3 text-sm">
          🕒 Deals ends in 23: 59: 59
        </div>
      </div>
      
      <div 
        className="flex space-x-6 overflow-x-auto pb-4 pl-4 pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
      >
        {deals.map((deal, index) => (
          <DealCard key={index} deal={deal} />
        ))}
      </div>
      
      <div className="text-center mt-8">
        <button className="bg-white bg-opacity-30 border border-white text-white font-semibold px-8 py-3 rounded-lg hover:bg-opacity-50 transition-colors text-sm">
          View all
        </button>
      </div>
    </section>
  );
};