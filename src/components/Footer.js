"use client";
import React from 'react';
import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import styles from './Footer.module.css';

export default function Footer() {
  const { t } = useLanguage();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandBox}>
          <h2 className={styles.logoText}>Al-Zaytoun</h2>
          <p className={styles.brandDesc}>{t('footerDesc')}</p>
        </div>
        
        <div className={styles.linkGroup}>
          <h3 className={styles.linkTitle}>{t('shop')}</h3>
          <ul className={styles.linkList}>
            <li><Link href="/sandals">{t('arabicSandals')}</Link></li>
            <li><Link href="/shoes">{t('formalShoes')}</Link></li>
            <li><Link href="/accessories">{t('accessories')}</Link></li>
            <li><Link href="/sale">{t('sale')}</Link></li>
          </ul>
        </div>
        
        <div className={styles.linkGroup}>
          <h3 className={styles.linkTitle}>{t('support')}</h3>
          <ul className={styles.linkList}>
            <li><Link href="/contact">{t('contactUs')}</Link></li>
            <li><Link href="/shipping">{t('shippingReturns')}</Link></li>
            <li><Link href="/faq">{t('faq')}</Link></li>
            <li><Link href="/size-guide">{t('sizeGuide')}</Link></li>
          </ul>
        </div>

        <div className={styles.newsletterBox}>
          <h3 className={styles.linkTitle}>{t('newsletter')}</h3>
          <p className={styles.newsletterDesc}>{t('newsletterDesc')}</p>
          <form className={styles.newsletterForm} onSubmit={(e) => e.preventDefault()}>
            <input type="email" placeholder={t('emailPlaceholder')} className={styles.input} />
            <button type="submit" className={styles.submitBtn}>{t('subscribe')}</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} {t('copyright')}</p>
        </div>
      </div>
    </footer>
  );
}
