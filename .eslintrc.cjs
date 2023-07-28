module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true,
        jest: true,
    },
    extends: [
        'eslint:recommended',
        "plugin:cypress/recommended",
        "airbnb-base",
        'prettier',
    ],
    parserOptions: {
        ecmaVersion: 12,
        sourceType: 'module',
    },
    rules: {
        "prettier/prettier": 'warn',
        quotes: ['error', 'single'],
        // we want to force semicolons
        semi: ['error', 'always'],
        // we use 2 spaces to indent our code
        indent: ['error', 4],
        // we want to avoid extraneous spaces
        "no-multi-spaces": ['error'],
        "no-unused-vars": 'off',
    },
    plugins: ['prettier'],
    globals: {
        cy: true,
    },
};
