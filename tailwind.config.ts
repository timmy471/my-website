import type { Config } from 'tailwindcss';

export default {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '1.25rem',
      screens: {
        sm: '1200px',
      },
    },
    extend: {
      colors: {
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      fontSize: {
        '2xl': '24px',
        '3xl': '32px',
        '4xl': ['64px', '72px'],
      },
      animation: {
        'bounce-horizontal': 'bounceHorizontal 1s infinite',
      },
      keyframes: {
        bounceHorizontal: {
          '0%, 100%': { transform: 'translateX(0)' },
          '50%': { transform: 'translateX(10px)' },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;
