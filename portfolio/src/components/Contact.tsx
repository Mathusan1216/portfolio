"use client";

import { useState } from "react";

const socials = [
  {
    label: "GitHub",
    href: "https://github.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
  {
    label: "Kaggle",
    href: "https://kaggle.com",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M18.825 23.859c-.022.092-.117.141-.281.141h-3.139c-.187 0-.351-.082-.492-.248l-5.178-6.589-1.448 1.374v5.111c0 .235-.117.352-.351.352H5.505c-.236 0-.354-.117-.354-.352V.353c0-.233.118-.353.354-.353h2.431c.234 0 .351.12.351.353v14.343l6.203-6.272c.165-.165.33-.246.495-.246h3.239c.144 0 .236.06.285.18.046.149.034.255-.036.315l-6.555 6.344 6.836 8.507c.095.104.117.208.07.334z" />
      </svg>
    ),
  },
  {
    label: "Email",
    href: "mailto:alex@example.com",
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
  },
];

type FormState = { name: string; email: string; subject: string; message: string };
const initial: FormState = { name: "", email: "", subject: "", message: "" };

export default function Contact() {
  const [form, setForm] = useState<FormState>(initial);
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("sending");
    setTimeout(() => {
      setStatus("sent");
      setForm(initial);
    }, 1200);
  }

  return (
    <section id="contact" className="py-28 bg-dark">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            Let&apos;s Connect
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-body">
            Get In <span className="text-accent">Touch</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left — info */}
          <div>
            <p className="text-muted leading-relaxed mb-10 text-lg">
              I&apos;m actively looking for internship and entry-level data science
              opportunities. Whether you have a project in mind, a question about
              my work, or just want to chat about data — my inbox is always open.
            </p>

            <div className="space-y-6 mb-12">
              {[
                {
                  label: "Email",
                  value: "alex@example.com",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  ),
                },
                {
                  label: "Location",
                  value: "Singapore",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  ),
                },
                {
                  label: "Response time",
                  value: "Within 24 hours",
                  icon: (
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  ),
                },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-surface border border-accent/20 flex items-center justify-center text-accent flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-muted text-xs font-mono uppercase tracking-wider">{item.label}</p>
                    <p className="text-body text-sm mt-0.5">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="w-10 h-10 rounded-xl bg-surface border border-white/10 flex items-center justify-center text-muted hover:text-highlight hover:border-accent/40 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-surface rounded-2xl border border-white/5 p-8">
            {status === "sent" ? (
              <div className="h-full flex flex-col items-center justify-center text-center gap-4 py-8">
                <div className="w-16 h-16 rounded-full bg-accent/10 border border-accent flex items-center justify-center text-accent">
                  <svg className="w-8 h-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-body">Message Sent!</h3>
                <p className="text-muted">Thanks for reaching out. I&apos;ll get back to you soon.</p>
                <button
                  onClick={() => setStatus("idle")}
                  className="mt-4 text-sm text-accent hover:text-highlight transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      required
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Jane Doe"
                      className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-body text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      required
                      value={form.email}
                      onChange={handleChange}
                      placeholder="jane@example.com"
                      className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-body text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={form.subject}
                    onChange={handleChange}
                    placeholder="Internship opportunity"
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-body text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Hi Alex, I'd love to chat about..."
                    className="w-full bg-dark border border-white/10 rounded-xl px-4 py-3 text-body text-sm placeholder:text-muted/50 focus:outline-none focus:border-accent transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="w-full py-3 rounded-xl bg-accent text-dark font-semibold text-sm hover:bg-highlight disabled:opacity-60 disabled:cursor-not-allowed transition-all duration-200"
                >
                  {status === "sending" ? "Sending…" : "Send Message"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
