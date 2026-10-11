"use client";

import { useRef, useState } from "react";

type Project = {
  title: string;
  subtitle?: string;
  description: string;
  tags: string[];
  github?: string;
  demo?: string;
};

const projects: Project[] = [
  {
    title: "StaySync AI",
    subtitle: "Smart Student Living Platform",
    description:
      "A smart student living platform for discovering accommodation and managing living expenses. Combines hostel and room search with filtering, restaurant and food discovery, food ordering, delivery tracking, and multiple user dashboards. AI features include a room recommendation engine, similarity-based restaurant matching, and a budget-aware, constraint-based meal planner. SLIIT team project.",
    tags: [
      "React Native",
      "Node.js",
      "Express",
      "MongoDB",
      "Python",
      "Scikit-learn",
      "Recommendation System",
      "REST API",
    ],
    github: "https://github.com/IT24100268/StaySync_AI",
  },
  {
    title: "Full-Stack POS & Student Order System",
    description:
      "A full-stack point-of-sale and ordering system built for a real client to manage food ordering and day-to-day business operations. Covers product and menu management, customer and student orders, CRUD workflows, and a user-facing ordering flow backed by a relational database and REST API.",
    tags: ["React", "Django", "Python", "PostgreSQL", "REST API", "Full Stack"],
    github: "https://github.com/IT24100268/Cafe-Lush",
  },
  {
    title: "Student Stress Level Predictor",
    description:
      "Machine learning project that predicts student stress levels from academic, lifestyle, and personal factors such as study habits, sleep, physical activity, social media usage, assignments, finances, caffeine, part-time work, CGPA, and commute time. Explored Logistic Regression, KNN, Decision Tree, SVM, Random Forest, and Gradient Boosting with full preprocessing, feature engineering, and model evaluation.",
    tags: [
      "Python",
      "Machine Learning",
      "Scikit-learn",
      "Pandas",
      "NumPy",
      "Classification",
    ],
  },
  {
    title: "Fake Job Posting Detector",
    description:
      "Data science project that classifies job postings as legitimate or potentially fraudulent. Applies data preprocessing, text and feature engineering, and machine learning classification to surface fraud signals in job listings, with evaluation focused on the imbalance between genuine and fake postings.",
    tags: [
      "Python",
      "Machine Learning",
      "Data Science",
      "NLP",
      "Classification",
      "Pandas",
      "Scikit-learn",
    ],
  },
];

const VISIBLE = 3;

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState<(string | null)[]>(
    Array(projects.length).fill(null)
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const maxIndex = Math.max(0, projects.length - VISIBLE);

  function handlePrev() {
    setCurrent((c) => Math.max(0, c - 1));
  }

  function handleNext() {
    setCurrent((c) => Math.min(maxIndex, c + 1));
  }

  function handleFileChange(
    e: React.ChangeEvent<HTMLInputElement>,
    idx: number
  ) {
    const file = e.target.files?.[0];
    if (!file) return;
    const url = URL.createObjectURL(file);
    setImages((prev) => {
      const next = [...prev];
      next[idx] = url;
      return next;
    });
  }

  function removeImage(idx: number) {
    setImages((prev) => {
      const next = [...prev];
      next[idx] = null;
      return next;
    });
  }

  const visibleIndices = Array.from(
    { length: Math.min(VISIBLE, projects.length) },
    (_, i) => current + i
  );

  return (
    <section id="projects" className="py-28 bg-dark">
      <div className="max-w-7xl mx-auto px-6">

        {/* ── Header ── */}
        <div className="flex flex-col md:flex-row md:items-center gap-8 mb-16">
          {/* Left: labels + title */}
          <div className="flex-1">
            <p className="font-mono text-accent text-xs tracking-widest uppercase mb-3">
              Working Process
            </p>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight">
              <span className="text-body">Latest Working</span>{" "}
              <span className="text-accent">Project</span>
            </h2>
          </div>

          {/* Divider */}
          <div className="hidden md:block w-px self-stretch bg-white/10" />

          {/* Right: description + nav arrows */}
          <div className="flex-1 flex flex-col gap-6">
            <p className="text-muted leading-relaxed">
              A selection of machine learning, data science, and full-stack
              projects built to solve real-world problems, from academic work to
              a system delivered for a live client.
            </p>
            <div className="flex items-center gap-3">
              <button
                onClick={handlePrev}
                disabled={current === 0}
                aria-label="Previous projects"
                className="w-11 h-11 border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-dark transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={handleNext}
                disabled={current >= maxIndex}
                aria-label="Next projects"
                className="w-11 h-11 border border-accent flex items-center justify-center text-accent hover:bg-accent hover:text-dark transition-all duration-200 disabled:opacity-30 disabled:cursor-not-allowed"
              >
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* ── Project cards ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {visibleIndices.map((projectIdx) => {
            const p = projects[projectIdx];
            const img = images[projectIdx];
            const hasLinks = Boolean(p.github || p.demo);

            return (
              <article
                key={p.title}
                className="group relative bg-[#111827] border border-white/8 rounded-lg overflow-hidden flex flex-col"
              >
                {/* Screenshot area */}
                <div className="relative aspect-[4/3] bg-[#0d1117] overflow-hidden">
                  {img ? (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={img}
                        alt={p.title}
                        className="w-full h-full object-cover"
                      />
                      <button
                        type="button"
                        onClick={() => removeImage(projectIdx)}
                        aria-label="Remove image"
                        className="absolute top-2 right-2 w-7 h-7 rounded-full bg-dark/80 border border-white/20 flex items-center justify-center text-muted hover:text-highlight transition-colors opacity-0 group-hover:opacity-100"
                      >
                        <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                        </svg>
                      </button>
                    </>
                  ) : (
                    <button
                      type="button"
                      onClick={() => inputRefs.current[projectIdx]?.click()}
                      className="w-full h-full flex flex-col items-center justify-center gap-3 text-muted hover:text-accent transition-colors duration-200"
                    >
                      <svg className="w-10 h-10" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                      <span className="text-xs font-mono">Upload screenshot</span>
                    </button>
                  )}

                  <input
                    ref={(el) => { inputRefs.current[projectIdx] = el; }}
                    type="file"
                    accept="image/*"
                    className="hidden"
                    onChange={(e) => handleFileChange(e, projectIdx)}
                  />
                </div>

                {/* Card body */}
                <div className="flex flex-col flex-1 p-5">
                  <h3 className="text-body font-semibold text-base group-hover:text-highlight transition-colors">
                    {p.title}
                  </h3>
                  {p.subtitle && (
                    <p className="text-accent text-xs font-mono mt-0.5">
                      {p.subtitle}
                    </p>
                  )}
                  <p className="text-muted text-sm leading-relaxed flex-1 mt-2 mb-4">
                    {p.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-4">
                    {p.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs font-mono text-accent bg-accent/10 border border-accent/20 px-2 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links — only rendered when a real URL exists */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5 min-h-[2.75rem]">
                    {p.github && (
                      <a
                        href={p.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-muted hover:text-highlight text-sm transition-colors"
                      >
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
                        </svg>
                        Code
                      </a>
                    )}
                    {p.demo && (
                      <a
                        href={p.demo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 text-muted hover:text-highlight text-sm transition-colors"
                      >
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                        Live Demo
                      </a>
                    )}
                    {!hasLinks && (
                      <span className="text-muted/60 text-xs font-mono">
                        Academic project · code available on request
                      </span>
                    )}
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com/Mathusan1216"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-3 border border-accent text-accent font-semibold text-sm hover:bg-accent hover:text-dark transition-all duration-200"
          >
            View All on GitHub
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
