import React from 'react';
export default function Achievements() {
    const items = [
        { title: '#1 Cashback Site', image: 'https://placehold.co/200x200/60a5fa/ffffff?text=1' },
        { title: 'Funded by Ratan Tata', image: 'https://placehold.co/200x200/9ca3af/ffffff?text=Ratan+Tata' },
        { title: 'Awarded The Best Affiliate Site', image: 'https://placehold.co/200x200/60a5fa/ffffff?text=IAMAI' },
    ];
    return (
        <section className="px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Don't Take Our Word</h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto">
                {items.map((item, i) => (
                    <div key={i} className="bg-gray-200 rounded-lg p-4 text-center">
                        <img src={item.image} alt={item.title} className="w-24 h-24 object-cover rounded-full mx-auto" />
                        <h3 className="font-bold mt-4">{item.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    )
}