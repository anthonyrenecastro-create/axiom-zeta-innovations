import Link from "next/link";

const NAVIGATOR_URL = "https://azxai-navigator.onrender.com";
const GITHUB_URL = "https://github.com/E-L-L-I-A-Tech-Collaboration";
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
            <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="card" style={{ display: "block", padding: "18px 20px" }}>
              <span className="mini-tag gold">01 · Open community</span>
              <h3 style={{ margin: "10px 0 6px" }}>Build in the open →</h3>
              <p style={{ margin: 0 }}>Software and hardware developers working towards open source products. Start here to contribute.</p>
            </a>
            <Link href="/#quadra-seer" className="card" style={{ display: "block", padding: "18px 20px" }}>
              <span className="mini-tag green">02 · Sovereign</span>
              <h3 style={{ margin: "10px 0 6px" }}>Quadra-Seer →</h3>
              <p style={{ margin: 0 }}>Local AI on your machine. No cloud required.</p>
            </Link>
          </div>
        </div>
        <div className="container hero-grid">
          <div>
            <p className="eyebrow">E.L.L.I.A. Tech Collaboration — Open Research Community</p>
            <p className="eyebrow" style={{ marginTop: 4, opacity: 0.75 }}>Emerging Laboratory for Local Innovation &amp; Access</p>
            <h1>
              A community of developers, <span className="hl">building open source.</span>
            </h1>
            <p className="lede">
              We are a community of software and hardware developers working towards open
              source products — in the open, to a scientific standard, for anyone to
              inspect, use, and improve. Open intelligence. Independent thinking.
            </p>
            <div className="hero-actions">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="button-gold">
                Explore the open work →
              </a>
              <Link href="#principles" className="button-ghost">
                Our principles
              </Link>
            </div>
            <div className="hero-proof" aria-label="E.L.L.I.A. commitments">
              <span>Open source · AGPL-3.0</span>
              <span>Sovereign by architecture</span>
            </div>
          </div>

          <div className="constellation" aria-label="E.L.L.I.A. mission">
            <div className="constellation-head">
              <strong>E.L.L.I.A. / THE MISSION</strong>
              <span className="live-pill">Open source</span>
            </div>
            <div className="core-card">
              <span className="core-tag">The mission — always</span>
              <h3>Open intelligence. Independent thinking.</h3>
              <p>
                The most important technology of our time should be built in the open —
                auditable by anyone, owned by no one, and held to the same standard of
                proof we&apos;d demand of science. No black boxes. No &quot;trust us.&quot;
              </p>
              <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginTop: 16 }}>
                <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="button-primary" style={{ padding: "11px 18px" }}>
                  Browse the repositories →
                </a>
                <Link href="#principles" className="button-ghost" style={{ padding: "11px 18px" }}>
                  How we work
                </Link>
              </div>
            </div>
            <div className="orbit-grid">
              <div className="orbit-card">
                <span className="mini-tag gold">Open research</span>
                <h4>Community lab</h4>
                <p>Experiments, prototypes, and infrastructure — public from day one.</p>
              </div>
              <div className="orbit-card">
                <span className="mini-tag green">Sovereign lab</span>
                <h4>Quadra-Seer Sovereign</h4>
                <p>Your AI, on your machine. No cloud required. No data leaves the device.</p>
              </div>
              <div className="orbit-card">
                <span className="mini-tag violet">Official LLC site</span>
                <h4>Official LLC site</h4>
                <p>Entity, verification, policies, and enterprise contact.</p>
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
              The mission comes first. Each system below has one home, one purpose, and one next step.
            </p>
          </div>
          <div className="grid-3">
            <article className="card">
              <span className="status live">AI operators — Live</span>
              <h3>"I need to act on AI changes."</h3>
              <p>AZxAI Navigator maps your AI operations, matches vendor changes to the workflows they touch, and turns alerts into approved, tracked action.</p>
              <a href={NAVIGATOR_URL} target="_blank" rel="noreferrer" className="card-cta">Open AZxAI Navigator →</a>
            </article>
            <article className="card">
              <span className="status dev">Sovereign / official</span>
              <h3>“I need local control.”</h3>
              <p>Quadra-Seer is the sovereign local-AI lab. Entity verification, policies, app support, and enterprise contact live on the official no-hyphen site.</p>
              <a href="https://axiom-zeta-innovations-llc-site.vercel.app" target="_blank" rel="noreferrer" className="card-cta">Visit the official site →</a>
            </article>
            <article className="card">
              <span className="status live">Builders — Open</span>
              <h3>“I want to build with you.”</h3>
              <p>The repositories are public. Open an issue with a sharp question, or propose a testable improvement — the door is open.</p>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="card-cta">Browse the repositories →</a>
            </article>
          </div>
        </div>
      </section>

      {/* ── PRODUCTS ──────────────────────────────────────────── */}
      <section className="section" id="products">
        <div className="container">
          <div className="section-head">
            <p className="kicker gold">The E.L.L.I.A. Suite</p>
            <h2>Systems by job, not a pile of products.</h2>
            <p className="sub">
              Quadra-Seer is the sovereign lab. Navigator turns AI change into tracked
              action. Everything else is proof, not another front door.
            </p>
          </div>

          <div className="grid-4">
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
                The action layer for your AI operations. Navigator maps your workflows,
                matches each vendor change to the ones it actually touches, and turns
                act-now alerts into approved, tracked action — free.
              </p>
              <ul>
                <li>Exposure matching: which of your workflows each change hits</li>
                <li>Decision sandbox and action workspace, with recorded outcomes</li>
                <li>Severity-ranked alerts with sources and next steps</li>
              </ul>
              <a href={NAVIGATOR_URL} target="_blank" rel="noreferrer" className="card-cta">
                Open AZxAI Navigator →
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
              Every E.L.L.I.A. product is free and open source under AGPL-3.0 — download
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
                The open tools surface AI change free. This service maps it to your
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
                The action layer on top of open-source intelligence. The tools surface
                what changed; this engagement says what to do about it — workflow integration, tool selection,
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
                We put drift detection and guardrails in front of your LLM/RAG system, audit for drift
                and prompt injection, and monitor ongoing. Starter for indie
                devs and small shops; Professional for agencies and SMBs; Enterprise for
                self-hosted / air-gapped deployments — law, finance, healthcare.
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
                Enterprise deployments: <a href="mailto:anthony.castro@axiomzetainnovations.com?subject=AI%20Reliability%20Audit%20enterprise%20inquiry" style={{ color: "var(--accent)", fontWeight: 600 }}>request a quote →</a>
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
                to hold your data hostage. If E.L.L.I.A. disappeared tomorrow, your
                work should survive intact.
              </p>
            </article>
            <article className="card">
              <span className="pillar-num">02 / SIGNAL OVER NOISE</span>
              <h3>Less, but decisive</h3>
              <p>
                We send signal, not noise — one decisive brief, not 400 alerts. Quadra-Seer
                remembers what matters. Every product is edited for the decision,
                not the feed.
              </p>
            </article>
            <article className="card">
              <span className="pillar-num">03 / HONEST BY DESIGN</span>
              <h3>Labeled, sourced, verifiable</h3>
              <p>
                Simulated is labeled simulated. Every claim cites its public
                source. Pricing is plain. We would rather under-promise in writing
                than over-promise in marketing.
              </p>
            </article>
          </div>
          <div className="card" style={{ marginTop: 28, textAlign: "center" }}>
            <span className="mini-tag gold">Support the work</span>
            <h3 style={{ margin: "12px 0 8px" }}>Fund independent, open-source AI</h3>
            <p style={{ maxWidth: 560, margin: "0 auto 18px" }}>
              Donations go directly to building and maintaining E.L.L.I.A.&apos;s open-source
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
            <h2>E.L.L.I.A. Tech Collaboration</h2>
            <p className="sub" style={{ maxWidth: "none" }}>
              E.L.L.I.A. Tech Collaboration is a community of software and hardware
              developers working towards open source products — building a small,
              deliberate suite of AI systems for independent operators: founders,
              SMB owners, and thinkers who want leverage without dependence. The
              community ships in public, and the sovereign line is in active development.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginTop: 28 }}>
              <a href={GITHUB_URL} target="_blank" rel="noreferrer" className="button-primary">
                Browse the open projects →
              </a>
              <a href="mailto:anthony.castro@axiomzetainnovations.org" className="button-ghost">
                anthony.castro@axiomzetainnovations.org
              </a>
            </div>
          </div>
          <div className="card">
            <h3 style={{ marginTop: 0 }}>At a glance</h3>
            <ul>
              <li><span><strong style={{ color: "var(--text)" }}>Entity:</strong> E.L.L.I.A. Tech Collaboration (Texas)</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Mission:</strong> a community of software and hardware developers working towards open source products</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Sovereign line:</strong> Quadra-Seer Sovereign (local-first chatbot)</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Open source:</strong> every project public under AGPL-3.0</span></li>
              <li><span><strong style={{ color: "var(--text)" }}>Official LLC site:</strong> for entity, verification, and contact</span></li>
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
              <p>Architecture reviews, deployment planning, and integration guidance for teams adopting E.L.L.I.A. systems.</p>
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
