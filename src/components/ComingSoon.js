import Link from 'next/link';

export default function ComingSoon({ pageName }) {
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
          {pageName}
        </h1>
        <p style={{ color: "var(--text-secondary)", marginBottom: "2.5rem", maxWidth: "400px", margin: "0 auto 2.5rem", lineHeight: "1.6" }}>
          We are crafting something beautiful. This section is coming soon.
        </p>
        <Link 
          href="/" 
          style={{ 
            padding: "1rem 2rem", 
            background: "var(--gold-shimmer)", 
            color: "var(--primary)", 
            borderRadius: "var(--radius-xs)", 
            textDecoration: "none",
            fontWeight: "700",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontSize: "0.8rem"
          }}
        >
          Return to Home
        </Link>
      </div>
    </div>
  );
}
