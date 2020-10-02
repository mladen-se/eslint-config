module.exports = {
    rules: {
        // disallow this keywords outside of classes or class-like objects
        'no-invalid-this': 'off',

        // disallow debugger in production
        'no-debugger': 'error',

        // encforce use of camelcase
        // admin-web uses snake case a lot so error would be to noisy
        camelcase: 'warn',

        // disallow arrays containing empty slots
        'no-sparse-arrays': 'error',

        // enforce valid use of typeof
        'valid-typeof': 'error',

        // disallow use of the native alert
        'no-alert': 'error',

        // disallow empty destructuring patterns
        'no-empty-pattern': 'error',

        // enforce curly brackets around
        curly: 'warn',

        // disallow calling global objects
        'no-obj-calls': 'error',

        // disallow empty blocks, but allow empty catch blocks
        'no-empty': ['error', { allowEmptyCatch: true }],

        // disallow extending native prototype
        'no-extend-native': 'warn',

        // disallow unnecessary function binding
        'no-extra-bind': 'warn',

        // disallow fallthrough in switch statements since it's often causes bugs
        'no-fallthrough': 'warn',

        // disallow floating decimals
        'no-floating-decimal': 'error',

        // disallow unnecessary .call() and .apply()
        'no-useless-call': 'warn',

        // Prefer use of Number.isNaN() since nothing can be equal to NaN.
        'use-isnan': 'error',

        // disallow double semi colons
        'no-extra-semi': 'error',

        // disallow invalid regexes
        'no-invalid-regexp': 'error',

        // disallow reassigning a function
        'no-func-assign': 'error',

        // disallow use of console statements
        'no-console': 'warn',

        // enforce consisten returns in functions
        'consistent-return': 'error',

        // disallow use of eval();
        'no-eval': 'error',

        // treat params as const
        'no-param-reassign': 'error',

        // disallow magic numbers
        'no-magic-numbers': ['warn', { ignoreArrayIndexes: true }],

        // just don't do it
        'no-implied-eval': 'error',

        // enforces better readability
        'no-mixed-operators': 'error',

        // disallow duplicated arguments
        'no-dupe-args': 'error',

        // disallow duplicated keys
        'no-dupe-keys': 'error',

        // disallow duplicated case statements
        'no-duplicate-case': 'error',

        // disallow unnecessary concatenation of strings
        'no-useless-concat': 'error',
    },
};
