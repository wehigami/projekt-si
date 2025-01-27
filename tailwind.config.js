module.exports = {
    theme: {
        extend: {
            animation: {
                gradient: 'background-pan 3s linear infinite',
            },
            keyframes: {
                'background-pan': {
                    from: { 'background-position': '0%' },
                    to: { 'background-position': '200%' },
                },
            },
        },
    },
};
