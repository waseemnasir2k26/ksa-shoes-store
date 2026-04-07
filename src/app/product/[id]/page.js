import Link from 'next/link';

export default async function ProductDetail({ params }) {
  const { id } = await params;
  return (
    <div className="container" style={{ padding: "5rem 0", textAlign: "center", minHeight: "60vh", display: "flex", alignItems: "center", justifyContent: "center" }}>
      <div>
        <h1 style={{ fontFamily: "var(--font-tajawal)", fontSize: "3rem", marginBottom: "1rem" }}>Product Details</h1>
        <p style={{ color: "var(--text-muted)", marginBottom: "2rem" }}>This is a prototype. The detailed view for product <strong>{id}</strong> would go here.</p>
        <Link href="/" style={{ color: "var(--primary)", textDecoration: "underline", fontWeight: "bold" }}>← Back to Home</Link>
      </div>
    </div>
  );
}
