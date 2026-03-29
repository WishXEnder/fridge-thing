"use client";

import React from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { sharedStyles, colors } from "./styles";

export default function LoginPage() {
  const router = useRouter();

  const handleLogin = () => {
    console.log("Logged in!");
    router.push("/dashboard");
  };

  return (
    <div style={sharedStyles.pageWrapper}>
      <div style={sharedStyles.leftColumn}>
        <h1 style={sharedStyles.logoStyle}>Fridge Thing</h1>
        <p style={sharedStyles.subtitleStyle}>Track your macros, stay chill.</p>

        <div style={sharedStyles.formGroup}>
          <label style={sharedStyles.labelStyle}>Username</label>
          <input 
            type="text" 
            placeholder="Enter username" 
            style={sharedStyles.inputStyle} 
          />
        </div>

        <div style={sharedStyles.formGroup}>
          <label style={sharedStyles.labelStyle}>Password</label>
          <input
            type="password"
            placeholder="Enter password"
            style={sharedStyles.inputStyle}
          />
        </div>

        <button 
          onClick={handleLogin} 
          style={sharedStyles.buttonStyle(colors.primary)}
        >
          Login
        </button>

        <div style={dividerContainer}>
          <span style={dividerLine}></span>
          <span style={dividerText}>OR</span>
          <span style={dividerLine}></span>
        </div>

        <div style={sharedStyles.signUpButtonsContainer || signUpButtonsContainer}>
          <Link href="/register" style={{ textDecoration: "none" }}>
            <button style={sharedStyles.secondaryBtnStyle}>
              Sign up with Email
            </button>
          </Link>

          <button style={sharedStyles.secondaryBtnStyle}>
            <img
              src="https://www.google.com/favicon.ico"
              style={{ width: "16px", marginRight: "10px" }}
              alt=""
            />
            Continue with Google
          </button>
        </div>
      </div>

      <div style={sharedStyles.rightColumn}></div>
    </div>
  );
}

const dividerContainer = {
  display: "flex",
  alignItems: "center",
  width: "325px",
  margin: "20px 0",
  color: "#bdc3c7",
};

const dividerLine = { 
  flex: 1, 
  height: "1px", 
  backgroundColor: "#eee" 
};

const dividerText = {
  padding: "0 10px",
  fontSize: "12px",
  textTransform: "uppercase",
  fontFamily: "'Lexend', sans-serif",
};

const signUpButtonsContainer = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  width: "325px",
};