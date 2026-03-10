import { SiteShell } from "@/components/SiteShell";

export default function PoliciesPage() {
  return (
    <SiteShell
      title="Safety & policies"
      subtitle="Clear rules protect kids, volunteers, and the church."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Non‑negotiables
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>
              <span className="font-semibold">No hitting</span> (or physical intimidation).
            </li>
            <li>
              <span className="font-semibold">No leaving the building</span> without an adult.
            </li>
            <li>
              <span className="font-semibold">Be respectful</span> of people, property, and spaces.
            </li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Discipline ladder (recommended)
          </div>
          <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>Redirect + reminder of the rule</li>
            <li>Short reset (sit out / cool down) + re-entry plan</li>
            <li>Call parent/guardian</li>
            <li>Early pickup</li>
            <li>Pause/suspension (time-boxed) + re-entry meeting</li>
          </ol>
          <div className="mt-4 text-xs text-zinc-500">
            We can align this with existing church policy (e.g., Awana) for consistency.
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-zinc-200 bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Stop rule (safety valve)
        </div>
        <div className="mt-3 text-sm leading-7 text-zinc-700">
          Even invite-only programs need a clear pause rule. Proposed minimum:
        </div>
        <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
          <li>
            Pause if we cannot staff the agreed ratio for 2 consecutive sessions.
          </li>
          <li>
            Pause after any serious safety incident until elders review and approve
            changes.
          </li>
        </ul>
      </div>
    </SiteShell>
  );
}
