import React from 'react';
export default function PopularSales() {
const sales = [
{ name: 'Amazon sale', brand: 'amazon.in', image: 'https://placehold.co/300x200/ff9900/ffffff?text=Amazon+Sale' },
{ name: 'TATACLIQ sale', brand: 'tatacliq.com', image: 'https://placehold.co/300x200/ef4444/ffffff?text=TataCLiQ+Sale' },
{ name: 'BUYKARO sale', brand: 'buykaro.com', image: 'https://placehold.co/300x200/a855f7/ffffff?text=Buykaro+Sale' },
];
return (
<section className="px-4 py-8 bg-gray-50">
<h2 className="text-2xl font-bold text-center mb-6">Popular Sales Online</h2>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
{sales.map((sale, i) => (
<div key={i} className="relative rounded-lg overflow-hidden h-40">
<img src={sale.image} alt={sale.name} className="w-full h-full object-cover" />
<div className="absolute inset-0 bg-black bg-opacity-40 flex items-center justify-center">
<button className="bg-white text-black font-bold px-6 py-2 rounded-lg">{sale.name}</button>
</div>
</div>
))}
</div>
</section>
)
}