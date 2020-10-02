module.exports = {
    rules: {
        // disallow modifying variables of class declarations
        'no-class-assign': 'error',

        // disallow arrow functions where they could be confused with comparisons
        'no-confusing-arrow': [
            'error',
            {
                allowParens: true,
            },
        ],
        // disallow modifying variables that are declared using const
        'no-const-assign': 'error',

        // disallow duplicate class members
        'no-dupe-class-members': 'error',

        // disallow symbol constructor
        'no-new-symbol': 'error',

        // disallow to use this/super before super() calling in constructors.
        'no-this-before-super': 'error',

        // disallow useless computed property keys
        'no-useless-computed-key': 'error',

        // disallow unnecessary constructor
        'no-useless-constructor': 'error',

        // suggest using arrow functions as callbacks
        'prefer-arrow-callback': [
            'error',
            {
                allowNamedFunctions: true,
                allowUnboundThis: true,
            },
        ],

        // suggest using of const declaration for variables that are never modified after declared
        'prefer-const': [
            'error',
            {
                destructuring: 'any',
                ignoreReadBeforeAssign: true,
            },
        ],

        // use rest parameters instead of arguments
        'prefer-rest-params': 'error',

        // suggest using the spread operator instead of .apply()
        'prefer-spread': 'error',

        // prefer object spread instead of Object.assign
        'prefer-object-spread': 'error',

        // if a class member does not use this it should be static
        'class-methods-use-this': 'warn',
    },
};
