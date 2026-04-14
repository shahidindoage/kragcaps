import React from 'react';
import { ChevronUp, MoveHorizontal } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 relative font-sans">
      <div className="container mx-auto px-6 max-w-7xl">
        {/* Main Links Section - Styled to match image layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-16">
          
          {/* COMPANY */}
          <div>
            <h3 className="text-lg font-bold mb-8 tracking-tighter uppercase">COMPANY</h3>
            <ul className="space-y-3 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition">About us</a></li>
              <li><a href="#" className="hover:text-white transition">What We Do</a></li>
              <li><a href="#" className="hover:text-white transition">Video</a></li>
              <li><a href="#" className="hover:text-white transition">News & Events</a></li>
              <li><a href="#" className="hover:text-white transition">Contact Us</a></li>
            </ul>
          </div>

          {/* OTHER VENTURES */}
          <div>
            <h3 className="text-lg font-bold mb-8 tracking-tighter uppercase">OTHER VENTURES</h3>
            <ul className="space-y-3 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition">A R Stampings</a></li>
              <li><a href="#" className="hover:text-white transition">Anju Gupta's Art & Craft</a></li>
              <li><a href="#" className="hover:text-white transition">K B Communications</a></li>
              <li><a href="#" className="hover:text-white transition">Tip Top Paint Brushes</a></li>
            </ul>
          </div>

          {/* KRAGBUZZ SPORTS */}
          <div>
            <h3 className="text-lg font-bold mb-8 tracking-tighter uppercase">KRAGBUZZ SPORTS</h3>
            <ul className="space-y-3 text-[13px] text-gray-400">
              <li><a href="#" className="hover:text-white transition">About Kragbuzz Sport</a></li>
              <li><a href="#" className="hover:text-white transition">Product Category</a></li>
              <li><a href="#" className="hover:text-white transition">Products</a></li>
              <li><a href="#" className="hover:text-white transition">Corporate Merchandise</a></li>
            </ul>
          </div>
        </div>

        {/* The thin horizontal line from the image */}
        <hr className="border-gray-800" />
      </div>

      {/* COPYRIGHT BAR */}
      <div className="py-8 bg-transparent">
        <div className="container mx-auto px-6 text-center text-[12px] text-gray-500">
          <p>
            © Copyright 2026 Kragbuzz Sports, All Rights Reserved | Crafted with ❤ By: 
            <a href="#" className="ml-1 text-gray-400 hover:text-white">IndoAge</a>
          </p>
        </div>
      </div>

      {/* SHOP NOW SIDE TAB (Fixed Right) */}
      {/* <div className="fixed -right-[2px] top-1/2 -translate-y-1/2 z-50">
        <button 
          className="bg-[#ef4444] text-white px-3 py-3 font-bold text-[13px] tracking-widest uppercase shadow-lg hover:bg-red-700 transition border-2 border-black"
          style={{ writingMode: 'vertical-rl' }}
        >
          Shop Now
        </button>
      </div> */}

      {/* BOTTOM RIGHT CONTROLS */}
      
    </footer>
  );
};

export default Footer;