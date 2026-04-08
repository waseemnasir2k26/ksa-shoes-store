"use client";
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SidebarFilter from './SidebarFilter';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
  const [activeFilters, setActiveFilters] = useState({});
  const { t } = useLanguage();

  return (
    <div className={`container ${styles.layout}`}>
      <aside className={styles.sidebar}>
        <SidebarFilter onChange={(filters) => setActiveFilters(filters)} />
      </aside>
      <main className={styles.main}>
        <div className={styles.toolbar}>
          <span className={styles.resultCount}>{t('showing')} {products.length} {t('products')}</span>
          <select className={styles.sortSelect}>
            <option>{t('featured')}</option>
            <option>{t('priceLowHigh')}</option>
            <option>{t('priceHighLow')}</option>
          </select>
        </div>
        
        <div className={styles.grid}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </main>
    </div>
  );
}
