import { SiteShell } from "@/components/SiteShell";
import { SUMMARY } from "@/lib/content";

export default function PeoplePage() {
  return (
    <SiteShell
      title="People"
      subtitle="Who can help and what staffing we need to run Village safely and consistently."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Potential helpers
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            {SUMMARY.people.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <div className="mt-4 text-xs text-zinc-500">
            Note: “CIA” is a placeholder label — rename to the actual group name.
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Core roles (beta)
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>
              <span className="font-semibold">Program lead</span>: runs the day,
              sets norms, handles parent communication.
            </li>
            <li>
              <span className="font-semibold">Mentors / coaches</span>: small
              groups, homework help, activities.
            </li>
            <li>
              <span className="font-semibold">Safety + logistics</span>: check-in,
              attendance, supplies, transitions.
            </li>
          </ul>
          <div className="mt-4 text-xs text-zinc-500">
            We can scale roles later. Start with what ensures safety + consistency.
          </div>
        </div>
      </div>
    </SiteShell>
  );
}
