import Spline from '@splinetool/react-spline';
import { ExternalLink } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-[85vh] w-full overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/Gt5HUob8aGDxOUep/scene.splinecode" style={{ width: '100%', height: '100%' }} />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/40 via-black/50 to-black"></div>
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl flex-col items-start justify-center px-4">
        <div className="inline-flex items-center gap-2 rounded-full border border-green-500/20 bg-black/40 px-3 py-1">
          <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
          <span className="font-mono text-[10px] uppercase tracking-widest text-green-300/90">system online</span>
        </div>
        <h1 className="mt-6 font-mono text-4xl leading-tight text-green-100 sm:text-6xl">
          Building elegant exploits for real-world problems
        </h1>
        <p className="mt-4 max-w-2xl font-mono text-sm text-green-200/80">
          I craft resilient, minimal, and auditable software. Security-first, performance-focused, and designed to scale.
        </p>
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="rounded border border-green-500/30 bg-green-500/10 px-4 py-2 font-mono text-xs text-green-200 hover:bg-green-500/20 transition"
          >
            view projects
          </a>
          <a
            href="mailto:hello@hacker.dev"
            className="inline-flex items-center gap-2 rounded border border-green-500/20 px-4 py-2 font-mono text-xs text-green-200 hover:bg-green-500/10 transition"
          >
            contact
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
