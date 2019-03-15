const express = require('express');
var express_graphql = require('express-graphql');
const app = express();
const { buildSchema } = require('graphql');

require('./routes/api')(app);

// GraphQL schema
var schema = buildSchema(`
    type Query {
        member(id: Int): Member
        address: Address
    },
    type Member {
        id: Int
        name: String
        address: Address
    },
    type Address {
      street: String
      city: String
    }
`);

var schemaSecond = buildSchema(`
    type Query {
        getDatacashToken: DatacashToken 
    },
    type DatacashToken {
      forwardUrl: String
    },
    type CoenxflowToken {
      token: String
    },
    enum Psp {
      CONEXFLOW
      DATACASH
    },
    type Payer{
      customerId: String!
      accountId: String
      fundingInstrumentId: String
    }
    `);

var dataMember = {
      id: 1,
      name: 'The Complete Node.js Developer Course',
  }

  var dataAddress = {
      street : "long",
      city: "London"
}
var conexflowData = {
  token: "happy-token"
}
var datacashData = {
  forwardUrl: "wowo"
}



// The root provides a resolver function for each API endpoint
var root = {
  member: dataMember,
  address: dataAddress,
  getToken: conexflowData,
  getDatacashToken: datacashData
  };

app.use('/graphql', express_graphql({
  schema: schemaSecond,
  rootValue: root,
  graphiql: true,
})).get('/magda', (req, res) => {
  graph.hello(res);
});

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/');