import Link from "next/link";

const RADAR_URL = "https://www.aichangeradar.com";

const SOLO_CHECKOUT =
  process.env.NEXT_PUBLIC_SENTINEL_SOLO_CHECKOUT_URL ||
  "https://buy.stripe.com/dRm6oJ8cw6AT3oa1KF18c0a";
const TEAMS_CHECKOUT =
  process.env.NEXT_PUBLIC_SENTINEL_TEAMS_CHECKOUT_URL ||
  "https://buy.stripe.com/3cI6oJ0K48J12k6ahb18c0b";
const SOVEREIGN_CHECKOUT =
  process.env.NEXT_PUBLIC_SENTINEL_SOVEREIGN_CHECKOUT_URL ||
  "https://buy.stripe.com/8x24gB64o2kDe2O3SN18c0c";

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Axiom Zeta Sentinel · by Axiom Zeta Innovations</p>
            <h1>
              LLM drift is silent. <span className="hl">Your response shouldn&apos;t be.</span>
            </h1>
            <p className="lede">
              Axiom Zeta Sentinel watches your LLM and RAG systems against a learned
              baseline — embeddings, retrieval scores, output quality — and returns a
              bounded, stabilized signal with one clear action:{" "}
              <strong style={{ color: "var(--text)" }}>
                pass, clamp, retry, fallback, or human review.
              </strong>
            </p>
            <div className="hero-actions">
              <a href={SOLO_CHECKOUT} target="_blank" rel="noreferrer" className="button-gold">
                Start with Sentinel Solo — $59.99/mo →
              </a>
              <Link href="#sentinel" className="button-ghost">
                Compare the tiers ↓
              </Link>
            </div>
            <div className="hero-proof" aria-label="Sentinel billing facts">
              <span>Stripe billing</span>
              <span>API key auto-provisioned</span>
              <span>Cancel anytime</span>
            </div>
          </div>

          <div className="terminal" aria-label="Sentinel drift check illustration">
            <div className="terminal-bar">
              <span>sentinel — drift check</span>
              <span style={{ color: "var(--accent)" }}>● BASELINE LEARNED</span>
            </div>
            <div className="terminal-body">
              <div><span className="prompt">$</span> sentinel check --gateway prod-rag</div>
              <div className="dim">baseline: 14d of traffic · 2.1M requests</div>
              <div className="dim">embedding drift: 0.04 · retrieval p95: stable · output: nominal</div>
              <div style={{ marginTop: 12 }}><span className="gold">drift score ›</span> 0.12 — nominal</div>
              <div style={{ marginTop: 6 }}><span className="gold">action ›</span> pass — no intervention needed</div>
              <div className="dim" style={{ marginTop: 12 }}>— bounded signal, not another dashboard —</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── HOW IT WORKS ─────────────────────────────────────── */}
      <section className="section" id="how">
        <div className="container">
          <div className="section-head">
            <p className="kicker">How it works</p>
            <h2>Three steps to drift you can act on</h2>
            <p className="sub">
              Built for developers and teams shipping LLM and RAG systems who need
              reliability, not another monitoring dashboard.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="step-num">STEP 1</span>
              <h3>Route through the gateway</h3>
              <p>
                Send your LLM/RAG traffic through a Sentinel gateway. One endpoint,
                minutes to wire up — Solo, Teams, or Sovereign.
              </p>
            </article>
            <article className="card">
              <span className="step-num">STEP 2</span>
              <h3>Sentinel learns your baseline</h3>
              <p>
                It watches embedding drift, retrieval scores, and output signals, and
                learns what normal looks like for your system — not someone else&apos;s.
              </p>
            </article>
            <article className="card">
              <span className="step-num">STEP 3</span>
              <h3>Get a bounded action</h3>
              <p>
                Every check returns a drift score, a stabilized signal, and one clear
                action: pass, clamp, retry, fallback, or human review.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── SENTINEL TIERS ───────────────────────────────────── */}
      <section className="section alt" id="sentinel">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Axiom Zeta Sentinel</p>
            <h2>Pick the tier that matches your system</h2>
            <p className="sub">
              Billing is via Stripe; your API key is provisioned automatically after
              checkout. Retrieve it anytime from the gateway GUI.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="status dev">Solo</span>
              <h3>Sentinel Solo</h3>
              <p className="amount" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
                $59.99<small style={{ fontWeight: 400 }}> / mo</small>
              </p>
              <p>For individual builders. One gateway, baseline drift detection, full GUI playground.</p>
              <ul>
                <li>Stabilize / feedback / baseline-reset API</li>
                <li>Drift diagnostics &amp; telemetry</li>
                <li>Stripe checkout — key auto-provisioned</li>
              </ul>
              <Link href="/sentinel-solo" className="card-cta">Sentinel Solo product page →</Link>
              <a href={SOLO_CHECKOUT} target="_blank" rel="noreferrer" className="card-cta">Subscribe — $59.99/mo →</a>
            </article>
            <article className="card">
              <span className="status dev">Teams</span>
              <h3>Sentinel Teams</h3>
              <p className="amount" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
                $89.99<small style={{ fontWeight: 400 }}> / mo</small>
              </p>
              <p>For teams running RAG in production. Orgs, workspaces, roles, and shared API keys.</p>
              <ul>
                <li>Everything in Solo</li>
                <li>Workspaces, members &amp; audit</li>
                <li>Workspace analytics</li>
              </ul>
              <Link href="/sentinel-teams" className="card-cta">Sentinel Teams product page →</Link>
              <a href={TEAMS_CHECKOUT} target="_blank" rel="noreferrer" className="card-cta">Subscribe — $89.99/mo →</a>
            </article>
            <article className="card">
              <span className="status dev">Sovereign</span>
              <h3>Sentinel Sovereign</h3>
              <p className="amount" style={{ fontSize: "1.6rem", fontWeight: 700 }}>
                $119.99<small style={{ fontWeight: 400 }}> / mo</small>
              </p>
              <p>Enterprise preview. OIDC, policy engine, HA state and operator controls, config-gated in MVP.</p>
              <ul>
                <li>Everything in Teams</li>
                <li>OIDC / policy / airgap controls</li>
                <li>Annual invoicing on request</li>
              </ul>
              <Link href="/sentinel-sovereign" className="card-cta">Sentinel Sovereign product page →</Link>
              <a href={SOVEREIGN_CHECKOUT} target="_blank" rel="noreferrer" className="card-cta">Subscribe — $119.99/mo →</a>
            </article>
          </div>
          <p style={{ color: "var(--muted-2)", fontSize: ".9rem", marginTop: 16 }}>
            Sentinel gateways launch from Vercel-connected repos and are billed via Stripe.
            After checkout, Stripe webhooks provision your workspace and API key automatically —
            check the gateway GUI at <code>/ui</code> to retrieve it (shown once).
          </p>
        </div>
      </section>

      {/* ── SUBTLE: ALSO FROM AXIOM ZETA ─────────────────────── */}
      <section className="section" aria-label="Also from Axiom Zeta">
        <div className="container" style={{ textAlign: "center", maxWidth: 640, margin: "0 auto" }}>
          <p className="kicker">Also from Axiom Zeta</p>
          <p style={{ color: "var(--muted)" }}>
            Running your business on AI vendors instead of building with them?{" "}
            <a href={RADAR_URL} target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>
              AI Change Radar
            </a>{" "}
            sends one sourced Monday brief on every product, pricing, and policy change
            that touches your stack.
          </p>
        </div>
      </section>

      {/* ── PRINCIPLES ────────────────────────────────────────── */}
      <section className="section alt" id="principles">
        <div className="container">
          <div className="section-head">
            <p className="kicker gold">How We Build</p>
            <h2>Principles that survive contact with the roadmap</h2>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="pillar-num">01 / SOVEREIGN BY DEFAULT</span>
              <h3>You own the system</h3>
              <p>
                Local-first where it matters, exportable everywhere, and never designed
                to hold your data hostage. If Axiom Zeta disappeared tomorrow, your
                work should survive intact.
              </p>
            </article>
            <article className="card">
              <span className="pillar-num">02 / SIGNAL OVER NOISE</span>
              <h3>Less, but decisive</h3>
              <p>
                Sentinel returns one bounded action per check, not 400 alerts. Every
                product is edited for the decision, not the feed.
              </p>
            </article>
            <article className="card">
              <span className="pillar-num">03 / HONEST BY DESIGN</span>
              <h3>Labeled, sourced, verifiable</h3>
              <p>
                Simulated is labeled simulated. Drift scores are explainable. Pricing is
                plain. We would rather under-promise in writing than over-promise in
                marketing.
              </p>
            </article>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="section" id="about">
        <div className="container spotlight">
          <div>
            <p className="kicker">About</p>
            <h2>Built by Axiom Zeta Innovations LLC</h2>
            <p className="sub" style={{ maxWidth: "none" }}>
              Axiom Zeta Innovations is a Texas LLC building operator-owned AI systems.
              Sentinel is the developer-reliability lane: drift prevention for teams
              shipping LLM and RAG systems. For entity verification, policies, and
              enterprise contact, see the official LLC site.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
              <a href="https://axiomzetainnovations.com" target="_blank" rel="noreferrer" className="button-primary">
                Official LLC site →
              </a>
              <a href="mailto:anthony.castro@axiomzetainnovations.com" className="button-ghost">
                anthony.castro@axiomzetainnovations.com
              </a>
            </div>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>At a glance</h3>
            <ul>
              <li><span><strong style={{ color: "var(--text)" }}>Entity:</strong> Axiom Zeta Innovations LLC (Texas)</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Product:</strong> Axiom Zeta Sentinel — drift prevention for LLM &amp; RAG</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Tiers:</strong> Solo $59.99 · Teams $89.99 · Sovereign $119.99 / mo</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Billing:</strong> Stripe — API key auto-provisioned after checkout</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Official LLC site:</strong> axiomzetainnovations.com for entity, verification, and contact</span></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
