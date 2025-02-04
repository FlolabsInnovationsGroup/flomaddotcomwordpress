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
        background: "var(--background)", // Main background color
        foreground: "var(--foreground)", // Main foreground text color
        primary: "var(--primary)", // Primary brand color
        secondary: "var(--secondary)", // Secondary color
        accent: "var(--accent)", // Accent color for highlights
        'card-bg': "var(--card-bg)", // Background for cards
        'nav-bg': "var(--nav-bg)", // Navbar background color
        'gradient-start': "#1e3a8a",
        'gradient-middle': "#2563eb",
        'gradient-end': "#3b82f6",
      },
      backgroundImage: {
        'card-gradient': "linear-gradient(to right, var(--gradient-start), var(--gradient-middle), var(--gradient-end))",
        'hero-pattern': "url('/images/hero-bg.jpg')", // Example for reusable background
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"], // Replace with Flomad Labs preferred fonts
        heading: ["Poppins", "sans-serif"], // For headings if desired
      },
      spacing: {
        '18': '4.5rem', // Custom spacing
        '128': '32rem', // For large layouts
      },
      boxShadow: {
        'card': '0 4px 6px rgba(0, 0, 0, 0.1)', // Card shadow
        'navbar': '0 2px 4px rgba(0, 0, 0, 0.1)', // Navbar shadow
      },
      keyframes: {
        'gradient-flow': {
          '0%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
          '100%': { backgroundPosition: '0% 50%' },
        },
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        'gradient-flow': 'gradient-flow 3s ease infinite',
        'fade-in': 'fade-in 0.5s ease-in-out',
      },
      borderRadius: {
        'custom': '1.25rem', // Custom rounded corners for cards or buttons
      },
      width: {
        'content': '90%', // Custom width utility
        'max-content': '1400px', // Max width for layouts
      },
      height: {
        'hero': '75vh', // Hero section height
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'), // For styling form elements
    require('@tailwindcss/typography'), // For better handling of rich text
    require('@tailwindcss/aspect-ratio'), // For aspect ratio utilities
  ],
} satisfies Config;
