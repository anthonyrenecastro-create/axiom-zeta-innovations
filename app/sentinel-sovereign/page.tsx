import Link from "next/link";

export const metadata = { title: "Axiom Zeta Sentinel Sovereign - Axiom Zeta Innovations", description: "Sentinel Sovereign by Axiom Zeta Innovations. Enterprise preview drift prevention gateway." };

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <p className="kicker">Axiom Zeta Sentinel</p>
        <h1 style={{ fontSize: "2.6rem", margin: "12px 0" }}>Axiom Zeta Sentinel Sovereign</h1>
        <p className="sub" style={{ maxWidth: 760 }}>Enterprise preview - sovereign deployments</p>
        <div className="card" style={{ marginTop: 28 }}>
          <span className="status live">Live gateway - MVP preview</span>
          <p style={{ marginTop: 16, fontSize: "1.05rem", lineHeight: 1.7 }}>The enterprise preview of Sentinel. OIDC, policy engine, Redis-backed state, and Kubernetes and airgap controls on top of Teams. In the current MVP these are configuration-gated previews, not yet a certified production enterprise tier.</p>
          <p style={{ marginTop: 16 }}><strong style={{ color: "var(--text)" }}>Who it is for:</strong> Organizations evaluating Sentinel for sovereign or regulated deployments.</p>
          <div className="price-row" style={{ marginTop: 20 }}>
            <div className="price-mini featured">
              <h4>Sentinel Sovereign</h4>
              <p className="amount">$119.99<small> / mo</small></p>
              <p>Billed monthly via Stripe. Cancel anytime. API key auto-provisioned after checkout.</p>
            </div>
          </div>
          <ul className="ticks">
            <li><span>Everything in Sentinel Teams</span></li>
            <li><span>OIDC login and session flows (config-gated in MVP)</span></li>
            <li><span>Policy engine and egress controls (preview)</span></li>
            <li><span>Redis HA state and Kubernetes operator scaffolding</span></li>
            <li><span>Airgap and operations runbooks included</span></li>
          </ul>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a href="https://buy.stripe.com/8x24gB64o2kDe2O3SN18c0c" target="_blank" rel="noreferrer" className="button-gold">Subscribe - $119.99/mo</a>
            <a href="https://axiom-zeta-sentinel-sovereign.onrender.com" target="_blank" rel="noreferrer" className="button-primary">Open the live gateway GUI</a>
            <Link href="/#sentinel" className="button-ghost">Compare all Sentinel tiers</Link>
          </div>
          <p style={{ color: "var(--muted-2)", fontSize: ".9rem", marginTop: 16 }}>
            Gateway: <a href="https://axiom-zeta-sentinel-sovereign.onrender.com" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>axiom-zeta-sentinel-sovereign.onrender.com</a> After Stripe checkout, your API key is provisioned automatically. Retrieve it once in the gateway GUI under Billing.
          </p>
        </div>
      </div>
    </section>
  );
}
