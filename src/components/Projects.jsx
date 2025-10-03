import { ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'CipherGrid',
    desc: 'Zero-knowledge note sharing with ephemeral keys and client-side encryption.',
    stack: ['TypeScript', 'WebCrypto', 'Vite'],
    link: 'https://example.com/ciphergrid',
  },
  {
    title: 'Sentinel',
    desc: 'Real-time threat intel aggregator with streaming detection rules.',
    stack: ['Go', 'PostgreSQL', 'NATS'],
    link: 'https://example.com/sentinel',
  },
  {
    title: 'BlackBox UI',
    desc: 'Auditable UI primitives with deterministic styling and zero runtime CSS.',
    stack: ['React', 'Tailwind', 'Radix'],
    link: 'https://example.com/blackbox',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 border-t border-green-500/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <div className="mb-10 flex items-end justify-between">
          <div>
            <h2 className="font-mono text-2xl text-green-100">Projects</h2>
            <p className="mt-1 font-mono text-xs text-green-200/70">selected work and experiments</p>
          </div>
          <div className="hidden md:block">
            <div className="rounded border border-green-500/20 px-3 py-1 font-mono text-[11px] text-green-300/90">grep -R "craft" ./src</div>
          </div>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((p) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noreferrer"
              className="group relative rounded-lg border border-green-500/20 bg-gradient-to-b from-green-500/5 to-transparent p-5 transition hover:border-green-400/30 hover:from-green-500/10"
            >
              <div className="flex items-start justify-between">
                <h3 className="font-mono text-lg text-green-100">{p.title}</h3>
                <ExternalLink className="h-4 w-4 text-green-300/70 opacity-0 transition group-hover:opacity-100" />
              </div>
              <p className="mt-2 font-mono text-sm text-green-200/80">{p.desc}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.stack.map((s) => (
                  <span key={s} className="rounded border border-green-500/20 px-2 py-0.5 font-mono text-[10px] text-green-300/90">
                    {s}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
