import { SiteShell } from "@/components/SiteShell";
import { SUMMARY } from "@/lib/content";

export default function PeoplePage() {
  return (
    <SiteShell
      title="Volunteer roles"
      subtitle="What roles we need to run the childcare pilot safely and consistently."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Recruiting from</div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            {SUMMARY.people.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="mt-4 text-xs text-zinc-500">Update this list as you identify likely volunteer pools.</div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">Core roles (pilot)</div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>
              <span className="font-semibold">Program lead</span>: owns the schedule, sets norms, handles parent
              communication, and makes sure the room runs smoothly.
            </li>
            <li>
              <span className="font-semibold">Childcare volunteers</span>: supervise kids, lead simple activities,
              support transitions, and keep it safe + fun.
            </li>
            <li>
              <span className="font-semibold">Check-in / safety</span>: sign-in/out, attendance, pick-up rules,
              emergency readiness.
            </li>
            <li>
              <span className="font-semibold">Setup / cleanup</span>: room setup, supplies, snacks, end-of-day reset.
            </li>
          </ul>
          <div className="mt-4 text-xs text-zinc-500">
            We’ll start with the smallest team needed for safety and consistency, then scale as we learn.
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
