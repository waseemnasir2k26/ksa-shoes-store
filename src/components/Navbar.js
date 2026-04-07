"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { useCart } from '@/context/CartContext';
import styles from './Navbar.module.css';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { toggleCart, cartItems } = useCart();

  return (
    <header className={styles.header}>
      <div className={`container ${styles.navbar}`}>
        {/* Mobile Hamburger */}
        <button 
          className={styles.hamburger} 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle Menu"
        >
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
          <span className={styles.bar}></span>
        </button>

        {/* Brand Logo */}
        <Link href="/" className={styles.logo}>
          <span className={styles.logoText}>Al-Zaytoun</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className={`${styles.nav} ${isMenuOpen ? styles.navOpen : ''}`}>
          <ul className={styles.navList}>
            <li><Link href="/" className={styles.navLink}>New Arrivals</Link></li>
            <li><Link href="/sandals" className={styles.navLinkActive}>Arabic Sandals</Link></li>
            <li><Link href="/shoes" className={styles.navLink}>Formal Shoes</Link></li>
            <li><Link href="/accessories" className={styles.navLink}>Accessories</Link></li>
          </ul>
        </nav>

        {/* Right Action Icons */}
        <div className={styles.actions}>
          <button className={styles.iconBtn} aria-label="Search">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <circle cx="11" cy="11" r="8"></circle>
              <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
          </button>
          
          <button className={styles.langBtn}>العربية</button>
          
          <button className={styles.iconBtn} aria-label="Cart" onClick={toggleCart}>
            <div className={styles.cartIconWrapper}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <path d="M16 10a4 4 0 0 1-8 0"></path>
              </svg>
              {cartItems.length > 0 && (
                <span className={styles.cartBadge}>{cartItems.length}</span>
              )}
            </div>
          </button>
        </div>
      </div>
    </header>
  );
}
