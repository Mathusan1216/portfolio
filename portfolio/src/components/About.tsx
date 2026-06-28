const facts = [
  { label: "Name", value: "Mathusan Manivannan" },
  { label: "Degree", value: "BSc (Hons) in Information Technology" },
  { label: "Specialization", value: "Data Science" },
  { label: "University", value: "SLIIT" },
  { label: "GPA", value: "3.172" },
  { label: "Available", value: "Open to Internships" },
];

const timeline = [
  {
    year: "2022",
    title: "Started B.Sc. CS",
    desc: "Enrolled in Computer Science with Data Science track.",
  },
  {
    year: "2023",
    title: "First Kaggle Top 10%",
    desc: "Placed in top 10% on Titanic & House Prices competitions.",
  },
  {
    year: "2024",
    title: "Research Intern",
    desc: "ML research internship focused on NLP and information extraction.",
  },
  {
    year: "2025",
    title: "Open Source Contributor",
    desc: "Merged PRs to pandas & scikit-learn documentation.",
  },
];

export default function About() {
  return (
    <section id="about" className="py-28 bg-surface">
      <div className="max-w-6xl mx-auto px-6">
        {/* Heading */}
        <div className="text-center mb-20">
          <p className="font-mono text-accent text-sm tracking-widest uppercase mb-3">
            Who I Am
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-body">
            About <span className="text-accent">Me</span>
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left — bio + facts */}
          <div>
            <div className="w-20 h-20 rounded-2xl bg-dark border border-accent/30 flex items-center justify-center mb-8">
              <svg className="w-10 h-10 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-highlight mb-4">
              Data Scientist in the Making
            </h3>
            <p className="text-muted leading-relaxed mb-5">
              I&apos;m a third-year Computer Science student specialising in Data
              Science. My work sits at the intersection of statistics, software
              engineering, and domain knowledge — I love turning messy, real-world
              datasets into clean, actionable stories.
            </p>
            <p className="text-muted leading-relaxed mb-10">
              Outside of coursework I compete on Kaggle, read papers on arXiv, and
              occasionally write posts explaining ML concepts to beginners. When the
              laptop is closed, you&apos;ll find me bouldering or hunting for great
              ramen.
            </p>

            {/* Facts grid */}
            <div className="grid grid-cols-2 gap-x-8 gap-y-5 border border-accent/15 rounded-2xl bg-dark/50 p-6">
              {facts.map((f) => (
                <div key={f.label}>
                  <span className="block text-accent text-xs font-mono uppercase tracking-wider mb-0.5">
                    {f.label}
                  </span>
                  <span className="text-body text-sm">{f.value}</span>
                </div>
              ))}
            </div>

            <a
              href="/Mathusan-Manivannan-CV-v2.pdf"
              download
              className="inline-flex items-center gap-2 mt-8 px-6 py-3 rounded-full bg-accent text-dark font-semibold text-sm hover:bg-highlight transition-colors duration-200"
            >
              Download CV
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </a>
          </div>

          {/* Right — timeline */}
          <div>
            <h3 className="text-lg font-semibold text-highlight mb-8 font-mono tracking-wide uppercase text-sm">
              Journey
            </h3>
            <div className="relative pl-8 border-l border-accent/30 space-y-10">
              {timeline.map((item) => (
                <div key={item.year} className="relative group">
                  {/* dot */}
                  <span className="absolute -left-[2.15rem] top-1 w-3 h-3 rounded-full bg-accent group-hover:bg-highlight ring-4 ring-surface transition-colors duration-200" />
                  <span className="font-mono text-accent text-xs tracking-widest uppercase">
                    {item.year}
                  </span>
                  <h4 className="text-body font-semibold mt-1 mb-1">{item.title}</h4>
                  <p className="text-muted text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
