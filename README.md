<h1 align="center">Paquebot 🚢</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-0.1.0-blue.svg?cacheSeconds=2592000" />
</p>

Discord bot in JavaScript

## Table of content

-   [Prerequisite](https://github.com/fabien-renaud/paquebot#prerequisite)
-   [Installation](https://github.com/fabien-renaud/paquebot#installation)
    -   [Register your Discord Application](https://github.com/fabien-renaud/paquebot#register-your-discord-application)
-   [Usage](https://github.com/fabien-renaud/paquebot#usage)
-   [Commands](https://github.com/fabien-renaud/paquebot#commands)

## Tutorials

-   [How to init a dev project 🛠](https://github.com/fabien-renaud/paquebot/blob/master/HOW_TO_INIT_A_DEV_PROJECT.md)
-   [How to deploy to Heroku 🚀](https://github.com/fabien-renaud/paquebot/blob/master/HOW_TO_DEPLOY_TO_HEROKU.md)

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

## Register your Discord Application

Create a new Discord Application

-   Create a new Discord Bot here : https://discord.com/developers/applications
-   Go to `General Information` > `Application ID` > `Copy`
-   Paste your identifier into `.env` to fill `CLIENT_ID` value
-   Go to `Bot` > `Add Bot` > `Yes, do it!` > `Token` > `Copy`
-   Paste your token into `.env` to fill `DISCORD_TOKEN` value
-   Go to `OAuth2` > `Scopes` > Select `bot` and `applications.commands` > `Copy` the invite link into your navigator > `Invite` the bot to one of your Discord server

In Discord, do the following:

-   Go to `Settings` > `Advanced` > Enable `Developer Mode`
-   Go to your Discord server > `Right click` on the server name > `Copy ID`
-   Paste your identifier into `.env` to fill `GUILD_ID` value

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

-   `ping` : Return pong
-   `weather <city>` : Return weather data of given city

## 🤝 Contributing

Contributions, issues and feature requests are welcome!<br />Feel free to check [issues page](https://github.com/fabien-renaud/message-app/issues).

## Show your support

Give a ⭐️ if this project helped you!
