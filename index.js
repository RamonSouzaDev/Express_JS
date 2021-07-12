// Require statement so we can use express, bodyParser, and logger
const express = require('express');
const bodyParser = require('express');
const logger = require('morgan');
const request = require('request');

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3002;

router.get('/voos', (req, res) => {
  request('http://prova.123milhas.net/api/flights', (err, response, body) => {
    if (err || !body) {
      res.send('An error has occurred during the process. Please try again later');
    };
    let results = JSON.parse(body);

    const fare1AF = [];
    const fare4DA = [];
    const inboud = [];
    const outbound = [];

    const flightsInbound = [];
    const flightsOutbound = [];

    const groupFlights = [];

    //separa por tarifa
    for (var i = 0; i < results.length; i++) {
      if (results[i].fare === '1AF') {
        fare1AF.push(results[i]);
      } else {
        fare4DA.push(results[i]);
      }
    }

    //separa por ida e volta
    for (var i = 0; i < results.length; i++) {
      if (results[i].inbound === 0) {
        inboud.push(results[i]);
      } else {
        outbound.push(results[i]);
      }
    }

    Array.prototype.groupBy = function (prop) {
      return this.reduce(function (groups, item) {
        const val = item[prop]

        groups[val] = groups[val] || []
        groups[val].push(item)
        return groups
      }, {})
    };




    const groupByPrice = results.groupBy('price');
    const groupByFare = results.groupBy('fare');
    const groupByOutboundInbound = results.groupBy('inbound');

    combineFlights(groupByOutboundInbound, results);

    function outbound2(out) {
      for (var i = 0; i < out.length; i++) {
        groupByInbound.forEach(inbound2);
      }
    }

    function inbound2(inb) {
      for (var i = 0; i < inb.length; i++) {
        const totalPrice = inb.rice + outbound.price
      }
    }

    function combineFlights(groupByOutboundInbound, results) {
      results;
      groupOut = groupByOutboundInbound[1];
      groupInb = groupByOutboundInbound[0];
      
      const flights = [];
      for (var i = 0; i < groupInb.length; i++) {

          for (var x = 0; x < groupOut.length; x++) {
          if (groupInb[i]['destination'] == groupOut[x]['origin']){
            flights.push(groupOut[x], groupInb[i]); 
          }
        }
      }
    }


    //encontrar preços iguais e combinar voos
    for (var i = 0; i < fare1AF.length; i++) {
      for (var x = 0; x < results.length; x++) {
        if (fare1AF[i].price === results[x].price) {
          flightsInbound.push(results[x]);
        } else {
          flightsOutbound.push(results,);
        }
      }
    }

    for (var i = 0; i < fare4DA.length; i++) {
      for (var x = 0; x < results.length; x++) {
        if (fare4DA[i].id === results[x].price) {
          flightsInbound.push(results[x]);
        } else {
          flightsOutbound.push(results[x]);
        }
      }
    }


    if (fare1AF.sort().join('|') === inboud.sort().join('|')) {
      console.log('The arrays are equal.');
    } else {
      console.log('The arrays are NOT equal.');
    }

    flightsByFares = results.forEach(groupByFare);

  })
})

flightsByFares = groupByFare('fare');

function groupByFare(flights) {

  var groupBy = function (flights, key) {
    return flights.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);

      console.log(rv)
    }, {});
  };

  console.log(groupBy(['fare'], 'length'));

  return flights;
}

function groupByInboundOrOutbound(flights) {

  var groupBy = function (xs, key) {
    return xs.reduce(function (rv, x) {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  };

  console.log(groupBy(['inbound'], 'length'));

  return flights;
}

app.use('/', router);


app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
