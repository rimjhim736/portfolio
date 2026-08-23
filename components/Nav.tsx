const links = [
  { href: "#about", label: "About" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#leadership", label: "Leadership" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-line/70 bg-ink/80 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <a href="#top" className="font-display text-sm font-semibold tracking-tight text-fg">
          GA<span className="text-amber">.</span>
          <span className="ml-2 font-mono text-[11px] font-normal text-dim">data_analyst</span>
        </a>
        <nav className="hidden gap-8 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-mono text-[12px] uppercase tracking-wider text-dim transition-colors hover:text-mint"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="mailto:gunjitaanand275@gmail.com"
          className="hidden rounded-full border border-line px-4 py-1.5 font-mono text-[12px] text-fg transition-colors hover:border-mint hover:text-mint md:inline-block"
        >
          Say hello
        </a>
      </div>
    </header>
  );
}
