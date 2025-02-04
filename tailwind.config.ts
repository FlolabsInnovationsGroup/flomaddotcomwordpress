import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class", // Enable dark mode using the 'class' strategy
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "var(--primary)",
        secondary: "var(--secondary)",
        accent: "var(--accent)",
        'card-bg': "var(--card-bg)",
        'nav-bg': "var(--nav-bg)",
        'gradient-start': "#1e3a8a",
        'gradient-middle': "#2563eb",
        'gradient-end': "#3b82f6",
      },
      backgroundImage: {
        'card-gradient': "linear-gradient(to right, var(--gradient-start), var(--gradient-middle), var(--gradient-end))",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Replace with flomadlabs.com fonts
      },
      spacing: {
        '18': '4.5rem', // Custom spacing
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)',
      },
      keyframes: {
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
      },
      animation: {
        'gradient-flow': 'gradient-flow 3s ease infinite',
      },
    },
  },
  plugins: [],
} satisfies Config;
