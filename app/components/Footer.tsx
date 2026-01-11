import React from 'react'

function Footer() {
  return (
     <footer className="bg-black text-white py-6">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-end items-center">
        {/* Copyright */}
        <p className="text-sm mb-2 md:mb-0">
          &copy; {new Date().getFullYear()} Worthy Causes. All rights reserved.
        </p>
      </div>
    </footer>
  )
}

export default Footer
