import Image from "next/image";
import Sparkline from "./Sparkline";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pb-16 pt-14 md:pt-24">
      <div className="grid gap-14 md:grid-cols-[1.1fr_0.9fr] md:items-center">
        {/* Left: thesis */}
        <div className="animate-rise">
          <div className="mb-5 flex items-center gap-3">
            <Image
              src="/profile.jpg"
              alt="Gunjita Anand"
              width={44}
              height={44}
              className="h-11 w-11 rounded-full border border-line object-cover"
            />
            <div className="flex items-center gap-2">
              <span className="h-1.5 w-1.5 rounded-full bg-mint animate-pulseDot" />
              <p className="eyebrow">Open to data analytics roles</p>
            </div>
          </div>
          <h1 className="font-display text-4xl font-semibold leading-[1.08] tracking-tight text-fg sm:text-5xl lg:text-[3.4rem]">
            Gunjita Anand turns messy
            <span className="text-amber"> spreadsheets </span>
            into decisions people actually act on.
          </h1>
          <p className="mt-6 max-w-lg text-[15px] leading-relaxed text-dim">
            Data analyst and B.Tech student specializing in data science, currently building
            dashboards and predictive models across five internships spanning EdTech, a
            government space-research program, and machine learning. Fluent in SQL, Python,
            R, Power BI, and Excel — comfortable owning a dataset from raw export to
            executive-ready story.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#work"
              className="rounded-full bg-fg px-5 py-2.5 font-mono text-[12px] font-medium uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5"
            >
              View dashboards
            </a>
            <a
              href="#contact"
              className="rounded-full border border-line px-5 py-2.5 font-mono text-[12px] uppercase tracking-wider text-fg transition-colors hover:border-mint hover:text-mint"
            >
              Get resume
            </a>
          </div>
        </div>

        {/* Right: signature dashboard panel */}
        <div className="animate-rise [animation-delay:120ms]">
          <div className="rounded-2xl border border-line bg-panel p-4 shadow-[0_0_0_1px_rgba(255,255,255,0.02)]">
            <div className="flex items-center justify-between border-b border-line/70 pb-3">
              <p className="font-mono text-[11px] uppercase tracking-wider text-dim">
                profile_metrics.dashboard
              </p>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-coral/70" />
                <span className="h-2 w-2 rounded-full bg-amber/70" />
                <span className="h-2 w-2 rounded-full bg-mint/70" />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-3 pt-4">
              <DashCard
                label="Audience reach"
                value="100K"
                sub="from 30K baseline"
                color="#FFB454"
                points={[30, 42, 55, 68, 80, 92, 100]}
              />
              <DashCard
                label="SQL — HackerRank"
                value="5★"
                sub="top rating tier"
                color="#6EE7B7"
                points={[2, 3, 3, 4, 4, 5, 5]}
              />
              <DashCard
                label="Active internships"
                value="05"
                sub="analyst + ML tracks"
                color="#8FA6FF"
                points={[1, 1, 2, 3, 3, 4, 5]}
              />
              <DashCard
                label="Dashboards shipped"
                value="02+"
                sub="Excel & Power BI"
                color="#FF8C6B"
                points={[0, 1, 1, 1, 2, 2, 2]}
              />
            </div>

            <div className="tick-divider my-4" />
            <p className="font-mono text-[10.5px] leading-relaxed text-dim">
              last_sync: Aug 2026 · source: internship_logs, certifications, project_repo
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function DashCard({
  label,
  value,
  sub,
  color,
  points,
}: {
  label: string;
  value: string;
  sub: string;
  color: string;
  points: number[];
}) {
  return (
    <div className="rounded-xl border border-line/80 bg-panel2 p-3.5 transition-colors hover:border-line">
      <p className="font-mono text-[10px] uppercase tracking-wider text-dim">{label}</p>
      <p className="metric-num mt-1 font-display text-2xl font-semibold text-fg">{value}</p>
      <div className="mt-2">
        <Sparkline points={points} color={color} width={100} height={28} />
      </div>
      <p className="mt-1 font-mono text-[10px] text-dim">{sub}</p>
    </div>
  );
}
