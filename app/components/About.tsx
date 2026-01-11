'use client';
import React from "react";
import { scrollToSection } from "../lib/scrollTo";

function About() {
  const programs = [
    {
      name: "Education Support",
      description:
        "Providing scholarships, tutoring, and resources to ensure students have the tools they need to succeed academically.",
      image: "/graduating.jpg", // placeholder, replace with real
    },
    {
      name: "Animal Welfare",
      description:
        "Protecting and caring for animals through rescue initiatives, veterinary support, and awareness programs.",
      image: "/dog.jpg",
    },
    {
      name: "Summer Camps",
      description:
        "Offering enriching summer experiences that nurture creativity, confidence, and community for children.",
      image: "/camp.jpg",
    },
    {
      name: "Foreign Aid",
      description:
        "Delivering essential support to communities in need around the world, from food and water to education and healthcare.",
      image: "/foreignaid.jpg",
    },
    {
      name: "Sex Trafficking Eradication",
      description:
        "Partnering with local organizations to prevent trafficking, support survivors, and raise public awareness.",
      image: "/holdinghands.jpg",
    },
    {
      name: "Aviation Scholarships",
      description:
        "Supporting aspiring pilots with scholarships, mentorship, and access to flight training programs.",
      image: "/pilot.jpg",
    },
  ];

  return (
    <section
      id="about"
      className="p-20 gap-10 space-y-8 bg-blue-50 grid grid-cols-5 section-anchor"
    >
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 col-span-3">
        {programs.map((program) => (
          <div
            key={program.name}
            className="relative p-2 border rounded-lg overflow-hidden shadow hover:shadow-lg transition flex flex-col justify-end items-center text-center text-white h-64"
            style={{
              backgroundImage: `url(${program.image})`,
              backgroundSize: "cover",
            }}
          >
            <div className="bg-linear-to-t from-black to-black/50 p-1">
              <h3 className="text-lg font-semibold mb-2">{program.name}</h3>
              <p className="text-sm">{program.description}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="col-span-2 flex flex-col items-center justify-around bg-white/40 rounded-2xl border border-gray-200 h-[95%]">
        <h3 className="text-4xl tracking-widest font-bold w-3/4">
          Our Programs
        </h3>
        <h2 className="w-3/4 leading-10">
          At Worthy Causes, we believe every community deserves access to
          opportunity, safety, and support. Our programs focus on education,
          humanitarian aid, and targeted initiatives that uplift lives and open
          doors to brighter futures.
        </h2>
        <div className="flex gap-4 w-3/4">
          <button onClick={()=> scrollToSection('contact')} className="border rounded-2xl p-3 cursor-pointer">
            Get in touch
          </button>
          <button onClick={()=> scrollToSection('donate')} className="border rounded-2xl p-3 cursor-pointer bg-black text-white hover:bg-gray-800 transition">
            Make a donation
          </button>
        </div>
      </div>
    </section>
  );
}

export default About;
