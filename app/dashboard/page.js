"use client";

import React from 'react';
import { useRouter } from 'next/navigation';
import { sharedStyles, colors } from '../styles';

export default function DashboardPage() {
  const router = useRouter();

  const handleLogout = () => {
    console.log("User logged out");
    router.push('/');
  };

  return (
    <div style={dashboardWrapper}>
      <nav style={navBar}>
        <h3 style={logoSmall}>Fridge Thing</h3>
        <button onClick={handleLogout} style={logoutBtn}>
          Logout
        </button>
      </nav>
    </div>
  );
}

const dashboardWrapper = {
  backgroundColor: '#f4f7f6',
  minHeight: '100vh',
  width: '100vw',
};

const navBar = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '15px 40px',
  backgroundColor: colors.background,
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)',
};

const logoSmall = {
  margin: 0,
  fontFamily: "'Lexend', sans-serif",
  color: colors.secondary,
  fontWeight: '700',
};

const logoutBtn = {
  border: 'none',
  background: 'none',
  color: '#e74c3c',
  cursor: 'pointer',
  fontFamily: "'Lexend', sans-serif",
  fontWeight: '600',
  fontSize: '14px',
};