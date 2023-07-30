/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        scroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(calc(-120px * 8))' },
        },
      },
      animation: {
        scroll: 'scroll 10s linear infinite',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        image: "url('/public/images/landing.png')",
      },
      colors: {
        purplePrimary: '#3A0B60',
        purpleSecondary: '#6415A1',
        purpleThirty: '#F3E3FF',
        yellowPrimary: '#F8B501',
        purpleIconsAndInputs: '#903ED0',
        purpleButtonDisable: '#674D7B',
        yellowButtonDisable: '#F4D580',
        yellowTitle: '#FFC62E',
        customPurple: 'rgba(75, 0, 133, 0.7)',
        white: '#FFFFFF',
      },
    },
  },
  plugins: [],
};
