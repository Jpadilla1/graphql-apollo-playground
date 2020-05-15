const { gql } = require("apollo-server")

const Comment = gql`
  type Comment {
    id: String!
    message: String!
    date: Date
  }

  extend type Professor {
    comments: [Comment]
  }

  input CreateCommentInput {
    professorId: String!
    message: String!
  }

  extend type Mutation {
    createComment(params: CreateCommentInput!): Comment
  }
`

module.exports = {
  Comment,
}
