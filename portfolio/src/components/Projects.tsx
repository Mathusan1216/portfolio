"use client";

import { useRef, useState } from "react";

const projects = [
  {
    title: "Customer Churn Prediction",
    description:
      "Binary classification using XGBoost and LightGBM to predict telecom customer churn with 94% AUC-ROC. SHAP values used for model explainability.",
    tags: ["Python", "XGBoost", "SHAP", "Pandas", "Scikit-learn"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "NLP Sentiment Analyser",
    description:
      "Fine-tuned a BERT model for multi-class sentiment analysis on 100K product reviews, achieving 92% accuracy and deployed as a REST API.",
    tags: ["Python", "BERT", "HuggingFace", "FastAPI", "PyTorch"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Sales Time-Series Forecasting",
    description:
      "Compared ARIMA, Prophet, and LSTM on retail sales data. Reduced MAPE by 23% over baseline with an ensemble of all three models.",
    tags: ["Python", "Prophet", "TensorFlow", "Time Series"],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "House Price Prediction",
    description:
      "Kaggle competition entry. Placed in the top 5% with stacked regressors and extensive feature engineering on the Ames Housing dataset.",
    tags: ["Python", "Scikit-learn", "XGBoost", "Feature Eng."],
    github: "https://github.com",
    demo: null,
  },
  {
    title: "COVID-19 Data Dashboard",
    description:
      "Interactive Plotly Dash dashboard visualising global COVID-19 trends using live data from the Johns Hopkins CSSE dataset.",
    tags: ["Python", "Plotly", "Dash", "Pandas", "REST API"],
    github: "https://github.com",
    demo: "https://demo.example.com",
  },
  {
    title: "Medical Image Classification",
    description:
      "Custom CNN trained from scratch and fine-tuned ResNet-50 for classifying chest X-ray images as normal/pneumonia. 96% test accuracy.",
    tags: ["Python", "TensorFlow", "CNN", "Computer Vision"],
    github: "https://github.com",
    demo: null,
  },
];

const VISIBLE = 3;

export default function Projects() {
  const [current, setCurrent] = useState(0);
  const [images, setImages] = useState<(string | null)[]>(
    Array(projects.length).fill(null)
  );
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  const maxIndex = projects.length - VISIBLE;

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

  const visibleIndices = Array.from({ length: VISIBLE }, (_, i) => current + i);

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
              A selection of data science and machine learning projects built to
              solve real-world problems with clean, reproducible code.
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
                  <h3 className="text-body font-semibold text-base mb-2 group-hover:text-highlight transition-colors">
                    {p.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed flex-1 mb-4">
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

                  {/* Links */}
                  <div className="flex items-center gap-4 pt-4 border-t border-white/5">
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
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-14">
          <a
            href="https://github.com"
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
