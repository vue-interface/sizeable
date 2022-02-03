const safelist = require('./tailwindcss/safelist');

module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{vue,js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
    },
    safelist: safelist({
        'text': [
            'xs', 'sm', 'tiny', 'base', 'lg', 'xl',
            '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'
        ]
    })
};