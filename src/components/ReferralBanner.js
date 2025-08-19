import React from 'react';

export default function ReferralBanner() {
  return (
    // The main section with a subtle background color and padding
    <section className="px-4 py-8 bg-gray-50">
      {/* 
        The banner itself. 
        - It's a flex container that reverses on mobile (image on top).
        - Uses a specific blue background color.
      */}
      <div className="max-w-6xl mx-auto bg-[#3B82F6] rounded-2xl flex flex-col md:flex-row items-center overflow-hidden">
        
        {/* Left Side: Image Container */}
        <div className="w-full md:w-1/2 p-6 flex justify-center items-center">
          <img 
            src="/images/bhar.png" 
            alt="Refer friends and earn cashback" 
            className="w-full max-w-sm" 
          />
        </div>

        {/* Right Side: Text and Button Container */}
        <div className="w-full md:w-1/2 p-6 md:p-12 text-center md:text-left text-white">
          <h2 className="text-3xl md:text-4xl font-extrabold">
            Zindagi Bhar Cashback Milega
          </h2>
          <p className="mt-4 text-lg text-blue-100">
            Invite friends to CashKaro &<br/>
            <span className="font-bold text-yellow-300">Get a 10% cut EVERYTIME</span><br/>
            they earn Cashback
          </p>
          <button className="mt-6 bg-white text-blue-600 font-bold px-8 py-3 rounded-lg hover:bg-gray-200 transition-colors shadow-lg">
            Invite your friends now
          </button>
        </div>

      </div>
    </section>
  );
};