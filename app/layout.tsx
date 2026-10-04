import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axiom Zeta Innovations — Sovereign AI Systems",
  description:
    "Axiom Zeta Innovations is the product hub for operator-owned AI: AI Change Radar (canonical home aichangeradar.com), AZxAI Navigator, Sentinel for LLM/RAG reliability, and Quadra-Seer sovereign local AI.",
  metadataBase: new URL("https://axiomzeta-innovations.com"),
  openGraph: {
    title: "Axiom Zeta Innovations — Sovereign AI Systems",
    description:
      "Intelligence you own. Start with AI Change Radar, Sentinel for LLM/RAG reliability, or Quadra-Seer sovereign local AI.",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <div className="shell">
          <header className="topbar">
            <div className="container topbar-row">
              <Link href="/" className="brand" aria-label="Axiom Zeta Innovations home">
                <span className="brand-mark" aria-hidden="true">AZ</span>
                <span className="brand-text">
                  <span className="brand-name">
                    Axiom Zeta <em>Innovations</em>
                  </span>
                  <span className="brand-sub">Product Hub — Pick Your Lane</span>
                </span>
              </Link>
              <nav className="topnav" aria-label="Main">
                <a href="https://www.aichangeradar.com" target="_blank" rel="noreferrer">Radar</a>
                <Link href="/#sentinel">Sentinel</Link>
                <a href="https://azxai-navigator.onrender.com" target="_blank" rel="noreferrer">Navigator</a>
                <Link href="/#start-here">Start Here</Link>
                <a href="https://axiomzetainnovations.com" target="_blank" rel="noreferrer">Official LLC</a>
              </nav>
              <a href="https://www.aichangeradar.com/onboarding" target="_blank" rel="noreferrer" className="cta-button">
                Start with Radar →
              </a>
            </div>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <div className="container">
              <div className="footer-grid">
                <div>
                  <Link href="/" className="brand" aria-label="Axiom Zeta Innovations home">
                    <span className="brand-mark" aria-hidden="true">AZ</span>
                    <span className="brand-text">
                      <span className="brand-name">
                        Axiom Zeta <em>Innovations</em>
                      </span>
                      <span className="brand-sub">Sovereign AI Systems</span>
                    </span>
                  </Link>
                  <p style={{ color: "var(--muted)", maxWidth: 420, marginTop: 18 }}>
                    Texas-based studio building operator-owned AI — local-first where it matters,
                    signal-driven where it counts. No lock-in. No surveillance by default.
                  </p>
                  <p style={{ color: "var(--muted)", marginTop: 14, fontSize: ".94rem" }}>
                    Contact:{" "}
                    <a href="mailto:anthony.castro@axiomzetainnovations.org" style={{ color: "var(--accent)", fontWeight: 600 }}>
                      anthony.castro@axiomzetainnovations.org
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Products</h4>
                  <div className="footer-links">
                    <a href="https://www.aichangeradar.com" target="_blank" rel="noreferrer">AI Change Radar ↗</a>
                    <a href="https://azxai-navigator.onrender.com" target="_blank" rel="noreferrer">AZxAI Navigator ↗</a>
                    <Link href="/#quadra-seer">Quadra-Seer Sovereign</Link>
                    <Link href="/sentinel-solo">Sentinel Solo</Link>
                    <Link href="/sentinel-teams">Sentinel Teams</Link>
                    <Link href="/sentinel-sovereign">Sentinel Sovereign</Link>
                    <a href="https://equalifi-planner.vercel.app" target="_blank" rel="noreferrer">EqualiF.I. Planner ↗</a>
                    <a href="https://quadra-mind-sight.onrender.com" target="_blank" rel="noreferrer">Quadra-M.I.N.D. Sight ↗</a>
                  </div>
                </div>
                <div>
                  <h4>Company</h4>
                  <div className="footer-links">
                    <Link href="/#platform">Flagship: AI Change Radar</Link>
                    <Link href="/#start-here">Start Here</Link>
                    <Link href="/#principles">Our Principles</Link>
                    <Link href="/#about">About Axiom Zeta</Link>
                    <a href="https://axiomzetainnovations.com" target="_blank" rel="noreferrer">Official LLC site ↗</a>
                    <a href="https://www.aichangeradar.com/sample" target="_blank" rel="noreferrer">Sample Brief ↗</a>
                    <a href="https://www.aichangeradar.com" target="_blank" rel="noreferrer">aichangeradar.com ↗</a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Axiom Zeta Innovations LLC. All rights reserved.</p>
                <p>Pick your lane. Own the system.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
