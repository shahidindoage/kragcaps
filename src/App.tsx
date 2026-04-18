/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  ChevronRight, 
  Menu, 
  X, 
  CheckCircle2, 
  Layers, 
  Palette, 
  Settings, 
  MapPin, 
  Mail, 
  Phone, 
  Factory, 
  ShieldCheck,
  ArrowRight,
  Maximize2,
  Cpu
} from 'lucide-react';
import { 
  CAP_STYLES, 
  CROWN_TYPES, 
  PEAK_STYLES, 
  FABRICS, 
  COLORS, 
  BRANDING_TYPES, 
  BRANDING_LOCATIONS, 
  ADDONS, 
  CLIENTS, 
  CONTACT_INFO, 
  CLOSURE_STYLES
} from './data';
import Header from './Header';
import Footers from './Footer';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHeroPast, setIsHeroPast] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      setIsHeroPast(window.scrollY > window.innerHeight - 80);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navTheme = isHeroPast ? 'dark' : 'light';

  return (
    <nav className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
      isScrolled 
        ? (navTheme === 'dark' ? 'bg-black/90 backdrop-blur-xl border-b border-white/5 py-4' : 'bg-white/90 backdrop-blur-xl border-b border-zinc-100 py-4') 
        : 'bg-transparent py-8'
    }`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-3 group">
          <div className="flex flex-col items-start leading-none">
            <div className="flex items-baseline">
              <span className={`font-black text-2xl tracking-tighter transition-colors ${navTheme === 'dark' ? 'text-white' : 'text-black'}`}>KC</span>
            </div>
            <div className="flex items-center mt-0.5">
              <span className={`font-bold text-[8px] tracking-[0.2em] uppercase transition-colors ${navTheme === 'dark' ? 'text-white' : 'text-black'}`}>KRAG</span>
              <span className="text-red-600 font-bold text-[8px] tracking-[0.2em] uppercase ml-0.5">CAPS</span>
            </div>
          </div>
        </a>
        
        <div className={`hidden md:flex items-center gap-12 text-[11px] font-black uppercase tracking-[0.3em] transition-colors ${navTheme === 'dark' ? 'text-zinc-400' : 'text-zinc-500'}`}>
          <a href="#styles" className={`transition-colors ${navTheme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Styles</a>
          <a href="#customization" className={`transition-colors ${navTheme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Customization</a>
          <a href="#fabrics" className={`transition-colors ${navTheme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Fabrics</a>
          <a href="#branding" className={`transition-colors ${navTheme === 'dark' ? 'hover:text-white' : 'hover:text-black'}`}>Branding</a>
          <button className="bg-red-600 hover:bg-black hover:text-white text-white px-8 py-3 rounded-full transition-all shadow-lg shadow-red-600/20">
            Customize
          </button>
        </div>

        <button className={`md:hidden transition-colors ${navTheme === 'dark' ? 'text-white' : 'text-black'}`} onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className={`absolute top-full left-0 w-full overflow-hidden md:hidden shadow-2xl border-t ${
              navTheme === 'dark' ? 'bg-black border-white/5' : 'bg-white border-zinc-100'
            }`}
          >
            <div className="p-8 flex flex-col gap-6">
              <a href="#styles" onClick={() => setIsMenuOpen(false)} className={`text-xl font-bold uppercase tracking-widest ${navTheme === 'dark' ? 'text-white' : 'text-black'}`}>Styles</a>
              <a href="#customization" onClick={() => setIsMenuOpen(false)} className={`text-xl font-bold uppercase tracking-widest ${navTheme === 'dark' ? 'text-white' : 'text-black'}`}>Customization</a>
              <a href="#fabrics" onClick={() => setIsMenuOpen(false)} className={`text-xl font-bold uppercase tracking-widest ${navTheme === 'dark' ? 'text-white' : 'text-black'}`}>Fabrics</a>
              <a href="#branding" onClick={() => setIsMenuOpen(false)} className={`text-xl font-bold uppercase tracking-widest ${navTheme === 'dark' ? 'text-white' : 'text-black'}`}>Branding</a>
              <button className="bg-red-600 text-white px-6 py-4 rounded-xl font-bold">Customize Now</button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-zinc-50">
    {/* Subtle Background Elements */}
    <div className="absolute inset-0 z-0">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_120%,rgba(220,38,38,0.03),transparent_50%)]" />
      <div className="absolute inset-0 opacity-[0.015]" 
           style={{ backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '60px 60px' }} />
    </div>
    
    <div className="relative z-10 text-center px-6 max-w-6xl w-full">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
        className="flex flex-col items-center"
      >
        {/* Central Logo Focus - Black & Red */}
        <div className="mb-12 md:mb-16 flex flex-col items-center">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            className="flex flex-col items-center"
          >
            {/* <div className="text-black font-black text-[100px] sm:text-[180px] md:text-[240px] lg:text-[280px] tracking-[-0.08em] leading-[0.8] mb-4 md:mb-6">KC</div> */}
           
            <img src="logo.png" alt="" />
           
            <div className="flex items-center">
              {/* <span className="text-black font-bold text-lg sm:text-xl md:text-3xl tracking-[0.4em] sm:tracking-[0.8em] uppercase">KRAG</span>
              <span className="text-red-600 font-bold text-lg sm:text-xl md:text-3xl tracking-[0.4em] sm:tracking-[0.8em] uppercase ml-2 sm:ml-4">CAPS</span> */}

             
            </div>
          </motion.div>
          <div className="w-16 md:w-24 h-[1px] bg-zinc-200 mt-10 md:mt-16" />
        </div>

        <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-black mb-6 md:mb-8 tracking-tighter leading-[1.1] md:leading-[1] font-display uppercase max-w-4xl">
          The Global Standard <br className="hidden sm:block" />
          <span className="text-zinc-300">In Custom Manufacturing</span>
        </h1>
        
        <p className="text-[10px] sm:text-xs md:text-base text-zinc-500 max-w-xl mx-auto font-bold uppercase tracking-[0.3em] sm:tracking-[0.4em] leading-relaxed">
          Crafting Legacy in Every Stitch
        </p>
      </motion.div>
    </div>

    {/* Minimal Scroll Indicator */}
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2 }}
      className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-6"
    >
      {/* <span className="text-[10px] font-black uppercase tracking-[0.5em] text-zinc-300">Explore Collection</span> */}
      <div className="w-[1px] h-20 bg-gradient-to-b from-zinc-200 to-transparent" />
    </motion.div>
  </section>
);

