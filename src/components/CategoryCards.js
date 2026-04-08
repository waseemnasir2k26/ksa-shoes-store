"use client";
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './CategoryCards.module.css';

export default function CategoryCards() {
  const { t } = useLanguage();
  
  const categories = [
    {
      name: t('catSandals'),
      subtitle: t('catSandalsCount'),
      href: "/sandals",
      image: "/assets/sandal_black_dark.png"
    },
    {
      name: t('catShoes'),
      subtitle: t('catShoesCount'),
      href: "/shoes",
      image: "/assets/sandal_brown_dark.png"
    },
    {
      name: t('catAccessories'),
      subtitle: t('catAccessoriesCount'),
      href: "/accessories",
      image: "/assets/sandal_black_dark.png"
    }
  ];

  return (
    <section className={styles.section}>
      <div className="container">
        <div className="gold-divider"></div>
        <h2 className="section-title">{t('shopByCategory')}</h2>
        <p className="section-subtitle">{t('browseCollections')}</p>
        <div className={styles.grid}>
          {categories.map((cat, i) => (
            <Link key={i} href={cat.href} className={styles.card}>
              <div className={styles.cardImage}>
                <img src={cat.image} alt={cat.name} />
              </div>
              <div className={styles.cardOverlay}>
                <span className={styles.cardSubtitle}>{cat.subtitle}</span>
                <h3 className={styles.cardName}>{cat.name}</h3>
                <span className={styles.cardCta}>
                  {t('explore')}
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
