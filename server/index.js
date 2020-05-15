const { ApolloServer, gql } = require("apollo-server");
const schema = require('./schemas');


const server = new ApolloServer({ schema });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
