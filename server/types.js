const { buildSchema } = require('graphql');

// GraphQL schema
var pspSchema = buildSchema(`
    type Query {
        getDatacashToken: DatacashToken,
        getConexflowToken: ConexflowToken,
        getPayer(customerId: String!): Payer
    },
    type DatacashToken {
      forwardUrl: String
    },
    type ConexflowToken {
      token: String
    },
    type FI {
      customerId: String
      accountId: String
      fundingInstrument: String
      transactions: [Trnasaction]
    }, type Transaction{
        
    }

    `);
exports.pspSchema = pspSchema;

