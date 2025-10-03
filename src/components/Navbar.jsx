import { Terminal, Github } from 'lucide-react';

export default function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-green-500/10 bg-black/70 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        <div className="flex items-center gap-2">
          <Terminal className="h-5 w-5 text-green-400" />
          <span className="font-mono text-sm text-green-300">$ whoami</span>
          <span className="font-mono text-sm text-green-100/70">— hacker.dev</span>
        </div>
        <nav className="flex items-center gap-6">
          <a href="#projects" className="font-mono text-xs text-green-200/80 hover:text-green-200 transition">projects</a>
          <a href="#contact" className="font-mono text-xs text-green-200/80 hover:text-green-200 transition">contact</a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded border border-green-500/20 px-3 py-1.5 font-mono text-xs text-green-200 hover:bg-green-500/5 transition"
          >
            <Github className="h-4 w-4" />
            <span>github</span>
          </a>
        </nav>
      </div>
    </header>
  );
}
