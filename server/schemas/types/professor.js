const { gql } = require("apollo-server");

const Professor = gql`
  enum Gender {
    male,
    female
  }

  type Professor {
    id: String!;
    name: String!;
    college: String!;
    department: String!;
    gender: Gender!
  }

  input CreateProfessorInput {
    name: String!;
    college: String!;
    department: String!;
    gender: Gender!
  }

  extend type Mutation {
    createProfessor(params: CreateProfessorInput!): Professor
  }

  extend type Query {
    searchProfessors(name: String!)
  }
`;

module.exports = {
  Professor,
};
