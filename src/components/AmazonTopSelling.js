import React from 'react';

const products = [
  { 
    brand: 'The derma co',
    name: 'Ultra Matte Sunscreen gel with SPF 60',
    price: '₹359',
    oldPrice: '₹399',
    discount: '(10% off)',
    cashback: 'After Cashback of ₹51',
    finalPrice: '325',
    imageSrc: '/images/amazon/1.png',
    bgColor: 'bg-gray-100', // Use a light grey for the photo background
    href: '#'
  },
  { 
    brand: 'WOW Skin Science',
    name: 'Wow skin science shampoo and body wash 2 in 1',
    price: '₹359',
    oldPrice: '₹399',
    discount: '(10% off)',
    cashback: 'After Cashback of ₹51',
    finalPrice: '325',
    imageSrc: '/images/amazon/2.png',
    bgColor: 'bg-gray-800', // Dark background for this card
    href: '#'
  },
  { 
    brand: 'One Plus',
    name: 'OnePlus Nord CE 3 Lite 5G',
    price: '₹19,314',
    oldPrice: '₹19,999',
    discount: '(3% off)',
    cashback: 'After Cashback of ₹68',
    finalPrice: '19,246',
    imageSrc: '/images/amazon/3.png',
    bgColor: 'bg-white',
    href: '#'
  },
  { 
    brand: 'Samsung',
    name: 'Samsung Galaxy Z Fold 4 5G',
    price: '₹111,999',
    oldPrice: '₹177,999',
    discount: '(10% off)',
    cashback: 'After Cashback of ₹30',
    finalPrice: '111,969',
    imageSrc: '/images/amazon/4.png',
    bgColor: 'bg-white',
    href: '#'
  },
  { 
    brand: 'One Plus',
    name: 'OnePlus 11R 5G',
    price: '₹44,999',
    oldPrice: null,
    discount: null,
    cashback: 'Product at its best price',
    finalPrice: '44,667',
    imageSrc: '/images/amazon/5.png',
    bgColor: 'bg-white',
    href: '#'
  },
  { 
    brand: 'WOW Skin Science',
    name: 'Wow skin science shampoo and body wash 2 in 1',
    price: '₹359',
    oldPrice: '₹399',
    discount: '(10% off)',
    cashback: 'After Cashback of ₹51',
    finalPrice: '325',
    imageSrc: '/images/amazon/2.png',
    bgColor: 'bg-gray-800', // Dark background for this card
    href: '#'
  },
];

const ProductCard = ({ product }) => (
    <a href={product.href} className="flex-shrink-0 w-[85vw] max-w-[220px] sm:w-56 bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col transition-shadow duration-300 hover:shadow-xl">
        {/* Image Container */}
        <div className={`h-48 flex items-center justify-center p-4 ${product.bgColor}`}>
            <img src={product.imageSrc} alt={product.name} className="max-h-full max-w-full object-contain" />
        </div>

        {/* Content Container */}
        <div className="p-3 flex flex-col flex-grow">
            <p className="text-xs text-gray-500">{product.brand}</p>
            <h3 className="text-sm font-semibold text-gray-800 h-14 line-clamp-2">{product.name}</h3>

            <div className="text-sm my-2">
                <span className="font-bold">{product.price}</span>
                {product.oldPrice && <span className="line-through text-gray-400 ml-1.5">{product.oldPrice}</span>}
                {product.discount && <span className="text-blue-600 font-bold ml-1.5">{product.discount}</span>}
            </div>

            {/* This pushes the final price to the bottom */}
            <div className="flex-grow"></div> 

            <p className="text-xs font-medium text-gray-700 bg-gray-100 border border-gray-200 rounded-md px-2 py-1 text-center my-2">
                {product.cashback}
            </p>

            <div>
                <p className="text-xs text-gray-500">Final price</p>
                <p className="text-xl font-bold text-gray-900">₹{product.finalPrice}</p>
            </div>
        </div>
    </a>
);


export default function AmazonTopSelling() {
  return (
    <section className="py-8 w-full overflow-hidden bg-gray-100">
      <div className="flex justify-between items-center mb-6 px-4">
        <h2 className="text-xl font-bold text-gray-800">Amazon - Top Selling Offers</h2>
        <a href="#" className="text-blue-500 font-semibold text-sm flex items-center">
          View All <span className="ml-1">→</span>
        </a>
      </div>
      
      <div className="flex space-x-4 overflow-x-auto pb-4 pl-4 pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </section>
  );
};