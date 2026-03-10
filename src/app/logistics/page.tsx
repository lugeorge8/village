import { SiteShell } from "@/components/SiteShell";

export default function LogisticsPage() {
  return (
    <SiteShell
      title="Logistics & funding"
      subtitle="How we’ll cover snacks/supplies, set expectations for families, and keep operations simple."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Costs (beta)
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>Snacks</li>
            <li>Supplies (games, crafts, learning materials)</li>
            <li>Staffing coverage (volunteer time)</li>
          </ul>
          <div className="mt-4 text-sm leading-7 text-zinc-700">
            Plan: the <span className="font-semibold">church covers snacks and supplies</span>.
            Staffing is <span className="font-semibold">volunteer</span>.
          </div>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Parent contribution
          </div>
          <div className="mt-4 text-sm leading-7 text-zinc-700">
            Parents do not pay a fee. Instead, every family contributes in some way.
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>Help with setup/cleanup</li>
            <li>Bring snacks occasionally (coordinated)</li>
            <li>Assist with activities</li>
            <li>Be present when needed for support</li>
          </ul>
          <div className="mt-4 text-xs text-zinc-500">
            Principle: “Everyone has a role.” This builds community and keeps the program sustainable.
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-zinc-200 bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          Invite-only
        </div>
        <div className="mt-3 text-sm leading-7 text-zinc-700">
          Village is intended to be tightly invite-only, with families aligned on expectations.
          This helps maintain a safe, well-behaved environment.
        </div>
      </div>
    </SiteShell>
  );
}
