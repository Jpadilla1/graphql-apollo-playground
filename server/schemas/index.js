const { makeExecutableSchema } = require('apollo-server');
const merge = require('lodash/merge');
const typeDefs = require('./types');
const resolvers = require('./resolvers');

const typeDefArray = Array.from(Object.values(typeDefs));
const resolverObjects = Array.from(Object.values(resolvers));

const schema = makeExecutableSchema({
    typeDefs: typeDefArray,
    resolvers: merge({}, ...resolverObjects),
});

module.exports = schema;
