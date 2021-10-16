<h1 align="center">How to init a dev project 🛠</h1>

This tutorial will help you to install development tools to start a Node JS project.

## Table of content

-   [Git](https://github.com/fabien-renaud/paquebot#git)
-   [JavaScript development tools](https://github.com/fabien-renaud/paquebot#javascript-development-tools)

## Git

Initialize git project

```sh
git init
git remote add github https://github.com/fabien-renaud/paquebot
```

Create `.gitignore` file

```gitignore
# IDE
.idea
.vscode

# JavaScript
node_modules
coverage
build
dist
.env
```

## JavaScript development tools

Initialize npm project

```sh
npm init -y
```

Create `src/index.js` file

```sh
# Linux only
vim src/index.js
```

Install dependencies

```sh
npm i discord.js \
      @discordjs/rest \
      discord-api-types \
      axios
npm i -D nodemon \
         dotenv \
         jest \
         @babel/core \
         @babel/cli \
         @babel/preset-env \
         @babel/node \
         @babel/plugin-proposal-throw-expressions \
         eslint \
         eslint-config-node \
         eslint-config-airbnb-base \
         eslint-plugin-node \
         prettier \
         eslint-config-prettier \
         eslint-plugin-prettier
```

Create `.env` file (DON'T COMMIT THIS FILE)

```dotenv
# Discord Application Token
DISCORD_TOKEN=${YOUR_DISCORD_TOKEN_HERE}
# Discord Application ID
CLIENT_ID=${YOUR_DISCORD_CLIENT_ID_HERE}
# Discord Server Token
GUILD_ID=${YOUR_DISCORD_GUILD_ID_HERE}

# WEATHER API
WEATHER_API_URL=${WEATHER_API_URL_HERE}
WEATHER_API_TOKEN=${YOUR_WEATHER_API_TOKEN_HERE}
```

Create `.env.dev` file (commit this file as a `.env` template)

```dotenv
# Discord Application Token
DISCORD_TOKEN=
# Discord Application ID
CLIENT_ID=
# Discord Server Token
GUILD_ID=

# WEATHER API
WEATHER_API_URL=
WEATHER_API_TOKEN=
```

Create `jest.config.json` file

```json
{
    "name": "paquebot",
    "collectCoverage": true,
    "passWithNoTests": true,
    "verbose": true,
    "testPathIgnorePatterns": ["/dist"]
}
```

Create `.babelrc` file

```json
{
    "plugins": ["@babel/plugin-proposal-throw-expressions"],
    "presets": [
        [
            "@babel/preset-env",
            {
                "useBuiltIns": "usage",
                "corejs": 3
            }
        ]
    ]
}
```

Create `.eslintrc` file

```json
{
    "extends": ["airbnb-base", "node", "prettier"],
    "plugins": ["node", "prettier"],
    "settings": {
        "import/resolver": {
            "node": {"extensions": [".js"]}
        }
    },
    "rules": {
        "arrow-body-style": "off",
        "indent": ["error", 4, {"SwitchCase": 1}],
        "import/prefer-default-export": "off",
        "no-console": "off",
        "prettier/prettier": ["error"]
    }
}
```

Create `.prettierrc` file

```json
{
    "printWidth": 160,
    "tabWidth": 4,
    "useTabs": false,
    "semi": true,
    "singleQuote": true,
    "quoteProps": "as-needed",
    "jsxSingleQuote": false,
    "trailingComma": "none",
    "bracketSpacing": false,
    "jsxBracketSameLine": true,
    "arrowParens": "always",
    "requirePragma": false,
    "insertPragma": false,
    "proseWrap": "preserve",
    "htmlWhitespaceSensitivity": "ignore",
    "endOfLine": "auto"
}
```

Add the following scripts to your `package.json` file

```json
{
    "scripts": {
        "build": "babel src -d dist --copy-files",
        "dev": "nodemon --exec babel-node -r dotenv/config src/index.js",
        "prestart": "npm run build",
        "start": "node dist/index.js",
        "test": "jest",
        "validate:lint": "eslint src",
        "validate:prettier": "prettier --check ./src/**/*.js",
        "validate": "npm run validate:lint && npm run validate:prettier"
    }
}
```

Add files to git, commit and push

```sh
# Dont forget to create a .gitignore file before executing these commands
git add *
git commit -m "Initial commit"
git push github master
```
