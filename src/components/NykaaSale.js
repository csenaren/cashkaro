import React from 'react';
export default function NykaaSale() {
    const sales = [
        { title: "Upto 60% off", subtitle: "on Luxury beauty & perfumes", cashback: "Upto 7% Cashback", bonus: "+ ₹50 Bonus Cashback"},
        { title: "Upto 35% off", subtitle: "on Loreal Paris products", cashback: "Upto 7% Cashback"},
        { title: "Upto 35% off", subtitle: "on Loreal Paris products", cashback: "Upto 7% Cashback"},
        { title: "Buy 2 get 1 Free", subtitle: "on MAC + Flat 15% off", cashback: "Upto 7% Cashback"}
    ];
    return (
        <section className="px-4 py-8">
            <div className="flex justify-between items-center mb-4">
                <h2 className="text-xl font-bold">Nykaa- Pink Friday Sale</h2>
                <a href="#" className="text-blue-500 font-semibold text-sm">View All →</a>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {sales.map((sale, i) => (
                    <div key={i} className="bg-pink-100 border border-pink-200 p-4 rounded-lg flex flex-col">
                        <p className="text-xs text-pink-700 font-bold">Limited period offer</p>
                        <h3 className="font-bold text-lg my-2">{sale.title}</h3>
                        <p className="text-sm text-gray-600 h-10">{sale.subtitle}</p>
                        <p className="text-sm font-bold bg-gray-200 my-2 p-2 rounded text-center">CK {sale.cashback}</p>
                        {sale.bonus && <p className="text-xs font-semibold text-center">{sale.bonus}</p>}
                        <button className="bg-white text-pink-600 font-bold w-full py-2 px-4 rounded-lg mt-auto text-sm border border-pink-200 hover:bg-pink-50">Grab Deal</button>
                    </div>
                ))}
            </div>
        </section>
    );
};