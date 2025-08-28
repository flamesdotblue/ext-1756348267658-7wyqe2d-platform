import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-4 rounded-2xl border border-white/10 bg-black/30 backdrop-blur supports-[backdrop-filter]:bg-black/40">
          <div className="flex items-center justify-between px-5 py-4">
            <a href="#" className="flex items-center gap-2">
              <span className="inline-block h-3 w-3 rounded-full bg-gradient-to-tr from-fuchsia-500 to-cyan-400" />
              <span className="text-sm tracking-widest text-white/80">NEBULA VOYAGES</span>
            </a>
            <nav className="hidden gap-8 md:flex text-sm text-white/70">
              <a href="#programs" className="hover:text-white transition">Programs</a>
              <a href="#pricing" className="hover:text-white transition">Pricing</a>
              <a href="#contact" className="hover:text-white transition">Contact</a>
            </nav>
            <a href="#pricing" className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-4 py-2 text-sm font-medium text-black hover:opacity-90 transition">
              Book Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
