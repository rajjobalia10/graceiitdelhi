import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          purple: "#6E3CC8",
          dark: "#371E82",
          light: "#ede9ff"
        }
      },
      backgroundImage: {
        cta: "linear-gradient(135deg,#6e3cc8 0%,#9b59f5 60%,#c084fc 100%)",
        hero: "linear-gradient(135deg,#1a0533 0%,#2d1060 40%,#0d0d2b 100%)",
        social: "linear-gradient(120deg,#4a1fa8 0%,#6e3cc8 50%,#9b59f5 100%)",
        form: "linear-gradient(160deg,#0f0225 0%,#1e0b4a 50%,#0d0d2b 100%)",
        event: "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(30,10,70,0.5) 45%,rgba(30,10,70,0.95) 100%)",
        chip: "linear-gradient(135deg,#ede9ff 0%,#d9d0f7 100%)"
      },
      boxShadow: {
        btn: "0 8px 32px rgba(110,60,200,0.45)",
        social: "0 12px 48px rgba(110,60,200,0.35)",
        form: "0 24px 80px rgba(0,0,0,0.55), 0 0 0 1px rgba(110,60,200,0.25)",
        glow: "0 0 40px rgba(110,60,200,0.55), 0 8px 32px rgba(110,60,200,0.4)",
        "purple-md": "0 4px 20px rgba(110,60,200,0.13)",
        "purple-lg": "0 8px 30px rgba(110,60,200,0.18)",
        "purple-xl": "0 16px 48px rgba(110,60,200,0.3)"
      },
      maxWidth: {
        content: "1040px"
      },
      backdropBlur: {
        glass: "12px"
      },
      keyframes: {
        "fade-up": {
          "0%": {
            opacity: "0",
            transform: "translateY(24px)"
          },
          "100%": {
            opacity: "1",
            transform: "translateY(0)"
          }
        },
        "fade-in-scale": {
          "0%": {
            opacity: "0",
            transform: "scale(0.95) translateY(16px)"
          },
          "100%": {
            opacity: "1",
            transform: "scale(1) translateY(0)"
          }
        },
        "float-y": {
          "0%, 100%": {
            transform: "translateY(0)"
          },
          "50%": {
            transform: "translateY(-14px)"
          }
        }
      },
      animation: {
        "fade-up": "fade-up 0.7s both",
        "fade-up-delay": "fade-up 0.7s 0.2s both",
        "fade-up-late": "fade-up 0.7s 0.4s both",
        "fade-in-scale": "fade-in-scale 0.6s cubic-bezier(.16,1,.3,1) both",
        "float-y": "float-y 5s ease-in-out infinite"
      }
    }
  },
  plugins: []
};

export default config;
