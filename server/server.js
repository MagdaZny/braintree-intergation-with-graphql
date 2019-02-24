const express = require('express');
var graphqlHTTP = require('express-graphql');
var { buildSchema } = require('graphql');
const app = express();

require('./routes/api')(app);

// Construct a schema, using GraphQL schema language
var schema = buildSchema(`
    type Query {
      hello: String
      test: String
    }`
);

// The root provides a resolver function for each API endpoint
var root = {
  hello: () => {
    return 'Hello world!';
  },
  test: () => {
    return 'Hello test!';
  },
};

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
})).get('/magda', (req, res) => {
  graph.hello(res);
});

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/');