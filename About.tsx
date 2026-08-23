const stack = [
  "SQL",
  "Python",
  "R",
  "Power BI",
  "Excel (Advanced)",
  "Tableau",
  "ETL / EDA",
  "Random Forest",
];

export default function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-20">
      <div className="grid gap-10 md:grid-cols-[0.35fr_0.65fr]">
        <p className="eyebrow">01 — About</p>
        <div>
          <p className="text-lg leading-relaxed text-fg sm:text-xl">
            I'm a third-year B.Tech student specializing in Data Processing &amp; Data Science
            at JECRC University, Jaipur. Over the past two years I've stacked five internships —
            spanning a government-backed space-research analytics program, EdTech, and machine
            learning — because I wanted proof, not just coursework, that I can take a raw dataset
            and ship something a non-technical stakeholder can act on.
          </p>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-dim">
            That range shows up in how I work: I clean and model data in Python and R, query
            it in SQL, and package the findings in Power BI or Excel dashboards built for
            people who don't want to open a notebook. Outside of analytics, I led social
            media strategy for a 2,000+ member student body, which is where I picked up the
            habit of asking "so what should the reader do with this number" before I ship
            any chart.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {stack.map((s) => (
              <span
                key={s}
                className="rounded-full border border-line bg-panel px-3 py-1 font-mono text-[11px] text-dim transition-colors hover:border-mint hover:text-mint"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
