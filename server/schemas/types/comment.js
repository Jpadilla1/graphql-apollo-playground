const { gql } = require("apollo-server");

const Comment = gql`
  type Comment {
    message: String!;
    date: Date;
  }

  input CreateCommentInput {
    professorId: String!;
    message: String!;
  }

  extend type Mutation {
    createComment(params: CreateCommentInput!): Comment
  }
`;

module.exports = {
  Comment,
};
