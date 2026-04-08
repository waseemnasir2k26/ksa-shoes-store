"use client";
import React, { useState, useEffect } from 'react';
import { useAuth } from '@/context/AuthContext';
import { useLanguage } from '@/context/LanguageContext';
import { useCart } from '@/context/CartContext';
import styles from './AuthModal.module.css';

export default function AuthModal() {
  const { authModalOpen, authMode, closeAuth, switchMode, login, signup } = useAuth();
  const { t } = useLanguage();
  const { setToastMessage } = useCart();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    password: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (authModalOpen) {
      document.body.style.overflow = 'hidden';
      setFormData({ name: '', email: '', phone: '', password: '' });
      setErrors({});
    }
    return () => { document.body.style.overflow = ''; };
  }, [authModalOpen]);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeAuth();
    };
    if (authModalOpen) document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, [authModalOpen, closeAuth]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
    if (errors[e.target.name]) {
      setErrors(prev => ({ ...prev, [e.target.name]: '' }));
    }
  };

  const validate = () => {
    const errs = {};
    if (authMode === 'signup' && !formData.name.trim()) errs.name = 'Required';
    if (!formData.email.trim()) errs.email = 'Required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Invalid email';
    if (!formData.password.trim()) errs.password = 'Required';
    else if (formData.password.length < 6) errs.password = 'Min 6 characters';
    return errs;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) {
      setErrors(errs);
      return;
    }
    
    setIsSubmitting(true);
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1200));
    
    const userData = {
      name: formData.name || formData.email.split('@')[0],
      email: formData.email,
      avatar: formData.name ? formData.name[0].toUpperCase() : formData.email[0].toUpperCase()
    };

    if (authMode === 'login') {
      login(userData);
    } else {
      signup(userData);
    }
    setIsSubmitting(false);
  };

  if (!authModalOpen) return null;

  return (
    <>
      <div className={styles.overlay} onClick={closeAuth} />
      <div className={styles.modal}>
        <button className={styles.closeBtn} onClick={closeAuth}>✕</button>
        
        <div className={styles.header}>
          <div className={styles.logoMark}>
            <span>الز</span>
          </div>
          <h2 className={styles.title}>
            {authMode === 'login' ? t('welcomeBack') : t('joinUs')}
          </h2>
          <p className={styles.subtitle}>
            {authMode === 'login' 
              ? 'Sign in to access your account, orders, and wishlist.'
              : 'Create an account for a personalized shopping experience.'
            }
          </p>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          {authMode === 'signup' && (
            <div className={styles.field}>
              <label className={styles.label}>{t('fullName')}</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className={`${styles.input} ${errors.name ? styles.inputError : ''}`}
                placeholder="Mohammed Al-Rashid"
              />
              {errors.name && <span className={styles.error}>{errors.name}</span>}
            </div>
          )}
          
          <div className={styles.field}>
            <label className={styles.label}>{t('email')}</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`${styles.input} ${errors.email ? styles.inputError : ''}`}
              placeholder="your@email.com"
            />
            {errors.email && <span className={styles.error}>{errors.email}</span>}
          </div>

          {authMode === 'signup' && (
            <div className={styles.field}>
              <label className={styles.label}>{t('phone')}</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={styles.input}
                placeholder="+966 5X XXX XXXX"
              />
            </div>
          )}
          
          <div className={styles.field}>
            <div className={styles.labelRow}>
              <label className={styles.label}>{t('password')}</label>
              {authMode === 'login' && (
                <button type="button" className={styles.forgotLink}>{t('forgotPassword')}</button>
              )}
            </div>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className={`${styles.input} ${errors.password ? styles.inputError : ''}`}
              placeholder="••••••••"
            />
            {errors.password && <span className={styles.error}>{errors.password}</span>}
          </div>

          <button 
            type="submit" 
            className={styles.submitBtn}
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <span className={styles.spinner}></span>
            ) : (
              authMode === 'login' ? t('loginBtn') : t('signupBtn')
            )}
          </button>
        </form>

        <div className={styles.divider}>
          <span>{t('orContinueWith')}</span>
        </div>

        <div className={styles.socialBtns}>
          <button className={styles.socialBtn} type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
            </svg>
            {t('google')}
          </button>
          <button className={styles.socialBtn} type="button">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.25 3.51 7.59 9.05 7.31c1.35.07 2.29.74 3.08.8 1.18-.24 2.31-.93 3.57-.84 1.51.12 2.65.72 3.4 1.8-3.12 1.87-2.38 5.98.48 7.13-.57 1.5-1.31 2.99-2.54 4.09zM12.03 7.25c-.15-2.23 1.66-4.07 3.74-4.25.29 2.58-2.34 4.5-3.74 4.25z"/>
            </svg>
            {t('apple')}
          </button>
        </div>

        <div className={styles.switchMode}>
          <span>{authMode === 'login' ? t('noAccount') : t('hasAccount')}</span>
          <button type="button" className={styles.switchBtn} onClick={switchMode}>
            {authMode === 'login' ? t('signup') : t('login')}
          </button>
        </div>
      </div>
    </>
  );
}
