import Link from 'next/link';

export default function ComingSoon({ pageName }) {
  return (
    <div className="container" style={{ padding: "5rem 0", textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>
        <h1 style={{ fontFamily: "var(--font-tajawal)", fontSize: "3rem", marginBottom: "1rem" }}>{pageName}</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>We are crafting something beautiful. This section is coming soon.</p>
        <Link href="/" style={{ padding: "1rem 2rem", backgroundColor: "var(--primary)", color: "white", borderRadius: "var(--radius-sm)", textDecoration: "none" }}>
          Return to Home
        </Link>
      </div>
    </div>
  );
}