const About = () => (
  <section className="py-24 bg-zinc-950 border-y border-zinc-900">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-8 tracking-tight">
            DESIGNED BY ATHLETE, <br />
            <span className="text-red-600">FOR ATHLETES.</span>
          </h2>
          <div className="space-y-6 text-gray-400 text-lg leading-relaxed">
            <p>
              Established in 2015, Kragbuzz is a rapidly growing manufacturer and exporter of sports apparel and cricket equipment from Delhi.
            </p>
            <p>
              Trusted supplier for prestigious international leagues, our top-quality products are favored by elite cricketers worldwide. Every item embodies our dedication to excellence, empowering athletes to train with purpose.
            </p>
            <p className="italic text-white">
              "Where passion meets innovation. Crafted by athletes for athletes, our gear is meticulously designed to maximize performance in any condition."
            </p>
          </div>
          <div className="mt-10 flex gap-8">
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-1">2015</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Established</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-1">50+</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Pro Teams</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black text-white mb-1">100%</div>
              <div className="text-xs text-gray-500 uppercase tracking-widest">Customized</div>
            </div>
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-2xl overflow-hidden border border-zinc-800 bg-zinc-900 p-4">
            <img 
              src="https://kragbuzzsports.com/wp-content/uploads/2023/07/3_3_11zon.jpg" 
              alt="Athlete focused design" 
              className="w-full h-full object-cover rounded-xl opacity-80"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 bg-red-600 p-8 rounded-2xl shadow-2xl hidden lg:block">
            <ShieldCheck size={48} className="text-white" />
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const StyleCard = ({ style, index }: { style: any, index: number, key?: string }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: index * 0.05 }}
    viewport={{ once: true }}
    className="group bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600/50 transition-all duration-500 flex flex-col"
  >
    <div className="p-4 grid grid-cols-2 gap-2 bg-zinc-800/30">
      <div className="col-span-2 aspect-square overflow-hidden rounded-xl bg-zinc-800 relative">
        <img 
          src={`${style.img1}`} 
          alt={`${style.name} variation 1`}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-90"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-3 left-3 px-2 py-1 bg-black/60 backdrop-blur-md text-[10px] text-white font-bold rounded uppercase tracking-tighter">
          Primary
        </div>
      </div>
      <div className="aspect-square overflow-hidden rounded-lg bg-zinc-800">
        <img 
          src={`${style.img2}`} 
          alt={`${style.name} variation 2`}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
      </div>
      <div className="aspect-square overflow-hidden rounded-lg bg-zinc-800">
        <img 
          // src={`https://picsum.photos/seed/kragcaps-${style.id}-3/300/300`} 
          src={`${style.img3}`} 
          alt={`${style.name} variation 3`}
          className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
          referrerPolicy="no-referrer"
        />
      </div>
    </div>
    <div className="p-6 mt-auto">
      <div className="flex justify-between items-start mb-2">
        <h3 className="text-white font-bold text-xs group-hover:text-red-500 transition-colors">{style.name}</h3>
        <span className="text-[8px] bg-zinc-800 text-gray-400 px-2 py-1 rounded font-bold">3 VARIATIONS</span>
      </div>
      <p className="text-gray-500 text-xs line-clamp-2 leading-relaxed">{style.description}</p>
      <button className="mt-6 w-full py-3 border border-zinc-800 text-white text-xs font-bold rounded-lg hover:bg-red-600 hover:border-red-600 transition-all uppercase tracking-widest">
        Customize Style
      </button>
    </div>
  </motion.div>
);

