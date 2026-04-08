"use client";
import React, { createContext, useContext, useState } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [authMode, setAuthMode] = useState('login'); // 'login' | 'signup'

  const openLogin = () => { setAuthMode('login'); setAuthModalOpen(true); };
  const openSignup = () => { setAuthMode('signup'); setAuthModalOpen(true); };
  const closeAuth = () => setAuthModalOpen(false);
  const switchMode = () => setAuthMode(prev => prev === 'login' ? 'signup' : 'login');

  const login = (userData) => {
    setUser(userData);
    setAuthModalOpen(false);
  };

  const signup = (userData) => {
    setUser(userData);
    setAuthModalOpen(false);
  };

  const logout = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{
      user, authModalOpen, authMode,
      openLogin, openSignup, closeAuth, switchMode,
      login, signup, logout
    }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
