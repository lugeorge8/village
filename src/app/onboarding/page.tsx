import { SiteShell } from "@/components/SiteShell";

export default function OnboardingPage() {
  return (
    <SiteShell
      title="Onboarding"
      subtitle="What families submit before attending Village (invite-only)."
    >
      <div className="rounded-3xl border border-zinc-200 bg-white p-6">
        <div className="text-xs font-semibold uppercase tracking-[0.22em] text-zinc-500">
          One-page intake form (plan)
        </div>
        <p className="mt-3 text-sm leading-7 text-zinc-700">
          We will use a single scrolling web form so parents can submit everything
          once and we can run the program safely.
        </p>

        <div className="mt-6 grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl bg-zinc-50 p-4">
            <div className="text-sm font-semibold">Child info</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>Name + age</li>
              <li>Grade/school (optional)</li>
              <li>Any notes that help us support them well</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-4">
            <div className="text-sm font-semibold">Emergency + pickup</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>Emergency contacts</li>
              <li>Authorized pickup list</li>
              <li>Parent-approved guardian consent</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-4">
            <div className="text-sm font-semibold">Medical</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>Allergies</li>
              <li>Medication notes (if any)</li>
              <li>Other safety considerations</li>
            </ul>
          </div>

          <div className="rounded-2xl bg-zinc-50 p-4">
            <div className="text-sm font-semibold">Agreements</div>
            <ul className="mt-2 list-disc space-y-1 pl-5 text-sm text-zinc-700">
              <li>Rules (no hitting, no leaving building, respect)</li>
              <li>Phone policy</li>
              <li>Photo/video consent (optional)</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border border-dashed border-zinc-300 bg-white p-4 text-sm text-zinc-600">
          Form implementation: TBD (we can build it directly on this website or
          embed a hosted form). When ready, this box becomes the live form.
        </div>
      </div>
    </SiteShell>
  );
}
