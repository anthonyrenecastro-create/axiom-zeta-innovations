import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

export const metadata: Metadata = {
  title: "E.L.L.I.A. Tech Collaboration — A Community Building Open Source",
  description:
    "E.L.L.I.A. Tech Collaboration is a community of software and hardware developers working towards open source products. The code is public and open-licensed; we're sustained by donations, grants, and community support — the software is free, forever.",
  metadataBase: new URL("https://elliatechcollab.com"),
  openGraph: {
    title: "E.L.L.I.A. Tech Collaboration — A Community Building Open Source",
    description:
      "A community of software and hardware developers working towards open source products — public code, sovereign by architecture.",
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
              <Link href="/" className="brand" aria-label="E.L.L.I.A. Tech Collaboration home">
                <span className="brand-mark" aria-hidden="true">ETC</span>
                <span className="brand-text">
                  <span className="brand-name">
                    E.L.L.I.A. <em>Tech Collaboration</em>
                  </span>
                  <span className="brand-sub">Emerging Laboratory for Local Innovation &amp; Access</span>
                </span>
              </Link>
              <nav className="topnav" aria-label="Main">
                <Link href="/#products">Products</Link>
                <Link href="/#consulting">Consulting</Link>
                <a href="https://github.com/E-L-L-I-A-Tech-Collaboration" target="_blank" rel="noreferrer">GitHub</a>
                <a href="https://axiom-zeta-innovations-llc-site.vercel.app" target="_blank" rel="noreferrer">Official LLC</a>
                <Link href="/#principles">Donate</Link>
              </nav>
              <Link href="/#products" className="cta-button">
                Explore products →
              </Link>
            </div>
          </header>
          <main>{children}</main>
          <footer className="footer">
            <div className="container">
              <div className="footer-grid">
                <div>
                  <Link href="/" className="brand" aria-label="E.L.L.I.A. Tech Collaboration home">
                    <span className="brand-mark" aria-hidden="true">ETC</span>
                    <span className="brand-text">
                      <span className="brand-name">
                        E.L.L.I.A. <em>Tech Collaboration</em>
                      </span>
                      <span className="brand-sub">Emerging Laboratory for Local Innovation &amp; Access</span>
                    </span>
                  </Link>
                  <p style={{ color: "var(--muted)", maxWidth: 420, marginTop: 18 }}>
                    Texas-based non-profit building open-source, operator-owned AI — local-first where it matters,
                    signal-driven where it counts. The code is public; we&apos;re sustained by donations, grants,
                    and community support. No lock-in. No surveillance by default.
                  </p>
                  <p style={{ color: "var(--muted)", marginTop: 14, fontSize: ".94rem" }}>
                    Contact:{" "}
                    <a href="mailto:anthony.castro@axiomzetainnovations.com" style={{ color: "var(--accent)", fontWeight: 600 }}>
                      anthony.castro@axiomzetainnovations.com
                    </a>
                  </p>
                </div>
                <div>
                  <h4>Products</h4>
                  <div className="footer-links">
                    <Link href="/#quadra-seer">Quadra-Seer Sovereign</Link>
                    <Link href="/#how">How it works</Link>
                  </div>
                </div>
                <div>
                  <h4>Company</h4>
                  <div className="footer-links">
                    <Link href="/#principles">Our Principles</Link>
                    <Link href="/#open-source">Open Source</Link>
                    <Link href="/#about">About E.L.L.I.A.</Link>
                    <a href="https://github.com/E-L-L-I-A-Tech-Collaboration" target="_blank" rel="noreferrer">GitHub ↗</a>
                    <a href="https://axiom-zeta-innovations-llc-site.vercel.app" target="_blank" rel="noreferrer">Official LLC site ↗</a>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <p>© {new Date().getFullYear()} E.L.L.I.A. Tech Collaboration. Open source — code is public under open-source licenses. <a href="https://github.com/E-L-L-I-A-Tech-Collaboration" target="_blank" rel="noreferrer" style={{ color: "var(--accent)", fontWeight: 600 }}>github.com/E-L-L-I-A-Tech-Collaboration</a></p>
                <p>Own your AI.</p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
