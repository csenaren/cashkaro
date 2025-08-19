import React from 'react';
const deals_buykaro = [
    { name: 'Whisky smoke & mafia combo 50ml each', price: '₹427', oldPrice: '₹1498', image: 'https://placehold.co/250x250/fafafa/000?text=Perfume' },
    { name: 'Charcoal facewash & peel off mask combo', price: '₹170', oldPrice: '₹608', image: 'https://placehold.co/250x250/fafafa/000?text=Facewash' },
    { name: 'Aircase vegan leather travel kit', price: '₹189', oldPrice: '₹999', image: 'https://placehold.co/250x250/fafafa/000?text=Travel+Kit' },
    { name: 'Charcoal facewash & peel off mask combo', price: '₹170', oldPrice: '₹608', image: 'https://placehold.co/250x250/fafafa/000?text=Facewash' },
];
export default function BuykaroDeals() {
    return (
    <section className="px-4 py-8 bg-gray-50">
        <h2 className="text-xl font-bold mb-4">Buykaro at Lowest Prices</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {deals_buykaro.map((deal, i) => (
                <div key={i} className="bg-white p-3 rounded-lg shadow-sm flex flex-col">
                    <img src={deal.image} alt={deal.name} className="w-full h-32 object-contain rounded-md bg-white"/>
                    <h3 className="font-semibold text-sm h-12 mt-2 flex-grow">{deal.name}</h3>
                    <p className="text-lg font-bold mt-2">{deal.price} <span className="text-sm line-through text-gray-400">{deal.oldPrice}</span></p>
                    <button className="bg-gray-200 text-gray-800 font-bold w-full py-2 px-4 rounded-lg mt-3 text-sm hover:bg-gray-300">Grab Deal</button>
                </div>
            ))}
        </div>
    </section>
)};