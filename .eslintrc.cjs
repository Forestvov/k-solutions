module.exports = {
    root: true,
    env: { browser: true, es2020: true },
    extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:react-hooks/recommended',
        'alloy',
        'alloy/react',
        'alloy/typescript',
        'prettier',
    ],
    ignorePatterns: ['dist', '.eslintrc.cjs'],
    parser: '@typescript-eslint/parser',
    plugins: ['react-refresh'],
    rules: {
        'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
        'no-restricted-imports': [
            'error',
            {
                patterns: ['@mui/*/*/*'],
            },
        ],
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
