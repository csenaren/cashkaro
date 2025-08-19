import React from 'react';
export default function Testimonials() {
    const reviews = [
        "Cashkaro.com is a trustworthy and highly professional cashback website. I utilize it for re...",
        "This CashKaro cashback app is truly awesome! I'm extremely satisfied with the app and have r...",
        "CashKaro is an amazing app, incredibly innovative. It allows me to discover great deals all in one place...",
        "My experience with CashKaro has been fantastic. I've earned significantly through cou...",
    ];
    return (
        <section className="px-4 py-12 bg-gray-50">
            <h2 className="text-2xl font-bold text-center mb-6">Meet Our Superstars</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {reviews.map((review, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center">
                        <img src="https://placehold.co/80x80/cccccc/ffffff?text=User" alt="Anushka Ranjan" className="w-20 h-20 rounded-full mb-4" />
                        <p className="text-sm text-gray-600 flex-grow">"{review}"</p>
                        <a href="#" className="text-blue-500 text-sm mt-2">See more</a>
                        <p className="font-bold mt-4">Anushka Ranjan</p>
                    </div>
                ))}
            </div>
        </section>
    )
}