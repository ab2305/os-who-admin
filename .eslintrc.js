module.exports = {
    "env": {
        "browser": true,
        "node":true,
    },
    "extends": ["eslint:recommended","airbnb-base","plugin:vue/recommended"],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        },
        "parser":"babel-eslint",
        "sourceType":"module"
    },
    "rules": {
        "indent":[
                "error",0
        ],
        "no-tabs":"error",
        "linebreak-style": [
            "error",
            "unix"
        ],
        "quotes": [
            "error",
            "double"
        ],
        "semi": [
            "error",
            "never"
        ],
        "max-len":"off",
        "import/no-extraneous-dependencies":"off",
        "import/no-unresolved":["error",{"ignore":["~/.*"],}],
        "import/extensions":["error","never"],

        "no-console":"off",
        "no-unused-vars":["error",{args:"none"}]
    }
}
