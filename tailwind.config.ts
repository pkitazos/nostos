/* eslint-disable @typescript-eslint/no-require-imports */
/** @type {import('tailwindcss').Config} */
import plugin from 'tailwindcss/plugin'
// eslint-disable-next-line import/no-anonymous-default-export
export default {
  darkMode: ['class'],
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        primary: {
          DEFAULT: 'hsl(var(--primary))',
          foreground: 'hsl(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'hsl(var(--secondary))',
          foreground: 'hsl(var(--secondary-foreground))',
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        tertiary: {
          DEFAULT: 'hsl(var(--tertiary))',
        },
        destructive: {
          DEFAULT: 'hsl(var(--destructive))',
          foreground: 'hsl(var(--destructive-foreground))',
        },
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        chart: {
          '1': 'hsl(var(--chart-1))',
          '2': 'hsl(var(--chart-2))',
          '3': 'hsl(var(--chart-3))',
          '4': 'hsl(var(--chart-4))',
          '5': 'hsl(var(--chart-5))',
        },
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
        '10xl': '104rem',
        '11xl': '112rem',
        '12xl': '120rem',
      },
      gridTemplateRows: {
        14: 'repeat(14, minmax(0, 1fr))',
      },
      fontFamily: {
        inter: ['var(--font-inter)'],
        sans: ['var(--font-montserrat)'],
        serif: ['var(--font-cormorant-garamond)'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
        '4xl': '2rem',
        '5xl': '3rem',
      },
      keyframes: {
        'accordion-down': {
          from: {
            height: '0',
          },
          to: {
            height: 'var(--radix-accordion-content-height)',
          },
        },
        'accordion-up': {
          from: {
            height: 'var(--radix-accordion-content-height)',
          },
          to: {
            height: '0',
          },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },

  plugins: [
    require('tailwindcss-animate'),
    plugin(function ({ addUtilities }) {
      addUtilities({
        '.--orange-500': {
          outline: '2px solid',
          outlineColor: '#f97316',
        },
        '.--orange-600': {
          outline: '2px solid',
          outlineColor: '#ea580c',
        },
        '.--amber-500': {
          outline: '2px solid',
          outlineColor: '#f59e0b',
        },
        '.--amber-600': {
          outline: '2px solid',
          outlineColor: '#d97706',
        },
        '.--lime-500': {
          outline: '2px solid',
          outlineColor: '#84cc16',
        },
        '.--lime-600': {
          outline: '2px solid',
          outlineColor: '#65a30d',
        },
        '.--emerald-500': {
          outline: '2px solid',
          outlineColor: '#10b981',
        },
        '.--emerald-600': {
          outline: '2px solid',
          outlineColor: '#059669',
        },
        '.--sky-500': {
          outline: '2px solid',
          outlineColor: '#0ea5e9',
        },
        '.--sky-600': {
          outline: '2px solid',
          outlineColor: '#0284c7',
        },
        '.--blue-500': {
          outline: '2px solid',
          outlineColor: '#3b82f6',
        },
        '.--blue-600': {
          outline: '2px solid',
          outlineColor: '#2563eb',
        },
        '.--purple-500': {
          outline: '2px solid',
          outlineColor: '#a855f7',
        },
        '.--purple-600': {
          outline: '2px solid',
          outlineColor: '#9333ea',
        },
        '.--pink-500': {
          outline: '2px solid',
          outlineColor: '#ec4899',
        },
        '.--pink-600': {
          outline: '2px solid',
          outlineColor: '#db2777',
        },
      })
    }),
  ],
}
