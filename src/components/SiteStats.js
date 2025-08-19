import React from 'react';
import { Star, VerifiedUser, EmojiEvents } from '@mui/icons-material';
export default function SiteStats() {
    const stats = [
        { icon: <Star />, title: "Highest Cashback Rated" },
        { icon: <VerifiedUser />, title: "Trusted by 2 Crore+ Indians" },
        { icon: <EmojiEvents />, title: "₹700 Crore Cashback Paid" }
    ];
    return (
        <section className="px-4 py-12 bg-gray-50">
            <h2 className="text-3xl font-bold text-center mb-2">India's Best Cashback & Coupons Site</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mt-8">
                {stats.map((stat, i) => (
                    <div key={i} className="bg-white p-6 rounded-lg shadow-md text-center flex flex-col items-center">
                        <div className="text-5xl text-yellow-500 mb-4">{stat.icon}</div>
                        <h3 className="font-bold text-lg">{stat.title}</h3>
                    </div>
                ))}
            </div>
        </section>
    );
}