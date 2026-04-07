import Link from 'next/link';

import { SiteShell } from '@/components/SiteShell';
import { ORG_NAME, SUMMARY } from '@/lib/content';

export default function HomePage() {
  return (
    <SiteShell title={ORG_NAME} subtitle={SUMMARY.tagline}>
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Purpose</div>
          <div className="mt-3 text-sm leading-7 text-zinc-700">
            We want to show that a free childcare program can be a real, practical win for the church — because it
            supports families and ultimately supports the church’s mission.
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>
              <span className="font-semibold">Frees up capacity</span>: parents have more energy and availability to
              serve, connect, and invest in community.
            </li>
            <li>
              <span className="font-semibold">Builds reciprocity</span>: as the church meets real needs, families can
              more sustainably participate in church life.
            </li>
            <li>
              <span className="font-semibold">Welcomes newcomers</span>: a high-quality free program lowers the barrier
              for new parents to get connected.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Pilot (first step)</div>
          <div className="mt-3 text-sm leading-7 text-zinc-700">Start small so we can learn quickly and run it well.</div>
          <div className="mt-4 grid gap-3 text-sm text-zinc-700">
            <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
              <span className="font-semibold">Kids</span>
              <span>{SUMMARY.beta.kids}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
              <span className="font-semibold">Volunteers / staff</span>
              <span>{SUMMARY.beta.staff}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
              <span className="font-semibold">Days</span>
              <span>{SUMMARY.beta.days.join(' + ')}</span>
            </div>
            <div className="flex items-center justify-between rounded-2xl bg-zinc-50 px-4 py-3">
              <span className="font-semibold">Hours</span>
              <span>{(SUMMARY.beta as any).hours}</span>
            </div>
          </div>
          <div className="mt-4 text-xs text-zinc-500">{SUMMARY.beta.note}</div>

          <div className="mt-5 rounded-2xl border border-zinc-200 bg-white px-4 py-3 text-sm text-zinc-700">
            <div className="font-semibold">Want to help staff the pilot?</div>
            <div className="mt-1">
              Email{' '}
              <a className="underline" href={`mailto:${SUMMARY.contact.email}`}>
                {SUMMARY.contact.email}
              </a>{' '}
              to volunteer or ask questions.
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-4 sm:grid-cols-3">
        <Link href="/people" className="rounded-3xl border border-zinc-200 bg-white p-6 hover:bg-zinc-50">
          <div className="text-lg font-semibold">Volunteer roles</div>
          <div className="mt-2 text-sm text-zinc-700">What roles we need to run the pilot safely.</div>
        </Link>
        <Link href="/development" className="rounded-3xl border border-zinc-200 bg-white p-6 hover:bg-zinc-50">
          <div className="text-lg font-semibold">Development plan</div>
          <div className="mt-2 text-sm text-zinc-700">Pilot → learn → iterate → scale.</div>
        </Link>
        <Link href="/programming" className="rounded-3xl border border-zinc-200 bg-white p-6 hover:bg-zinc-50">
          <div className="text-lg font-semibold">Program</div>
          <div className="mt-2 text-sm text-zinc-700">What childcare looks like day-to-day.</div>
        </Link>

        <Link href="/logistics" className="rounded-3xl border border-zinc-200 bg-white p-6 hover:bg-zinc-50">
          <div className="text-lg font-semibold">Logistics</div>
          <div className="mt-2 text-sm text-zinc-700">Space, staffing, check-in, and safety basics.</div>
        </Link>
      </div>

      <div className="mt-10 rounded-3xl border border-zinc-200 bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Audience</div>
        <div className="mt-3 text-sm leading-7 text-zinc-700">
          Ages: <span className="font-semibold">{SUMMARY.audience.ages}</span>
        </div>
        <div className="mt-2 text-sm leading-7 text-zinc-700">{SUMMARY.audience.note}</div>
      </div>
    </SiteShell>
  );
}
