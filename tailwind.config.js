/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#8B4513',    // Saddle Brown - terra, raízes
        secondary: '#F4A460',  // Sandy Brown - calor, tradição
        accent: '#228B22',     // Forest Green - ervas, natureza
        neutral: '#F5F5DC',    // Beige - fundo suave
        text: '#2F2F2F',       // Dark Gray - legibilidade
      },
      fontFamily: {
        'serif': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif'],
        'typewriter': ['JMH Typewriter', 'monospace'],
      },
      fontSize: {
        'h1': ['3.5rem', { lineHeight: '1.2' }],
        'h2': ['2.5rem', { lineHeight: '1.3' }],
        'h3': ['1.875rem', { lineHeight: '1.4' }],
        'body': ['1.125rem', { lineHeight: '1.6' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(20px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      backdropBlur: {
        xs: '2px',
      },
    },
  },
  plugins: [],
} 