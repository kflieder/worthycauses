'use client';
import { scrollToSection } from "../lib/scrollTo";

function HeroSection() {
    
  return (
    <div id='hero' className='grid grid-cols-5 h-[70vh] section-anchor'>
      <div className='col-span-2 ml-15 flex flex-col justify-around items-center py-10'>
        <h1 className="text-2xl font-bold  leading-10">Helping People and Communities Where It Matters Most</h1>
        <h3 className='text-lg bg-blue-50 rounded-lg p-6'>
          Worthy Causes is a nonprofit organization dedicated to creating meaningful change through education, humanitarian aid, and community-focused programs that uplift lives and open doors to opportunity.
        </h3>
        <div className='flex gap-4'>
        <button onClick={() => scrollToSection('donate')} className='border rounded-2xl p-3 cursor-pointer bg-black text-white hover:bg-gray-700 transition'>Donate Now</button>
        <button onClick={() => scrollToSection('about')} className='border rounded-2xl p-3 cursor-pointer'>Learn More</button>
      </div>
      </div>
      <div className='h-full relative col-span-3'>
        <img
          src="/heart.jpg"
          alt="people standing in a circle holding a heart"
          className="h-full object-cover"
        />
        <div className='absolute inset-0 bg-linear-to-r from-white to-transparent'></div>
      </div>
      
    </div>
  );
}

export default HeroSection;
