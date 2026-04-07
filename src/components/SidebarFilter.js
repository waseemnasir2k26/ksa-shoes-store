"use client";
import React from 'react';
import { brands, sizes, colors } from '@/data/products';
import styles from './SidebarFilter.module.css';

export default function SidebarFilter({ onChange }) {
  return (
    <div className={styles.container}>
      <h3 className={styles.header}>Filters</h3>
      
      <div className={styles.section}>
        <h4 className={styles.title}>Categories</h4>
        <ul className={styles.list}>
          <li><label className={styles.label}><input type="checkbox" defaultChecked /> Arabic Sandals</label></li>
          <li><label className={styles.label}><input type="checkbox" /> Formal Shoes</label></li>
          <li><label className={styles.label}><input type="checkbox" /> Casual</label></li>
        </ul>
      </div>

      <div className={styles.section}>
        <h4 className={styles.title}>Brands</h4>
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
        <h4 className={styles.title}>Size (EU)</h4>
        <div className={styles.gridBtn}>
          {sizes.map(size => (
            <button key={size} className={styles.sizeBtn}>{size}</button>
          ))}
        </div>
      </div>
      
      <div className={styles.section}>
        <h4 className={styles.title}>Price Range</h4>
        <input type="range" min="100" max="1000" defaultValue="1000" className={styles.range} />
        <div className={styles.priceLabels}>
          <span>100 SAR</span>
          <span>1000+ SAR</span>
        </div>
      </div>
    </div>
  );
}
