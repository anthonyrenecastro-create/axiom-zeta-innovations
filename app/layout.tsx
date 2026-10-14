import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "E.L.L.I.A. Tech Collaboration — Open-source AI systems you can own",
  description:
    "E.L.L.I.A. Tech Collaboration is an open source for profit company building operator-owned AI: AI Change Radar, Sentinel, Quadra-Seer, and AZxAI Navigator. The code is public and open-licensed; we make money from hosted versions, support, premium tiers, consulting, and donations — never for the code itself.",
  metadataBase: new URL("https://axiomzeta-innovations.com"),
  openGraph: {
    title: "E.L.L.I.A. Tech Collaboration — Open-source AI systems you can own",
    description:
      "Open source for profit. AI Change Radar, Sentinel, Quadra-Seer, AZxAI Navigator — public code, honest pricing, sovereign by architecture.",
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
              <Link href="/" className="brand" aria-label="E.L.L.I.A. Sentinel home">
                <span className="brand-mark" aria-hidden="true">AZ</span>
                <span className="brand-text">
                  <span className="brand-name">
                    E.L.L.I.A. <em>Sentinel</em>
                  </span>
                  <span className="brand-sub">LLM / RAG reliability</span>
                </span>
              </Link>
              <nav className="topnav" aria-label="Main">
                <Link href="/#sentinel">Sentinel</Link>
                <Link href="/#consulting">Consulting</Link>
                <a href="https://www.aichangeradar.com" target="_blank" rel="noreferrer">AI Change Radar</a>
                <a href="https://github.com/Axiom-Zeta-Innovations-LLC" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://axiomzetainnovations.com" target="_blank" rel="noreferrer">Official LLC</a>
                <Link href="/#principles">Donate</Link>
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
                  <Link href="/" className="brand" aria-label="E.L.L.I.A. Sentinel home">
                    <span className="brand-mark" aria-hidden="true">AZ</span>
                    <span className="brand-text">
                      <span className="brand-name">
                        E.L.L.I.A. <em>Sentinel</em>
                      </span>
                      <span className="brand-sub">Drift prevention for LLM &amp; RAG</span>
                    </span>
                  </Link>
                  <p style={{ color: "var(--muted)", maxWidth: 420, marginTop: 18 }}>
                    Texas-based studio building open-source, operator-owned AI — local-first where it matters,
                    signal-driven where it counts. The code is public; we earn from hosted, support, and premium tiers.
                    No lock-in. No surveillance by default.
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
                  <h4 style={{ marginTop: 22, fontSize: ".85rem", color: "var(--muted-2)" }}>Also from E.L.L.I.A.</h4>
                  <div className="footer-links">
                    <a href="https://www.aichangeradar.com" target="_blank" rel="noreferrer">AI Change Radar ↗</a>
                  </div>
                </div>
                <div>
                  <h4>Company</h4>
                  <div className="footer-links">
                    <Link href="/#principles">Our Principles</Link>
                    <Link href="/#open-source">Open Source</Link>
                    <Link href="/#about">About E.L.L.I.A.</Link>
                    <a href="https://github.com/Axiom-Zeta-Innovations-LLC" target="_blank" rel="noreferrer">GitHub ↗</a>
                    <a href="https://axiomzetainnovations.com" target="_blank" rel="noreferrer">Official LLC site ↗</a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© {new Date().getFullYear()} E.L.L.I.A. Tech Collaboration. Open source — code is public under open-source licenses. <a href="https://github.com/Axiom-Zeta-Innovations-LLC" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>github.com/Axiom-Zeta-Innovations-LLC</a></p>
                <p>Catch drift before your users do.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
