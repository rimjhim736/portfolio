const projects = [
  {
    tag: "Excel · Pivot Tables · VLOOKUP",
    title: "Sales Performance Dashboard",
    problem:
      "A mid-size retailer's sales data lived across disconnected monthly exports with no view of trends by region or customer segment.",
    approach:
      "Consolidated and cleaned raw exports, built pivot-table models to segment revenue by product line and region, and used VLOOKUP-driven lookups plus AI-assisted analysis to surface purchasing-behavior patterns.",
    impact: "Surfaced 3 underperforming SKU categories and a top-quartile customer segment driving outsized repeat revenue.",
    metrics: [
      { label: "Revenue trends mapped", value: "12 mo" },
      { label: "Customer segments", value: "6" },
    ],
  },
  {
    tag: "Power BI · DAX · Power Query",
    title: "Employee Analytics Dashboard",
    problem:
      "HR stakeholders needed a single, live view of headcount, attendance, and department-level performance instead of static monthly reports.",
    approach:
      "Modeled employee data in Power Query, wrote DAX measures for attendance and performance KPIs, and designed drill-down visuals by department for non-technical reviewers.",
    impact: "Cut manual HR reporting time from a multi-day spreadsheet exercise to a live, self-serve dashboard.",
    metrics: [
      { label: "KPI measures (DAX)", value: "10+" },
      { label: "Departments tracked", value: "All" },
    ],
  },
  {
    tag: "Python · Random Forest",
    title: "Predictive Modeling Sprints",
    problem:
      "As a Machine Learning Intern selected from 60+ applicants, I needed to turn ambiguous business questions into trained, testable models on a tight cycle.",
    approach:
      "Built training/testing pipelines and Random Forest models to predict target outcomes, shipping two full projects per month alongside a 7-person cohort.",
    impact: "Delivered 8 model iterations across a 4-month internship while maintaining a top-7-of-60+ selection standard.",
    metrics: [
      { label: "Models shipped", value: "8" },
      { label: "Cohort rank", value: "Top 7 / 60+" },
    ],
  },
];

export default function Projects() {
  return (
    <section id="work" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <p className="eyebrow">02 — Featured work</p>
        <p className="hidden font-mono text-[11px] text-dim sm:block">3 case studies</p>
      </div>

      <div className="grid gap-5 md:grid-cols-3">
        {projects.map((p) => (
          <article
            key={p.title}
            className="group flex flex-col rounded-2xl border border-line bg-panel p-6 transition-all hover:-translate-y-1 hover:border-mint/60"
          >
            <p className="font-mono text-[10.5px] uppercase tracking-wider text-amber">{p.tag}</p>
            <h3 className="mt-3 font-display text-lg font-semibold text-fg">{p.title}</h3>

            <div className="mt-4 space-y-3 text-[13px] leading-relaxed text-dim">
              <p><span className="text-fg/80">Problem — </span>{p.problem}</p>
              <p><span className="text-fg/80">Approach — </span>{p.approach}</p>
              <p><span className="text-fg/80">Impact — </span>{p.impact}</p>
            </div>

            <div className="tick-divider my-5" />

            <div className="mt-auto flex gap-6">
              {p.metrics.map((m) => (
                <div key={m.label}>
                  <p className="metric-num font-display text-xl font-semibold text-fg">{m.value}</p>
                  <p className="font-mono text-[10px] uppercase tracking-wide text-dim">{m.label}</p>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
