import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: "Basic",
    price: "499",
    description: "Perfect for beginners",
    features: [
      "Full course access",
      "Basic certification",
      "Community access",
      "3 months support",
      "Job board access"
    ]
  },
  {
    name: "Professional",
    price: "799",
    description: "Most popular choice",
    features: [
      "Everything in Basic",
      "1-on-1 mentoring sessions",
      "Advanced projects",
      "Lifetime support",
      "Priority job referrals",
      "LinkedIn profile review"
    ],
    highlighted: true
  },
  {
    name: "Enterprise",
    price: "1299",
    description: "For teams & businesses",
    features: [
      "Everything in Professional",
      "Custom learning path",
      "Team collaboration tools",
      "Dedicated account manager",
      "Custom certification",
      "Corporate training support"
    ]
  }
];

export default function Pricing() {
  return (
    <section className="py-20 bg-white" id="pricing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Choose Your Plan
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Select the perfect plan for your learning journey. All plans include lifetime access to course materials.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`rounded-2xl p-8 ${
                plan.highlighted
                  ? 'bg-blue-600 text-white transform scale-105 shadow-xl'
                  : 'bg-white text-gray-800 border border-gray-200'
              }`}
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="text-center mb-8">
                <h3 className={`text-xl font-bold mb-2 ${
                  plan.highlighted ? 'text-white' : 'text-gray-800'
                }`}>
                  {plan.name}
                </h3>
                <p className={`text-sm mb-6 ${
                  plan.highlighted ? 'text-blue-100' : 'text-gray-500'
                }`}>
                  {plan.description}
                </p>
                <div className="flex items-center justify-center">
                  <span className="text-3xl font-semibold">$</span>
                  <span className="text-5xl font-bold">{plan.price}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className={`w-5 h-5 mr-3 ${
                      plan.highlighted ? 'text-blue-200' : 'text-blue-600'
                    }`} />
                    <span className="text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={`w-full py-3 px-6 rounded-full text-center transition duration-300 ${
                  plan.highlighted
                    ? 'bg-white text-blue-600 hover:bg-blue-50'
                    : 'bg-blue-600 text-white hover:bg-blue-700'
                }`}
              >
                Get Started
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}