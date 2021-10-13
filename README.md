<h1 align="center">Paquebot 🚢</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

Discord bot in JavaScript

## Prerequisite

You need Node.JS `v16+` to run this application

```sh
$ node -v
v16.11.1
```

## Installation

Install npm dependencies

```sh
npm install
```

Copy `.env.dev` file into `.env` file and fill it

```sh
cp .env.dev .env
```

## Usage

Run Discord bot

```sh
npm start
```

Run Discord bot in development mode

```sh
npm run dev
```

## Commands

## Steps to reproduce

### Git

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

### JavaScript development tools

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
# Discord
DISCORD_TOKEN=${YOUR_DISCORD_TOKEN_HERE}
```

Create `.env.dev` file (commit this file as a `.env` template)

```dotenv
# Discord
DISCORD_TOKEN=
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

### Create a new Discord Application

- Create a new Discord Bot here : https://discord.com/developers/applications
- Go to `General Information` > `Application ID` > `Copy`
- Paste your identifier into `.env` to fill `CLIENT_ID` value
- Go to `Bot` > `Add Bot` > `Yes, do it!` > `Token` > `Copy`
- Paste your token into `.env` to fill `DISCORD_TOKEN` value
- Go to `OAuth2` > `Scopes` > Select `bot` and `applications.commands` > `Copy` the invite link into your navigator > `Invite` the bot to one of your Discord server

In Discord, do the following:
- Go to `Settings` > `Advanced` > Enable `Developer Mode`
- Go to your Discord server > `Right click` on the server name > `Copy ID`
- Paste your identifier into `.env` to fill `GUILD_ID` value

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/fabien-renaud/message-app/issues).

## Show your support

Give a ⭐️ if this project helped you!
