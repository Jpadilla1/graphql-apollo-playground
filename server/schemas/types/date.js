const { gql } = require("apollo-server")

const Date = gql`
  scalar Date
`;

module.exports = {
    Date,
};
