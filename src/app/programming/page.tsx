import { SiteShell } from "@/components/SiteShell";

export default function ProgrammingPage() {
  return (
    <SiteShell
      title="Programming"
      subtitle="What we’ll offer and how we’ll keep it structured for ages 5–18."
    >
      <div className="grid gap-4 sm:grid-cols-2">
        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Week structure (beta)
          </div>
          <ul className="mt-4 list-disc space-y-2 pl-5 text-sm leading-7 text-zinc-700">
            <li>Wednesday + Thursday: Village beta days</li>
            <li>Friday: existing programming (already running)</li>
            <li>Age bands as needed (5–10, 11–14, 15–18)</li>
          </ul>
        </div>

        <div className="rounded-3xl border border-zinc-200 bg-white p-6">
          <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
            Core activities
          </div>
          <div className="mt-4 grid gap-3 text-sm text-zinc-700">
            {["Homework / study help", "Reading time", "Structured games", "Arts & crafts", "Mentoring / small group discussions", "Service projects (occasionally)"].map(
              (x) => (
                <div key={x} className="rounded-2xl bg-zinc-50 px-4 py-3">
                  {x}
                </div>
              )
            )}
          </div>
        </div>
      </div>

      <div className="mt-4 rounded-3xl border border-zinc-200 bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          A simple daily flow
        </div>
        <ol className="mt-4 list-decimal space-y-2 pl-5 text-sm leading-7 text-zinc-700">
          <li>Check-in + snack + quick reset</li>
          <li>Quiet block (homework/reading)</li>
          <li>Activity block (games / arts / projects)</li>
          <li>Wrap-up + clean-up + check-out</li>
        </ol>
      </div>
    </SiteShell>
  );
}
