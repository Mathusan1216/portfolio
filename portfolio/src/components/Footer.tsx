const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Footer() {
  return (
    <footer className="bg-surface border-t border-white/5 py-12">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#home" className="font-mono text-xl font-bold">
            <span className="text-highlight">MM</span>
            <span className="text-accent">.</span>
          </a>

          {/* Nav */}
          <nav className="flex flex-wrap justify-center gap-6">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-muted hover:text-highlight text-sm transition-colors"
              >
                {l.label}
              </a>
            ))}
          </nav>

          {/* Copyright */}
          <p className="text-muted text-sm">
            © {new Date().getFullYear()} Mathusan Manivannan. All rights reserved.
          </p>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 text-center">
          <p className="text-muted text-xs">
            Built with{" "}
            <span className="text-accent">Next.js</span> &amp;{" "}
            <span className="text-accent">Tailwind CSS</span>
          </p>
        </div>
      </div>
    </footer>
  );
}
