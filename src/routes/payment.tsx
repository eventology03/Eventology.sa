import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/payment")({
  component: PaymentReference,
  head: () => ({
    meta: [
      { title: "Payment Reference — Eventology" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
});

// Private reference page. Not linked from nav/footer, not indexed.
// This is NOT a live payment gateway — no processing happens here.
// Fill in bank details below for personal reference only.
function PaymentReference() {
  return (
    <div
      dir="ltr"
      className="bg-background text-foreground min-h-screen flex items-center justify-center px-6"
    >
      <div className="max-w-lg w-full py-24">
        <p className="eyebrow mb-6 flex items-center gap-3">
          <span className="w-8 h-px bg-accent" />
          Private Reference
        </p>
        <h1 className="display text-4xl md:text-5xl mb-6">Payment Details</h1>
        <p className="text-muted-foreground mb-10 leading-relaxed">
          Personal reference only — not a payment gateway, not linked anywhere on the site, and
          excluded from search engines.
        </p>

        <div className="border border-hairline bg-surface/40 p-8 md:p-10 space-y-6">
          <Field label="Bank Name" />
          <Field label="Account Holder" />
          <Field label="IBAN" />
          <Field label="Account Number" />
          <Field label="SWIFT / BIC" />
        </div>

        <p className="mt-8 text-xs text-muted-foreground font-mono">
          Edit src/routes/payment.tsx to fill these in.
        </p>
      </div>
    </div>
  );
}

function Field({ label }: { label: string }) {
  return (
    <div className="hairline-t pt-4 first:border-t-0 first:pt-0">
      <p className="eyebrow mb-2">{label}</p>
      <p className="text-muted-foreground text-sm">—</p>
    </div>
  );
}
