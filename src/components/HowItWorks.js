import React from 'react';

const steps = [
  {
    title: 'Visit CashKaro app first',
    description: 'Before you shop online',
    imageSrc: '/images/how/how-step-1.png'
  },
  {
    title: 'Select the brand you want to shop on',
    description: 'and you will be re-directed to their site/app',
    imageSrc: '/images/how/how-step-2.png'
  },
  {
    title: 'Shop & pay as usual on the site',
    description: 'you are shopping normally, no difference',
    imageSrc: '/images/how/how-step-3.png'
  },
  {
    title: 'Get Cashback on your order',
    description: 'in your CashKaro account',
    imageSrc: '/images/how/how-step-4.png'
  },
  {
    title: 'Transfer your Cashback',
    description: 'to your Bank, UPI or take as Amazon / Flipkart Gift Cards',
    imageSrc: '/images/how/how-step-5.png'
  },
];

const StepCard = ({ step }) => (
    <div className="flex-shrink-0 w-[85vw] max-w-[300px] sm:w-64 bg-orange-50 border-1 border-orange-400 rounded-2xl p-4 flex flex-col">
        <div className="grid grid-cols-2 items-center gap-2">
            {/* Text Content */}
            <div className="flex flex-col">
                <h3 className="text-lg font-bold text-orange-600 leading-tight">{step.title}</h3>
                <p className="text-xs text-gray-700 mt-2">{step.description}</p>
            </div>
            {/* Image Content */}
            <div className="flex items-center justify-center">
                 <img src={step.imageSrc} alt={step.title} className="max-h-24 w-auto object-contain" />
            </div>
        </div>
    </div>
);


export default function HowItWorks() {
  return (
    <section className="py-12 w-full overflow-hidden bg-white">
      <h2 className="text-2xl font-bold text-center mb-8 text-gray-800">How CashKaro Works</h2>
      
      <div className="flex space-x-4 overflow-x-auto pb-4 pl-4 pr-4 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
        {steps.map((step, index) => (
          <StepCard key={index} step={step} />
        ))}
      </div>
    </section>
  );
};