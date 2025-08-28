import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-[#05060b] text-white antialiased">
      <Navbar />
      <Hero />
      <Programs />
      <Pricing />
      <footer className="border-t border-white/10 py-10 text-center text-sm text-white/60">
        <p>© {new Date().getFullYear()} Nebula Voyages. All rights reserved.</p>
      </footer>
    </div>
  );
}
