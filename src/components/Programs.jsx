import React from 'react';
import { Rocket, Orbit, Satellite, Star } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Orbital Sprint',
    desc: '90-minute low-earth orbit loop with panoramic views and microgravity fun.',
    tag: 'Most Popular',
  },
  {
    icon: Orbit,
    title: 'Lunar Flyby',
    desc: 'A cinematic slingshot around the Moon—no landing required, all awe included.',
    tag: 'New',
  },
  {
    icon: Satellite,
    title: 'Aurora Cruise',
    desc: 'Skim the magnetosphere to witness dancing auroras from the best seat in the cosmos.',
    tag: 'Scenic',
  },
  {
    icon: Star,
    title: 'Stargazer Night',
    desc: 'Dark-sky drift with astrophotography coaching and guided constellations.',
    tag: 'Relaxed',
  },
];

export default function Programs() {
  return (
    <section id="programs" className="relative z-10 mx-auto -mt-12 max-w-7xl px-6 pb-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-30 [background:radial-gradient(60%_40%_at_50%_0%,rgba(163,69,245,0.35),transparent)]" />
      <div className="mb-10 text-center">
        <h2 className="text-2xl sm:text-4xl font-semibold tracking-tight">Choose Your Mission</h2>
        <p className="mt-3 text-white/70 max-w-2xl mx-auto">
          From quick hops to lunar epics, pick a program that matches your comfort and curiosity.
        </p>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map(({ icon: Icon, title, desc, tag }) => (
          <div
            key={title}
            className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-5 backdrop-blur transition hover:border-fuchsia-400/40 hover:bg-white/10"
          >
            <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 blur-2xl" />
            <div className="mb-4 inline-flex items-center gap-2 text-xs text-white/70">
              <span className="rounded-full border border-white/15 bg-white/10 px-2 py-1">{tag}</span>
            </div>
            <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-fuchsia-500/20 to-cyan-400/20 text-cyan-200">
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
            <button className="mt-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/90 transition hover:border-fuchsia-400/40 hover:bg-white/10">
              Learn more
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="h-4 w-4"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
