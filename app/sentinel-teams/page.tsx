import Link from "next/link";

export const metadata = { title: "Axiom Zeta Sentinel Teams - Axiom Zeta Innovations", description: "Sentinel Teams by Axiom Zeta Innovations. Drift prevention gateway for LLM and RAG teams." };

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <p className="kicker">Axiom Zeta Sentinel</p>
        <h1 style={{ fontSize: "2.6rem", margin: "12px 0" }}>Axiom Zeta Sentinel Teams</h1>
        <p className="sub" style={{ maxWidth: 760 }}>For teams running RAG in production</p>
        <div className="card" style={{ marginTop: 28 }}>
          <span className="status live">Live gateway</span>
          <p style={{ marginTop: 16, fontSize: "1.05rem", lineHeight: 1.7 }}>Everything in Solo, organized for a team. Organizations, workspaces, member roles, and workspace API keys, with audit logging and analytics so you can see where drift spiked and which baselines need attention.</p>
          <p style={{ marginTop: 16 }}><strong style={{ color: "var(--text)" }}>Who it is for:</strong> Product and platform teams running shared RAG and LLM services.</p>
          <div className="price-row" style={{ marginTop: 20 }}>
            <div className="price-mini featured">
              <h4>Sentinel Teams</h4>
              <p className="amount">$89.99<small> / mo</small></p>
              <p>Billed monthly via Stripe. Cancel anytime. API key auto-provisioned after checkout.</p>
            </div>
          </div>
          <ul className="ticks">
            <li><span>Everything in Sentinel Solo</span></li>
            <li><span>Organizations, workspaces, and role-based access</span></li>
            <li><span>Workspace API keys shown once at creation</span></li>
            <li><span>Audit log and workspace analytics</span></li>
            <li><span>Stripe billing per workspace with auto-provisioned keys</span></li>
          </ul>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a href="https://buy.stripe.com/3cI6oJ0K48J12k6ahb18c0b" target="_blank" rel="noreferrer" className="button-gold">Subscribe - $89.99/mo</a>
            <a href="https://axiom-zeta-sentinel-teams.onrender.com" target="_blank" rel="noreferrer" className="button-primary">Open the live gateway GUI</a>
            <Link href="/#sentinel" className="button-ghost">Compare all Sentinel tiers</Link>
          </div>
          <p style={{ color: "var(--muted-2)", fontSize: ".9rem", marginTop: 16 }}>
            Gateway: <a href="https://axiom-zeta-sentinel-teams.onrender.com" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>axiom-zeta-sentinel-teams.onrender.com</a> After Stripe checkout, your API key is provisioned automatically. Retrieve it once in the gateway GUI under Billing.
          </p>
        </div>
      </div>
    </section>
  );
}
