"use client";

import { useState, useEffect } from "react";

const links = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-surface/90 backdrop-blur-md border-b border-accent/10 shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#home" className="font-mono text-xl font-bold tracking-tight">
          <span className="text-highlight">MM</span>
          <span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-highlight text-sm font-medium transition-colors duration-200"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="px-5 py-2 rounded-full text-sm font-semibold bg-accent text-dark hover:bg-highlight transition-colors duration-200"
          >
            Hire Me
          </a>
        </nav>

        {/* Mobile menu button */}
        <button
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setOpen(!open)}
        >
          <span
            className={`block w-5 h-0.5 bg-body transition-transform duration-300 ${
              open ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-body transition-opacity duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block w-5 h-0.5 bg-body transition-transform duration-300 ${
              open ? "-rotate-45 -translate-y-2" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          open ? "max-h-96" : "max-h-0"
        }`}
      >
        <div className="bg-surface border-t border-accent/10 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-muted hover:text-highlight text-sm font-medium transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="#contact"
            className="mt-2 px-5 py-2 rounded-full text-sm font-semibold bg-accent text-dark hover:bg-highlight transition-colors text-center"
            onClick={() => setOpen(false)}
          >
            Hire Me
          </a>
        </div>
      </div>
    </header>
  );
}
