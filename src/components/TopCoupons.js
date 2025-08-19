import React from 'react';
export default function TopCoupons() {
    const coupons = [
        { brand: 'themancompany.com', offer: 'Flat 15% Off Code', cashback: 'Flat 15% Cashback' },
        { brand: 'deconstruct.in', offer: 'Upto 50% Off', cashback: 'Flat 40% Cashback' },
        { brand: 'itcstore.in', offer: 'Flat 25% Off Code', cashback: 'Flat 10% Cashback' },
        { brand: 'amazon.in', offer: 'Upto 80% Off Code', cashback: 'Upto 5% Rewards' },
        { brand: 'tatacliq.com', offer: 'Upto 85% Off', cashback: 'Upto 3% Cashback' },
    ];
    return (
        <section className="px-4 py-8">
            <h2 className="text-2xl font-bold text-center mb-6">Today's Top Coupon Codes</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
                {coupons.map((coupon, i) => (
                    <div key={i} className="border-2 border-blue-600 rounded-lg p-4 text-center bg-blue-50">
                        <img src={`https://logo.clearbit.com/${coupon.brand}`} alt={coupon.brand} className="h-8 mx-auto mb-4" />
                        <h3 className="font-bold text-sm">{coupon.offer}</h3>
                        <p className="text-xs text-gray-600 mt-2">{coupon.cashback}</p>
                    </div>
                ))}
            </div>
        </section>
    )
}