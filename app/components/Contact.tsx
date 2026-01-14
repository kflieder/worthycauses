'use client';
import {useState} from 'react'
import { scrollToSection } from '../lib/scrollTo';

function Contact() {
  


  const boardMembers = ["Vera Kiser", "Timothy Kiser",];

  return (
    <section id="contact" className="py-16 bg-gray-50 section-anchor">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-4">Get Involved & Trust Us</h2>
        <p className="mb-12 text-gray-700">
          Whether you want to reach out, volunteer, or support our mission, we’re here to connect.
          Your trust is our priority — we are a registered 501(c)(3) nonprofit committed to transparency.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <form action="https://usebasin.com/f/466a633a5086" method="POST" className="bg-white p-6 rounded-2xl shadow">
            <h3 className="text-xl font-semibold mb-4">Contact Us</h3>
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              required
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full mb-4 p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
              rows={4}
              required
            />
            <button
              type="submit"
              className="w-full py-3 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-700 transition"
            >
              Send Message
            </button>
          </form>

          {/* Trust & Transparency */}
          <div className="bg-white p-6 rounded-2xl shadow flex flex-col justify-around">
            <h3 className="text-xl font-semibold mb-4">Trust & Transparency</h3>
            <p className="mb-4 text-gray-700">
              Worthy Causes is a registered 501(c)(3) nonprofit organization. We are committed
              to full transparency in how donations are used and regularly publish reports
              and updates on our programs and impact.
            </p>
            <div className='border rounded-2xl border-gray-400 py-2'>
            <h4 className="font-semibold mb-2">Board Members</h4>
            <ul className="text-gray-700">
              {boardMembers.map((member) => (
                <li key={member}>{member}</li>
              ))}
            </ul>
            </div>
            <button
              type="button"
              onClick={() => scrollToSection('donate')}
              className="w-full mt-4 py-3 bg-green-600 text-white rounded-xl font-semibold hover:bg-green-700 transition cursor-pointer"
            >
              Donate Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact
