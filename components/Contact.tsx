export default function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 py-24">
      <div className="rounded-3xl border border-line bg-panel px-8 py-14 text-center sm:px-16">
        <p className="eyebrow mb-4">05 — Contact</p>
        <h2 className="mx-auto max-w-xl font-display text-3xl font-semibold leading-tight text-fg sm:text-4xl">
          Have a dataset that needs a story?
        </h2>
        <p className="mx-auto mt-4 max-w-md text-[14px] text-dim">
          Open to data analytics roles — analyst, BI, and reporting internships or
          entry-level positions. Based in Jaipur, working across India remote-first.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:gunjitaanand275@gmail.com"
            className="rounded-full bg-fg px-6 py-2.5 font-mono text-[12px] font-medium uppercase tracking-wider text-ink transition-transform hover:-translate-y-0.5"
          >
            gunjitaanand275@gmail.com
          </a>
          <a
            href="https://www.linkedin.com/in/gunjita-anand"
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-line px-6 py-2.5 font-mono text-[12px] uppercase tracking-wider text-fg transition-colors hover:border-mint hover:text-mint"
          >
            LinkedIn ↗
          </a>
        </div>
        <p className="mt-6 font-mono text-[11px] text-dim">+91 92165 87559 · Jaipur, India</p>
      </div>

      <footer className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-line/70 pt-6 text-center font-mono text-[11px] text-dim sm:flex-row sm:text-left">
        <p>© {new Date().getFullYear()} Gunjita Anand.</p>
        <p>Built with Next.js &amp; Tailwind CSS.</p>
      </footer>
    </section>
  );
}
