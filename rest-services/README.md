# Vento- REST services

In REST architectural style, data and functionality are considered resources and are accessed using Uniform Resource Identifiers (URIs), typically links on the Web. 

## Requirements

The RESTful services have a basic client server aproach. You need to have your server up and running to be able to make the HTTP calls using the URLs. We have used sails for this purpose, have sails installed globally and then install all the dependencies locally. To do so follow the instructions [here](README.md). Follow the steps in [Sails-database-adapters](https://sailsjs.com/documentation/concepts/extending-sails/adapters/available-adapters) to connect sails to postgresql database.
After your set up is compleated simply use the following to have your local server running at port 8080
```bash
sails lift
```
Note that you need to lift sails everytime you edit your dpendencies, alternatively you can install nodemon to restart your server automaically.
```bash
npm install nodemon -g
nodemon app.js
```

## Usage
To use your rest services you simply have to follow the rest architectural standards and make approprite calls using URLs over HTTP.
Adding: POST, 
Reading: GET, 
Editing: PUT, 
Deleting: DELETE. 

