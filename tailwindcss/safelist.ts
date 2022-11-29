function safelist(subject) {
    return Object.entries(subject).reduce((carry, [key, sizes]) => {
        return carry.concat(sizes.map(size => `${key}-${size}`));
    }, []);
};

module.exports = safelist({
    'text': [
        'xs', 'sm', 'tiny', 'base', 'lg', 'xl',
        '2xl', '3xl', '4xl', '5xl', '6xl', '7xl'
    ]
});