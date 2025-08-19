import React from 'react';
export default function FlashDeal() {
    const deals = [
      { title: 'Diabetic care 1 month plan', price: '₹99', oldPrice: '₹999', discount: '70% off', image: 'https://placehold.co/200x200/fafafa/333?text=Beato' },
      { title: 'Any 5 home & hygiene products', price: '@ ₹196', discount: '70% off', image: 'https://placehold.co/200x200/fafafa/333?text=BECO' },
      { title: 'Any cosy hoodie for men', price: '₹975', oldPrice: '₹2,599', discount: '70% off', image: 'https://placehold.co/200x200/fafafa/333?text=Hoodie' },
      { title: 'Annual gold membership', price: '₹1,000', oldPrice: '₹2,400', image: 'https://placehold.co/200x200/fafafa/333?text=Magzter' },
    ];
    return (
      <section className="px-4 py-12 bg-cover bg-center" style={{backgroundImage: "url('https://placehold.co/1920x600/e0f2fe/67e8f9?text= ')"}}>
        <div className="text-center mb-8">
          <h2 className="text-4xl font-extrabold text-gray-800">FLASH DEAL</h2>
          <p className="text-gray-600 mt-2">🕒 Deals ends in 23: 59: 59</p>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {deals.map((deal, index) => (
            <div key={index} className="bg-white p-3 rounded-lg shadow-md flex flex-col">
              <div className="relative">
                <img src={deal.image} alt={deal.title} className="h-32 w-full mx-auto rounded-md object-contain mb-3" />
                {deal.discount && <span className="absolute top-0 right-0 bg-red-500 text-white font-bold text-xs px-2 py-1 rounded-bl-md">{deal.discount}</span>}
              </div>
              <h3 className="font-semibold text-gray-800 text-sm flex-grow">{deal.title}</h3>
              <p className="text-lg font-bold text-gray-900 mt-2">{deal.price} {deal.oldPrice && <span className="text-sm line-through text-gray-400">{deal.oldPrice}</span>}</p>
              <button className="bg-gray-200 text-gray-800 font-bold w-full py-2 px-4 rounded-lg mt-3 text-sm hover:bg-gray-300">Grab deal</button>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <button className="bg-white border border-gray-400 px-6 py-2 rounded-lg font-semibold hover:bg-gray-100 text-sm">View all</button>
        </div>
      </section>
    );
};