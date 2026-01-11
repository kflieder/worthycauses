'use client';
import { useState, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import { scrollToSection } from "../lib/scrollTo";

function Header() {
    const [activeSection, setActiveSection] = useState<string | null>(null);
    const navButtons = [
      { label: "About", id: "about" },
      { label: "Our Impact", id: "impact" },
      { label: "Get Involved", id: "contact" },
      { label: "Donate", id: "donate" }
    ];

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              if (entry.target.id === 'hero') {
                setActiveSection(null);
              } else {
                setActiveSection(entry.target.id);
              }
            }
          })
        },
        { threshold: 0.6 }
      )

      const sectionIds = ['hero', ...navButtons.map((btn) => btn.id)];
      
      sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
          observer.observe(section);
        }
      })


      return () => {
        sectionIds.forEach((id) => {
          const section = document.getElementById(id);
          if (section) {
            observer.unobserve(section);
          }
        });
        observer.disconnect();
      }
    }, []); 

    const donateBtnStyle = 'border-2 rounded-xl p-2 cursor-pointer hover:bg-white/20 transition';
    const donateBtnAvtiveStyle = 'border-2 rounded-xl p-2 cursor-pointer bg-white/30 border-white';

    const btnStyle = 'border-b-2 border-white/50 hover:border-white cursor-pointer transition';
    const btnActiveStyle = 'border-b-2';


  return (
    <div className='py-1 bg-black text-white grid md:grid-cols-1 lg:grid-cols-3 items-center fixed w-full top-0 z-10'>
        <div className="sm:hidden flex absolute top-2 right-2">
        <CiMenuBurger className="text-4xl ml-auto sm:hidden cursor-pointer"/>
        </div>
      <div onClick={() => scrollToSection('hero')} className='col-span-1 flex justify-center items-center bg-black shrink-0'>
        <img src="/logo2.png" alt="Logo" className='h-24  shrink-0' />
      </div>
      <div className='w-full col-span-1 sm:col-span-2 justify-around items-center text-2xl font-light hidden sm:flex'>
          {navButtons.map((button) => (
            <div key={button.id} onClick={() => scrollToSection(button.id)} className={`${button.id === activeSection ? `${button.id === 'donate' ? donateBtnAvtiveStyle : btnActiveStyle}`: `${button.id === 'donate' ? donateBtnStyle : btnStyle}`}`}>{button.label}</div>
          ))}
        
      </div>
      
    </div>
  )
}

export default Header
