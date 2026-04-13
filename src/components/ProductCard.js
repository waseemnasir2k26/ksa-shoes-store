"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import { useInventory } from '@/context/InventoryContext';
import { useLanguage } from '@/context/LanguageContext';
import styles from './ProductCard.module.css';

export default function ProductCard({ product }) {
  const { addToCart } = useCart();
  const { isInStock, hasLowStock, getLowestStock, getTotalStock, getStock } = useInventory();
  const { t } = useLanguage();
  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedSize, setSelectedSize] = useState(null);
  const [showSizePicker, setShowSizePicker] = useState(false);

  const productInStock = isInStock(product.id);
  const totalStock = getTotalStock(product.id);
  const lowStock = hasLowStock(product.id);
  const lowestVariant = getLowestStock(product.id);

  const getBadge = () => {
    if (!productInStock) return { text: t('soldOut'), className: styles.badgeOut };
    if (product.isLimitedEdition) return { text: 'Limited', className: styles.badgeLimited };
    if (product.isNew) return { text: 'New', className: styles.badgeNew };
    if (product.isBestseller) return { text: 'Bestseller', className: styles.badgeBest };
    return null;
  };

  const badge = getBadge();
  const savePercent = product.originalPrice
    ? Math.round((1 - product.price / product.originalPrice) * 100)
    : 0;
  const tamaraInstallment = Math.ceil(product.price / 3);

  // Simulated rating based on product id (consistent per product)
  const ratings = [4.8, 4.6, 4.9, 4.7, 4.5, 4.8, 4.6, 4.9, 4.7, 4.5, 4.8, 4.6, 4.9, 4.7, 4.5, 4.8, 4.6, 4.9, 4.7, 4.5];
  const reviewCounts = [24, 18, 31, 12, 8, 22, 15, 27, 9, 14, 19, 11, 33, 7, 16, 20, 13, 25, 6, 10];
  const rating = ratings[(product.id - 1) % ratings.length];
  const reviewCount = reviewCounts[(product.id - 1) % reviewCounts.length];

  const handleQuickAdd = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (!productInStock) return;
    setShowSizePicker(true);
  };

  const handleSizeSelect = (size, e) => {
    e.preventDefault();
    e.stopPropagation();
    const stock = getStock(product.id, size, selectedColor);
    if (stock <= 0) return;

    addToCart(product, size, selectedColor);
    setShowSizePicker(false);
  };

  const handleColorChange = (color, e) => {
    e.preventDefault();
    e.stopPropagation();
    setSelectedColor(color);
  };

  const closeSizePicker = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setShowSizePicker(false);
  };

  return (
    <div className={styles.card}>
      <Link href={`/product/${product.id}`} className={styles.imageWrapper}>
        <img src={product.image} alt={product.name} className={styles.image} />

        {badge && <div className={`${styles.badge} ${badge.className}`}>{badge.text}</div>}

        {/* Save % badge */}
        {savePercent > 0 && productInStock && (
          <div className={styles.saveBadge}>-{savePercent}%</div>
        )}

        {/* Stock indicator */}
        {productInStock && lowStock && (
          <div className={styles.stockWarning}>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor">
              <circle cx="12" cy="12" r="10"/>
            </svg>
            Only {lowestVariant} left
          </div>
        )}

        {productInStock && !showSizePicker && (
          <div className={styles.quickAdd}>
            <button className={styles.quickAddBtn} onClick={handleQuickAdd}>
              {t('quickAdd')}
            </button>
          </div>
        )}

        {/* Size picker overlay */}
        {showSizePicker && (
          <div className={styles.sizePicker} onClick={(e) => e.preventDefault()}>
            <div className={styles.sizePickerHeader}>
              <span>Select Size — {selectedColor}</span>
              <button className={styles.sizePickerClose} onClick={closeSizePicker}>✕</button>
            </div>
            <div className={styles.sizeGrid}>
              {product.sizes.map(size => {
                const stock = getStock(product.id, size, selectedColor);
                const outOfStock = stock <= 0;
                const isLow = stock > 0 && stock <= 3;
                return (
                  <button
                    key={size}
                    className={`${styles.sizeOption} ${outOfStock ? styles.sizeDisabled : ''} ${isLow ? styles.sizeLow : ''}`}
                    onClick={(e) => handleSizeSelect(size, e)}
                    disabled={outOfStock}
                    title={outOfStock ? 'Out of stock' : `${stock} left`}
                  >
                    <span className={styles.sizeNum}>{size}</span>
                    {isLow && <span className={styles.sizeStockDot}></span>}
                  </button>
                );
              })}
            </div>
            {product.colors.length > 1 && (
              <div className={styles.colorRow}>
                {product.colors.map((color, i) => (
                  <button
                    key={i}
                    className={`${styles.colorOption} ${selectedColor === color ? styles.colorActive : ''}`}
                    onClick={(e) => handleColorChange(color, e)}
                    style={{ backgroundColor: product.colorHex[i] }}
                    title={color}
                  />
                ))}
              </div>
            )}
          </div>
        )}
      </Link>

      <div className={styles.info}>
        <div className={styles.brand}>{product.brand}</div>
        <Link href={`/product/${product.id}`}>
          <h3 className={styles.name}>{product.name}</h3>
        </Link>

        {/* Star rating */}
        <div className={styles.ratingRow}>
          <div className={styles.starsSmall}>
            {[1,2,3,4,5].map(i => (
              <svg key={i} width="13" height="13" viewBox="0 0 24 24" fill={i <= Math.floor(rating) ? "var(--gold)" : "var(--text-muted)"} opacity={i <= Math.floor(rating) ? 1 : 0.25}>
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
              </svg>
            ))}
          </div>
          <span className={styles.ratingText}>{rating}</span>
          <span className={styles.reviewCount}>({reviewCount})</span>
        </div>

        <div className={styles.priceRow}>
          <span className={styles.price}>{product.currency} {product.price}</span>
          {product.originalPrice && (
            <span className={styles.originalPrice}>{product.currency} {product.originalPrice}</span>
          )}
        </div>

        {/* Tamara BNPL */}
        <div className={styles.tamaraRow}>
          or 3 x {product.currency} {tamaraInstallment} with <span className={styles.tamaraBrand}>Tamara</span>
        </div>

        {/* Stock status bar */}
        <div className={styles.stockRow}>
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
          {productInStock ? (
            <span className={`${styles.stockLabel} ${lowStock ? styles.stockLow : styles.stockOk}`}>
              {lowStock
                ? `Low Stock`
                : `In Stock`
              }
            </span>
          ) : (
            <span className={`${styles.stockLabel} ${styles.stockNone}`}>Sold Out</span>
          )}
        </div>
      </div>
    </div>
  );
}
