import React from 'react';
export default function ReferralBanner() {
  return (
    <section className="px-4 py-8">
      <div className="bg-blue-600 rounded-lg p-8 grid md:grid-cols-2 items-center gap-8 max-w-6xl mx-auto">
        <div className="text-white text-center md:text-left">
          <h2 className="text-4xl font-extrabold">Zindagi Bhar Cashback Milega</h2>
          <p className="text-xl mt-2">Invite friends to CashKaro & <br/><span className="font-bold">Get a 10% cut EVERYTIME</span> they earn Cashback</p>
          <button className="bg-white text-blue-600 font-bold px-6 py-3 rounded-lg mt-6 hover:bg-gray-100">
            Invite your friends now
          </button>
        </div>
        <div className="flex justify-center">
          <img src="https://placehold.co/400x250/ffffff/3b82f6?text=📢" alt="Referral promotion" className="max-w-xs w-full" />
        </div>
      </div>
    </section>
  );
};