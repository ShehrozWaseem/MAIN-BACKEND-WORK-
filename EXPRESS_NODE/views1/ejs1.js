var express= require("express");
var app = express();

app.get('/',function(req ,res){
	//render: to embed the html,css and front end js file
//in ejse file
	res.render('ejse1.ejs');
	//res.send("<h1>working with ejs<h1>")
})
app.get('/a/:thing',function(req,res){
	var thing = req.params.thing;
	res.render("ejse1ii.ejs",{thingVar :thing} );
//thingVar ma html ki ejs ki file ma bhj rha bhj rha
})




app.listen(3000,function(){
	console.log('Server listening on port 3000');
});