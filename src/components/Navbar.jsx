import React from 'react';

export default function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-6 py-4">
        <nav className="flex items-center justify-between rounded-full border border-white/10 bg-black/50 px-5 py-3 backdrop-blur-xl">
          <a href="#home" className="flex items-center gap-3">
            <span className="inline-block h-6 w-6 rounded-full bg-gradient-to-br from-fuchsia-500 via-cyan-400 to-indigo-500" />
            <span className="text-sm font-semibold tracking-wider">Nebula Voyages</span>
          </a>
          <ul className="hidden items-center gap-8 md:flex">
            <li><a href="#programs" className="text-sm text-white/80 transition hover:text-white">Programs</a></li>
            <li><a href="#pricing" className="text-sm text-white/80 transition hover:text-white">Pricing</a></li>
            <li>
              <a href="#cta" className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-4 py-2 text-sm font-medium text-black shadow-[0_0_30px_-10px] shadow-fuchsia-500/60 transition hover:brightness-110">
                Book a Consultation
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
