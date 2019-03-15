const fetch = require('node-fetch');
global.Headers = fetch.Headers;

const ourHeaders = new Headers();
ourHeaders.append('Content-Type', 'application/json');
ourHeaders.append('Braintree-Version', '2019-02-23');
ourHeaders.append('Authorization', 'Basic YjhxazNuNXQ1ank1Mno2eDo0Y2EyZDU4OThlMTFlZmI1NjhhOTY5ZDBmZTg1YWUxOA')
const URL = 'https://payments.sandbox.braintree-api.com/graphql';

exports.hello = function hello(res) {
    fetch('https://jsonplaceholder.typicode.com/todos/1')
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
}

let URL = 'https://payments.sandbox.braintree-api.com/graphql';
exports.heartbeat = function heartbeat(res) {
    fetch(URL, {
        method: 'POST',
        headers: ourHeaders,
        body: JSON.stringify({ query: "query { ping }" }),
    })
        .then(res => res.json())
        .then(data => {
            res.send({ data });
        });
}

exports.getToken = function getToken(res) {
    fetch(URL, {
        method: 'POST',
        headers: ourHeaders,
        body: JSON.stringify({ query: "mutation { createClientToken { clientToken }}" }),
    }).then(res => res.json())
        .then(data => {
            res.send({ token: data.data.createClientToken.clientToken });
        });
}
let chargeQuery = "mutation ExampleCharge($input: ChargePaymentMethodInput!) {" +
    "chargePaymentMethod(input: $input) { " +
    "transaction { " +
    "id " +
    "status " +
    "}" +
    "}" +
    "}"

// save query, call it, extract queries to a separate file
// use some hardcoded data, db, to show how we can have operations on various psps


exports.charge = function charge(res) {
    fetch(URL, {
        method: 'POST',
        headers: ourHeaders,
        body: JSON.stringify({
            query: chargeQuery, variables:
            {
                input: {
                    paymentMethodId: "fake-valid-nonce",
                    transaction: {
                        amount: "11.23"
                    }
                }
            }
        }),
    }).then(res => res.json())
        .then(data => {
            res.send({ data });
        });
}