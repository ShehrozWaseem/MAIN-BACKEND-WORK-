var express = require("express");
var app=express(); // isme save krwa dya express ku
//3 routes define hunge jesy agar '/bye' jaega url ma 
//tu mje Goodbye miljaega html page pe
app.get('/',function(req,res){//jab b req made to '/' hugi tu func chala du
    //req res object ha ju info rkhenge ke kia req hui or kia res dena
    res.send("Hi there!")

});

app.get('/bye',function(req,res){
    console.log('koi bye pe aya');
    res.send("GOOD BYE")

});
app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  }); //node filname.js run kru cmd pe