'use client';
import { scrollToSection } from "../lib/scrollTo";

function HeroSection() {
    
  return (
    <div id='hero' className='relative grid grid-cols-1 place-items-center lg:grid-cols-5 section-anchor text-white lg:text-black my-10 mb-0 sm:mb-10'>
      <div className='inset-0 opacity-45 absolute block lg:hidden z-1' style={{backgroundImage: "url('/heart.jpg')", backgroundSize: 'cover', backgroundPosition: '80% center'}}/>
      <div className='relative z-49 col-span-2 xl:ml-10 flex flex-col gap-6 justify-between h-auto xl:h-full items-center py-8 xl:py-15 bg-black/40 lg:bg-transparent text-center lg:text-left mx-4 lg:ml-10 xl:mx-0 my-20 sm:my-30 lg:my-0'>
        <h1 className="text-xl xl:text-2xl font-bold px-4 leading-10">Helping individuals and communities</h1>
        <div className="w-2/3 border-b border-white/80 block sm:hidden" />
        <h3 className='text-base sm:text-lg lg:bg-blue-50 bg-transparent rounded-lg p-6'>
          At Worthy Causes, we believe ambitious people deserve opportunities, safety, and support. Our programs focus on decreasing the financial burden of education and student development, humanitarian aid to those who shelter animals at their own expense, support to victims of human trafficking, providing aid to communities in need abroad. 
        </h3>
        <div className='flex gap-4'>
        {/* <button onClick={() => scrollToSection('donate')} className='border rounded-2xl p-3 cursor-pointer bg-black text-white hover:bg-gray-700 transition'>Donate Now</button> */}
        <button onClick={() => scrollToSection('contact')} className='border rounded-2xl p-3 cursor-pointer bg-black text-white hover:bg-gray-700 transition'>Contact Us</button>
        <button onClick={() => scrollToSection('about')} className='border rounded-2xl p-3 cursor-pointer'>Learn More</button>
      </div>
      </div>
      <div className='h-full relative col-span-3 lg:block hidden'>
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
