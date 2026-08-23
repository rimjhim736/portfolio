const roles = [
  {
    period: "Aug 2024 — Present",
    org: "Abhyudaya, JECRC University",
    title: "Head Coordinator",
    detail:
      "Leading cross-functional coordination for one of JECRC's flagship student societies, aligning creative, outreach, and social teams around shared event and campaign timelines.",
  },
  {
    period: "Nov 2024 — May 2025",
    org: "Abhyudaya, JECRC University",
    title: "Social Media Head",
    detail:
      "Owned content strategy and posting analytics across the society's channels, growing audience reach from 30K to 100K — a 3.3x increase — through data-informed cadence and creative testing.",
  },
  {
    period: "Apr 2024 — May 2025",
    org: "Abhyudaya, JECRC University",
    title: "Head Graphic Designer",
    detail:
      "Directed the visual identity for the society's campaigns and events, producing design assets used across social, print, and on-campus promotion.",
  },
  {
    period: "Oct 2024 — Jan 2025",
    org: "Abhyudaya, JECRC University",
    title: "VCO Outreach",
    detail:
      "Ran outreach efforts to build external partnerships and volunteer/community engagement for the society's initiatives.",
  },
  {
    period: "Jan 2025 — Mar 2025",
    org: "PitchPerfect Media",
    title: "Graphic Design Intern",
    detail:
      "Produced client-facing visual design work in a fast-turnaround media environment, translating briefs into finished creative assets.",
  },
];

export default function Leadership() {
  return (
    <section id="leadership" className="mx-auto max-w-6xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between">
        <p className="eyebrow">Leadership &amp; creative</p>
        <p className="hidden font-mono text-[11px] text-dim sm:block">design · content · outreach</p>
      </div>

      <div className="grid gap-4 sm:grid-cols-2">
        {roles.map((r) => (
          <div
            key={r.title + r.org}
            className="rounded-xl border border-line bg-panel p-5 transition-colors hover:border-amber/50"
          >
            <p className="font-mono text-[10.5px] uppercase tracking-wider text-dim">{r.period}</p>
            <h3 className="mt-1.5 font-display text-base font-semibold text-fg">{r.title}</h3>
            <p className="mt-0.5 font-mono text-[12px] text-amber">{r.org}</p>
            <p className="mt-2 text-[13px] leading-relaxed text-dim">{r.detail}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
