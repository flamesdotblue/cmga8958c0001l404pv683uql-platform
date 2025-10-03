import { Mail, Github } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 border-t border-green-500/10 bg-black">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-mono text-2xl text-green-100">Contact</h2>
        <p className="mt-1 max-w-2xl font-mono text-sm text-green-200/80">
          Need help securing or shipping your next product? I consult on architecture, audits, and high-impact features.
        </p>

        <div className="mt-8 grid gap-6 md:grid-cols-2">
          <form
            action="https://formspree.io/f/xbldjvdz"
            method="POST"
            className="rounded-lg border border-green-500/20 bg-black p-5"
          >
            <div className="grid gap-4">
              <label className="grid gap-1">
                <span className="font-mono text-xs text-green-300/90">name</span>
                <input
                  type="text"
                  name="name"
                  required
                  className="rounded border border-green-500/20 bg-black px-3 py-2 font-mono text-sm text-green-100 placeholder-green-300/40 outline-none ring-0 focus:border-green-400/40"
                  placeholder="alice"
                />
              </label>
              <label className="grid gap-1">
                <span className="font-mono text-xs text-green-300/90">email</span>
                <input
                  type="email"
                  name="email"
                  required
                  className="rounded border border-green-500/20 bg-black px-3 py-2 font-mono text-sm text-green-100 placeholder-green-300/40 outline-none ring-0 focus:border-green-400/40"
                  placeholder="alice@matrix.io"
                />
              </label>
              <label className="grid gap-1">
                <span className="font-mono text-xs text-green-300/90">message</span>
                <textarea
                  name="message"
                  rows={5}
                  required
                  className="rounded border border-green-500/20 bg-black px-3 py-2 font-mono text-sm text-green-100 placeholder-green-300/40 outline-none ring-0 focus:border-green-400/40"
                  placeholder={`briefly describe your project...`}
                />
              </label>
              <button
                type="submit"
                className="rounded border border-green-500/30 bg-green-500/10 px-4 py-2 font-mono text-xs text-green-200 hover:bg-green-500/20 transition"
              >
                send message
              </button>
            </div>
          </form>

          <div className="rounded-lg border border-green-500/20 bg-gradient-to-b from-green-500/5 to-transparent p-5">
            <div className="space-y-4">
              <div>
                <p className="font-mono text-sm text-green-200/80">Direct</p>
                <a href="mailto:hello@hacker.dev" className="mt-1 inline-flex items-center gap-2 font-mono text-sm text-green-200 hover:text-green-100 transition">
                  <Mail className="h-4 w-4" /> hello@hacker.dev
                </a>
              </div>
              <div>
                <p className="font-mono text-sm text-green-200/80">Code</p>
                <a href="https://github.com/" target="_blank" rel="noreferrer" className="mt-1 inline-flex items-center gap-2 font-mono text-sm text-green-200 hover:text-green-100 transition">
                  <Github className="h-4 w-4" /> github.com/your-handle
                </a>
              </div>
            </div>

            <div className="mt-8 border-t border-green-500/10 pt-6">
              <p className="font-mono text-[11px] text-green-300/80">
                <span className="mr-2 rounded bg-green-500/10 px-1.5 py-0.5">PGP</span>
                fingerprint: 9F2A C1D8 6E7B 1A22 4C9D  7D4F 8E21 1B7C D0F3 9AB1
              </p>
            </div>
          </div>
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-green-500/10 pt-6">
          <p className="font-mono text-[11px] text-green-300/70">© {new Date().getFullYear()} hacker.dev — built with React + Tailwind</p>
          <div className="font-mono text-[11px] text-green-300/70">echo "$ uptime"</div>
        </div>
      </div>
    </section>
  );
}
