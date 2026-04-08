"use client";
import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { products } from '@/data/products';
import { useLanguage } from '@/context/LanguageContext';
import styles from './SearchModal.module.css';

export default function SearchModal({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);
  const { t } = useLanguage();

  const popularSearches = ['Leather Sandal', 'Premium', 'Al-Fakher', 'Brown', 'Black'];

  useEffect(() => {
    if (isOpen && inputRef.current) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
    if (!isOpen) {
      setQuery('');
      setResults([]);
    }
  }, [isOpen]);

  useEffect(() => {
    if (query.trim().length > 0) {
      const q = query.toLowerCase();
      const filtered = products.filter(p => 
        p.name.toLowerCase().includes(q) ||
        p.brand.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q) ||
        p.colors.some(c => c.toLowerCase().includes(q))
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  }, [query]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.addEventListener('keydown', handleEsc);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={onClose} />
      <div className={styles.modal}>
        <div className={styles.searchBar}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className={styles.searchIcon}>
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder={t('searchPlaceholder')}
            className={styles.input}
          />
          <button className={styles.closeBtn} onClick={onClose}>
            <span>ESC</span>
          </button>
        </div>

        <div className={styles.body}>
          {query.trim().length === 0 ? (
            <div className={styles.popularSection}>
              <h4 className={styles.sectionLabel}>{t('recentSearches')}</h4>
              <div className={styles.tags}>
                {popularSearches.map((s, i) => (
                  <button key={i} className={styles.tag} onClick={() => setQuery(s)}>
                    {s}
                  </button>
                ))}
              </div>
            </div>
          ) : results.length > 0 ? (
            <div className={styles.resultsSection}>
              <h4 className={styles.sectionLabel}>
                {t('searchResults')} ({results.length})
              </h4>
              <ul className={styles.resultList}>
                {results.map(product => (
                  <li key={product.id}>
                    <Link 
                      href={`/product/${product.id}`} 
                      className={styles.resultItem}
                      onClick={onClose}
                    >
                      <img src={product.image} alt={product.name} className={styles.resultImage} />
                      <div className={styles.resultInfo}>
                        <span className={styles.resultBrand}>{product.brand}</span>
                        <span className={styles.resultName}>{product.name}</span>
                        <span className={styles.resultPrice}>{product.currency} {product.price}</span>
                      </div>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={styles.resultArrow}>
                        <path d="M5 12h14M12 5l7 7-7 7"/>
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div className={styles.noResults}>
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                <circle cx="11" cy="11" r="8" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
                <line x1="8" y1="8" x2="14" y2="14" />
                <line x1="14" y1="8" x2="8" y2="14" />
              </svg>
              <p>{t('noResults')}</p>
            </div>
          )}
        </div>
      </div>
    </>
  );
}
