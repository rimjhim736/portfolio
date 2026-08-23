const roles = [
  {
    period: "Aug 2026 — Present",
    org: "Renu Sharma Education and Foundation",
    title: "Data Science Intern",
    detail:
      "Joined a foundation-wide analytics initiative, applying data science workflows to real program outcomes rather than academic datasets.",
  },
  {
    period: "May 2026 — Present",
    org: "CountryEdu Pvt. Ltd. × Bharat Space Education & Research Centre",
    title: "Data Analyst Intern — \"Def Space\" Government Summer Program",
    detail:
      "Selected for a government-affiliated summer analytics program, analyzing program and operations data for an EdTech-and-space-research partnership.",
  },
  {
    period: "Apr 2025 — Jul 2025",
    org: "Fusion Innovista",
    title: "Machine Learning Intern",
    detail:
      "One of 7 interns selected from 60+ applicants. Built training/testing pipelines and Random Forest models, shipping roughly two predictive projects per month.",
  },
  {
    period: "Feb 2025 — Mar 2025",
    org: "CodTech IT Solutions",
    title: "Data Analyst Intern",
    detail:
      "Analyzed and interpreted operational datasets to produce actionable, stakeholder-ready business insights under a compressed 2-month cycle.",
  },
];

export default function Experience() {
  return (
    <section id="experience" className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow mb-10">03 — Experience</p>

      <div className="relative border-l border-line pl-8">
        {roles.map((r, i) => (
          <div key={r.title + r.org} className="relative pb-10 last:pb-0">
            <span className="absolute -left-[calc(2rem+5px)] top-1.5 h-2.5 w-2.5 rounded-full border-2 border-ink bg-mint" />
            <p className="font-mono text-[11px] uppercase tracking-wider text-dim">{r.period}</p>
            <h3 className="mt-1.5 font-display text-base font-semibold text-fg sm:text-lg">
              {r.title}
            </h3>
            <p className="mt-0.5 font-mono text-[12.5px] text-amber">{r.org}</p>
            <p className="mt-2 max-w-2xl text-[13.5px] leading-relaxed text-dim">{r.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
