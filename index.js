var http  = require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'content-type':'text/html'});
    res.write('Hello');
    res.end();
}).listen(8080);
/*exports.helloHttp = function helloHttp(req, res){
    res.json({fulfillmentText : 'This is a sample response from your webhook'});
};*/