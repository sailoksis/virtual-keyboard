module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": "eslint:recommended",
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest"
    },
    
    "rules": {
    "semi": ["error", "always"],
    "quotes": ["error", "single"],
    "no-undef": "error",
    "no-unused-vars": "error",
    "indent": ["error", 2],
    "no-console": "warn",
    "no-const-assign": "error",
    "no-var": "error",
    "prefer-const": "error"
    }
}
