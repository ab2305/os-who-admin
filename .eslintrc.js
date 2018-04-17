module.exports = {
    "env": {
        "browser": true
    },
    "extends": "plugin:vue/recommended",
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
	"parser":"babel-eslint",
	"sourceType":"module"
    },
    "rules": {
        "indent": [
            "error",
            "tab"
        ],
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "never"
        ]
    }
}
