module.exports = function safelist(subject) {
    return Object.entries(subject).reduce((carry, [key, sizes]) => {
        return carry.concat(sizes.map(size => `${key}-${size}`));
    }, []);
};