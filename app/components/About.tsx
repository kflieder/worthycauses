'use client';
import React from "react";
import { scrollToSection } from "../lib/scrollTo";

function About() {
  const programs = [
    {
      name: "Education Support",
      description:
        "We help college graduates pay student loans, and provide financial assistance to students in athletic programs.",
      image: "/graduating.jpg", // placeholder, replace with real
    },
    {
      name: "Animal Welfare",
      description:
        "We provide assistance to those saving animals from euthanasia by fostering animals in their homes.",
      image: "/dog.jpg",
    },
    {
      name: "Summer Camps",
      description:
        "We provide financial assistance to parents of minors in need of enriching summer experiences that nurture creativity, confidence, and further education.",
      image: "/camp.jpg",
    },
    {
      name: "Foreign Aid",
      description:
        "We provide support to small communities in need around the world. ",
      image: "/foreignaid.jpg",
    },
    {
      name: "Sex Trafficking Eradication",
      description:
        "We partner with organizations to prevent human trafficking, support survivors, and raise public awareness.",
      image: "/holdinghands.jpg",
    },
    {
      name: "Aviation Scholarships",
      description:
        "We support aspiring pilots with scholarships, mentorship, and access to flight training programs.",
      image: "/pilot.jpg",
    },
  ];

  return (
    <section
      id="about"
      className="sm:p-20 pb-10 pt-6 sm:pt-35 lg:pt-10 gap-10 lg:gap-10 bg-blue-50 grid grid-cols-1 xl:grid-cols-5 section-anchor text-center xl:text-left place-items-center"
    >
      <div className='my-10 xl:my-4 flex flex-col col-span-1 xl:col-span-5 gap-2 p-4 px-10 xl:px-0'>
      <h1 className='text-5xl font-bold tracking-widest'>How do we do it?</h1>
      <p className="text-center">See below for details</p>
      </div>
      <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:col-span-3">
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
      <div className="xl:col-span-2 flex flex-col items-center justify-around bg-white/40 rounded-2xl border border-gray-200 h-auto xl:h-[95%] gap-8 xl:gap-0 py-8 xl:py-4 w-full">
        <h3 className="md:text-4xl text-2xl tracking-widest font-bold border-b border-gray-400 pb-10 xl:block hidden">
          Our Programs
        </h3>
        
        <h2 className="w-3/4 leading-10">
          Worthy Causes is a non-profit that is making a tangible difference. Through education, humanitarian aid, and targeted outreach, we are empowering communities and creating real change that can be felt one person at a time.
        </h2>
        <div className="flex gap-4 w-full justify-center lg:w-3/4">
          <button onClick={()=> scrollToSection('contact')} className="border rounded-2xl p-3 cursor-pointer bg-black text-white hover:bg-gray-800 transition">
            Get in touch
          </button>
          {/* <button onClick={()=> scrollToSection('donate')} className="border rounded-2xl p-3 cursor-pointer bg-black text-white hover:bg-gray-800 transition">
            Make a donation
          </button> */}
        </div>
      </div>
      <div className='w-full xl:col-span-5 col-span-1'>
        <h3 className='font-semibold my-4'>Do you or your organization have a need?</h3>
        <p className='leading-8 text-gray-700'>If you have a need that falls into one of our giving categories above, simply use our contact form below to tell us who you are and how we can be of assistance.  We answer all inquiries.  Trust is our priority — we are a registered 501(c)(3) nonprofit committed to transparency and your privacy.</p>
      </div>
    </section>
  );
}

export default About;
