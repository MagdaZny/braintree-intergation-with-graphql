const express = require('express');
var express_graphql = require('express-graphql');
const app = express();
const { buildSchema } = require('graphql');

const { GraphQLObjectType, GraphQLString,} = require('graphql');

require('./routes/api')(app);

// GraphQL schema
var schema = buildSchema(`
    type Query {
        member(id: Int): Member
    },
    type Member {
        id: Int
        name: String
    }
`);

var data = {
      id: 1,
      name: 'The Complete Node.js Developer Course'
  }

// const RootQuery = new GraphQLObjectType({
//   name: 'RootQuery',
//   fields: {
//     member: {
//       type: MemberType,
//       args: {
//         id: { type: GraphQLString }
//       }
//       // resolve (parentValue, args) {
//         //  return axios.get(fakeDB + '/members/' + args.id)
//         //   .then(res => res.data) 
//         // return data
//           // .then(member => member)
//           // .catch(err => console.error('Error exectuing member query', err))
//       }
//     }
//     // ,
//     // members: {
//     //   type: new GraphQLList(MemberType),
//     //   resolve (parentValue, args) {
//     //     //  return axios.get(fakeDB + '/members/')
//     //       // .then(res => res.data) 
//     //     return getMembers()
//     //     .then(members => "")
//     //   }}
//     }})


// The root provides a resolver function for each API endpoint
var root = {
  member: data
  };

app.use('/graphql', express_graphql({
  schema: schema,
  rootValue: root,
  graphiql: true,
})).get('/magda', (req, res) => {
  graph.hello(res);
});

app.listen(4000);
console.log('Running a GraphQL API server at localhost:4000/');