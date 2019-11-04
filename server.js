var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000;
  mongoose = require('mongoose'),
  Entry = require('./api/models/sparkpostModel'), //created model loading here
  bodyParser = require('body-parser');

// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Sparkpostdb', {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    })
    .then(() => console.log('DB Connected'))
    .catch(err => {
        console.log('DB Connection Error: ${err.message}');
    }); 

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var routes = require('./api/routes/sparkpostRoutes'); //importing route
routes(app); //register the route

// incorrect route response
app.use(function(req, res) {
    res.status(404).send({url: req.originalUrl + ' not found'})
  });

app.listen(port);

console.log('sparkpost RESTful API server started on: ' + port);