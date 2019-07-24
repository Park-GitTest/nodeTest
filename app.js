var express = require('express');

var app = express();

app.get('/', function(req,res){
    res.send('What the Fuck');
});

app.listen(3000, function(){
  console.log('Server on');
});
