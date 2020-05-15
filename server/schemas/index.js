const { makeExecutableSchema } = require('apollo-server');
const merge = require('lodash/merge');
const typeDefs = require('./types');
const resolvers = require('./resolvers');
const scalars = require('./scalars');

const typeDefArray = Array.from(Object.values(typeDefs));
const resolverObjects = Array.from(Object.values(resolvers));
const scalarObjects = Array.from(Object.values(scalars));

const schema = makeExecutableSchema({
    typeDefs: typeDefArray,
    resolvers: merge({}, ...resolverObjects, ...scalarObjects),
});

module.exports = schema;
