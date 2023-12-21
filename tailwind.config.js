/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        chalk: {
          50: 'var(--color-chalk-50)',
          100: 'var(--color-chalk-100)',
          200: 'var(--color-chalk-200)',
          300: 'var(--color-chalk-300)',
          400: 'var(--color-chalk-400)',
        },
        graphite: {
          50: 'var(--color-graphite-50)',
          100: 'var(--color-graphite-100)',
          200: 'var(--color-graphite-200)',
          300: 'var(--color-graphite-300)',
        },
        primary: {
          50: 'var(--color-primary-50)',
          100: 'var(--color-primary-100)',
          200: 'var(--color-primary-200)',
          300: 'var(--color-primary-300)',
        },
        secondary: {
          50: 'var(--color-secondary-50)',
          100: 'var(--color-secondary-100)',
          200: 'var(--color-secondary-200)',
        },
        tomato: {
          50: 'var(--color-tomato-50)',
          100: 'var(--color-tomato-100)',
          200: 'var(--color-tomato-200)',
        },
        grape: {
          50: 'var(--color-grape-50)',
        },
      },
      backgroundImage: {
        'landing-page-bg': "url('/background/landingPageBg.svg')",
        'share-poster-mob-bg': "url('/background/mobile/bg-final-page.png')",
        'create-poster-bg': "url('/background/background-form2x.png')",
        'template-page': "url('/background/templatePageBg.svg')",
        'template-selected': "url('/background/redBg.svg')",
        'download-page': "url('/background/downloadTemplatePageBg.svg')",
        'share-template-mobile': "url('/background/shareMobileBgImage.svg')",
        'template-selected-mobile':
          "url('/background/selectTemplateMobileBg.svg')",
        'create-poster-mobile':
          "url('/background/mobile/create-poster-mobile.png')",
        'select-poster-mob': "url('/background/mobile/select-poster.png')",
        'form-page-mob': "url('/background/mobile/form-bg.svg')",
        'landing-page-mob': "url('/background/mobile/mob-bg2x.png')",
        'landing-page-bg-new': "url('/background/background2x.png')",
      },
      fontSize: {
        xxxs: '8px',
        xxs: '9px',
      },
    },
  },
  plugins: [
    // ...
    require('tailwindcss-question-mark'),
    require('@tailwindcss/forms')({
      strategy: 'class', // only generate classes
    }),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar')({ nocompatible: true }),
  ],
};
