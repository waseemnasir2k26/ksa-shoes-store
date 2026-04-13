"use client";
import Hero from "@/components/Hero";
import ProductGrid from "@/components/ProductGrid";
import MarqueeBanner from "@/components/MarqueeBanner";
import CategoryCards from "@/components/CategoryCards";
import TrustBadges from "@/components/TrustBadges";
import ReviewsSection from "@/components/ReviewsSection";
import { useLanguage } from "@/context/LanguageContext";

const stats = [
  { number: "38+", labelEn: "Years of Craftsmanship", labelAr: "سنة من الحرفية" },
  { number: "50K+", labelEn: "Happy Customers", labelAr: "عميل سعيد" },
  { number: "4.8★", labelEn: "Average Rating", labelAr: "متوسط التقييم" },
  { number: "100%", labelEn: "Authentic Guaranteed", labelAr: "أصالة مضمونة" },
];

export default function Home() {
  const { t, lang } = useLanguage();

  return (
    <>
      <Hero />
      <MarqueeBanner />

      {/* Social Proof Numbers */}
      <section style={{ padding: "3.5rem 0", background: "var(--primary-soft)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container" style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "2rem", textAlign: "center" }}>
          {stats.map((stat, i) => (
            <div key={i}>
              <div style={{
                fontFamily: "var(--font-display)",
                fontSize: "2.5rem",
                fontWeight: 700,
                background: "var(--gold-text)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                lineHeight: 1.1,
                marginBottom: "0.5rem",
              }}>
                {stat.number}
              </div>
              <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem", letterSpacing: "0.02em" }}>
                {lang === "ar" ? stat.labelAr : stat.labelEn}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 640px) {
            .container[style] {
              grid-template-columns: repeat(2, 1fr) !important;
            }
          }
        `}</style>
      </section>

      <section style={{ padding: "6rem 0 4rem" }}>
        <div className="container">
          <div className="gold-divider"></div>
          <h2 className="section-title">{t('featuredTitle')}</h2>
          <p className="section-subtitle">{t('featuredDesc')}</p>
        </div>
        <ProductGrid />
      </section>

      <CategoryCards />
      <TrustBadges />
      <ReviewsSection />
    </>
  );
}
