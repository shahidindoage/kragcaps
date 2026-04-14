import React, { useState } from 'react';
import { Phone, Mail, ChevronDown, Facebook, Linkedin, Youtube, Instagram, Menu, X } from 'lucide-react';

const Header = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [mobileAccordions, setMobileAccordions] = useState({});

  const navLinks = [
    { title: "About us", subLinks: ["Management", "Our Brands", "Infrastructure", "Mission & Vision"] },
    { title: "Kragbuzz Retail" },
    { title: "KragBuzz Sports", subLinks: ["About KragBuzz Sports", "Product Category", "Products", "Corporate Merchandise"] },
    { title: "KragCaps", subLinks: ["Caps & Hats", "Bag"] },
    { title: "KragFit" },
    { title: "SportzOclock" },
    { title: "Sports Management" },
    { title: "Other Ventures", subLinks: ["A R Stampings", "Art & Craft"] },
    { title: "Foundation For Children" },
  ];

  const toggleAccordion = (title) => {
    setMobileAccordions(prev => ({ ...prev, [title]: !prev[title] }));
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 font-sans ">
      {/* 1. Top Red Bar - Hidden on small mobile if needed, but keeping for continuity */}
      <div className="bg-[#e32a2a] text-white py-3 px-4 md:px-6">
        <div className="container mx-auto flex justify-between items-center max-w-[1400px]">
          <div className="flex items-center gap-14 md:gap-10">
            <a href="tel:+919811960396" className="flex items-center gap-1 md:gap-2 text-[10px] md:text-sm font-bold">
              <Phone size={14} className="md:w-4 md:h-4" />
              <span>+91 9811960396</span>
            </a>
            <a href="mailto:info@kragbuzz.com" className=" flex items-center gap-4 text-sm font-bold md:gap-2">
              <Mail size={16} />
              <span>info@kragbuzz.com</span>
            </a>
            <button className="hidden bg-white text-[#e32a2a] px-3 md:px-6 py-2 text-[10px] md:text-sm font-bold shadow-sm hover:bg-gray-100 md:block">
              Shop Now
            </button>
          </div>

          <div className=" flex items-center gap-3 md:gap-6 ">
            <a href="#" className="hidden md:block hover:opacity-80 "><Facebook size={16} fill="currentColor" stroke="none" /></a>
             <a href="#" className="hidden md:block hover:opacity-80" aria-label="Twitter">
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
            
            <a href="#" className="hidden md:block hover:opacity-80"><Linkedin size={16} fill="currentColor" stroke="none" /></a>
            <a href="#" className="hidden md:block hover:opacity-80"> <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                </svg></a>
            <a href="#" className="hidden md:block hover:opacity-80"> <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.636.558-2.913.06-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.558-2.913-.306-.789-.718-1.459-1.384-2.126C21.319 1.347 20.651.935 19.86.63c-.765-.297-1.636-.499-2.913-.558C15.667.012 15.26 0 12 0zm0 2.16c3.203 0 3.585.016 4.85.071 1.17.055 1.805.249 2.227.415.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.36 1.057.413 2.227.057 1.266.07 1.646.07 4.85s-.015 3.585-.074 4.85c-.061 1.17-.256 1.805-.421 2.227-.224.562-.479.96-.899 1.382-.419.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z"/>
                </svg></a>
          </div>
        </div>
      </div>

      {/* 2. Main Navigation Bar */}
     {/* 2. Main Navigation Bar */}
<nav className="bg-black text-white py-3 md:py-5 px-4 md:px-6 relative">
  <div className="mt-[20px] md:mt-0 container mx-auto flex justify-between items-center max-w-[1400px]">
    {/* Logo */}
    <div className="flex items-center">
      <img 
        src="http://kragbuzzsports.com/wp-content/uploads/2022/02/logo.png" 
        alt="KragBuzz" 
        className="h-7 md:h-8" 
      />
    </div>

    {/* Desktop Menu */}
    <ul className="hidden lg:flex items-center gap-6 text-[13px] font-bold">
      {navLinks.map((link) => (
        <li 
          key={link.title}
          className="relative group cursor-pointer"
          onMouseEnter={() => link.subLinks && setOpenDropdown(link.title)}
          onMouseLeave={() => setOpenDropdown(null)}
        >
          {/* Added py-2 here to make the hover area taller */}
          <div className={`hover:text-[#e32a2a] py-2 transition-colors flex items-center gap-1 ${openDropdown === link.title ? 'text-[#e32a2a]' : ''}`}>
            {link.title} {link.subLinks && <ChevronDown size={14} />}
          </div>
          
          {link.subLinks && openDropdown === link.title && (
            /* FIX: Changed mt-2 to pt-2 (padding) and removed margin. 
               This ensures the mouse is always over the container. */
            <div className="absolute top-full left-0 w-60 pt-2 z-50">
              <div className="bg-black/95 backdrop-blur-md border-t-2 border-[#e32a2a] py-3 shadow-2xl">
                {link.subLinks.map((sub) => (
                  <a key={sub} href="#" className="block px-6 py-2.5 hover:text-[#e32a2a] text-sm font-semibold transition-colors border-b border-white/5 last:border-0">
                    {sub}
                  </a>
                ))}
              </div>
            </div>
          )}
        </li>
      ))}
    </ul>

    {/* Mobile Menu Toggle */}
    <button 
      className="lg:hidden text-white"
      onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    >
      {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
    </button>
  </div>
</nav>

      {/* 3. Mobile Sidebar Overlay */}
      <div className={`lg:hidden fixed inset-0 z-40 transition-transform duration-300 transform ${isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'}`}>
        {/* Backdrop */}
        <div className="absolute inset-0 bg-black/50" onClick={() => setIsMobileMenuOpen(false)}></div>
        
        {/* Sidebar Content (Matching the vertical image provided) */}
        <div className="absolute right-0 top-0 h-full w-[80%] max-w-sm bg-black text-white overflow-y-auto pt-20 pb-10">
          <ul className="flex flex-col px-6">
            {navLinks.map((link) => (
              <li key={link.title} className="border-b border-white/10 last:border-0 py-3">
                <div 
                  className="flex justify-between items-center cursor-pointer font-bold text-[15px]"
                  onClick={() => link.subLinks ? toggleAccordion(link.title) : setIsMobileMenuOpen(false)}
                >
                  <span className="hover:text-[#e32a2a] transition-colors">{link.title}</span>
                  {link.subLinks && (
                    <ChevronDown 
                      size={18} 
                      className={`transition-transform duration-200 ${mobileAccordions[link.title] ? 'rotate-180 text-[#e32a2a]' : ''}`} 
                    />
                  )}
                </div>

                {/* Mobile Submenu (Accordion) */}
                {link.subLinks && mobileAccordions[link.title] && (
                  <ul className="mt-3 ml-4 flex flex-col gap-3 border-l-2 border-[#e32a2a]/30 pl-4">
                    {link.subLinks.map((sub) => (
                      <li key={sub}>
                        <a href="#" className="text-sm text-gray-300 hover:text-white block py-1 font-semibold">
                          {sub}
                        </a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Header;