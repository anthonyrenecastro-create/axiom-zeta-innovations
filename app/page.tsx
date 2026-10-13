import Link from "next/link";

const RADAR_URL = "https://www.aichangeradar.com";
const NAVIGATOR_URL = "https://azxai-navigator.onrender.com";
// Live Stripe donation payment links (created 2026-10-10)
const DONATE_TIERS = [
  { label: "$25", url: "https://buy.stripe.com/9B68wR50k2kD5wicpj18c0h" },
  { label: "$75", url: "https://buy.stripe.com/7sY5kF9gA8J1f6SgFz18c0i" },
  { label: "$125", url: "https://buy.stripe.com/5kQ7sNboIbVd1g23SN18c0j" },
  { label: "$200", url: "https://buy.stripe.com/00w14p0K43oHbUGcpj18c0k" },
  { label: "Custom", url: "https://buy.stripe.com/bJe00l9gA5wPbUGcpj18c0l" },
];
// Live Calendly consultation scheduling link (connected 2026-10-10)
const CONSULT_URL = "https://calendly.com/anthony-castro-axiomzetainnovations-hwr2/30min";
// Service offerings — Stripe payment links (created 2026-10-10)
const SERVICES = {
  briefings: "https://buy.stripe.com/eVqdRbeAUf7p2k63SN18c0m",    // Vendor Intelligence Briefings — $199/mo recurring
  advisory: "https://buy.stripe.com/fZu14pcsM8J17Eq2OJ18c0n",     // AI Adoption Advisory Sprint — $1,500 one-time
  auditStarter: "https://buy.stripe.com/8x228teAU9N53oa60V18c0o", // AI Reliability Audit — Starter — $499 one-time
  auditPro: "https://buy.stripe.com/14A4gB0K44sL2k6blf18c0p",     // AI Reliability Audit — Professional — $1,499 one-time
  deployment: "https://buy.stripe.com/fZu5kF0K4f7p9My89318c0q",   // Private AI Assistant Deployment — $2,500 one-time
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ─────────────────────────────────────────────── */}
      <section className="hero">
        <div className="container" style={{ marginBottom: 28 }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 12 }}>
            <a href={RADAR_URL} target="_blank" rel="noreferrer" className="card" style={{ display: "block", padding: "18px 20px" }}>
              <span className="mini-tag gold">01 · SMB operators</span>
              <h3 style={{ margin: "10px 0 6px" }}>AI Change Radar →</h3>
              <p style={{ margin: 0 }}>Weekly AI vendor-change briefs. Start here if AI tools run your business.</p>
            </a>
            <Link href="/#sentinel" className="card" style={{ display: "block", padding: "18px 20px" }}>
              <span className="mini-tag teal">02 · AI builders</span>
              <h3 style={{ margin: "10px 0 6px" }}>Sentinel →</h3>
              <p style={{ margin: 0 }}>Drift prevention for LLM and RAG systems.</p>
            </Link>
            <Link href="/#quadra-seer" className="card" style={{ display: "block", padding: "18px 20px" }}>
              <span className="mini-tag green">03 · Sovereign</span>
              <h3 style={{ margin: "10px 0 6px" }}>Quadra-Seer →</h3>
              <p style={{ margin: 0 }}>Local AI on your machine. No cloud required.</p>
            </Link>
          </div>
        </div>
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">Axiom Zeta Innovations — Product Hub</p>
            <h1>
              Pick your lane. <span className="hl">Own the system.</span>
            </h1>
            <p className="lede">
              Axiom Zeta Innovations builds operator-owned AI for people who refuse to rent
              their own judgment. Start with the system built for your job: <strong style={{ color: "var(--text)" }}>AI Change Radar</strong> for
              SMB vendor intelligence, <strong style={{ color: "var(--text)" }}>Sentinel</strong> for LLM/RAG reliability,
              or <strong style={{ color: "var(--text)" }}>Quadra-Seer</strong> for sovereign local AI.
            </p>
            <div className="hero-actions">
              <a href={RADAR_URL} target="_blank" rel="noreferrer" className="button-gold">
                Start with AI Change Radar →
              </a>
              <Link href="#start-here" className="button-ghost">
                Choose your path
              </Link>
            </div>
            <div className="hero-proof" aria-label="Axiom Zeta lanes">
              <span>SMB intelligence → Radar</span>
              <span>AI builders → Sentinel</span>
              <span>Sovereign → Quadra-Seer</span>
            </div>
          </div>

          <div className="constellation" aria-label="Axiom Zeta product routes">
            <div className="constellation-head">
              <strong>AXIOM ZETA / START HERE</strong>
              <span className="live-pill">Radar Live</span>
            </div>
            <div className="core-card">
              <span className="core-tag">For SMB operators — Live</span>
              <h3>AI Change Radar</h3>
              <p>
                Weekly vendor-change intelligence for businesses running on AI tools.
                The canonical product home is aichangeradar.com.
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
                <a href={RADAR_URL} target="_blank" rel="noreferrer" className="button-primary" style={{ padding: "11px 18px" }}>
                  Open aichangeradar.com →
                </a>
                <a href={`${RADAR_URL}/sample`} target="_blank" rel="noreferrer" className="button-ghost" style={{ padding: "11px 18px" }}>
                  Sample brief
                </a>
              </div>
            </div>
            <div className="orbit-grid">
              <div className="orbit-card">
                <span className="mini-tag teal">For AI builders — Live</span>
                <h4>Axiom Zeta Sentinel</h4>
                <p>Drift prevention for LLM &amp; RAG systems. Start with Solo or Teams — live now. Sovereign in preview.</p>
              </div>
              <div className="orbit-card">
                <span className="mini-tag gold">Premium action layer</span>
                <h4>AZxAI Navigator</h4>
                <p>Turn Radar briefs into tracked decisions and approved action inside your AI operations.</p>
              </div>
              <div className="orbit-card">
                <span className="mini-tag green">Sovereign lab</span>
                <h4>Quadra-Seer Sovereign</h4>
                <p>Your AI, on your machine. No cloud required. No data leaves the device.</p>
              </div>
              <div className="orbit-card">
                <span className="mini-tag violet">Official LLC site</span>
                <h4>axiomzetainnovations.com</h4>
                <p>Entity, verification, policies, and enterprise contact live on the no-hyphen site.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── START HERE / ROUTER ─────────────────────────────── */}
      <section className="section" id="start-here">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Start here</p>
            <h2>Pick the lane that matches the job</h2>
            <p className="sub">
              Axiom Zeta is the hub. Each product has one home, one buyer, and one next step.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="status live">SMB operators — Live</span>
              <h3>“My AI vendors keep changing.”</h3>
              <p>Go to AI Change Radar for the weekly brief, sample, pricing, and onboarding. Navigator is the premium action layer once the brief lands.</p>
              <a href={RADAR_URL} target="_blank" rel="noreferrer" className="card-cta">Go to aichangeradar.com →</a>
            </article>
            <article className="card">
              <span className="status live">AI builders — Live</span>
              <h3>“My LLM/RAG system drifts.”</h3>
              <p>Start with Sentinel. Solo is for individual builders, Teams for shared RAG services, and Sovereign for evaluated enterprise/sovereign deployments.</p>
              <Link href="#sentinel" className="card-cta">Explore Sentinel ↓</Link>
            </article>
            <article className="card">
              <span className="status dev">Sovereign / official</span>
              <h3>“I need local control.”</h3>
              <p>Quadra-Seer is the sovereign local-AI lab. Entity verification, policies, app support, and enterprise contact live on the official no-hyphen site.</p>
              <a href="https://axiomzetainnovations.com" target="_blank" rel="noreferrer" className="card-cta">Visit axiomzetainnovations.com →</a>
            </article>
          </div>
        </div>
      </section>

      {/* ── ADVERTISING PORTAL: AI CHANGE RADAR ───────────────── */}
      <section className="section alt" id="platform">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Flagship — canonical home: aichangeradar.com</p>
            <h2>AI Change Radar: never be blindsided by your own AI stack again</h2>
            <p className="sub">
              Your vendors ship changes every week — retired models, quiet pricing moves,
              new policy defaults. AI Change Radar monitors public vendor sources continuously
              and delivers one concise Monday brief: what changed, whether it matters to you,
              and the next step worth taking. Explore the live product below, or open it
              full-screen at aichangeradar.com.
            </p>
          </div>

          <div className="portal-grid">
            <div className="portal-copy">
              <div className="price-row" aria-label="AI Change Radar plans">
                <div className="price-mini">
                  <h4>Radar 5</h4>
                  <p className="amount">Free</p>
                  <p>Track up to 5 AI vendors. Perfect for a focused stack.</p>
                </div>
                <div className="price-mini featured">
                  <h4>Radar 15</h4>
                  <p className="amount">Free</p>
                  <p>Track up to 15 vendors. Most SMBs start here.</p>
                </div>
                <div className="price-mini">
                  <h4>Unlimited</h4>
                  <p className="amount">Free</p>
                  <p>Every vendor you run. Full-coverage radar.</p>
                </div>
              </div>

              <ul className="ticks">
                <li><span><strong style={{ color: "var(--text)" }}>56 vendor sources monitored</strong> — changelogs, pricing pages, security &amp; policy docs, checked from public sources.</span></li>
                <li><span><strong style={{ color: "var(--text)" }}>One brief, every Monday.</strong> Sourced, severity-ranked, written to be acted on in minutes — not another dashboard to babysit.</span></li>
                <li><span><strong style={{ color: "var(--text)" }}>Self-serve in minutes.</strong> Pick your industry and vendors; the radar does the watching. Cancel anytime.</span></li>
              </ul>

              <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
                <a href={`${RADAR_URL}/onboarding`} target="_blank" rel="noreferrer" className="button-primary">
                  Start tracking your stack →
                </a>
                <a href={`${RADAR_URL}/sample`} target="_blank" rel="noreferrer" className="button-ghost">
                  Read a sample brief
                </a>
              </div>
              <p style={{ color: "var(--muted-2)", fontSize: ".9rem", marginTop: 16 }}>
                Subscriptions are handled securely via Shopify on{" "}
                <a href={RADAR_URL} target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>aichangeradar.com</a>.
                This portal is the advertising home; the product lives there.
              </p>
            </div>

            <div>
              <div className="browser-frame">
                <div className="browser-bar" aria-hidden="true">
                  <span className="dot r" /><span className="dot y" /><span className="dot g" />
                  <span className="url-pill">
                    🔒 <strong>www.aichangeradar.com</strong> — live product preview
                  </span>
                </div>
                <iframe
                  src={RADAR_URL}
                  title="AI Change Radar — live site preview"
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  sandbox="allow-scripts allow-same-origin allow-forms allow-popups"
                />
                <div className="frame-note">
                  <span>Live preview embedded from aichangeradar.com. If your browser blocks the embed, open it directly.</span>
                  <a href={RADAR_URL} target="_blank" rel="noreferrer">Open full site ↗</a>
                </div>
              </div>
              <div className="stats-row">
                <div className="stat">
                  <div className="stat-num">56</div>
                  <p>Vendor checks flattened from the source registry — changelogs, pricing, security.</p>
                </div>
                <div className="stat">
                  <div className="stat-num">Weekly</div>
                  <p>One Monday brief. What changed, who it affects, what to do next.</p>
                </div>
                <div className="stat">
                  <div className="stat-num">100%</div>
                  <p>Public sources. Every item in your brief links to its source.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────── */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-head">
            <p className="kicker gold">The Axiom Zeta Suite</p>
            <h2>Systems by job, not a pile of products.</h2>
            <p className="sub">
              Radar sells on its own site. Navigator deepens Radar. Sentinel serves AI builders.
              Quadra-Seer is the sovereign lab. Everything else is proof, not another front door.
            </p>
          </div>

          <div className="grid-4">
            <article className="card">
              <div className="card-icon" aria-hidden="true">📡</div>
              <div style={{ marginTop: 16 }}>
                <span className="status live">Live — aichangeradar.com</span>
              </div>
              <h3>AI Change Radar</h3>
              <p>
                The flagship intelligence platform. AI Change Radar watches the AI vendors
                your SMB depends on and turns scattered vendor announcements into one
                actionable weekly brief.
              </p>
              <ul>
                <li>Product, pricing, security &amp; policy change monitoring</li>
                <li>Severity-ranked briefs with sources and next steps</li>
                <li>Free plans by stack size — Radar 5 / 15 / Unlimited</li>
              </ul>
              <a href={RADAR_URL} target="_blank" rel="noreferrer" className="card-cta">
                Visit aichangeradar.com →
              </a>
            </article>

            <article className="card">
              <div className="card-icon" aria-hidden="true">🛡️</div>
              <div style={{ marginTop: 16 }}>
                <span className="status live">Live — AI builders</span>
              </div>
              <h3>Axiom Zeta Sentinel</h3>
              <p>
                Drift prevention for LLM &amp; RAG systems. Sentinel watches metric
                streams against a learned baseline and returns a bounded action:
                pass, clamp, retry, fallback, or human review.
              </p>
              <ul>
                <li>Solo for individual builders</li>
                <li>Teams for shared RAG services</li>
                <li>Sovereign preview for evaluated deployments</li>
              </ul>
              <Link href="#sentinel" className="card-cta">
                Explore Sentinel ↓
              </Link>
            </article>

            <article className="card">
              <div className="card-icon" aria-hidden="true">👁️</div>
              <div style={{ marginTop: 16 }}>
                <span className="status dev">In Development — Sovereign lab</span>
              </div>
              <h3>Quadra-Seer Sovereign</h3>
              <p>
                A local-first AI chatbot that runs on your machine, not in someone
                else&apos;s cloud. Sovereign by architecture: your conversations, your
                memory, your hardware.
              </p>
              <ul>
                <li>Runs fully on-device — works offline, no account required</li>
                <li>No data leaves your machine; no training on your words</li>
                <li>Built for deep, private, long-horizon thinking work</li>
              </ul>
              <Link href="#quadra-seer" className="card-cta">
                Inside Quadra-Seer ↓
              </Link>
            </article>

            <article className="card">
              <div className="card-icon" aria-hidden="true">🎯</div>
              <div style={{ marginTop: 16 }}>
                <span className="status live">Live — azxai-navigator.onrender.com</span>
              </div>
              <h3>AZxAI Navigator</h3>
              <p>
                The premium action layer for AI Change Radar. Navigator maps your AI
                operations, matches each vendor change to the workflows it actually
                touches, and turns act-now alerts into approved, tracked action —
                free.
              </p>
              <ul>
                <li>Exposure matching: which of your workflows each change hits</li>
                <li>Decision sandbox and action workspace, with recorded outcomes</li>
                <li>Runs on AI Change Radar briefs and act-severity alerts</li>
              </ul>
              <a href={NAVIGATOR_URL} target="_blank" rel="noreferrer" className="card-cta">
                Open AZxAI Navigator →
              </a>
              <a href="https://github.com/Axiom-Zeta-Innovations-LLC/azxai-navigator" target="_blank" rel="noreferrer" className="card-cta" style={{ marginLeft: 12 }}>
                View source →
              </a>
            </article>
          </div>

        </div>
      </section>

      
      {/* ── SERVICES ──────────────────────────────────────────── */}
      <section className="section alt" id="services">
        <div className="container">
          <div className="section-head">
            <p className="kicker gold">Services</p>
            <h2>Done-for-you services, on open-source software</h2>
            <p className="sub">
              Every Axiom Zeta product is free and open source under AGPL-3.0 — download
              it, self-host it, no paywall, no license key. These services are for teams
              that want it implemented, interpreted, and operated for them.
            </p>
          </div>
          <div className="grid-4">
            <article className="card">
              <div className="card-icon" aria-hidden="true">📰</div>
              <div style={{ marginTop: 16 }}>
                <span className="status live">Monthly retainer</span>
              </div>
              <h3>Vendor Intelligence Briefings</h3>
              <p className="amount" style={{ fontSize: "1.6rem", fontWeight: 700 }}>$199<small> / mo</small></p>
              <p>
                The software generates weekly briefs free. This service maps them to your
                actual stack: curated, interpreted briefings plus a quarterly strategy call
                on what the changes mean for your business. For SMBs already running on AI tools.
              </p>
              <a href={SERVICES.briefings} target="_blank" rel="noreferrer" className="button-gold" style={{ marginTop: 12, display: "inline-block" }}>
                Subscribe — $199/mo →
              </a>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🧭</div>
              <div style={{ marginTop: 16 }}>
                <span className="status live">Project-based</span>
              </div>
              <h3>AI Adoption Advisory</h3>
              <p className="amount" style={{ fontSize: "1.6rem", fontWeight: 700 }}>$1,500<small> one-time</small></p>
              <p>
                The action layer on top of Radar&apos;s intelligence. Radar says what changed;
                this engagement says what to do about it — workflow integration, tool selection,
                rollout planning. Pairs with Vendor Intelligence Briefings.
              </p>
              <a href={SERVICES.advisory} target="_blank" rel="noreferrer" className="button-gold" style={{ marginTop: 12, display: "inline-block" }}>
                Book advisory sprint →
              </a>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🔍</div>
              <div style={{ marginTop: 16 }}>
                <span className="status live">Audit + monitoring</span>
              </div>
              <h3>AI Reliability Audits</h3>
              <p className="amount" style={{ fontSize: "1.6rem", fontWeight: 700 }}>$499 – $1,499</p>
              <p>
                We deploy the Sentinel gateway in front of your LLM/RAG system, audit for drift
                and prompt injection, install guardrails, and monitor ongoing. Starter for indie
                devs and small shops; Professional for agencies and SMBs; Sovereign for
                self-hosted / air-gapped enterprise — law, finance, healthcare.
              </p>
              <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 12 }}>
                <a href={SERVICES.auditStarter} target="_blank" rel="noreferrer" className="button-ghost">
                  Starter $499 →
                </a>
                <a href={SERVICES.auditPro} target="_blank" rel="noreferrer" className="button-ghost">
                  Professional $1,499 →
                </a>
              </div>
              <p style={{ marginTop: 10, fontSize: ".85rem", opacity: 0.75 }}>
                Sovereign (enterprise): <a href="mailto:anthony.castro@axiomzetainnovations.com?subject=Sentinel%20Sovereign%20audit%20inquiry" style={{ color: "var(--accent)", fontWeight: 600 }}>request a quote →</a>
              </p>
            </article>
            <article className="card">
              <div className="card-icon" aria-hidden="true">🔒</div>
              <div style={{ marginTop: 16 }}>
                <span className="status live">Deployment + care</span>
              </div>
              <h3>Private AI Assistant Deployments</h3>
              <p className="amount" style={{ fontSize: "1.6rem", fontWeight: 700 }}>$2,500<small> one-time</small></p>
              <p>
                Self-hosted, Ollama-based AI assistants for organizations that can&apos;t send
                data to third-party APIs. We deploy, tune, and hand over a system where data
                never leaves your building. Includes 90-day care; ongoing maintenance plans available.
              </p>
              <a href={SERVICES.deployment} target="_blank" rel="noreferrer" className="button-gold" style={{ marginTop: 12, display: "inline-block" }}>
                Start deployment →
              </a>
            </article>
          </div>
          <p style={{ color: "var(--muted-2)", fontSize: ".9rem", marginTop: 20, textAlign: "center" }}>
            Prefer to talk first? <a href={CONSULT_URL} target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>Schedule a consultation →</a>
          </p>
        </div>
      </section>

      {/* ── AXIOM ZETA SENTINEL ─────────────────────────────── */}
      <section className="section alt" id="sentinel">
        <div className="container">
          <div className="section-head">
            <p className="kicker">Live — Axiom Zeta Sentinel</p>
            <h2>Sentinel: drift prevention for LLM &amp; RAG systems</h2>
            <p className="sub">
              Your models and data shift quietly — embeddings drift, retrieval scores slide,
              outputs decay. Axiom Zeta Sentinel watches metric streams against a learned
              baseline and returns a bounded stabilized signal, a drift score, and a clear
              action: pass, clamp, retry, fallback, or human review. Free and open source
              under AGPL-3.0 — self-host the gateway and set your own API key.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="status live">Live — Solo</span>
              <h3>Sentinel Solo</h3>
              <p>For individual builders. One gateway, baseline drift detection, full GUI playground.</p>
              <ul><li>Stabilize / feedback / baseline-reset API</li><li>Drift diagnostics &amp; telemetry</li><li>AGPL-3.0 open source — self-host, no paywall</li></ul>
              <Link href="/sentinel-solo" className="card-cta">Sentinel Solo product page →</Link>
              <a href="https://github.com/Axiom-Zeta-Innovations-LLC/axiom-zeta-sentinel-solo" target="_blank" rel="noreferrer" className="card-cta">Open source — GitHub →</a>
            </article>
            <article className="card">
              <span className="status live">Live — Teams</span>
              <h3>Sentinel Teams</h3>
              <p>For teams running RAG in production. Orgs, workspaces, roles, and shared API keys.</p>
              <ul><li>Everything in Solo</li><li>Workspaces, members &amp; audit</li><li>Workspace analytics</li></ul>
              <Link href="/sentinel-teams" className="card-cta">Sentinel Teams product page →</Link>
              <a href="https://github.com/Axiom-Zeta-Innovations-LLC/axiom-zeta-sentinel-teams" target="_blank" rel="noreferrer" className="card-cta">Open source — GitHub →</a>
            </article>
            <article className="card">
              <span className="status dev">MVP Preview — Sovereign</span>
              <h3>Sentinel Sovereign</h3>
              <p>Enterprise preview. OIDC, policy engine, HA state and operator controls, config-gated in MVP.</p>
              <ul><li>Everything in Teams</li><li>OIDC / policy / airgap controls</li><li>Annual invoicing on request</li></ul>
              <Link href="/sentinel-sovereign" className="card-cta">Sentinel Sovereign product page →</Link>
              <a href="https://github.com/Axiom-Zeta-Innovations-LLC/axiom-zeta-sentinel-sovereign" target="_blank" rel="noreferrer" className="card-cta">Open source — GitHub →</a>
            </article>
          </div>
          <p style={{color:"var(--muted-2)",fontSize:".9rem",marginTop:16}}>Sentinel is the developer-reliability lane on this hub. All three tiers are free and open source under AGPL-3.0 — run the gateway yourself with your own API key. For evaluated Sovereign or enterprise deployments, start at the official LLC site: <a href="https://axiomzetainnovations.com" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>axiomzetainnovations.com</a>.</p>
        </div>
      </section>

      {/* ── QUADRA-SEER SPOTLIGHT ─────────────────────────────── */}
      <section className="section alt" id="quadra-seer">
        <div className="container spotlight">
          <div>
            <p className="kicker">Sovereign Line — Spotlight</p>
            <h2>Quadra-Seer Sovereign: the chatbot that lives with you, not above you</h2>
            <p className="sub" style={{ maxWidth: "none" }}>
              Most AI chatbots rent you intelligence from a distant data center and keep
              the conversation. Quadra-Seer Sovereign inverts that: the model runs locally,
              memory stays on your device, and the system works with the network unplugged.
              It is built for thinkers who want a powerful thought partner without a landlord.
            </p>
            <ul className="ticks">
              <li><span><strong style={{ color: "var(--text)" }}>Local-first, always.</strong> Inference on your hardware. Close the laptop, keep your mind.</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Sovereign memory.</strong> Your context is a file you own — portable, inspectable, deletable by you alone.</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>No account. No telemetry by default.</strong> Privacy is the architecture, not a settings toggle.</span></li>
            </ul>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
              <a href="https://github.com/Axiom-Zeta-Innovations-LLC/quadra-seer-equalibra-sovereign" target="_blank" rel="noreferrer" className="button-gold">
                Run it on your machine →
              </a>
              <a href="mailto:anthony.castro@axiomzetainnovations.org?subject=Quadra-Seer%20Sovereign%20—%20beta%20interest" className="button-ghost">
                Join the sovereign beta
              </a>
              <Link href="#principles" className="button-ghost">Why sovereign?</Link>
            </div>
          </div>
          <div className="terminal" aria-label="Quadra-Seer Sovereign local session illustration">
            <div className="terminal-bar">
              <span>quadra-seer — local session</span>
              <span style={{ color: "var(--accent)" }}>● OFFLINE READY</span>
            </div>
            <div className="terminal-body">
              <div><span className="prompt">$</span> quadra-seer start --local</div>
              <div className="dim">loading model from ~/models … done (on-device)</div>
              <div className="dim">network: not required · telemetry: off · memory: ~/quadra-seer/memory</div>
              <div style={{ marginTop: 12 }}><span className="prompt">you ›</span> Help me think through this — privately.</div>
              <div style={{ marginTop: 6 }}><span className="gold">seer ›</span> Of course. Everything in this session stays on your machine. Where shall we begin?</div>
              <div className="dim" style={{ marginTop: 12 }}>— sovereign by architecture, not by promise —</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PRINCIPLES ────────────────────────────────────────── */}
      <section className="section" id="principles">
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
                AI Change Radar sends one brief a week, not 400 alerts. Quadra-Seer
                remembers what matters. Every product is edited for the decision,
                not the feed.
              </p>
            </article>
            <article className="card">
              <span className="pillar-num">03 / HONEST BY DESIGN</span>
              <h3>Labeled, sourced, verifiable</h3>
              <p>
                Simulated is labeled simulated. Every radar item cites its public
                source. Pricing is plain. We would rather under-promise in writing
                than over-promise in marketing.
              </p>
            </article>
          </div>
          <div className="card" style={{ marginTop: 28, textAlign: "center" }}>
            <span className="mini-tag gold">Support the work</span>
            <h3 style={{ margin: "12px 0 8px" }}>Fund independent, open-source AI</h3>
            <p style={{ maxWidth: 560, margin: "0 auto 18px" }}>
              Donations go directly to building and maintaining Axiom Zeta&apos;s open-source
              systems — no investors, no ads, no data selling. Every contribution keeps
              the code public and the lights on.
            </p>
            <div style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center" }}>
              {DONATE_TIERS.map((tier) => (
                <a key={tier.label} href={tier.url} target="_blank" rel="noreferrer" className="button-gold">
                  {tier.label === "Custom" ? "Custom amount →" : `Donate ${tier.label} →`}
                </a>
              ))}
            </div>
            <p style={{ marginTop: 12, fontSize: "0.85rem", opacity: 0.7 }}>
              Custom amount: set the quantity on the checkout page to choose your total (e.g. quantity 50 = $50).
            </p>
          </div>
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────── */}
      <section className="section alt" id="about">
        <div className="container spotlight">
          <div>
            <p className="kicker">About</p>
            <h2>Axiom Zeta Innovations LLC</h2>
            <p className="sub" style={{ maxWidth: "none" }}>
              Axiom Zeta Innovations is a Texas LLC building a small, deliberate suite of
              AI systems for independent operators — founders, SMB owners, and thinkers
              who want leverage without dependence. The studio ships in public: AI Change
              Radar is live and taking subscriptions today, and the sovereign line is in
              active development.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
              <a href={RADAR_URL} target="_blank" rel="noreferrer" className="button-primary">
                See the live flagship →
              </a>
              <a href="mailto:anthony.castro@axiomzetainnovations.org" className="button-ghost">
                anthony.castro@axiomzetainnovations.org
              </a>
            </div>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>At a glance</h3>
            <ul>
              <li><span><strong style={{ color: "var(--text)" }}>Entity:</strong> Axiom Zeta Innovations LLC (Texas)</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Flagship:</strong> AI Change Radar — live at aichangeradar.com</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Sovereign line:</strong> Quadra-Seer Sovereign (local-first chatbot)</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Canonical product home:</strong> AI Change Radar at aichangeradar.com</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Official LLC site:</strong> axiomzetainnovations.com for entity, verification, and contact</span></li>
            </ul>
          </div>
        </div>
      </section>

      {/* ── CONSULTING ──────────────────────────────────────── */}
      <section className="section" id="consulting">
        <div className="container">
          <div className="section-head">
            <p className="kicker gold">Consulting</p>
            <h2>Work with the team that builds it</h2>
            <p className="sub">
              We help teams put open-source AI to work: architecture reviews, custom
              deployments, sovereign infrastructure, and hands-on guidance from the people
              who wrote the code. Book a consultation and we&apos;ll find the right engagement.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="mini-tag teal">For builders</span>
              <h3>Technical consultation</h3>
              <p>Architecture reviews, deployment planning, and integration guidance for teams adopting Axiom Zeta systems.</p>
            </article>
            <article className="card">
              <span className="mini-tag gold">For operators</span>
              <h3>Sovereign infrastructure</h3>
              <p>Self-hosted and air-gapped deployments, data-sovereignty reviews, and operator training for your team.</p>
            </article>
            <article className="card">
              <span className="mini-tag green">For organizations</span>
              <h3>Custom engagements</h3>
              <p>Scoped projects, dedicated support agreements, and long-term partnerships built around your roadmap.</p>
            </article>
          </div>
          <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28, justifyContent: "center" }}>
            <a href={CONSULT_URL} target="_blank" rel="noreferrer" className="button-gold">
              Schedule a consultation →
            </a>
            <a href="mailto:anthony.castro@axiomzetainnovations.com?subject=Consulting%20inquiry" className="button-ghost">
              Email us instead
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
