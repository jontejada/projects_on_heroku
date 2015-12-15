var express = require('express');
var app = express();

app.set('view engine', 'html');
app.set('views', __dirname);
app.use(express.static(__dirname + '/assets'));

app.get('/pixel', function(req,res) {
	res.sendFile(__dirname + '/pixel/views/index.html');
});

var server = app.listen(3000, function() {
	var port = server.address().port;
	console.log('Server listening on', port);
});