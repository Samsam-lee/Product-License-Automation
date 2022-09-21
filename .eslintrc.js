module.exports = {
    parser: "@typescript-eslint/parser",
    parserOptions: {
        "project": ["tsconfig.json"]
    },
    plugins: ["@typescript-eslint"],
    extends: [
        "airbnb-base",
        "airbnb-typescript",
        "plugin:@typescript-eslint/eslint-recommended"
    ],
    rules: {
        "import/extensions": [
            "error",
            "ignorePackages",
            {
                "js": "never",
                "jsx": "never",
                "ts": "never",
                "tsx": "never"
            }
        ],
        "react/jsx-filename-extension": [0],
        "import/no-named-as-default": 0
    }
};