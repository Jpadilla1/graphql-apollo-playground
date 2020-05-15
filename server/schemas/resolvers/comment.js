const { createComment } = require('../../db/index');

module.exports = {
  Professor: {
    comments: (p) => p.comments,
  },
  Mutation: {
    createComment: (_, { params }) => createComment(params)
  }
}
