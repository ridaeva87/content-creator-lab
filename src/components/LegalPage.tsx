import { Link } from "@tanstack/react-router";
import { SiteFooter } from "./SiteFooter";

export function LegalPage({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle: string;
  children: React.ReactNode;
}) {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <article className="mx-auto max-w-4xl px-5 py-12 sm:px-8 sm:py-20">
        <Link
          to="/"
          className="inline-flex rounded-full border border-gold/40 px-5 py-2 text-sm transition-colors hover:border-gold hover:text-gold"
        >
          ← Вернуться на главную
        </Link>
        <header className="mt-10">
          <h1 className="text-2xl leading-tight font-extrabold sm:text-4xl">{title}</h1>
          <p className="mt-3 text-sm text-gold">{subtitle}</p>
          <div className="gold-line mt-6 w-32" />
        </header>
        <div className="legal-content mt-10">{children}</div>
        <Link
          to="/"
          className="mt-12 inline-flex rounded-full bg-rose px-6 py-3 font-display text-sm font-bold text-primary-foreground"
        >
          Вернуться на главную
        </Link>
      </article>
      <SiteFooter />
    </main>
  );
}
