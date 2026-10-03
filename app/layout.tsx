import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "Axiom Zeta Innovations — Sovereign AI Systems",
  description:
    "Axiom Zeta Innovations builds sovereign, operator-owned AI: AI Change Radar for SMB vendor intelligence, Quadra-Seer Sovereign local-first chatbot, EqualiF.I. Planner, and AZxAI Navigator.",
  metadataBase: new URL("https://axiomzeta-innovations.com"),
  openGraph: {
    title: "Axiom Zeta Innovations — Sovereign AI Systems",
    description:
      "Intelligence you own. AI Change Radar, Quadra-Seer Sovereign, EqualiF.I. Planner, and AZxAI Navigator.",
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
                  <span className="brand-sub">Sovereign AI Systems</span>
                </span>
              </Link>
              <nav className="topnav" aria-label="Main">
                <Link href="/#platform">AI Change Radar</Link>
                <Link href="/#products">Products</Link>
                <Link href="/#quadra-seer">Quadra-Seer</Link>
                <Link href="/#principles">Principles</Link>
                <Link href="/#about">About</Link>
              </nav>
              <a href="https://www.aichangeradar.com/onboarding" target="_blank" rel="noreferrer" className="cta-button">
                Start tracking →
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
                    <Link href="/#quadra-seer">Quadra-Seer Sovereign</Link>
                    <Link href="/#products">EqualiF.I. Planner</Link>
                    <Link href="/#products">AZxAI Navigator</Link>
                    <a href="https://quadra-mind-sight.onrender.com" target="_blank" rel="noreferrer">Quadra-M.I.N.D. Sight ↗</a>
                  </div>
                </div>
                <div>
                  <h4>Company</h4>
                  <div className="footer-links">
                    <Link href="/#platform">Advertising Portal</Link>
                    <Link href="/#principles">Our Principles</Link>
                    <Link href="/#about">About Axiom Zeta</Link>
                    <a href="https://www.aichangeradar.com/sample" target="_blank" rel="noreferrer">Sample Brief ↗</a>
                    <a href="https://www.aichangeradar.com" target="_blank" rel="noreferrer">aichangeradar.com ↗</a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© {new Date().getFullYear()} Axiom Zeta Innovations LLC. All rights reserved.</p>
                <p>Intelligence you own.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
