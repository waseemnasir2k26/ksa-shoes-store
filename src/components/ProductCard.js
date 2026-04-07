"use client";
import React from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  
  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} className={styles.image} />
        {!product.inStock && <div className={styles.badgeOut}>Out of Stock</div>}
        
        {/* Quick add overlay on hover */}
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
            Quick Add +
          </button>
        </div>
      </Link>
      
      <div className={styles.info}>
        <div className={styles.brand}>{product.brand}</div>
        <Link href={`/product/${product.id}`}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>
        <div className={styles.priceRow}>
          <span className={styles.price}>{product.currency} {product.price}</span>
        </div>
        
        {/* Color swatches */}
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
