var http = require('http');

//req = request
//res = reponse
/*criando o server*/
var server = http.createServer(function(req,res){
	res.writeHead(200, {'Content-type': 'text/html'});
	res.write('<Strong> Helo Word! </Strong>');
	res.write('<br>');
	res.write('Aulas de Nodejs');
	res.write('<br>');
	res.write('quebrar linha');
	res.write('<br>');
	res.write('Acadtec');
	res.end();

});

server.listen(3000, function(){
	console.log('Servidor rodando na porta 3000');
});