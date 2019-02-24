const fetch = require('node-fetch');
var graph = require('../../braintreeFetcher');

module.exports = (app) => {

    app.get('/heartbeat', (req, res) => {
        
        graph.heartbeat(res);
      })
    };

