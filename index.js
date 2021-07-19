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


    const hash = {};

   for(const [key, obj] of Object.entries(results)) {
     for(const [key2, values] of Object.entries(obj)) {
        if(!hash[key2]) hash[key2] = {};

        for(const value of [values].flat())
          hash[key2][value] = key;
     }
   }


   const result = Object.entries(hash).map(([key, value]) => ({ key, value }));

    

  })
})


app.use('/', router);


app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));
