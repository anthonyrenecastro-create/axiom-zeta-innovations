import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axiom Zeta Sentinel — Drift prevention for LLM & RAG systems",
  description:
    "Axiom Zeta Sentinel watches your LLM and RAG systems against a learned baseline and returns a bounded action: pass, clamp, retry, fallback, or human review. Solo, Teams, and Sovereign tiers with Stripe billing.",
  metadataBase: new URL("https://axiomzeta-innovations.com"),
  openGraph: {
    title: "Axiom Zeta Sentinel — Drift prevention for LLM & RAG systems",
    description:
      "Drift prevention for LLM & RAG systems. Solo $59.99, Teams $89.99, Sovereign $119.99/mo. Stripe billing, key auto-provisioned.",
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
              <Link href="/" className="brand" aria-label="Axiom Zeta Sentinel home">
                <span className="brand-mark" aria-hidden="true">AZ</span>
                <span className="brand-text">
                  <span className="brand-name">
                    Axiom Zeta <em>Sentinel</em>
                  </span>
                  <span className="brand-sub">LLM / RAG reliability</span>
                </span>
              </Link>
              <nav className="topnav" aria-label="Main">
                <Link href="/#sentinel">Sentinel</Link>
                <Link href="/#how">How it works</Link>
                <a href="https://www.aichangeradar.com" target="_blank" rel="noreferrer">AI Change Radar</a>
                <a href="https://axiomzetainnovations.com" target="_blank" rel="noreferrer">Official LLC</a>
              </nav>
              <Link href="/#sentinel" className="cta-button">
                Get Sentinel →
              </Link>
            </div>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <div className="container">
              <div className="footer-grid">
                <div>
                  <Link href="/" className="brand" aria-label="Axiom Zeta Sentinel home">
                    <span className="brand-mark" aria-hidden="true">AZ</span>
                    <span className="brand-text">
                      <span className="brand-name">
                        Axiom Zeta <em>Sentinel</em>
                      </span>
                      <span className="brand-sub">Drift prevention for LLM &amp; RAG</span>
                    </span>
                  </Link>
                  <p style={{ color: "var(--muted)", maxWidth: 420, marginTop: 18 }}>
                    Texas-based studio building operator-owned AI — local-first where it matters,
                    signal-driven where it counts. No lock-in. No surveillance by default.
                  </p>
                  <p style={{ color: "var(--muted)", marginTop: 14, fontSize: ".94rem" }}>
                    Contact:{" "}
                    <a href="mailto:anthony.castro@axiomzetainnovations.com" style={{ color: "var(--accent)", fontWeight: 600 }}>
                      anthony.castro@axiomzetainnovations.com
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Sentinel</h4>
                  <div className="footer-links">
                    <Link href="/sentinel-solo">Sentinel Solo</Link>
                    <Link href="/sentinel-teams">Sentinel Teams</Link>
                    <Link href="/sentinel-sovereign">Sentinel Sovereign</Link>
                    <Link href="/#how">How it works</Link>
                  </div>
                  <h4 style={{ marginTop: 22, fontSize: ".85rem", color: "var(--muted-2)" }}>Also from Axiom Zeta</h4>
                  <div className="footer-links">
                    <a href="https://www.aichangeradar.com" target="_blank" rel="noreferrer">AI Change Radar ↗</a>
                  </div>
                </div>
                <div>
                  <h4>Company</h4>
                  <div className="footer-links">
                    <Link href="/#principles">Our Principles</Link>
                    <Link href="/#about">About Axiom Zeta</Link>
                    <a href="https://axiomzetainnovations.com" target="_blank" rel="noreferrer">Official LLC site ↗</a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Axiom Zeta Innovations LLC. All rights reserved.</p>
                <p>Catch drift before your users do.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
