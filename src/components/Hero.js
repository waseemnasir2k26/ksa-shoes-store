"use client";
import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t, lang } = useLanguage();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Background layers */}
      <div className={styles.bgBase} />
      <div className={styles.bgOrb1} />
      <div className={styles.bgOrb2} />
      <div className={styles.bgGrid} />

      <div className={`container ${styles.heroInner}`}>
        {/* ── Left: Content ── */}
        <div className={`${styles.content} ${visible ? styles.contentVisible : ''}`}>
          <div className={styles.eyebrow}>
            <span className={styles.eyebrowLine} />
            <span>{t('heroLabel')}</span>
          </div>

          <h1 className={styles.headline}>
            <span className={styles.headlineRow}>
              {lang === 'ar' ? 'صُنعت' : 'Crafted for'}
            </span>
            <span className={`${styles.headlineRow} ${styles.headlineGold}`}>
              {lang === 'ar' ? 'للرجل العصري' : 'the Modern'}
            </span>
            <span className={styles.headlineRow}>
              {lang === 'ar' ? 'بأيدٍ سعودية' : 'Gentleman.'}
            </span>
          </h1>

          <p className={styles.subtitle}>
            {lang === 'ar'
              ? 'صنادل عربية فاخرة مصنوعة يدوياً من أجود أنواع الجلود الإيطالية. شحن مجاني في جميع أنحاء المملكة.'
              : 'Premium handcrafted Arabic sandals made from the finest Italian leather. Free shipping across Saudi Arabia.'
            }
          </p>

          {/* Social proof */}
          <div className={styles.proofRow}>
            <div className={styles.proofStars}>★★★★★</div>
            <span className={styles.proofText}>
              {lang === 'ar' ? '٤.٨ من ٢٤٧+ تقييم' : '4.8 from 247+ reviews'}
            </span>
            <span className={styles.proofDot}>·</span>
            <span className={styles.proofText}>
              {lang === 'ar' ? '+٥٠ ألف عميل' : '50K+ customers'}
            </span>
          </div>

          {/* CTA */}
          <div className={styles.ctaRow}>
            <Link href="/sandals" className={styles.ctaPrimary}>
              {lang === 'ar' ? 'تسوق المجموعة' : 'Shop the Collection'}
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M5 12h14M12 5l7 7-7 7"/>
              </svg>
            </Link>
            <div className={styles.ctaPrice}>
              <span className={styles.ctaPriceLabel}>
                {lang === 'ar' ? 'تبدأ من' : 'Starting from'}
              </span>
              <span className={styles.ctaPriceValue}>SAR 260</span>
            </div>
          </div>

          {/* Payment strip */}
          <div className={styles.paymentStrip}>
            <span>{lang === 'ar' ? 'مدى' : 'Mada'}</span>
            <span className={styles.paymentDot}>·</span>
            <span>Apple Pay</span>
            <span className={styles.paymentDot}>·</span>
            <span>Tamara</span>
            <span className={styles.paymentDot}>·</span>
            <span>{lang === 'ar' ? 'الدفع عند الاستلام' : 'COD'}</span>
          </div>
        </div>

        {/* ── Right: Product Showcase ── */}
        <div className={`${styles.showcase} ${visible ? styles.showcaseVisible : ''}`}>
          <div className={styles.productGlow} />
          <div className={styles.productFloat}>
            <img
              src="/assets/sandal_black_dark.png"
              alt="Premium Al-Zaytoun Arabic Sandal"
              className={styles.productImage}
            />
          </div>
          {/* Price tag */}
          <div className={styles.priceTag}>
            <span className={styles.priceTagLabel}>{lang === 'ar' ? 'الأكثر مبيعاً' : 'Best Seller'}</span>
            <span className={styles.priceTagValue}>SAR 280</span>
          </div>
        </div>
      </div>

      {/* Bottom gold line */}
      <div className={styles.heroDecor} />

      {/* Scroll indicator */}
      <div className={styles.scrollIndicator}>
        <span className={styles.scrollLine} />
      </div>
    </section>
  );
}
