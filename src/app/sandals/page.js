import ProductGrid from "@/components/ProductGrid";

export default function Sandals() {
  return (
    <div style={{ paddingTop: "8rem", paddingBottom: "4rem" }}>
      <div className="container" style={{ textAlign: "center", marginBottom: "3rem" }}>
        <div className="gold-divider"></div>
        <h1 className="section-title" style={{ fontSize: "3.5rem" }}>Arabic Sandals</h1>
        <p className="section-subtitle" style={{ marginBottom: "0" }}>
          Our exclusive collection of handcrafted Arabic sandals, made with premium leather and traditional techniques.
        </p>
      </div>
      <ProductGrid />
    </div>
  );
}
