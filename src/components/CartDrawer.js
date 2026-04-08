"use client";
import React from 'react';
import { useCart } from '@/context/CartContext';
import { useLanguage } from '@/context/LanguageContext';
import styles from './CartDrawer.module.css';

export default function CartDrawer() {
  const { cartOpen, toggleCart, cartItems, removeFromCart, toastMessage } = useCart();
  const { t } = useLanguage();
  
  const subtotal = cartItems.reduce((acc, item) => acc + (item.price * item.quantity), 0);

  return (
    <>
      {/* Toast Notification */}
      <div className={`${styles.toast} ${toastMessage ? styles.toastVisible : ''}`}>
        {toastMessage}
      </div>

      {/* Cart Overlay Background */}
      <div 
        className={`${styles.overlay} ${cartOpen ? styles.overlayOpen : ''}`} 
        onClick={toggleCart}
      />
      
      {/* Sliding Drawer */}
      <div className={`${styles.drawer} ${cartOpen ? styles.drawerOpen : ''}`}>
        <div className={styles.header}>
          <h2>{t('yourCart')} ({cartItems.length})</h2>
          <button className={styles.closeBtn} onClick={toggleCart}>✕</button>
        </div>
        
        <div className={styles.body}>
          {cartItems.length === 0 ? (
            <p className={styles.empty}>{t('emptyCart')}</p>
          ) : (
            <ul className={styles.itemList}>
              {cartItems.map(item => (
                <li key={item.id} className={styles.cartItem}>
                  <img src={item.image} alt={item.name} className={styles.itemImage} />
                  <div className={styles.itemDetails}>
                    <h4>{item.name}</h4>
                    <p className={styles.itemMeta}>{item.color} | EU {item.sizes[0]}</p>
                    <div className={styles.itemPriceRow}>
                      <span className={styles.itemQty}>{t('qty')}: {item.quantity}</span>
                      <span className={styles.itemPrice}>{item.currency} {item.price * item.quantity}</span>
                    </div>
                  </div>
                  <button className={styles.removeBtn} onClick={() => removeFromCart(item.id)}>{t('remove')}</button>
                </li>
              ))}
            </ul>
          )}
        </div>
        
        {cartItems.length > 0 && (
          <div className={styles.footer}>
            <div className={styles.subtotal}>
              <span>{t('subtotal')}</span>
              <span>SAR {subtotal}</span>
            </div>
            <p className={styles.taxNote}>{t('taxNote')}</p>
            <button className={styles.checkoutBtn} onClick={() => alert("Checkout flow mock")}>{t('checkout')}</button>
          </div>
        )}
      </div>
    </>
  );
}
