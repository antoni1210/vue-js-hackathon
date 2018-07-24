const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const rp = require('request-promise');



app.use(bodyParser.json());
// app.use('/api', routes);

app.get('/venues', (req,res, next) => {

  rp({
    method: 'GET',
    url: 'https://maps.googleapis.com/maps/api/js?key=AIzaSyDdsDypPEp9X7T8qg-p41_pz_c2EYsqr8Y&libraries=places',
    json: true
  })
    .then(res => console.log(res))
    .catch(next);
});

app.listen(4000, () => console.log('Aye aye cap\'n we\'re pulling into port 4000'));
