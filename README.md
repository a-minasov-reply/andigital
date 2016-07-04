# Andigital Coding Exercise
Angular 2 responsive web app with the bootstrap framework.

## Prerequisites

Node.js and npm are essential to Angular 2 development. 
    
<a href="https://docs.npmjs.com/getting-started/installing-node" target="_blank" title="Installing Node.js and updating npm">
Get it now</a> if it's not already installed on your machine.
 
**Verify that you are running at least node `v5.x.x` and npm `3.x.x`**
by running `node -v` and `npm -v` in a terminal/console window.
Older versions produce errors.

## Setup on local environment

open `app/foursquare.service.ts` and update the `[CLIENT_SECRET]` and `[CLIENT_ID]` with your own keys.

Clone this repo into new project folder (e.g., `andigital`).
```bash
git clone  https://github.com/a-minasov-reply/andigital  andigital
cd andigital
```

## Install npm packages

> See npm and nvm version notes above

Install the npm packages described in the `package.json` and verify that it works:

**Attention Windows Developers:  You must run all of these commands in administrator mode**.

```bash
npm install
npm start
```

> If the `typings` folder doesn't show up after `npm install` please install them manually with:

> `npm run typings -- install`

> If the `bootstrap` folder doesn't show up after `npm install` under `node_modules` please run:

> `npm install bootstrap --save`

The `npm start` command first compiles the application, 
then simultaneously re-compiles and runs the `lite-server`.
Both the compiler and the server watch for file changes.

Shut it down manually with Ctrl-C.

## Setup for production
Open `app/main.ts` and add the following above the import statements: 
> import {enableProdMode} from '@angular/core';

and add the following above `bootstrap(...)`
> enableProdMode();
