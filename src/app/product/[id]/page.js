import Link from 'next/link';

export default async function ProductDetail({ params }) {
  const { id } = await params;
  return (
    <div className="container" style={{ 
      padding: "10rem 0 5rem", 
      textAlign: "center", 
      minHeight: "80vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center" 
    }}>
      <div>
        <div className="gold-divider"></div>
        <h1 style={{ 
          fontFamily: "var(--font-display)", 
          fontSize: "3rem", 
          marginBottom: "1rem",
          background: "var(--gold-text)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text"
        }}>
          Product Details
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem" }}>
          This is a prototype. The detailed view for product <strong style={{ color: "var(--gold)" }}>{id}</strong> would go here.
        </p>
        <Link 
          href="/" 
          style={{ 
            color: "var(--gold)", 
            textDecoration: "underline", 
            fontWeight: "600",
            fontSize: "0.9rem"
          }}
        >
          ← Back to Home
        </Link>
      </div>
    </div>
  );
}
