const proficiency = [
  { skill: "SQL", level: 90 },
  { skill: "Excel / Power Query", level: 90 },
  { skill: "Power BI (DAX)", level: 80 },
  { skill: "Python", level: 75 },
  { skill: "R", level: 65 },
  { skill: "Tableau", level: 55 },
];

const certifications = [
  { name: "Deloitte Data Analytics Job Simulation", org: "Deloitte", date: "Apr 2026" },
  { name: "Data Science with R & Statistics", org: "Udemy", date: "Jan 2026" },
  { name: "Data Visualization with Power BI", org: "Udemy", date: "Jan 2025" },
  { name: "30 Days of Python Challenge", org: "Self-paced", date: "Jun 2025" },
];

export default function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-20">
      <p className="eyebrow mb-10">04 — Skills &amp; certifications</p>

      <div className="grid gap-12 md:grid-cols-2">
        <div>
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wide text-fg">
            Tool proficiency
          </h3>
          <div className="space-y-4">
            {proficiency.map((p) => (
              <div key={p.skill}>
                <div className="mb-1.5 flex items-baseline justify-between">
                  <span className="font-mono text-[12px] text-fg">{p.skill}</span>
                  <span className="font-mono text-[11px] text-dim">{p.level}%</span>
                </div>
                <div className="h-1.5 w-full overflow-hidden rounded-full bg-panel2">
                  <div
                    className="h-full rounded-full bg-gradient-to-r from-mint to-periwinkle"
                    style={{ width: `${p.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="mb-5 font-display text-sm font-semibold uppercase tracking-wide text-fg">
            Certifications &amp; achievements
          </h3>
          <ul className="space-y-3">
            {certifications.map((c) => (
              <li
                key={c.name}
                className="flex items-center justify-between rounded-lg border border-line bg-panel px-4 py-3"
              >
                <div>
                  <p className="text-[13px] text-fg">{c.name}</p>
                  <p className="font-mono text-[10.5px] text-dim">{c.org}</p>
                </div>
                <span className="font-mono text-[10.5px] text-dim">{c.date}</span>
              </li>
            ))}
          </ul>
          <div className="mt-4 flex gap-3">
            <span className="rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[11px] text-amber">
              HackerRank SQL — 5★
            </span>
            <span className="rounded-full border border-line bg-panel px-3 py-1.5 font-mono text-[11px] text-mint">
              HackerRank Python — 3★
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
