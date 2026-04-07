import React from 'react';
import Link from 'next/link';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.heroImageContainer}>
        {/* We are using the generated hero image */}
        <img 
          src="/assets/hero_banner.png" 
          alt="Premium Leather Arabic Sandal on Marble" 
          className={styles.heroImage}
        />
        <div className={styles.heroOverlay}></div>
      </div>
      
      <div className={`container ${styles.heroContent}`}>
        <h1 className={styles.heroTitle}>Elegance in Every <br/><span className={styles.heroHighlight}>Footstep</span></h1>
        <p className={styles.heroSubtitle}>
          Discover our new collection of premium handcrafted Arabic sandals. Designed for the modern gentleman, rooted in timeless tradition.
        </p>
        <div className={styles.heroActions}>
          <Link href="/sandals" className={styles.btnPrimary}>
            Shop Collection
          </Link>
          <Link href="/about" className={styles.btnSecondary}>
            Our Heritage
          </Link>
        </div>
      </div>
    </section>
  );
}
