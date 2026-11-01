import type { Dict } from "@/lib/i18n";

export default function Footer({ t }: { t: Dict }) {
  return (
    <footer className="border-t border-divider">
      <div className="mx-auto flex max-w-content flex-col gap-6 px-6 py-14 md:flex-row md:items-end md:justify-between">
        <p className="font-serif text-5xl leading-none md:text-7xl">
          The Light <em>Project</em>
        </p>
        <div className="text-sm text-secondary md:text-right">
          <p>{t.footer.role}</p>
          <p className="mt-1">© {new Date().getFullYear()} {t.footer.rights}</p>
        </div>
      </div>
    </footer>
  );
}
