"use client";
import { useLanguage } from '@/context/LanguageContext';
import styles from './TrustBadges.module.css';

export default function TrustBadges() {
  const { t } = useLanguage();

  const badges = [
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
          <polyline points="9 12 11 14 15 10"/>
        </svg>
      ),
      title: t('trust1Title'),
      desc: t('trust1Desc')
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="3" width="15" height="13"/>
          <polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
          <circle cx="5.5" cy="18.5" r="2.5"/>
          <circle cx="18.5" cy="18.5" r="2.5"/>
        </svg>
      ),
      title: t('trust2Title'),
      desc: t('trust2Desc')
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <rect x="1" y="4" width="22" height="16" rx="2" ry="2"/>
          <line x1="1" y1="10" x2="23" y2="10"/>
        </svg>
      ),
      title: t('trust3Title'),
      desc: t('trust3Desc')
    },
    {
      icon: (
        <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <polyline points="1 4 1 10 7 10"/>
          <path d="M3.51 15a9 9 0 1 0 2.13-9.36L1 10"/>
        </svg>
      ),
      title: t('trust4Title'),
      desc: t('trust4Desc')
    }
  ];

  return (
    <section className={styles.section}>
      <div className={`container ${styles.grid}`}>
        {badges.map((badge, i) => (
          <div key={i} className={styles.badge}>
            <div className={styles.icon}>{badge.icon}</div>
            <h4 className={styles.title}>{badge.title}</h4>
            <p className={styles.desc}>{badge.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
