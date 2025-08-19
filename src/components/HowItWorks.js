import React from 'react';
export default function HowItWorks() {
    const steps = [
      { title: "Visit CashKaro app first", description: "Before you shop online" },
      { title: "Select the brand you want to shop on", description: "and you will be re-directed to their site/app" },
      { title: "Shop & pay as usual on the site", description: "you are shopping normally, no difference" },
      { title: "Get Cashback on your order", description: "in your CashKaro account" },
      { title: "Transfer your Cashback", description: "to your Bank, UPI or take as Amazon/Flipkart Gift Cards" },
    ];
    return (
        <section className="px-4 py-12 bg-gray-50">
          <h2 className="text-3xl font-bold text-center mb-10">How CashKaro Works</h2>
          <div className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto space-y-8 md:space-y-0 md:space-x-4">
            {steps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="text-center flex flex-col items-center w-48">
                  <div className="w-20 h-20 mx-auto rounded-full border-2 border-dashed border-blue-500 flex items-center justify-center mb-4 bg-white">
                    <span className="text-2xl font-bold text-blue-500">🛍️</span>
                  </div>
                  <h3 className="font-bold text-md">{step.title}</h3>
                  <p className="text-xs text-gray-600 mt-1">{step.description}</p>
                </div>
                {index < steps.length - 1 && <div className="hidden md:block border-t-2 border-dashed border-gray-300 flex-grow"></div>}
              </React.Fragment>
            ))}
          </div>
        </section>
    );
}