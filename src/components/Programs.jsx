import React from 'react';
import { Rocket, Planet, Telescope } from 'lucide-react';

const items = [
  {
    icon: Rocket,
    title: 'Orbital Hop',
    desc: 'A 48-hour low-Earth-orbit escape with aurora flythrough and sunrise every 90 minutes.',
    accent: 'from-fuchsia-500 to-rose-500',
  },
  {
    icon: Planet,
    title: 'Lunar Weekend',
    desc: 'Four nights looping the Moon with close passes over Tycho and Sea of Tranquility.',
    accent: 'from-cyan-400 to-indigo-500',
  },
  {
    icon: Telescope,
    title: 'Mars Flyby',
    desc: 'A cinematic six-week journey slingshotting by the Red Planet—no landing, all wonder.',
    accent: 'from-violet-500 to-fuchsia-500',
  },
];

export default function Programs() {
  return (
    <div className="relative mx-auto max-w-7xl px-6 py-24">
      <div className="pointer-events-none absolute inset-0 -z-10 opacity-60 [mask-image:radial-gradient(60%_60%_at_50%_40%,black,transparent)]">
        <div className="absolute -top-24 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />
        <div className="absolute -bottom-24 left-0 h-96 w-96 rounded-full bg-cyan-400/20 blur-3xl" />
        <div className="absolute -bottom-32 right-0 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl" />
      </div>

      <div className="mx-auto max-w-2xl text-center">
        <h2 className="bg-gradient-to-br from-white via-fuchsia-200 to-cyan-200 bg-clip-text text-3xl font-bold text-transparent sm:text-4xl">
          Choose your cosmic adventure
        </h2>
        <p className="mt-3 text-white/70">
          Hand-crafted itineraries tuned for comfort, safety, and spectacle—guided by veteran pilots and AI copilots.
        </p>
      </div>

      <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {items.map(({ icon: Icon, title, desc, accent }) => (
          <div key={title} className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 shadow-2xl shadow-black/40 backdrop-blur transition hover:border-white/20 hover:bg-white/[0.07]">
            <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${accent} text-black shadow-[0_0_40px_-12px_rgba(255,255,255,0.6)]`}>
              <Icon className="h-6 w-6" />
            </div>
            <h3 className="text-lg font-semibold text-white">{title}</h3>
            <p className="mt-2 text-sm text-white/70">{desc}</p>
            <div className="mt-6 flex items-center gap-3">
              <span className="text-xs text-white/60">Includes training, suits, and personalized itinerary</span>
            </div>
            <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-gradient-to-br from-white/10 to-transparent opacity-0 blur-2xl transition-opacity duration-300 group-hover:opacity-100" />
          </div>
        ))}
      </div>
    </div>
  );
}
