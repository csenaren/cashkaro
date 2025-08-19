import React from 'react';
const ProductCard = ({ product }) => (
    <div className="border rounded-lg overflow-hidden flex flex-col">
        <div className="bg-gray-100 flex items-center justify-center p-4 h-48">
            <img src={product.image} alt={product.name} className="max-h-full max-w-full object-contain"/>
        </div>
        <div className="p-4 flex flex-col flex-grow bg-white">
          <h3 className="font-semibold text-sm h-10">{product.name}</h3>
          <p className="text-lg font-bold mt-2">{product.price} {product.oldPrice && <span className="text-sm line-through text-gray-500">{product.oldPrice}</span>}</p>
          <p className="text-sm text-green-600 mt-1">After Cashback of {product.cashback}</p>
          <div className="mt-auto pt-2">
            <p className="text-md font-bold text-blue-600">Final price</p>
            <p className="text-xl font-bold text-blue-600">₹{product.finalPrice}</p>
          </div>
        </div>
    </div>
);
export default function AmazonTopSelling() {
    const products = [
        { name: 'The derma co Ultra Matte Sunscreen gel with SPF 60', price: '₹359', oldPrice: '₹399', cashback: '₹51', finalPrice: '325', image: 'https://placehold.co/250x250/fef3c7/000?text=Sunscreen' },
        { name: 'WOW skin science shampoo and body wash 2 in 1', price: '₹359', oldPrice: '₹399', cashback: '₹51', finalPrice: '325', image: 'https://placehold.co/250x250/fef08a/000?text=WOW' },
        { name: 'OnePlus Nord CE 3 Lite 5G', price: '₹19,314', oldPrice: '₹19,999', cashback: '₹68', finalPrice: '19,246', image: 'https://placehold.co/250x250/a7f3d0/000?text=Nord+CE3' },
        { name: 'Samsung Galaxy Z Fold 4 5G', price: '₹111,999', oldPrice: '₹177,999', cashback: '₹30', finalPrice: '111,969', image: 'https://placehold.co/250x250/e9d5ff/000?text=Z+Fold4' },
        { name: 'OnePlus 11R 5G', price: '₹44,999', oldPrice: null, cashback: 'Product at its best price', finalPrice: '44,667', image: 'https://placehold.co/250x250/fecaca/000?text=OnePlus+11R' },
        { name: 'WOW skin science shampoo and body wash 2 in 1', price: '₹359', oldPrice: '₹399', cashback: '₹51', finalPrice: '325', image: 'https://placehold.co/250x250/fef08a/000?text=WOW' },
    ];
    return (
    <section className="px-4 py-8 bg-gray-50">
      <div className="flex justify-between items-center mb-4"><h2 className="text-xl font-bold">Amazon - Top Selling Offers</h2><a href="#" className="text-blue-500 font-semibold text-sm">View All →</a></div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
        {products.map((p, i) => <ProductCard key={i} product={p} />)}
      </div>
    </section>
)};