"use client";
import React from 'react';
import { brands, sizes, colors } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import styles from './SidebarFilter.module.css';

export default function SidebarFilter({ onChange }) {
  const { t } = useLanguage();
  
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>{t('filters')}</h3>
      
      <div className={styles.section}>
        <h4 className={styles.title}>{t('categories')}</h4>
        <ul className={styles.list}>
          <li><label className={styles.label}><input type="checkbox" defaultChecked /> {t('arabicSandals')}</label></li>
          <li><label className={styles.label}><input type="checkbox" /> {t('formalShoes')}</label></li>
          <li><label className={styles.label}><input type="checkbox" /> {t('casual')}</label></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.title}>{t('brands')}</h4>
        <ul className={styles.list}>
          {brands.map(brand => (
            <li key={brand}>
              <label className={styles.label}>
                <input type="checkbox" /> {brand}
              </label>
            </li>
          ))}
        </ul>
      </div>
      
      <div className={styles.section}>
        <h4 className={styles.title}>{t('sizeEU')}</h4>
        <div className={styles.gridBtn}>
          {sizes.map(size => (
            <button key={size} className={styles.sizeBtn}>{size}</button>
          ))}
        </div>
      </div>
      
      <div className={styles.section}>
        <h4 className={styles.title}>{t('priceRange')}</h4>
        <input type="range" min="100" max="1000" defaultValue="1000" className={styles.range} />
        <div className={styles.priceLabels}>
          <span>100 SAR</span>
          <span>1000+ SAR</span>
        </div>
      </div>
    </div>
  );
}
