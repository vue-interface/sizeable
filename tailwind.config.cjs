module.exports = {
    content: [
        './index.html',
        './src/**/*.{vue,js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {},
    },
    safelist: [
        ...require('./tailwindcss/safelist.cjs')
    ]
};