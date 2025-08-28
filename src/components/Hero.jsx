import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section id="home" className="relative min-h-[100svh] w-full overflow-hidden">
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0" style={{ height: '100%', width: '100%' }}>
          <Spline scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(1200px_600px_at_50%_-10%,rgba(169,88,255,0.25),transparent_60%),radial-gradient(800px_400px_at_10%_110%,rgba(0,255,222,0.15),transparent_60%),radial-gradient(900px_500px_at_90%_120%,rgba(99,102,241,0.15),transparent_60%)]" />
        <div className="absolute inset-0 bg-black/40" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-1 text-xs tracking-wider text-white/80 backdrop-blur">
          <span className="inline-block h-2 w-2 animate-pulse rounded-full bg-emerald-400" /> Now boarding: 2026 departures
        </p>
        <h1 className="bg-gradient-to-br from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-4xl font-black leading-tight text-transparent sm:text-6xl md:text-7xl">
          Space travel for everyone
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/80 sm:text-lg">
          Cruise the cosmos with cinematic views and gravity-safe comfort. Transparent pricing, elite safety, unforgettable memories.
        </p>
        <div id="cta" className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a href="#pricing" className="rounded-full bg-gradient-to-r from-fuchsia-500 via-violet-500 to-cyan-400 px-6 py-3 text-sm font-semibold text-black shadow-[0_0_50px_-12px] shadow-fuchsia-500/70 transition hover:brightness-110">
            See Packages
          </a>
          <a href="#programs" className="rounded-full border border-white/20 bg-black/40 px-6 py-3 text-sm font-semibold text-white/90 backdrop-blur transition hover:bg-white/10">
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