const StylesSection = () => {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Athletic', 'Classic', 'Lifestyle', 'Specialized'];

  const getCategory = (id: string) => {
    const athletic = ['runner-ultra', 'visor', 'golf', 'side-mesh', 'fishing'];
    const classic = ['5-panel', '6-panel', 'moon-cut', 'snapback', 'cadet'];
    const lifestyle = ['baggy', 'hat', 'woollen', 'bucket', 'beanie'];
    const specialized = ['air-hostess', 'chef'];

    if (athletic.includes(id)) return 'Athletic';
    if (classic.includes(id)) return 'Classic';
    if (lifestyle.includes(id)) return 'Lifestyle';
    if (specialized.includes(id)) return 'Specialized';
    return 'Classic';
  };

  const filteredStyles = activeCategory === 'All' 
    ? CAP_STYLES 
    : CAP_STYLES.filter(style => getCategory(style.id) === activeCategory);

  return (
    <section id="styles" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">The Collection</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-2 tracking-tighter">TYPES OF CAPS</h2>
          </div>
          <p className="text-gray-500 max-w-md text-right hidden md:block">
            From classic baseball silhouettes to specialized performance gear, we offer a comprehensive range of styles for every need.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex overflow-x-auto pb-4 md:pb-0 md:flex-wrap gap-2 mb-12 no-scrollbar">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`whitespace-nowrap px-6 py-2 rounded-full text-xs font-bold uppercase tracking-widest transition-all border ${
                activeCategory === cat 
                  ? 'bg-red-600 border-red-600 text-white' 
                  : 'bg-zinc-900 border-zinc-800 text-gray-400 hover:border-zinc-700'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        <motion.div 
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredStyles.map((style, idx) => (
              <StyleCard key={style.id} style={style} index={idx} />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

const CustomizationSection = () => {
  const [activeTab, setActiveTab] = useState('crown');

  const tabs = [
    { id: 'crown', name: 'Crown Profiles', icon: <Layers size={20} /> },
    { id: 'peak', name: 'Peak & Visor', icon: <Maximize2 size={20} /> },
    { id: 'closures', name: 'Closures', icon: <Settings size={20} /> },
  ];

  return (
    <section id="customization" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">UNLIMITED <span className="text-red-600">CUSTOMIZATION</span></h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">Every detail matters. Select a category below to explore our premium customization options.</p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-3 px-8 py-4 rounded-full font-bold transition-all border-2 ${
                activeTab === tab.id 
                  ? 'bg-red-600 border-red-600 text-white shadow-lg shadow-red-600/20' 
                  : 'bg-zinc-900 border-zinc-800 text-gray-400 hover:border-zinc-700'
              }`}
            >
              {tab.icon}
              {tab.name}
            </button>
          ))}
        </div>

        <div className="min-h-[600px]">
          <AnimatePresence mode="wait">
            {activeTab === 'crown' && (
              <motion.div
                key="crown"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
              >
                {CROWN_TYPES.map((type, idx) => (
                  <div key={idx} className="group bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-all overflow-hidden">
                    <div className="aspect-square bg-zinc-800 overflow-hidden relative">
                      <img 
                        src={`${type.img1}`} 
                        alt={type.name}
                        className="w-full h-full object-cover opacity-40 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 via-zinc-900/20 to-transparent" />
                      <div className="absolute inset-0 p-6 flex flex-col justify-end">
                        <h4 className="text-white font-bold text-xl uppercase tracking-wider mb-2">{type.name}</h4>
                        <p className="text-gray-400 text-sm leading-tight opacity-0 group-hover:opacity-100 transition-opacity duration-300">{type.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}

            {activeTab === 'peak' && (
              <motion.div
                key="peak"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
              >
                {PEAK_STYLES.map((peak, idx) => (
                  <div key={idx} className="bg-zinc-900/50 rounded-2xl border border-zinc-800 flex flex-col overflow-hidden group hover:border-red-600/30 transition-all">
                    <div className="aspect-square bg-zinc-800 overflow-hidden">
                      <img 
                        src={`${peak.img1}`} 
                        alt={peak.name}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-6 text-center bg-zinc-900">
                      <h4 className="text-white font-bold text-sm uppercase tracking-wider">{peak.name}</h4>
                      <span className="text-xs text-gray-600 mt-1 block">{peak.type}</span>
                    </div>
                  </div>
                ))}
                <div className="sm:col-span-2 lg:col-span-4 p-8 bg-gradient-to-r from-red-600/20 to-transparent rounded-3xl border border-red-600/20 flex items-center gap-6">
                  <div className="w-16 h-16 rounded-full bg-red-600 flex items-center justify-center shrink-0">
                    <CheckCircle2 size={32} className="text-white" />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-xl mb-1">Pro Customization Tip</h4>
                    <p className="text-gray-400">Combine a High-Profile crown with a Flat Peak for a modern urban look, or go Low-Profile and Curved for a classic athletic feel.</p>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === 'closures' && (
              <motion.div
                key="closures"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4"
              >
                {CLOSURE_STYLES.map((closure, idx) => (
                  <div key={idx} className="group bg-zinc-900/50 rounded-xl border border-zinc-800 overflow-hidden hover:border-red-600/30 transition-all">
                    <div className="aspect-square bg-zinc-800 overflow-hidden relative">
                      <img 
                        src={`${closure.img1}`} 
                        alt={closure}
                        className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <div className="p-3 text-center bg-zinc-900">
                      <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter">{closure.name}</span>
                    </div>
                  </div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

const FabricSection = () => {
  const [activeCategory, setActiveCategory] = useState(FABRICS[0].category);

  return (
    <section id="fabrics" className="py-24 bg-black overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <span className="text-red-600 font-bold tracking-widest uppercase text-sm">Material Excellence</span>
            <h2 className="text-4xl md:text-6xl font-black text-white mt-2 tracking-tighter">PREMIUM FABRICS</h2>
            <p className="text-gray-400 mt-6 text-lg">
              Technical performance meets luxury. Explore our curated library of high-performance knits, premium woven fabrics, and specialized materials.
            </p>
          </div>
          
          {/* Category Selector */}
          <div className="flex overflow-x-auto pb-4 lg:pb-0 lg:flex-wrap gap-2 lg:justify-end no-scrollbar">
            {FABRICS.map((cat) => (
              <button
                key={cat.category}
                onClick={() => setActiveCategory(cat.category)}
                className={`whitespace-nowrap px-4 py-2 rounded-lg text-xs font-bold uppercase tracking-widest transition-all border ${
                  activeCategory === cat.category 
                    ? 'bg-red-600 border-red-600 text-white' 
                    : 'bg-zinc-900 border-zinc-800 text-gray-500 hover:border-zinc-700'
                }`}
              >
                {cat.category}
              </button>
            ))}
          </div>
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.4 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {FABRICS.find(f => f.category === activeCategory)?.items.map((item, idx) => (
              <div key={idx} className="bg-zinc-900/40 border border-zinc-800/50 rounded-2xl p-6 hover:bg-zinc-900 transition-all group">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="text-white font-bold text-lg group-hover:text-red-500 transition-colors">{item.name}</h3>
                  <div className="px-2 py-1 bg-zinc-800 rounded text-[10px] text-gray-500 font-bold uppercase">
                    {item.colors.length || 1} Variations
                  </div>
                </div>
                
                <div className="grid grid-cols-3 gap-3">
                  {item.colors.length > 0 ? (
                    item.colors.map((color, ci) => (
                      <div key={ci} className="space-y-2">
                        <div className="aspect-square rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700 group-hover:border-zinc-600 transition-all">
                          <img 
                            src={`${color.img1}`} 
                            alt={`${item.name} - ${color}`}
                            className="w-full h-full object-cover opacity-80 hover:opacity-100 hover:scale-110 transition-all duration-500"
                            referrerPolicy="no-referrer"
                          />
                        </div>
                        <span className="text-[9px] text-gray-500 font-bold uppercase tracking-tighter block text-center truncate">
                          {color.cn}
                        </span>
                      </div>
                    ))
                  ) : (
                    // Placeholder for items without specific color data in PDF
                    [1, 2, 3].map((_, ci) => (
                      <div key={ci} className="space-y-2">
                        <div className="aspect-square rounded-lg overflow-hidden bg-zinc-800 border border-zinc-700">
                          {/* <img 
                            src={`https://picsum.photos/seed/fabric-${item.name.toLowerCase().replace(/\s+/g, '-')}-${ci}/150/150`} 
                            alt={item.name}
                            className="w-full h-full object-cover opacity-40"
                            referrerPolicy="no-referrer"
                          /> */}
                        </div>
                        {/* <span className="text-[9px] text-gray-600 font-bold uppercase tracking-tighter block text-center">
                          Sample {ci + 1}
                        </span> */}
                      </div>
                    ))
                  )}
                </div>
              </div>
            ))}
          </motion.div>
        </AnimatePresence>
        
        {/* Global Color Palette - Compact Version */}
        <div className="mt-20 pt-12 border-t border-zinc-900">
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <h4 className="text-white font-bold uppercase tracking-widest text-xs shrink-0">Standard Color Palette</h4>
            <div className="flex flex-wrap justify-center gap-2">
              {COLORS.map((color, idx) => (
                <div key={idx} className="group relative">
                  <div 
                    className="w-8 h-8 rounded-full border border-zinc-800 group-hover:scale-110 transition-transform shadow-lg cursor-help"
                    style={{ backgroundColor: color.hex }}
                  />
                  <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-2 py-1 bg-white text-black text-[8px] font-black rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-10">
                    {color.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const BrandingSection = () => (
  <section id="branding" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="text-center mb-20">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">YOUR BRAND, <span className="text-red-600">OUR CRAFT</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto text-lg">State-of-the-art branding techniques to bring your vision to life with precision and durability.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
        {BRANDING_TYPES.map((type, idx) => (
          <div key={idx} className="bg-zinc-900 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600/30 transition-all group">
            <div className="aspect-video overflow-hidden bg-zinc-800 relative">
              <img 
                src={`${type.img1}`} 
                alt={type.name}
                className="w-full h-full object-cover opacity-60 group-hover:scale-110 group-hover:opacity-100 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />
            </div>
            <div className="p-6 relative">
              <h3 className="text-white font-bold text-lg mb-2">{type.name}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{type.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="bg-black border border-zinc-800 rounded-3xl p-6 md:p-12">
        <h3 className="text-xl md:text-2xl font-bold text-white mb-10 text-center uppercase tracking-widest">Branding Locations</h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6">
          {BRANDING_LOCATIONS.map((loc, idx) => (
            <div key={idx} className="group flex flex-col items-center gap-4 text-center">
              <div className="w-full aspect-square rounded-2xl bg-zinc-900 border border-zinc-800 overflow-hidden relative group-hover:border-red-600/50 transition-all">
                <img 
                  src={`${loc.img1}`} 
                  alt={loc}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-2 left-2 w-6 h-6 rounded-full bg-black/60 backdrop-blur-md flex items-center justify-center text-[10px] text-white font-bold border border-white/20">
                  {idx + 1}
                </div>
              </div>
              <span className="text-[10px] text-gray-400 font-bold uppercase tracking-tighter group-hover:text-white transition-colors">{loc.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

const AddonsSection = () => (
  <section className="py-24 bg-black">
    <div className="max-w-7xl mx-auto px-6">
      <div className="mb-16">
        <h2 className="text-4xl font-black text-white tracking-tighter">THE FINISHING TOUCHES</h2>
        <p className="text-gray-500 mt-4">Premium add-ons that set your headwear apart from the competition.</p>
      </div>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {ADDONS.map((addon, idx) => (
          <div key={idx} className="group bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden hover:bg-zinc-900 transition-all">
            <div className="aspect-video bg-zinc-800 overflow-hidden relative">
              <img 
                src={`${addon.img1}`} 
                alt={addon.name}
                className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent opacity-60" />
            </div>
            <div className="p-6">
              <h4 className="text-white font-bold mb-2 group-hover:text-red-500 transition-colors">{addon.name}</h4>
              <p className="text-gray-500 text-sm leading-relaxed">{addon.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const SizingSection = () => (
  <section className="py-24 bg-zinc-950">
    <div className="max-w-4xl mx-auto px-6">
      <div className="bg-zinc-900 rounded-3xl overflow-hidden border border-zinc-800">
        <div className="p-8 md:p-12 text-center border-b border-zinc-800">
          <h2 className="text-3xl md:text-4xl font-black text-white tracking-tighter mb-4">PRECISION SIZING</h2>
          <p className="text-gray-400 text-sm md:text-base">The perfect fit for every athlete, from juniors to adults.</p>
        </div>
        <div className="p-6 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 border-b border-zinc-800">
          <div className="aspect-video bg-zinc-800 rounded-2xl overflow-hidden relative group">
            <img 
              src="https://kragbuzzsports.com/wp-content/uploads/2026/04/sizing.png" 
              alt="Adult Sizing Guide"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              {/* <span className="text-white font-bold uppercase tracking-widest text-[10px]">Adult Fit Guide</span> */}
            </div>
          </div>
          <div className="aspect-video bg-zinc-800 rounded-2xl overflow-hidden relative group">
            <img 
              src="https://kragbuzzsports.com/wp-content/uploads/2026/04/sizing2.png" 
              alt="Junior Sizing Guide"
              className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent flex items-end p-6">
              {/* <span className="text-white font-bold uppercase tracking-widest text-[10px]">Junior Fit Guide</span> */}
            </div>
          </div>
        </div>
        <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-12">
          <div className="space-y-6">
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <span className="text-white font-bold text-lg">Adult</span>
              <span className="text-red-500 font-mono">54 - 60 cm</span>
            </div>
            <div className="flex justify-between items-center border-b border-zinc-800 pb-4">
              <span className="text-white font-bold text-lg">Junior</span>
              <span className="text-red-500 font-mono">48 - 55 cm</span>
            </div>
            <p className="text-xs text-gray-500 italic">One size fits most for standard athletic caps.</p>
          </div>
          <div className="bg-black/50 p-6 rounded-2xl">
            <h4 className="text-white font-bold mb-4 uppercase tracking-widest text-xs">Panama Hat Sizing</h4>
            <div className="space-y-2">
              {[
                { s: 'XS', c: '54cm' },
                { s: 'Small', c: '56cm' },
                { s: 'Medium', c: '57cm' },
                { s: 'Large', c: '58cm' },
                { s: 'XL', c: '59cm' },
                { s: '2XL', c: '61cm' },
              ].map((item, idx) => (
                <div key={idx} className="flex justify-between text-sm">
                  <span className="text-gray-400">{item.s}</span>
                  <span className="text-white font-mono">{item.c}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Marquee = ({ children, speed = 30, direction = 'left' }: { children: React.ReactNode, speed?: number, direction?: 'left' | 'right' }) => (
  <div className="flex overflow-hidden select-none gap-6 group">
    <motion.div
      animate={{
        x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
      }}
      transition={{
        duration: speed,
        ease: "linear",
        repeat: Infinity,
      }}
      className="flex flex-nowrap gap-6 shrink-0"
    >
      {children}
      {children}
    </motion.div>
  </div>
);

const PortfolioSection = () => (
  <section className="py-24 bg-black overflow-hidden">
    <div className="max-w-7xl mx-auto px-6 mb-20">
      <div className="text-center">
        <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-6">TRUSTED BY <span className="text-red-600">THE BEST</span></h2>
        <p className="text-gray-400 max-w-2xl mx-auto">From global retail giants to professional sports associations and teams.</p>
      </div>
    </div>

    <div className="space-y-20">
      {/* Global Brands Marquee */}
      <div className="space-y-8">
        <h3 className="text-xs font-bold text-gray-600 uppercase tracking-[0.3em] text-center">Global Brands</h3>
        <Marquee speed={40}>
          {CLIENTS.brands.map((brand, idx) => (
            <div key={idx} className="w-64 bg-zinc-900/30 border border-zinc-800 rounded-2xl p-6 flex flex-col items-center justify-center gap-4 hover:bg-zinc-900 hover:border-red-600/30 transition-all shrink-0">
              <div className="w-full aspect-square bg-zinc-800 rounded-xl overflow-hidden relative">
                <img 
                  src={`${brand.img1}`} 
                  alt={brand}
                  className="w-full h-full object-cover opacity-50 grayscale group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <span className="text-[10px] text-gray-500 font-black uppercase tracking-tighter text-center group-hover:text-white transition-colors">{brand.name}</span>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Professional Team Portfolio Marquee */}
      <div className="space-y-8">
        <h3 className="text-xs font-bold text-gray-600 uppercase tracking-[0.3em] text-center">Professional Team Portfolio</h3>
        <Marquee speed={60} direction="right">
          {CLIENTS.teams.map((team, idx) => (
            <div key={idx} className="w-56 group bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600/30 transition-all shrink-0">
              <div className="aspect-square bg-zinc-800 overflow-hidden relative">
                <img 
                  src={`${team.img1}`} 
                  alt={team}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60" />
              </div>
              <div className="p-4 text-center bg-zinc-900">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest block leading-tight group-hover:text-white transition-colors">{team.name}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>

      {/* Professional Associations Marquee */}
      <div className="space-y-8">
        <h3 className="text-xs font-bold text-gray-600 uppercase tracking-[0.3em] text-center">Professional Associations</h3>
        <Marquee speed={50}>
          {CLIENTS.associations.map((assoc, idx) => (
            <div key={idx} className="w-72 group bg-zinc-900/30 border border-zinc-800 rounded-2xl overflow-hidden hover:border-red-600/30 transition-all flex flex-col shrink-0">
              <div className="aspect-[16/9] bg-zinc-800 overflow-hidden relative">
                <img 
                  src={`${assoc.img1}`} 
                  alt={assoc}
                  className="w-full h-full object-cover opacity-60 group-hover:opacity-100 group-hover:scale-110 transition-all duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>
              <div className="p-4 text-center bg-zinc-900 flex-1 flex items-center justify-center">
                <span className="text-[10px] text-gray-400 font-bold uppercase tracking-widest leading-tight group-hover:text-white transition-colors">{assoc.name}</span>
              </div>
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  </section>
);

const ContactSection = () => (
  <section id="contact" className="py-24 bg-zinc-950">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid lg:grid-cols-2 gap-16">
        <div>
          <h2 className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-12">CONNECT <br />WITH US</h2>
          <div className="space-y-12">
            <div>
              <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-6 flex items-center gap-2">
                <Factory size={18} /> Manufacturing Units
              </h3>
              <div className="grid gap-8">
                {CONTACT_INFO.factories.map((f, idx) => (
                  <div key={idx} className="group space-y-4 p-6 bg-zinc-900/50 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-all">
                    <div className="aspect-video rounded-xl overflow-hidden bg-zinc-800 mb-4">
                      <img 
                        src={`https://picsum.photos/seed/factory-${idx}/800/450`} 
                        alt={f.name}
                        className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                    <h4 className="text-white font-bold text-lg">{f.name}</h4>
                    <p className="text-gray-500 text-sm flex gap-3"><MapPin size={16} className="shrink-0 text-red-600" /> {f.address}</p>
                    <p className="text-gray-500 text-sm flex gap-3"><Mail size={16} className="shrink-0 text-red-600" /> {f.email}</p>
                    <p className="text-gray-500 text-sm flex gap-3"><Phone size={16} className="shrink-0 text-red-600" /> {f.phone}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="bg-zinc-900 p-6 md:p-10 rounded-3xl border border-zinc-800">
          <h3 className="text-red-600 font-bold uppercase tracking-widest text-sm mb-8 flex items-center gap-2">
            <MapPin size={18} /> Retail & Corporate
          </h3>
          <div className="space-y-10">
            {CONTACT_INFO.presence.map((p, idx) => (
              <div key={idx} className="group space-y-4 p-6 bg-black/30 rounded-2xl border border-zinc-800 hover:border-red-600/30 transition-all">
                <div className="aspect-video rounded-xl overflow-hidden bg-zinc-800 mb-4">
                  <img 
                    src={`https://picsum.photos/seed/showroom-${idx}/800/450`} 
                    alt={p.name}
                    className="w-full h-full object-cover opacity-50 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <h4 className="text-white font-bold text-xl">{p.name}</h4>
                <p className="text-gray-400 text-sm leading-relaxed">{p.address}</p>
                <div className="pt-4 space-y-2 border-t border-zinc-800">
                  <p className="text-gray-300 text-sm flex items-center gap-3"><Mail size={14} className="text-red-600" /> {p.email}</p>
                  <p className="text-gray-300 text-sm flex items-center gap-3"><Phone size={14} className="text-red-600" /> {p.phone}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-12 p-8 bg-red-600 rounded-2xl text-white">
            <h4 className="text-2xl font-black mb-2">START YOUR ORDER</h4>
            <p className="text-red-100 mb-6 font-medium">Ready to customize your premium headwear? Get in touch with our experts today.</p>
            <button className="w-full py-4 bg-white text-red-600 font-black rounded-xl hover:bg-gray-100 transition-all uppercase tracking-widest">
              Request a Quote
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-black py-12 border-t border-zinc-900">
    <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-red-600 flex items-center justify-center rounded-sm font-bold text-white text-lg">K</div>
        <span className="text-white font-bold tracking-tighter text-xl uppercase">Kragcaps</span>
      </div>
      
      <div className="flex gap-8 text-gray-500 text-xs uppercase tracking-widest font-bold">
        <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
        <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
        <a href="#" className="hover:text-white transition-colors">Shipping</a>
      </div>

      <p className="text-gray-600 text-xs">
        © 2026 KRAGBUZZ. ALL RIGHTS RESERVED. #WININSTYLE
      </p>
    </div>
  </footer>
);

export default function App() {
  return (
    <div className="bg-black font-sans selection:bg-red-600 selection:text-white">
      <Header />
      
      {/* Add padding-top to account for fixed header */}
      <main className="pt-32">
        <Hero />
        <About />
        <StylesSection />
        <CustomizationSection />
        <FabricSection />
        <BrandingSection />
        <AddonsSection />
        <SizingSection />
        <PortfolioSection />
        <ContactSection />
      </main>
      
      <Footers />
    </div>
  );
}
