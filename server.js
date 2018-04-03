var express = require('express');

var app = express();
//Create our app
app.use(express.static('public'));

app.listen(3000, function() {
    
    console.log('Express server is up oin port 3000')
});

//node server.js