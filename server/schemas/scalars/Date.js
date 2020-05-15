const { GraphQLScalarType } = require("graphql");
const { Kind } = require("graphql/language");

const Date = new GraphQLScalarType({
  name: "Date",
  description: "Date custom scalar type",
  parseValue(value) {
    return new global.Date(value);
  },
  serialize(value) {
    return value.getTime();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new global.Date(ast.value);
    }
    return null;
  },
});

module.exports = { Date };
