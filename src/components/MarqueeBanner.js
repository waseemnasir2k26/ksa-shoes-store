"use client";
import { useLanguage } from '@/context/LanguageContext';
import styles from './MarqueeBanner.module.css';

export default function MarqueeBanner() {
  const { t } = useLanguage();
  
  const items = [
    t('marquee1'), t('marquee2'), t('marquee3'),
    t('marquee4'), t('marquee5'), t('marquee6')
  ];

  return (
    <div className={styles.marquee}>
      <div className={styles.track}>
        {[...items, ...items].map((item, i) => (
          <span key={i} className={styles.item}>{item}</span>
        ))}
      </div>
    </div>
  );
}
