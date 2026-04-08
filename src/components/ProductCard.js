"use client";
import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { t } = useLanguage();
  
  const getBadge = () => {
    if (!product.inStock) return { text: t('soldOut'), className: styles.badgeOut };
    if (product.isNew) return { text: 'New', className: styles.badgeNew };
    if (product.isBestseller) return { text: 'Bestseller', className: styles.badgeBest };
    if (product.isLimitedEdition) return { text: 'Limited', className: styles.badgeLimited };
    return null;
  };
  
  const badge = getBadge();
  
  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} className={styles.image} />
        
        {badge && <div className={`${styles.badge} ${badge.className}`}>{badge.text}</div>}
        
        {product.inStock && (
          <div className={styles.quickAdd}>
            <button 
              className={styles.quickAddBtn}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                addToCart({
                  ...product,
                  color: product.colors[0],
                  size: product.sizes[0]
                });
              }}
            >
              {t('quickAdd')}
            </button>
          </div>
        )}
      </Link>
      
      <div className={styles.info}>
        <div className={styles.brand}>{product.brand}</div>
        <Link href={`/product/${product.id}`}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <div className={styles.priceRow}>
          <span className={styles.price}>{product.currency} {product.price}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>{product.currency} {product.originalPrice}</span>
          )}
        </div>
        
        <div className={styles.colors}>
          {product.colorHex.map((hex, i) => (
            <span 
              key={i} 
              className={styles.colorSwatch} 
              style={{ backgroundColor: hex }}
              title={product.colors[i]}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
