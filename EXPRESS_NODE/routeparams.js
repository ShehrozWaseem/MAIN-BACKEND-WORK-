var express = require("express");
var app=express(); // isme save krwa dya express ku
//3 routes define hunge jesy agar '/bye' jaega url ma 
//tu mje Goodbye miljaega html page pe




app.get('/',function(req,res){//jab b req made to '/' hugi tu func chala du
    //req res object ha ju info rkhenge ke kia req hui or kia res dena
    res.send("Hi moku moku!")

});


//ye route params ka kaam :sub ek var ha jisme wu save huga ju ma url ma dnga

app.get('/r/:sub',function(req,res){
    var subb = req.params.sub;
    res.send("WELCOME  TO "+ subb.toUpperCase() + " PAGE")
    //http://localhost:3000/r/gg :output: WELCOME TO GG PAGE
});

app.get('/r/:sub/cmnt/:id/:title',function(req,res){
	//bas pattern match krna chaye yani iss trh ka hu
//http://localhost:3000/r/xyz/cmnt/xyz/xyz  (xyz ma kch b askta)
    
    res.send("WELCOME  TO THE COMMENTS PAGE")
});


 app.get('*',function(req,res){
	res.send("YOU entered wrong ROUTE")
});
//agar koi /asgy iss type ka route dede
    //hamesha last ma aega wrna dusrey route ni access kr paega



app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  }); 
  //node filname.js run kru cmd pe