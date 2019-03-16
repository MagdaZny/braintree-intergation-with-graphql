const { buildSchema } = require('graphql');

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
exports.schema = schema;
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
exports.schemaSecond = schemaSecond;

