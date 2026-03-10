import Link from "next/link";

import { NAV, ORG_NAME } from "@/lib/content";

export function SiteShell({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-zinc-50 text-zinc-900">
      <header className="border-b border-zinc-200 bg-white/70 backdrop-blur">
        <div className="mx-auto w-full max-w-5xl px-6 py-6">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <Link href="/" className="text-sm font-semibold tracking-tight">
              {ORG_NAME}
            </Link>
            <nav className="flex flex-wrap gap-2">
              {NAV.map((n) => (
                <Link
                  key={n.href}
                  href={n.href}
                  className="rounded-full border border-zinc-200 bg-white px-3 py-1.5 text-xs font-semibold text-zinc-900 hover:bg-zinc-50"
                >
                  {n.title}
                </Link>
              ))}
            </nav>
          </div>

          <h1 className="mt-6 text-3xl font-semibold tracking-tight sm:text-5xl">
            {title}
          </h1>
          {subtitle ? (
            <p className="mt-3 max-w-3xl text-base leading-7 text-zinc-700 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
        </div>
      </header>

      <main className="mx-auto w-full max-w-5xl px-6 py-10">{children}</main>

      <footer className="border-t border-zinc-200 bg-white/60">
        <div className="mx-auto w-full max-w-5xl px-6 py-6 text-xs text-zinc-600">
          {ORG_NAME} • Public overview • Draft
        </div>
      </footer>
    </div>
  );
}
