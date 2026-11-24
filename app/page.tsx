import { Benefits } from "@/components/Benefits";
import { site } from "@/content/site";

export default function Home() {
  return (
    <>
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-6 py-6">
        <span className="font-semibold tracking-tight">{site.name}</span>
        <a href={site.cta.href} className="text-sm text-muted underline-offset-4 hover:text-foreground hover:underline">
          {site.cta.label}
        </a>
      </header>

      <main className="mx-auto w-full max-w-5xl flex-1 px-6">
        <section className="py-20 sm:py-32">
          <h1 className="max-w-3xl text-4xl font-semibold tracking-tight text-balance sm:text-6xl">{site.pitch}</h1>
          <p className="mt-6 max-w-xl text-lg text-muted">{site.audience}</p>
          <a
            href={site.cta.href}
            className="mt-10 inline-flex items-center rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition hover:opacity-85 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-foreground"
          >
            {site.cta.label}
          </a>
        </section>

        <section className="border-t border-border py-16">
          <Benefits items={site.benefits} />
        </section>
      </main>

      <footer className="mx-auto w-full max-w-5xl px-6 py-10 text-sm text-muted">
        {site.name}
      </footer>
    </>
  );
}
