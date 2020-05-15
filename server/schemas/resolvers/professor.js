const { professors, searchProfessors, createProfessor } = require('../../db/index');

module.exports = {
  Query: {
    professors: () => Object.values(professors),
    searchProfessors: (_, { name }) => searchProfessors(name),
  },
  Mutation: {
    createProfessor: (_, { params }) => createProfessor(params),
  }
}
