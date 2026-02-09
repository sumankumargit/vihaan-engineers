import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Briefcase, Wrench, Phone, Info, Home } from 'lucide-react';

const Nav = () => {
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'About', path: '/about', icon: <Info size={20} /> },
    { name: 'Projects', path: '/projects', icon: <Briefcase size={20} /> },
    { name: 'Services', path: '/services', icon: <Wrench size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={20} /> },
  ];

  return (
    <>
      {/* --- DESKTOP NAVIGATION (Top) --- */}
      <nav
        className={`fixed w-full z-50 transition-all duration-500 hidden md:block ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-md py-4 border-b border-slate-100'
            : 'bg-gradient-to-b from-black/60 to-transparent py-6' 
            // ^ Added Gradient here: ensures visibility on light headers
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

          {/* Logo & Brand Name */}
          <Link to="/" className="flex items-center gap-3 group">
            <img
              src="/logo.png"
              alt="Vihaan Engineers Logo"
              className={`w-10 h-10 object-contain transition-all duration-300 group-hover:scale-105 ${
                !scrolled ? 'brightness-0 invert drop-shadow-lg' : ''
              }`} 
            />
            <div className="flex flex-col leading-none">
              <span className={`font-display font-bold text-2xl tracking-tighter uppercase transition-colors duration-300 ${
                scrolled ? 'text-slate-900' : 'text-white drop-shadow-md'
              }`}>
                VIHAAN
              </span>
              <span className={`text-[10px] font-bold tracking-[0.3em] uppercase transition-colors duration-300 ${
                scrolled 
                  ? 'text-slate-400 group-hover:text-blue-600' 
                  : 'text-blue-200 group-hover:text-white drop-shadow-md'
              }`}>
                Engineers
              </span>
            </div>
          </Link>

          {/* Desktop Links */}
          <div className="flex space-x-10 text-sm font-bold tracking-widest uppercase">
            {navLinks.filter(l => l.name !== 'Home').map((link) => {
              const isActive = location.pathname === link.path;
              
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`transition-all duration-300 relative group py-2 ${
                    scrolled
                      ? (isActive ? 'text-blue-600' : 'text-slate-600 hover:text-blue-600') 
                      : (isActive 
                          ? 'text-blue-300 drop-shadow-md' 
                          : 'text-white hover:text-blue-300 drop-shadow-md' 
                        )
                  }`}
                >
                  {/* Link Text */}
                  <span>{link.name}</span>

                  {/* Underline Animation */}
                  <span className={`absolute bottom-0 left-0 h-[2px] transition-all duration-300 ${
                    isActive ? 'w-full' : 'w-0 group-hover:w-full'
                  } ${
                    scrolled ? 'bg-blue-600' : 'bg-blue-400 shadow-[0_0_8px_rgba(59,130,246,0.8)]'
                  }`}></span>
                </Link>
              );
            })}
          </div>
        </div>
      </nav>

      {/* --- MOBILE TOP BAR (Logo Only) --- */}
      {/* Added bg-gradient-to-b from-black/50 to-transparent to ensure logo is visible even on white photos */}
      <div className={`md:hidden fixed top-0 w-full z-40 px-6 py-4 transition-all duration-500 ${
        scrolled 
          ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100' 
          : 'bg-gradient-to-b from-black/70 via-black/30 to-transparent'
      }`}>
        <Link to="/" className="flex items-center gap-3">
          <img 
            src="/logo.png" 
            alt="Logo" 
            className={`w-9 h-9 object-contain transition-all duration-300 ${
                !scrolled ? 'brightness-0 invert drop-shadow-lg' : ''
            }`} 
          />
          <div className="flex flex-col leading-none">
            <span className={`font-display font-bold text-xl tracking-tighter uppercase transition-colors ${
               scrolled ? 'text-slate-900' : 'text-white drop-shadow-md'
            }`}>
              VIHAAN
            </span>
            <span className={`text-[9px] font-bold tracking-[0.3em] uppercase transition-colors ${
               scrolled ? 'text-slate-500' : 'text-blue-200 drop-shadow-md'
            }`}>
              Engineers
            </span>
          </div>
        </Link>
      </div>

      {/* --- MOBILE NAVIGATION (Bottom - iOS Style) --- */}
      <nav className="fixed bottom-0 w-full z-50 md:hidden">
        <div className="bg-white/95 backdrop-blur-xl border-t border-slate-200 shadow-[0_-10px_40px_-15px_rgba(0,0,0,0.1)] pb-safe">
          <div className="flex justify-around items-center h-[72px] px-2 text-xs font-medium text-slate-500 max-w-md mx-auto">

            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;

              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`flex flex-col items-center justify-center w-full h-full space-y-1 ${
                    isActive ? 'text-blue-600' : 'text-slate-400 hover:text-slate-600'
                  }`}
                >
                  <div className={`p-1.5 rounded-xl transition-all duration-300 ${
                    isActive ? 'bg-blue-50' : 'bg-transparent'
                  }`}>
                    {link.icon}
                  </div>
                  <span className={`text-[10px] font-bold tracking-wide transition-opacity duration-300 ${
                    isActive ? 'opacity-100' : 'opacity-80'
                  }`}>
                    {link.name}
                  </span>
                </Link>
              );
            })}

          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;