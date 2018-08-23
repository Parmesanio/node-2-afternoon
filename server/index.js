const express       = require('express'),
      bodyParser    = require('body-parser'),
      massive       = require('massive'),
      pC            = require('./controllers/products_controllers'),
      PORT          = process.env.PORT || 3000,
      app           = express()
      require('dotenv').config();

//show loading spinner when fetching student profile for react-4-afternoon

app.use(bodyParser.json());

massive(process.env.CONNECTION_STRING).then(db => {
    app.set('db', db);
}).catch(err => {
    console.log('Error in massive', err);
});


//GET
app.get('/api/products', pC.getAll);
app.get('/api/product/:id', pC.getOne);

//POST
app.post('/api/product', pC.create);

//UPDATE
app.put('/api/product/:id', pC.update);

//DELETE
app.delete('/api/product/:id', pC.delete);

app.listen(PORT, (req, res) => {
    console.log(`Running on port ${PORT}`);
    
});
