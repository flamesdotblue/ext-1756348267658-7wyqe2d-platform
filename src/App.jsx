import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Programs from './components/Programs';
import Pricing from './components/Pricing';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white antialiased">
      <Navbar />
      <main>
        <Hero />
        <section id="programs" className="relative overflow-hidden">
          <Programs />
        </section>
        <section id="pricing" className="relative overflow-hidden">
          <Pricing />
        </section>
      </main>
      <footer className="relative border-t border-white/10 bg-black/60 backdrop-blur">
        <div className="mx-auto max-w-7xl px-6 py-10">
          <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
            <div className="flex items-center gap-3">
              <div className="h-8 w-8 rounded-full bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-indigo-500 shadow-[0_0_40px_-10px] shadow-fuchsia-500/50" />
              <span className="font-semibold tracking-wide">Nebula Voyages</span>
            </div>
            <p className="text-sm text-white/60">© {new Date().getFullYear()} Nebula Voyages. Adventure responsibly among the stars.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
