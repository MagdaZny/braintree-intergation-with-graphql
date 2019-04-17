const express = require('express');
var express_graphql = require('express-graphql');
const app = express();
const graph = require('./braintreeClient');
const types = require('./types')
const { buildSchema } = require('graphql');

require('./routes/api')(app);

var conexflowData = {
  token: "test-token"
}
var datacashData = {
  forwardUrl: "test-forward-url"
}
var payerData = {
  customerId: "1",
  accountId: "2",
  fundingInstrument: "3"
}

// The root provides a resolver function for each API endpoint
var root = {
  getConexflowToken: conexflowData,
  getDatacashToken: datacashData,
  getPayer: payerData
  };

app.use('/graphQL', express_graphql({
  schema: types.pspSchema,
  rootValue: root,
  graphiql: true
})).get('/magda', (req, res) => {
  graph.hello(res);
});

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/');

// READ ABOUT SDKs FOR JAVA