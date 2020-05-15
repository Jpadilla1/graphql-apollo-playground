const { gql } = require("apollo-server")

const Rating = gql`
  type Rating {
    id: String!
    responsibility: Int!
    amountOfWork: Int!
    personality: Int!
    difficulty: Int!
    date: Date!
  }

  input CreateRatingInput {
    professorId: String!
    responsibility: Int!
    amountOfWork: Int!
    personality: Int!
    difficulty: Int!
  }

  extend type Professor {
    averageRating: Float
    avgResponsibility: Float
    avgAmountOfWork: Float
    avgPersonality: Float
    avgDifficulty: Float
  }

  extend type Mutation {
    createRating(params: CreateRatingInput!): Rating
  }
`

module.exports = {
  Rating,
}
