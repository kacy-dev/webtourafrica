/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // scan all components & pages
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7E1CFC", // Blue
        accent: "#7E1CFC",  // Teal
        // accent: "#FD3EED",  // Teal
        dark: "#030016",    // Navy black (for backgrounds)
        light: "#F8FAFC",   // Light gray/white background
        grayText: "#64748B", // For secondary text
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // modern & legible
        heading: ["Montserrat", "sans-serif"], // clean headers
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: "16px",
        lg: "18px",
        xl: "20px",
        "2xl": "24px",
        "3xl": "30px",
        "4xl": "36px",
        "5xl": "48px",
        "6xl": "60px",
      },
      fontWeight: {
        thin: 100,
        light: 300,
        normal: 400,
        medium: 500,
        semibold: 600,
        bold: 700,
        extrabold: 800,
        black: 900,
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        5: "20px",
        6: "24px",
        7: "28px",
        8: "32px",
        9: "36px",
        10: "40px",
      },
      borderRadius: {
        none: "0",
        sm: "4px",
        DEFAULT: "8px",
        lg: "12px",
        xl: "16px",
        "2xl": "24px",
        full: "9999px",
      },
      boxShadow: {
        soft: "0 2px 10px rgba(0,0,0,0.08)",
        medium: "0 4px 20px rgba(0,0,0,0.1)",
        strong: "0 8px 30px rgba(0,0,0,0.15)",
      },
    },
  },
  plugins: [],
}
