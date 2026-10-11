"use client";

import { useRef, useState } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com/Mathusan1216",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/mathusan-manivannan16/",
    icon: (
      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const stats = [
  { value: "4", label: "Projects Built" },
  { value: "3.172", label: "GPA" },
  { value: "2024", label: "SLIIT Intake" },
];

export default function Hero() {
  const [photo, setPhoto] = useState<string | null>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setPhoto(url);
  }

  return (
    <section
      id="home"
      className="min-h-screen bg-dark flex items-center relative overflow-hidden"
    >
      {/* Subtle diagonal background shapes */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute -top-32 -right-32 w-[500px] h-[500px] opacity-10 rotate-12 rounded-3xl"
          style={{ background: "linear-gradient(135deg, #1D9B74, transparent)" }}
        />
        <div
          className="absolute -bottom-32 -left-32 w-[400px] h-[400px] opacity-8 -rotate-12 rounded-3xl"
          style={{ background: "linear-gradient(135deg, #0F1720, #1D9B74)" }}
        />
      </div>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full grid md:grid-cols-[1fr_auto] gap-12 items-center pt-20 pb-10">
        {/* ── Left: text content ── */}
        <div>
          <p className="text-muted text-sm mb-1">Hi I am</p>

          <h1 className="text-2xl md:text-3xl font-semibold text-body mb-3">
            Mathusan Manivannan
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight mb-6">
            <span className="text-accent">Data Science</span>
            <br />
            <span className="text-body">Undergraduate</span>
          </h2>

          <p className="text-muted leading-relaxed max-w-xl mb-8">
            BSc (Hons) Information Technology undergraduate at SLIIT, specialising
            in Data Science. I build practical software, machine learning
            solutions, and data-driven systems that turn ideas into working
            products.
          </p>

          {/* Social icons */}
          <div className="flex items-center gap-3 mb-8">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-body/20 flex items-center justify-center text-muted hover:text-accent hover:border-accent transition-all duration-200"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* CTA buttons */}
          <div className="flex flex-wrap gap-4 mb-12">
            <a
              href="#contact"
              className="px-8 py-3 rounded-full bg-accent text-dark font-semibold text-sm hover:bg-highlight transition-colors duration-200"
            >
              Hire Me
            </a>
            <a
              href="/Mathusan-Manivannan-CV-v2.pdf"
              download
              className="px-8 py-3 rounded-full border border-body/40 text-body font-semibold text-sm hover:border-accent hover:text-accent transition-colors duration-200"
            >
              Download CV
            </a>
          </div>

          {/* Stats */}
          <div className="inline-flex border border-white/10 rounded-2xl overflow-hidden bg-surface/60 backdrop-blur-sm">
            {stats.map((s, i) => (
              <div
                key={s.label}
                className={`px-8 py-4 text-center ${
                  i < stats.length - 1 ? "border-r border-white/10" : ""
                }`}
              >
                <p className="text-2xl font-bold text-accent">{s.value}</p>
                <p className="text-muted text-xs mt-0.5 whitespace-nowrap">{s.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* ── Right: circular photo upload ── */}
        <div className="flex items-center justify-center">
          <div className="relative w-72 h-72 md:w-[320px] md:h-[320px]">
            {/* Outer glow ring */}
            <div className="absolute inset-0 rounded-full bg-accent/10 blur-2xl" />

            {/* Dark backing circle */}
            <div className="absolute inset-3 rounded-full bg-surface" />

            {/* Clickable upload / preview circle */}
            <button
              type="button"
              onClick={() => inputRef.current?.click()}
              className="absolute inset-0 rounded-full border-2 border-dashed border-accent/50 overflow-hidden flex flex-col items-center justify-center group hover:border-accent transition-colors duration-300 z-10"
              aria-label="Upload profile photo"
            >
              {photo ? (
                /* eslint-disable-next-line @next/next/no-img-element */
                <img
                  src={photo}
                  alt="Profile"
                  className="w-full h-full object-cover rounded-full"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-muted group-hover:text-accent transition-colors duration-300 px-6 text-center">
                  <svg
                    className="w-10 h-10"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={1.5}
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
                    />
                  </svg>
                  <span className="text-xs leading-relaxed">
                    Click to upload
                    <br />
                    your photo
                  </span>
                </div>
              )}
            </button>

            {/* Hidden file input */}
            <input
              ref={inputRef}
              type="file"
              accept="image/*"
              className="hidden"
              onChange={handleFileChange}
            />

            {/* Remove photo button — only shown when photo is set */}
            {photo && (
              <button
                type="button"
                onClick={() => setPhoto(null)}
                className="absolute bottom-3 right-3 z-20 w-8 h-8 rounded-full bg-dark border border-accent/40 flex items-center justify-center text-muted hover:text-highlight hover:border-highlight transition-colors"
                aria-label="Remove photo"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
