import React from 'react';
const deals_myntra = [
    { title: 'Get everything Under ₹299', cashback: 'Upto 6% Cashback', image: 'https://placehold.co/400x400/fecaca/000?text=Fashion' },
    { title: 'Shop for Products worth ₹1200 or more', cashback: 'Flat ₹350 Cashback', image: 'https://placehold.co/400x400/fed7aa/000?text=Beauty' },
    { title: 'Get Flat 70% off', cashback: 'Flat ₹350 Cashback', image: 'https://placehold.co/400x400/d9f99d/000?text=Sale' },
    { title: 'Get everything Under ₹299', cashback: 'Upto 6% Cashback', image: 'https://placehold.co/400x400/bfdbfe/000?text=Lifestyle' },
];
export default function MyntraDeals() { return (
    <section className="px-4 py-8">
        <div className="flex justify-between items-center mb-4"><h2 className="text-xl font-bold">Myntra- Best Deals</h2><a href="#" className="text-blue-500 font-semibold text-sm">View All →</a></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {deals_myntra.map((deal, i) => (
                <div key={i} className="bg-orange-100 p-4 rounded-lg flex flex-col">
                    <img src={deal.image} alt={deal.title} className="w-full h-40 object-cover rounded-md"/>
                    <h3 className="font-bold my-2 flex-grow">{deal.title}</h3>
                    <p className="text-sm font-bold bg-gray-200 p-2 rounded text-center">CK {deal.cashback}</p>
                    <button className="bg-white text-orange-600 font-bold w-full py-2 px-4 rounded-lg mt-3 text-sm border border-orange-200 hover:bg-orange-50">Grab Deal</button>
                </div>
            ))}
        </div>
    </section>
)};