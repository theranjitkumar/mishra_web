var express = require('express');
var app = express();

app.use(express.static('./public'));

app.get('/', function(req, res) {
    res.render('./public/index.html');
});

app.listen(3000, '127.0.0.1', function(){
console.log('app running on port 3000');
})
