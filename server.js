// http://www.tutorialspoint.com/nodejs/nodejs_express_framework.htm

var port = 80;
var express = require('express');
var app = express();
app.listen(port);
console.log("Listening on port " + port);

var baseDir = "/users/dustine/desktop/node/public";

app.use(express.static('public'));

app.get('/bla', function (req, res) {
    res.sendFile(baseDir + "/" + "index.html")
    console.log("Sent index");
});

app.use(function (req, res, next) {
    res.status(404).send('Sorry cant find that!');
});

exports = module.exports = app;