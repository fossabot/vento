# vento
`Vento` is an Asset(Hardware and Software) Inventory Management system where all the assets can be managed with ease by the Lab Owners.

# Code
Code is distributed into three main directories:

- `client`: The client side is a [Reactjs](https://reactjs.org/) based web app project. It can be hosted locally in development mode. The build script helps to build the production artficats of the UI Project.
- `rest-services`: The User Interface(client) interacts with the back-end data-store over Rest Services. Rest services are built using [SailsJs](https://sailsjs.com/).
- `database`: It uses [PostgreSQL](https://www.postgresql.org/) as data-store. Minimum supported version is 11.0.

# How to Run
To get started install [Node.js](https://nodejs.org/en/download/) and [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable). Following which sails and other required packages can be installed as follows.

For global installation SailsJs do
```bash
yarn global add sails
```

To install modules
```bash
$ cd client && yarn install
$ cd ../rest-services && yarn install
```

### Usage
`cd rest-services && sails lift` and then `cd ../client && yarn start`. After that, open
[localhost:8080](http://localhost:8080) in your browser. Make sure that you start both servers simultaneously.
