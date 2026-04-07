import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";

export default function Home() {
  return (
    <>
      <Hero />
      <section style={{ padding: "5rem 0" }}>
        <div className="container">
          <h2 style={{ fontFamily: "var(--font-tajawal)", fontSize: "2.5rem", marginBottom: "3rem", textAlign: "center" }}>Featured Collections</h2>
          <ProductGrid />
        </div>
      </section>
    </>
  );
}
