import React from 'react';
export default function BankKaroOffers() {
    const bankOffers = [
        { name: 'SBI Card', cashback: '5% Cashback on online spends', rewards: '₹1,500 - ₹1,800 Rewards', image: 'https://placehold.co/300x180/67e8f9/0f769a?text=SBI+Card'},
        { name: 'HDFC Bank Card', cashback: '10% Cashback on Swiggy, 5% on online spends', rewards: '₹1,500 - ₹1,800 Rewards', image: 'https://placehold.co/300x180/fca5a5/991b1b?text=HDFC+Card'},
        { name: 'Axis Bank Card', cashback: 'Up to 40% off on Myntra', rewards: '₹1,000 - ₹1,500 Rewards', image: 'https://placehold.co/300x180/c4b5fd/4c1d95?text=Axis+Card'},
        { name: 'Axis Bank Card 2', cashback: 'Up to 40% off on Myntra', rewards: '₹1,000 - ₹1,500 Rewards', image: 'https://placehold.co/300x180/f9a8d4/831843?text=Axis+Card'},
    ];
    return (
        <section className="px-4 py-8">
            <div className="flex justify-between items-center mb-4"><h2 className="text-xl font-bold">Best of BankKaro</h2><a href="#" className="text-blue-500 font-semibold text-sm">View All →</a></div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {bankOffers.map((offer, i) => (
                    <div key={i} className="rounded-lg overflow-hidden border">
                        <img src={offer.image} alt={offer.name} className="w-full h-40 object-cover" />
                        <div className="p-4 bg-white">
                            <h3 className="font-bold">{offer.cashback}</h3>
                            <p className="text-sm font-bold bg-gray-200 my-2 p-2 rounded text-center">CK {offer.rewards}</p>
                            <button className="bg-blue-600 text-white font-bold w-full py-2 px-4 rounded-lg mt-2 text-sm hover:bg-blue-700">Apply Now</button>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}