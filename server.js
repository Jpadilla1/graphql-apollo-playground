const express = require('express');
const bodyParser = require('body-parser');
const graphqlExpress = require('apollo-server-express');

const myGraphQLSchema = ``;
const PORT = 8080;

const app = express();

// bodyParser is needed just for POST.
app.use('/graphql', bodyParser.json(), graphqlExpress({ schema: myGraphQLSchema }));


app.listen(PORT);
