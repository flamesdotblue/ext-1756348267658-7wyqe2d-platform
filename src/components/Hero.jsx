import React from 'react';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  return (
    <section className="relative h-[100svh] w-full" id="hero">
      <div className="absolute inset-0 -z-10">
        <div className="h-full w-full">
          <Spline
            scene="https://prod.spline.design/7m4PRZ7kg6K1jPfF/scene.splinecode"
            style={{ width: '100%', height: '100%' }}
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/30 via-black/30 to-[#05060b]" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-7xl flex-col items-center justify-center px-6 text-center">
        <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs text-white/70 backdrop-blur">
          Futuristic • Cosmic • Immersive
        </div>
        <h1 className="font-semibold tracking-tight text-4xl sm:text-6xl md:text-7xl">
          <span className="bg-gradient-to-r from-fuchsia-400 via-sky-300 to-cyan-300 bg-clip-text text-transparent">
            Affordable Space Travel
          </span>
          <br />
          For Everyone
        </h1>
        <p className="mt-6 max-w-2xl text-white/80">
          Hop aboard our galaxy rollercoaster and explore orbit, lunar vistas, and near-space
          adventures—crafted for comfort, safety, and a price that’s actually down to Earth.
        </p>
        <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row">
          <a
            href="#pricing"
            className="rounded-xl bg-gradient-to-r from-fuchsia-500 to-cyan-400 px-6 py-3 font-medium text-black shadow-[0_0_30px_rgba(168,85,247,0.35)] hover:opacity-90 transition"
          >
            See Pricing
          </a>
          <a
            href="#programs"
            className="rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 hover:bg-white/10 transition"
          >
            Explore Programs
          </a>
        </div>
      </div>
    </section>
  );
}
