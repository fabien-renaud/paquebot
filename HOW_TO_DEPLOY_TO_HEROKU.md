<h1 align="center">How to deploy to Heroku 🚀</h1>

This tutorial will help you deploy a Node JS application to Heroku.

## Table of content

-   [Git](https://github.com/fabien-renaud/paquebot#git)
-   [JavaScript development tools](https://github.com/fabien-renaud/paquebot#javascript-development-tools)

## What is Heroku

Heroku is a platform as a service (PaaS) that enables developers to build, run, and operate applications entirely in the cloud.

If you don't have any account yet, sign up [here](https://signup.heroku.com/).

## Config dynos

All Heroku applications run in a collection of lightweight Linux containers called dynos.
Every dyno belongs to one of the three following configurations:

-   Web: Web dynos are dynos of the “web” process type that is defined in your Procfile. Only web dynos receive HTTP traffic from the routers.
-   Worker: Worker dynos can be of any process type declared in your Procfile, other than “web”. Worker dynos are typically used for background jobs, queueing systems, and timed jobs. You can have multiple kinds of worker dynos in your application. For example, one for urgent jobs and another for long-running jobs. For more information, see Worker Dynos, Background Jobs and Queueing.
-   One-off: One-off dynos are temporary dynos that can run detached, or with their input/output attached to your local terminal. They’re loaded with your latest release. They can be used to handle administrative tasks, such as database migrations and console sessions. They can also be used to run occasional background work, as with Heroku Scheduler. For more information, see One-Off Dynos.

By default, dyno use the web configuration. To overpass this behaviour, create a `Procfile` at your project `root` folder

```text
worker: npm start
```

## Config package.json

Heroku will use your `package.json` file to automatically deploy your application.
It will run the followings scripts : `npm run build` and `npm start`.
It will also look for a `Node` version to install on the `engines.node` field.

```json
{
    "name": "paquebot",
    "version": "0.1.0",
    "engines": {
        "node": "16.11.1"
    },
    "description": "Discord bot in JavaScript",
    "main": "src/index.js",
    "scripts": {
        "build": "babel src -d dist --copy-files",
        "start": "node dist/index.js"
    }
}
```

## Create a new application

-   On your [personnal dashboard](https://dashboard.heroku.com/apps), click on `New` > `Create new app`
-   Choose an `App name` and select `Europe` region, then click on `Create app`
-   On the Deploy tab, select `GitHub` deployment method, and select the git repository you want to deploy > `Enable Automatic Deploys`
-   On the Settings tab, click on `Reveal Config Vars` > `Fill` your environments variables > `Add`
-   On the Ressources tab, disable `web` dyno by clicking on the `Edit` button
-   On the Ressources tab, enable `worker` dyno by clicking on the `Edit` button
