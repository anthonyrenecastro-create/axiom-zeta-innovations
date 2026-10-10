import Link from "next/link";

export const metadata = { title: "Axiom Zeta Sentinel Solo - Axiom Zeta Innovations", description: "Sentinel Solo by Axiom Zeta Innovations. Drift prevention gateway for LLM and RAG systems." };

export default function Page() {
  return (
    <section className="section">
      <div className="container">
        <p className="kicker">Axiom Zeta Sentinel</p>
        <h1 style={{ fontSize: "2.6rem", margin: "12px 0" }}>Axiom Zeta Sentinel Solo</h1>
        <p className="sub" style={{ maxWidth: 760 }}>For individual builders - Developer edition</p>
        <div className="card" style={{ marginTop: 28 }}>
          <span className="status live">Live gateway</span>
          <p style={{ marginTop: 16, fontSize: "1.05rem", lineHeight: 1.7 }}>The developer gateway for LLM and RAG drift prevention. Sentinel Solo learns a per-tenant baseline from your metric streams, then stabilizes every call and returns a drift score with a clear action: pass, clamp, retry, fallback-model, or human-review.</p>
          <p style={{ marginTop: 16 }}><strong style={{ color: "var(--text)" }}>Who it is for:</strong> Solo developers and small apps putting a first RAG or LLM feature into production.</p>
          <div className="price-row" style={{ marginTop: 20 }}>
            <div className="price-mini featured">
              <h4>Sentinel Solo</h4>
              <p className="amount">Open source</p>
              <p>AGPL-3.0 licensed. No paywall — self-host the gateway and set your own API key.</p>
            </div>
          </div>
          <ul className="ticks">
            <li><span>Stabilize, feedback, baseline-reset, and telemetry APIs</span></li>
            <li><span>Baseline learned over 5 windows per tenant</span></li>
            <li><span>24-D bounded stabilized vector with drift diagnostics</span></li>
            <li><span>Bundled GUI playground</span></li>
            <li><span>AGPL-3.0 — free to run, modify, and share</span></li>
          </ul>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
            <a href="https://github.com/anthonyrenecastro-create/axiom-zeta-sentinel-solo" target="_blank" rel="noreferrer" className="button-gold">View on GitHub</a>
            <a href="https://axiom-zeta-sentinel-solo.onrender.com" target="_blank" rel="noreferrer" className="button-primary">Open the live gateway GUI</a>
            <Link href="/#sentinel" className="button-ghost">Compare all Sentinel tiers</Link>
          </div>
          <p style={{ color: "var(--muted-2)", fontSize: ".9rem", marginTop: 16 }}>
            Gateway: <a href="https://axiom-zeta-sentinel-solo.onrender.com" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>axiom-zeta-sentinel-solo.onrender.com</a> Set GATEWAY_API_KEY when you deploy; the GUI playground is included.
          </p>
        </div>
      </div>
    </section>
  );
}
