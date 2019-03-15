var graph = require('../braintreeFetcher');

module.exports = (app) => {

    app
    .get('/heartbeat', (req, res) => {
        graph.heartbeat(res);
      })
      .get('/token', (req, res) => {
         graph.getToken(res);
    }).get('/charge', (req, res) => {
      graph.charge(res);
 })
  }

