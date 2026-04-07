import ProductGrid from "@/components/ProductGrid";

export default function Sandals() {
  return (
    <div style={{ padding: "4rem 0" }}>
      <div className="container">
        <h1 style={{ fontFamily: "var(--font-tajawal)", fontSize: "3rem", marginBottom: "1rem", textAlign: "center" }}>Arabic Sandals</h1>
        <p style={{ color: "var(--text-muted)", textAlign: "center", marginBottom: "3rem" }}>Our exclusive collection</p>
      </div>
      <ProductGrid />
    </div>
  );
}
