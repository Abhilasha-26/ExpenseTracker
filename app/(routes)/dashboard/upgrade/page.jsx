import React from 'react'
const plans = [
  {
    name: "Basic",
    price: "Rs.0",
    description: "Essential features to get started",
    features: [
      "Access to basic content",
      "Community support",
      "Limited storage",
    ],
    featured: false,
  },
  {
    name: "Gold",
    price: "Rs.999",
    description: "Most popular plan for professionals",
    features: [
      "Everything in Basic",
      "Priority support",
      "Unlimited storage",
      "Advanced analytics",
    ],
    featured: true,
  },
  {
    name: "Platinum",
    price: "Rs.2999",
    description: "All features for enterprise users",
    features: [
      "Everything in Gold",
      "Dedicated account manager",
      "Custom integrations",
      "Early access to new features",
    ],
    featured: false,
  },
];

function Upgrade() {
  return (
    <div>
    <div className="min-h-screen bg-gray-50 py-16 px-6 flex flex-col items-center">
      <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
        Upgrade Your Plan
      </h1>
      <p className="text-lg text-gray-600 max-w-2xl text-center mb-12">
        Unlock premium features and take your experience to the next level with one
        of our subscription plans.
      </p>

      <div className="grid gap-8 max-w-5xl w-full md:grid-cols-3">
        {plans.map(({ name, price, description, features, featured }) => (
          <div
            key={name}
            className={`
              flex flex-col rounded-xl p-8 shadow-lg border
              ${featured ? "border-yellow-400 bg-yellow-50 shadow-yellow-300" : "border-gray-200 bg-white"}
              hover:shadow-xl transition-shadow duration-300
            `}
          >
            <h2 className={`text-2xl font-bold mb-2 ${featured ? "text-yellow-600" : "text-gray-900"}`}>
              {name}
            </h2>
            <p className="text-gray-700 mb-6">{description}</p>
            <p className={`text-4xl font-extrabold mb-8 ${featured ? "text-yellow-500" : "text-gray-900"}`}>
              {price}
              <span className="text-base font-normal text-gray-500">/month</span>
            </p>

            <ul className="mb-8 space-y-3 flex-grow">
              {features.map((feature) => (
                <li key={feature} className="flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                  </svg>
                  {feature}
                </li>
              ))}
            </ul>

            <button
              className={`
                w-full py-3 rounded-md font-semibold
                ${featured
                  ? "bg-yellow-500 text-white hover:bg-yellow-600"
                  : "bg-gray-200 text-gray-900 hover:bg-gray-300"}
                transition
              `}
            >
              {featured ? "Get Gold Plan" : `Choose ${name}`}
            </button>
          </div>
        ))}
      </div>
    </div>        
      
    </div>
  )
}

export default Upgrade

