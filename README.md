# vento 
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fatapas%2Fvento.svg?type=shield)](https://app.fossa.io/projects/git%2Bgithub.com%2Fatapas%2Fvento?ref=badge_shield)

`Vento` is an Asset(Hardware and Software) Inventory Management system where all the assets can be managed with ease by the Lab Owners.

# Code
Code is distributed into three main directories:

- `client`: The client side is a [Reactjs](https://reactjs.org/) based web app project. It can be hosted locally in development mode. The build script helps to build the production artifacts of the UI Project.
- `rest-services`: The User Interface(client) interacts with the back-end data-store over Rest Services. Rest services are built using [SailsJs](https://sailsjs.com/). Minimum version of Sails required is 1.2.4.
- `database`: It uses [PostgreSQL](https://www.postgresql.org/) as data-store. Minimum supported version is 11.0.

# How to Run

To get started install [Node.js](https://nodejs.org/en/download/), minimum version is 8.1 and install [yarn](https://classic.yarnpkg.com/en/docs/install#windows-stable), minimum version 1.22.4. Following which sails and other required packages can be installed as follows.

### To Install Postgres 
Download and install appropriate [PostgreSQL](https://www.postgresql.org/download/).
See the [instructions](database/scripts/README.md) to setup Database on PostgreSQl.

For global installation SailsJs, do
```bash
yarn global add sails
```

### To install modules
Change directory to client by
```bash 
cd client 
```
Install modules by
```bash
 yarn install
```
Now change directory to rest-services by
```bash
cd ../rest-services
```
Install modules by
```bash
yarn install
```

### Usage
Open two terminals,
In one terminal, for the backend,
change directory to rest-services by
```bash
cd rest-services
```
To run the sails app in current directory do
```bash
sails lift
``` 
In another terminal, for the frontend,
change directory to client by
```bash
cd client
```
To run the start script do,
```bash
yarn start
```
After that, open [localhost:8080](http://localhost:8080) in your browser. 
Make sure that you start both servers simultaneously.

To test the backend you can open [localhost:1337](http://localhost:1337)


## License
[![FOSSA Status](https://app.fossa.io/api/projects/git%2Bgithub.com%2Fatapas%2Fvento.svg?type=large)](https://app.fossa.io/projects/git%2Bgithub.com%2Fatapas%2Fvento?ref=badge_large)