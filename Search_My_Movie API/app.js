var express = require('express');
var app = express();
var request = require("request");
app.set("view engine","ejs");
app.get("/",function(req,res){
	res.render('search');
})
app.get('/results',function(req,res){
	//res.send('hello it works');
	var query = req.query.search;
	request(`http://www.omdbapi.com/?s=${query}&apikey=thewdb`,function(error , response,body){
		if(!error && response.statusCode==200){
			var data = JSON.parse(body);
			//res.send(data);
			res.render('results', {data : data});
		}
	});
});




app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });