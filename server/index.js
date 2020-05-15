const { ApolloServer, gql } = require("apollo-server");
const { books } = require("./data/index");


const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Query {
    books: [Book]
  }

  extend type Query {
    cosas: [Book]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    cosas: () => books,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
