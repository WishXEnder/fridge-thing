"use client";

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { sharedStyles, colors } from "../styles";

export default function RegisterPage() {
  const router = useRouter();

  const handleCreateAccount = () => {
    console.log("Account created!");
    router.push('/dashboard'); 
  };

  return (
    <div style={sharedStyles.pageWrapper}>
      <div style={sharedStyles.leftColumn}>
        <h1 style={sharedStyles.logoStyle}>Fridge Thing</h1>
        <p style={sharedStyles.subtitleStyle}>Create your account.</p>

        <div style={sharedStyles.formGroup}>
          <label style={sharedStyles.labelStyle}>Username</label>
          <input type="text" placeholder="Enter username" style={sharedStyles.inputStyle} />
        </div>

        <div style={sharedStyles.formGroup}>
          <label style={sharedStyles.labelStyle}>Email</label>
          <input type="text" placeholder="Enter email" style={sharedStyles.inputStyle} />
        </div>

        <div style={sharedStyles.formGroup}>
          <label style={sharedStyles.labelStyle}>Password</label>
          <input type="password" placeholder="Create a password" style={sharedStyles.inputStyle} />
        </div>

        <div style={sharedStyles.formGroup}>
          <label style={sharedStyles.labelStyle}>Confirm Password</label>
          <input type="password" placeholder="Confirm password" style={sharedStyles.inputStyle} />
        </div>
        
        <button 
          onClick={handleCreateAccount} 
          style={sharedStyles.buttonStyle(colors.primary)}
        >
          Create Account
        </button>

        <Link href="/" style={{ textDecoration: 'none' }}>
          <button style={sharedStyles.secondaryBtnStyle}>
            Back to Login
          </button>
        </Link>
      </div>

      <div style={sharedStyles.rightColumn}></div>
    </div>
  );
}