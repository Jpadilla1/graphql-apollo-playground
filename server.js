const express = require("express");
const bodyParser = require("body-parser");
const { graphqlExpress, graphiqlExpress } = require("apollo-server-express");

const myGraphQLSchema = ``;
const PORT = 8080;

const app = express();

app.use(
  "/graphiql",
  graphiqlExpress({
    endpointURL: "/graphql",
  })
);

// bodyParser is needed just for POST.
app.use(
  "/graphql",
  bodyParser.json(),
  graphqlExpress({ schema: myGraphQLSchema })
);

app.listen(PORT);
