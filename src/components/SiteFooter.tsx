import { Link } from "@tanstack/react-router";

export function SiteFooter() {
  return (
    <footer className="border-t border-gold/25 px-5 py-10 sm:px-8">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 text-sm text-muted-foreground sm:flex-row sm:items-end sm:justify-between">
        <div className="space-y-1">
          <p>© Лилия Рыдаева</p>
          <p>Самозанятая Рыдаева Лилия Михайловна</p>
        </div>
        <nav className="flex flex-col gap-3 sm:items-end" aria-label="Юридическая информация">
          <Link to="/privacy" className="transition-colors hover:text-gold">
            Политика конфиденциальности
          </Link>
          <Link to="/personal-data-consent" className="transition-colors hover:text-gold">
            Согласие на обработку ПД
          </Link>
          <Link to="/mailing-consent" className="transition-colors hover:text-gold">
            Согласие на рассылку
          </Link>
        </nav>
      </div>
    </footer>
  );
}
