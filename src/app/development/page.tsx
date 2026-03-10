import { SiteShell } from "@/components/SiteShell";
import { SUMMARY } from "@/lib/content";

export default function DevelopmentPlanPage() {
  return (
    <SiteShell
      title="Development plan"
      subtitle="Start with a small beta, learn fast, and scale only after consistency is proven."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Beta design
          </div>
          <div className="mt-4 space-y-3 text-sm leading-7 text-zinc-700">
            <div>
              <span className="font-semibold">Size:</span> {SUMMARY.beta.kids} kids
              / {SUMMARY.beta.staff} staff
            </div>
            <div>
              <span className="font-semibold">Schedule:</span> {SUMMARY.beta.days.join(
                " + "
              )} (2 days/week)
            </div>
            <div>
              <span className="font-semibold">Principle:</span> reliability first.
              A smaller, well-run program beats a larger, inconsistent one.
            </div>
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            How we recruit
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>Start with families we already know and can communicate with well</li>
            <li>Clear expectations: schedule, behavior norms, pickup rules</li>
            <li>Simple application + emergency contact info</li>
            <li>Waitlist once the beta is full</li>
          </ul>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-zinc-200 bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Governance & reporting
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          <div className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
            <span className="font-semibold">Final authority:</span> Elder Jason Liang
          </div>
          <div className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
            <span className="font-semibold">Monthly metrics:</span> attendance, incidents, feedback
          </div>
        </div>
        <div className="mt-4 text-xs text-zinc-500">
          Even in an invite-only program, we track a few metrics so we can adjust early.
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-zinc-200 bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Beta → scale checklist
        </div>
        <div className="mt-4 grid gap-3 sm:grid-cols-2">
          {["Consistent attendance + check-in/out", "Clear behavior norms working", "Staff coverage is stable", "Parents have a clear contact", "Kids are engaged (not just supervised)", "Safety incidents are handled well"].map(
            (x) => (
              <div key={x} className="rounded-2xl bg-zinc-50 px-4 py-3 text-sm text-zinc-700">
                {x}
              </div>
            )
          )}
        </div>
      </div>
    </SiteShell>
  );
}
