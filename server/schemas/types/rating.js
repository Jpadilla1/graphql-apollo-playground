const { gql } = require("apollo-server");

const Rating = gql`
  type Rating {
    responsibility: Int!;
    amountOfWork: Int!;
    personality: Int!;
    difficulty: Int!;
  }

  input CreateRatingInput {
    professorId: String!;
    responsibility: Int!;
    amountOfWork: Int!;
    personality: Int!;
    difficulty: Int!;
  }

  extend type Professor {
    avgResponsibility: Int!;
    avgAmountOfWork: Int!;
    avgPersonality: Int!;
    avgDifficulty: Int!;
  }

  extend type Mutation {
    createRating(params: CreateRatingInput!): Rating
  }
`;

module.exports = {
  Rating,
};
