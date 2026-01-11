import React from 'react'

function Impact() { const impactHighlights = [
    { number: "1,200+", label: "Students Supported" },
    { number: "450+", label: "Animals Rescued" },
    { number: "25", label: "Communities Reached Globally" },
    { number: "$500k+", label: "Funds Raised for Programs" },
  ];

  return (
    <section id="impact" className="py-16 bg-gray-50 section-anchor">
      <div className="max-w-5xl mx-auto text-center px-4">
        <h2 className="text-3xl font-bold mb-4">Our Impact</h2>
        <p className="mb-12 text-gray-700">
          Worthy Causes is making a tangible difference. Through education, humanitarian aid,
          and targeted outreach, we are empowering communities and creating real change
          that can be felt across the world.
        </p>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {impactHighlights.map((impact) => (
            <div
              key={impact.label}
              className="p-6 bg-white rounded-2xl shadow hover:shadow-lg transition flex flex-col items-center"
            >
              <span className="text-4xl font-extrabold text-blue-600 mb-2">{impact.number}</span>
              <span className="text-lg font-medium text-gray-700">{impact.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Impact
