"use client";

import { useEffect, useRef, useState } from "react";

const categories = [
  {
    title: "Programming",
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
      </svg>
    ),
    skills: [
      { name: "Python", level: 90 },
      { name: "SQL", level: 85 },
      { name: "R", level: 75 },
      { name: "JavaScript", level: 60 },
    ],
  },
  {
    title: "Machine Learning",
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23-.693L5 14.5m14.8.8l1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0112 21a48.309 48.309 0 01-8.135-.687c-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
      </svg>
    ),
    skills: [
      { name: "Scikit-learn", level: 88 },
      { name: "XGBoost / LightGBM", level: 85 },
      { name: "TensorFlow / Keras", level: 80 },
      { name: "PyTorch", level: 72 },
    ],
  },
  {
    title: "Data Analysis",
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
      </svg>
    ),
    skills: [
      { name: "Pandas / NumPy", level: 92 },
      { name: "Plotly / Seaborn", level: 88 },
      { name: "Tableau", level: 75 },
      { name: "Apache Spark", level: 60 },
    ],
  },
  {
    title: "Tools & Platforms",
    icon: (
      <svg className="w-5 h-5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11.42 15.17L17.25 21A2.652 2.652 0 0021 17.25l-5.877-5.877M11.42 15.17l2.496-3.03c.317-.384.74-.626 1.208-.766M11.42 15.17l-4.655 5.653a2.548 2.548 0 11-3.586-3.586l5.654-4.654m5.887-5.657l4.654-5.654a2.548 2.548 0 013.586 3.586L14.42 11.42" />
      </svg>
    ),
    skills: [
      { name: "Jupyter / VS Code", level: 95 },
      { name: "Git / GitHub", level: 85 },
      { name: "Docker", level: 68 },
      { name: "AWS / GCP", level: 60 },
    ],
  },
];

const badges = [
  "Statistics", "Linear Algebra", "Probability", "A/B Testing",
  "Feature Engineering", "Model Deployment", "REST APIs", "ETL Pipelines",
  "Data Cleaning", "EDA", "Hypothesis Testing", "Deep Learning",
];

function SkillBar({ name, level, animated }: { name: string; level: number; animated: boolean }) {
  return (
    <div>
      <div className="flex justify-between text-sm mb-1.5">
        <span className="text-body">{name}</span>
        <span className="text-accent font-mono text-xs">{level}%</span>
      </div>
      <div className="h-1.5 bg-dark rounded-full overflow-hidden">
        <div
          className="h-full rounded-full transition-all duration-1000 ease-out"
          style={{
            width: animated ? `${level}%` : "0%",
            background: "linear-gradient(90deg, #1D9B74, #5DC9A4)",
          }}
        />
      </div>
    </div>
  );
}

export default function Skills() {
  const [animated, setAnimated] = useState(false);
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setAnimated(true);
          observer.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="skills" ref={ref} className="py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            Tech Stack
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-body">
            My <span className="text-accent">Skills</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        {/* Skill bars grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {categories.map((cat) => (
            <div
              key={cat.title}
              className="bg-dark rounded-2xl border border-white/5 hover:border-accent/30 p-6 transition-colors duration-300"
            >
              <div className="flex items-center gap-3 mb-6">
                {cat.icon}
                <h3 className="text-body font-semibold">{cat.title}</h3>
              </div>
              <div className="space-y-4">
                {cat.skills.map((s) => (
                  <SkillBar key={s.name} name={s.name} level={s.level} animated={animated} />
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills badges */}
        <div className="text-center">
          <p className="text-muted text-sm font-mono uppercase tracking-widest mb-6">
            Also familiar with
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {badges.map((b) => (
              <span
                key={b}
                className="text-sm text-body border border-white/10 bg-dark/60 hover:border-accent/40 hover:text-highlight px-4 py-1.5 rounded-full transition-colors duration-200 cursor-default"
              >
                {b}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
