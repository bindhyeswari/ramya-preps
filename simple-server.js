var http = require('http');

var server = http.createServer(function (req, res) {
    var body = '';
    req.setEncoding('utf8');

    req.on('data', function (chunk) {
        body += chunk;
    });

    req.on('end', function () {
        console.log(body);
        res.write('Hello');
        res.end();
    });
});

server.listen(3000, function () {
    console.log('listening on 3000 ... ');
});