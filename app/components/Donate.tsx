'use client';
import { useState } from 'react'

function Donate() {
  
  const [customAmount, setCustomAmount] = useState("");

  const suggestedAmounts = [25, 50, 100];

  const handleDonate = (amount: number | string) => {
    alert(`Donating $${amount}`); // placeholder, replace with Stripe/PayPal integration
  };

  return (
    <section id="donate" className="py-16 bg-blue-50 h-[80vh] section-anchor flex items-center">
      <div className="max-w-3xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Support Our Mission</h2>
        <p className="mb-8 text-gray-700">
          Your contribution helps us provide education, humanitarian aid, and community programs
          to those who need it most. Every donation counts!
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-4">
          {suggestedAmounts.map((amount) => (
            <button
              key={amount}
              onClick={() => handleDonate(amount)}
              className="px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
            >
              ${amount}
            </button>
          ))}
        </div>

        <div className="mb-6">
          <input
            type="number"
            placeholder="Custom amount"
            value={customAmount}
            onChange={(e) => setCustomAmount(e.target.value)}
            className="px-4 py-3 rounded-xl border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400 text-center w-40"
          />
          <button
            onClick={() => handleDonate(customAmount)}
            className="ml-4 px-6 py-3 rounded-xl bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Donate
          </button>
        </div>

        <p className="text-gray-500 text-sm">
          Secure and tax-deductible donations.
        </p>
      </div>
    </section>
  );
}

export default Donate
