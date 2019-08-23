## Description
<p>A simple Star Wars API.</p>

 ## Goal
 
 * **Impress and inspire Sam and the dev team at Grow... hopefully!**
 * **Have fun while trying to impress Sam and the dev team!**


## Installation

#### Yarn

```bash
$ yarn install
```

#### NPM (for the anti-yarn'ers')

```bash
$ npm install
```

## Running the app

#### Yarn

```bash
$ yarn start
```

#### or development:

```bash
$ yarn run start:dev
```

#### NPM

```bash
$ npm start
```
#### or development:

```bash
$ npm run start:dev
```

## Star Wars API

There are only two endpoints, 'people' and 'planets', which default url path is set to `/api/[endpoint]`, e.g:

`http://127.0.0.1:8069/api/planets`

## Other Info

I have intentionally left the `./.env` file in this package. If you want to change the port (default is '8069'), api base url (default is '/api'), or domain, you can configure it in this file.

<p>Just a side note: If this were something going to production, I would be MUCH more cautious with error handling and data types; but to for time sake, and because one of the goals is to try and keep it simple, I've skipped over some of error handling/checking that I would normally do. Also, I would normally setup a file where I would cache the necessary data; but again, for the sake of time and the project, each request to the app will send out a request to the Swapi API.</p>

<p>Please let me know if you have any problems or questions!</p>

Tyson Glazier<br>
tysonglazier@gmail.com<br>
801.907.1143
