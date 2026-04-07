import React from 'react';
import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.footerGrid}`}>
        <div className={styles.brandBox}>
          <h2 className={styles.logoText}>Al-Zaytoun</h2>
          <p className={styles.brandDesc}>
            The premier destination for luxury Arabic footwear in the Kingdom of Saudi Arabia. Craftsmanship you can trust.
          </p>
        </div>
        
        <div className={styles.linkGroup}>
          <h3 className={styles.linkTitle}>Shop</h3>
          <ul className={styles.linkList}>
            <li><Link href="/sandals">Arabic Sandals</Link></li>
            <li><Link href="/shoes">Formal Shoes</Link></li>
            <li><Link href="/accessories">Accessories</Link></li>
            <li><Link href="/sale">Sale</Link></li>
          </ul>
        </div>
        
        <div className={styles.linkGroup}>
          <h3 className={styles.linkTitle}>Support</h3>
          <ul className={styles.linkList}>
            <li><Link href="/contact">Contact Us</Link></li>
            <li><Link href="/shipping">Shipping & Returns</Link></li>
            <li><Link href="/faq">FAQ</Link></li>
            <li><Link href="/size-guide">Size Guide</Link></li>
          </ul>
        </div>

        <div className={styles.newsletterBox}>
          <h3 className={styles.linkTitle}>Join our Newsletter</h3>
          <p className={styles.newsletterDesc}>Subscribe to receive updates, access to exclusive deals, and more.</p>
          <form className={styles.newsletterForm}>
            <input type="email" placeholder="Enter your email address" className={styles.input} />
            <button type="submit" className={styles.submitBtn}>Subscribe</button>
          </form>
        </div>
      </div>
      <div className={styles.footerBottom}>
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Al-Zaytoun E-Commerce. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
