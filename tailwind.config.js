module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        background: '#1C1C1C',
        surface:    '#2A2A2A',
        primary:    '#0057FF',
        accent:     '#FFA500',
        text:       '#FFFFFF',
        subtext:    '#AAAAAA',
      },
      borderRadius: { lg: '1rem' },
      spacing: { 18: '4.5rem', 28: '7rem' }
    }
  },
  plugins: []
};