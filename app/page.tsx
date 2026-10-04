import Link from "next/link";

const RADAR_URL = "https://www.aichangeradar.com";
const NAVIGATOR_URL = "https://azxai-navigator.onrender.com";

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
                <span className="mini-tag teal">For AI builders — MVP</span>
                <h4>Axiom Zeta Sentinel</h4>
                <p>Drift prevention for LLM &amp; RAG systems. Start with Solo, Teams, or Sovereign preview.</p>
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
              <span className="status dev">AI builders — MVP</span>
              <h3>“My LLM/RAG system drifts.”</h3>
              <p>Start with Sentinel. Solo is for individual builders, Teams for shared RAG services, and Sovereign for evaluated enterprise/sovereign deployments.</p>
              <Link href="#sentinel" className="card-cta">Explore Sentinel ↓</Link>
            </article>
            <article className="card">
              <span className="status dev">Sovereign / official</span>
              <h3>“I need local control or the LLC.”</h3>
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
              <div className="price-row" aria-label="AI Change Radar pricing">
                <div className="price-mini">
                  <h4>Radar 5</h4>
                  <p className="amount">$29<small> / mo</small></p>
                  <p>Track up to 5 AI vendors. Perfect for a focused stack.</p>
                </div>
                <div className="price-mini featured">
                  <h4>Radar 15</h4>
                  <p className="amount">$79<small> / mo</small></p>
                  <p>Track up to 15 vendors. Most SMBs start here.</p>
                </div>
                <div className="price-mini">
                  <h4>Unlimited</h4>
                  <p className="amount">$199<small> / mo</small></p>
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
                <li>Priced by stack size — Radar 5 / 15 / Unlimited</li>
              </ul>
              <a href={RADAR_URL} target="_blank" rel="noreferrer" className="card-cta">
                Visit aichangeradar.com →
              </a>
            </article>

            <article className="card">
              <div className="card-icon" aria-hidden="true">🛡️</div>
              <div style={{ marginTop: 16 }}>
                <span className="status dev">MVP — AI builders</span>
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
                $74.99/mo.
              </p>
              <ul>
                <li>Exposure matching: which of your workflows each change hits</li>
                <li>Decision sandbox and action workspace, with recorded outcomes</li>
                <li>Runs on AI Change Radar briefs and act-severity alerts</li>
              </ul>
              <a href={NAVIGATOR_URL} target="_blank" rel="noreferrer" className="card-cta">
                Open AZxAI Navigator →
              </a>
            </article>
          </div>

          <div className="card" style={{ marginTop: 22 }}>
            <span className="status live">Shipped proof — not front doors</span>
            <p style={{ marginTop: 14 }}>
              <strong style={{ color: "var(--text)" }}>Quadra-M.I.N.D. Sight</strong> is live on the web and in Play review.{" "}
              <strong style={{ color: "var(--text)" }}>EqualiF.I. Planner</strong> is live as a focused financial-independence tool.
              They prove the studio ships; they do not split the front door.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 16 }}>
              <a href="https://quadra-mind-sight.onrender.com" target="_blank" rel="noreferrer" className="card-cta">Quadra-M.I.N.D. Sight ↗</a>
              <a href="https://equalifi-planner.vercel.app" target="_blank" rel="noreferrer" className="card-cta">EqualiF.I. Planner ↗</a>
            </div>
          </div>

        </div>
      </section>

      
      {/* ── AXIOM ZETA SENTINEL ─────────────────────────────── */}
      <section className="section alt" id="sentinel">
        <div className="container">
          <div className="section-head">
            <p className="kicker">New — Axiom Zeta Sentinel</p>
            <h2>Sentinel: drift prevention for LLM &amp; RAG systems</h2>
            <p className="sub">
              Your models and data shift quietly — embeddings drift, retrieval scores slide,
              outputs decay. Axiom Zeta Sentinel watches metric streams against a learned
              baseline and returns a bounded stabilized signal, a drift score, and a clear
              action: pass, clamp, retry, fallback, or human review. Billing is via Stripe;
              your API key is provisioned automatically after checkout.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="status dev">MVP — Solo</span>
              <h3>Sentinel Solo</h3>
              <p>For individual builders. One gateway, baseline drift detection, full GUI playground.</p>
              <ul><li>Stabilize / feedback / baseline-reset API</li><li>Drift diagnostics &amp; telemetry</li><li>Stripe checkout — key auto-provisioned</li></ul>
              <Link href="/sentinel-solo" className="card-cta">Sentinel Solo product page →</Link>
              <a href={process.env.NEXT_PUBLIC_SENTINEL_SOLO_CHECKOUT_URL || "https://buy.stripe.com/dRm6oJ8cw6AT3oa1KF18c0a"} className="card-cta">Subscribe — $59.99/mo →</a>
            </article>
            <article className="card">
              <span className="status dev">MVP — Teams</span>
              <h3>Sentinel Teams</h3>
              <p>For teams running RAG in production. Orgs, workspaces, roles, and shared API keys.</p>
              <ul><li>Everything in Solo</li><li>Workspaces, members &amp; audit</li><li>Workspace analytics</li></ul>
              <Link href="/sentinel-teams" className="card-cta">Sentinel Teams product page →</Link>
              <a href={process.env.NEXT_PUBLIC_SENTINEL_TEAMS_CHECKOUT_URL || "https://buy.stripe.com/3cI6oJ0K48J12k6ahb18c0b"} className="card-cta">Subscribe — $89.99/mo →</a>
            </article>
            <article className="card">
              <span className="status dev">MVP Preview — Sovereign</span>
              <h3>Sentinel Sovereign</h3>
              <p>Enterprise preview. OIDC, policy engine, HA state and operator controls, config-gated in MVP.</p>
              <ul><li>Everything in Teams</li><li>OIDC / policy / airgap controls</li><li>Annual invoicing on request</li></ul>
              <Link href="/sentinel-sovereign" className="card-cta">Sentinel Sovereign product page →</Link>
              <a href={process.env.NEXT_PUBLIC_SENTINEL_SOVEREIGN_CHECKOUT_URL || "https://buy.stripe.com/8x24gB64o2kDe2O3SN18c0c"} className="card-cta">Subscribe — $119.99/mo →</a>
            </article>
          </div>
          <p style={{color:"var(--muted-2)",fontSize:".9rem",marginTop:16}}>Sentinel is the developer-reliability lane on this hub. Billing is via Stripe; after checkout, the gateway GUI is where your workspace/API key is retrieved. For evaluated Sovereign or enterprise deployments, start at the official LLC site: <a href="https://axiomzetainnovations.com" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>axiomzetainnovations.com</a>.</p>
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
              <a href="mailto:anthony.castro@axiomzetainnovations.org?subject=Quadra-Seer%20Sovereign%20—%20beta%20interest" className="button-gold">
                Join the sovereign beta →
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
              Radar is live and taking subscriptions today, Quadra-M.I.N.D. Sight is live
              on the web and in Play review, and the sovereign line is in active development.
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
              <li><span><strong style={{ color: "var(--text)" }}>Shipped proof:</strong> Quadra-M.I.N.D. Sight (web live, Play in review)</span></li>
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
