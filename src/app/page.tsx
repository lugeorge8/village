import Link from "next/link";

import { SiteShell } from "@/components/SiteShell";
import { ORG_NAME, SUMMARY } from "@/lib/content";

export default function HomePage() {
  return (
    <SiteShell title={ORG_NAME} subtitle={SUMMARY.tagline}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Why
          </div>
          <div className="mt-3 text-sm leading-7 text-zinc-700">
            We want a consistent, safe “third space” where youth can learn, build
            confidence, and form healthy community — beyond home and school.
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>Clear supervision + structure</li>
            <li>Skill-building + mentoring</li>
            <li>Belonging without chaos</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Beta (first step)
          </div>
          <div className="mt-3 text-sm leading-7 text-zinc-700">
            Start small so we can learn quickly and run it well.
          </div>
          <div className="mt-4 grid gap-3 text-sm text-zinc-700">
            <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
              <span className="font-semibold">Kids</span>
              <span>{SUMMARY.beta.kids}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
              <span className="font-semibold">Staff</span>
              <span>{SUMMARY.beta.staff}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
              <span className="font-semibold">Days</span>
              <span>{SUMMARY.beta.days.join(" + ")}</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-zinc-500">{SUMMARY.beta.note}</div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Link
          href="/people"
          className="rounded-3xl border border-zinc-200 bg-white p-6 hover:bg-zinc-50"
        >
          <div className="text-lg font-semibold">People</div>
          <div className="mt-2 text-sm text-zinc-700">
            Who can help + what roles we need.
          </div>
        </Link>
        <Link
          href="/development"
          className="rounded-3xl border border-zinc-200 bg-white p-6 hover:bg-zinc-50"
        >
          <div className="text-lg font-semibold">Development plan</div>
          <div className="mt-2 text-sm text-zinc-700">
            Beta → learn → iterate → scale.
          </div>
        </Link>
        <Link
          href="/programming"
          className="rounded-3xl border border-zinc-200 bg-white p-6 hover:bg-zinc-50"
        >
          <div className="text-lg font-semibold">Programming</div>
          <div className="mt-2 text-sm text-zinc-700">
            What kids actually do when they show up.
          </div>
        </Link>
      </div>

      <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Audience
        </div>
        <div className="mt-3 text-sm leading-7 text-zinc-700">
          Village is for youth ages <span className="font-semibold">5–18</span>.
        </div>
      </div>
    </SiteShell>
  );
}
