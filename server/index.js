const express       = require('express'),
      bodyParser    = require('body-parser'),
      massive       = require('massive'),
      app           = express(),
      PORT          = 4000;
      require('dotenv').config();

//show loading spinner when fetching student profile for react-4-afternoon

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => {
    console.log('Error in massive', err);
});



app.get('/api/planes', pC.get);

app.listen(PORT, (req, res) => {
    console.log(`Running on port ${PORT}`);
    
});
