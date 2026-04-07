"use client";
import React, { useState } from 'react';
import ProductCard from './ProductCard';
import SidebarFilter from './SidebarFilter';
import { products } from '@/data/products';
import styles from './ProductGrid.module.css';

export default function ProductGrid() {
  const [activeFilters, setActiveFilters] = useState({});

  return (
    <div className={`container ${styles.layout}`}>
      <aside className={styles.sidebar}>
        <SidebarFilter onChange={(filters) => setActiveFilters(filters)} />
      </aside>
      <main className={styles.main}>
        <div className={styles.toolbar}>
          <span className={styles.resultCount}>Showing {products.length} products</span>
          <select className={styles.sortSelect}>
            <option>Featured</option>
            <option>Price: Low to High</option>
            <option>Price: High to Low</option>
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
