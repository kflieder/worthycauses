'use client';
import { scrollToSection } from "../lib/scrollTo";

function HeroSection() {
    
  return (
    <div id='hero' className='grid grid-cols-1 place-items-end lg:place-items-center lg:grid-cols-5 h-[75vh] section-anchor text-white lg:text-black'>
      <div className='inset-0 opacity-45 absolute block lg:hidden z-1 max-h-[95vh]' style={{backgroundImage: "url('/heart.jpg')", backgroundSize: 'cover', backgroundPosition: '80% center'}}/>
      <div className='relative z-49 col-span-2 xl:ml-15 flex flex-col justify-between max-h-full md:h-1/2 lg:h-full items-center py-5 xl:py-15 bg-black/40 lg:bg-transparent text-center lg:text-left mx-6 xl:mx-0'>
        <h1 className="text-xl xl:text-2xl font-bold px-2 leading-10">Helping People and Communities Where It Matters Most</h1>
        <h3 className='text-lg lg:bg-blue-50 bg-transparent rounded-lg p-6'>
          Worthy Causes is a nonprofit organization dedicated to creating meaningful change through education, humanitarian aid, and community-focused programs that uplift lives and open doors to opportunity.
        </h3>
        <div className='flex gap-4'>
        <button onClick={() => scrollToSection('donate')} className='border rounded-2xl p-3 cursor-pointer bg-black text-white hover:bg-gray-700 transition'>Donate Now</button>
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
