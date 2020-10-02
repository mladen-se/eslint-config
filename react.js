module.exports = {
    plugins: ['react', 'react-hooks', 'jsx-a11y'],
    extends: ['plugin:react/recommended', 'plugin:jsx-a11y/recommended'],
    rules: {
        'react/jsx-uses-react': ['error'],
        'react/jsx-uses-vars': 'error',
        'react/jsx-filename-extension': ['error', { extensions: ['.js', '.jsx'] }],
        'react/jsx-one-expression-per-line': 'off',
        'react/prefer-stateless-function': ['error', { ignorePureComponents: false }],
        'react/jsx-no-undef': 'error',
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',

        'jsx-a11y/anchor-is-valid': [
            'error',
            {
                components: ['Link'],
                specialLink: ['to', 'hrefLeft', 'hrefRight'],
                aspects: ['noHref', 'invalidHref', 'preferButton'],
            },
        ],
    },
};
