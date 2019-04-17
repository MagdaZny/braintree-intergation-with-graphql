import {
    GraphQLID,
    GraphQLString,
    GraphQLNonNull
  } from 'graphql';

  const braintreeClient = require('./braintreeClient');

export default {
    type: ConexflowToken,
    args: {
        token: {
            type: new GraphQLString
        }
    },
    resolve(root, args) {
        return braintreeClient.getToken(root);
    }
};