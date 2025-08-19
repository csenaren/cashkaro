import React from 'react';

const categories = [
    { name: 'New on CashKaro', imageSrc: '/images/new-on.png', href: '/categories/new' },
    { name: 'Fashion', imageSrc: '/images/fashion.png', href: '/categories/fashion' },
    { name: 'Food & Grocery', imageSrc: '/images/grocery.png', href: '/categories/grocery' },
    { name: 'Mobile', imageSrc: '/images/mobile.png', href: '/categories/mobile' },
    { name: 'Banking', imageSrc: '/images/banking.png', href: '/categories/banking' },
    { name: 'Electronics', imageSrc: '/images/electronics.png', href: '/categories/electronics' },
    { name: 'Beauty & Grooming', imageSrc: '/images/beauty.png', href: '/categories/beauty' },
    { name: 'Pharmacy', imageSrc: '/images/pharmacy.png', href: '/categories/pharmacy' },
    { name: 'Hotel & Flights', imageSrc: '/images/flights.png', href: '/categories/flights' },
    { name: 'Health & Wellness', imageSrc: '/images/wellness.png', href: '/categories/wellness' },
    // Add more categories here to see the seamless scrolling
    { name: 'Gaming', imageSrc: 'https://placehold.co/100x100/fafafa/3b82f6?text=🎮', href: '/categories/gaming' },
    { name: 'Books', imageSrc: 'https://placehold.co/100x100/fafafa/7c3aed?text=📚', href: '/categories/books' },
];

export default function TopCategories() {
    return (
        // The parent section now has overflow-hidden to contain its child's scrolling area
        <section className="bg-white py-8 w-full overflow-hidden">
            <h2 className="text-xl font-bold mb-4 px-4">Top Categories</h2>
            
            {/* 
              This is the scrolling container.
              - overflow-x-auto enables horizontal scrolling/swiping.
              - The last 3 classes are the modern way to hide the scrollbar across all browsers.
            */}
            <div 
                className="flex items-start space-x-4 overflow-x-auto pb-4 pl-4 pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]"
            >
                {categories.map((cat) => (
                    <a href={cat.href} key={cat.name} className="flex flex-col items-center flex-shrink-0 w-24 text-center group">
                        
                        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center p-3 transition-shadow duration-200 group-hover:shadow-lg">
                            <img
                                src={cat.imageSrc}
                                alt={cat.name}
                                className="w-full h-full object-contain"
                            />
                        </div>
                        <p className="text-xs font-medium text-gray-700 mt-2">{cat.name}</p>
                    </a>
                ))}
            </div>
        </section>
    );
};