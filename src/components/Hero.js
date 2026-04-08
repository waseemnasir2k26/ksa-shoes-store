"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Hero.module.css';

export default function Hero() {
  const { t } = useLanguage();
  
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        <img 
          src="/assets/hero_dark.png" 
          alt="Premium Leather Arabic Sandal — Luxury Collection" 
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={`container ${styles.heroContent}`}>
        <div className={styles.heroLabel}>
          <span className={styles.heroLabelLine}></span>
          <span>{t('heroLabel')}</span>
          <span className={styles.heroLabelLine}></span>
        </div>
        
        <h1 className={styles.heroTitle}>
          {t('heroTitle1')} <br/>
          <span className={styles.heroHighlight}>{t('heroTitle2')}</span>
        </h1>
        
        <p className={styles.heroSubtitle}>
          {t('heroDesc')}
        </p>
        
        <div className={styles.heroActions}>
          <Link href="/sandals" className={styles.btnPrimary}>
            {t('shopCollection')}
          </Link>
          <Link href="/about" className={styles.btnSecondary}>
            {t('ourHeritage')}
          </Link>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <span className={styles.scrollText}>{t('scroll')}</span>
        <span className={styles.scrollLine}></span>
      </div>

      <div className={styles.heroDecor}></div>
    </section>
  );
}
