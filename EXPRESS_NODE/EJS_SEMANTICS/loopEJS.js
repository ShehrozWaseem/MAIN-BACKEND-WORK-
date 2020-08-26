var express= require("express");
var app = express();
app.use(express.static("public"));
app.set("view engine","ejs");
//this is used if you dont write .ejs with the files 
//in render code


//this tells me that their are some other files to in the public
//foldder which are tu be used by the express like we have a css file in public folder
app.get('/',function(req ,res){
	//render: to embed the html,css and front end js file
//in ejse file
	res.render('ejse1.ejs');
	//res.send("<h1>working with ejs<h1>")
})

app.get('/a/:thing',function(req,res){
	var thing = req.params.thing;
	res.render("ejse2.ejs",{thingVar :thing} );
//thingVar ma html ki ejs ki file ma bhj rha bhj rha
})

app.get("/posts",function(req,res){
	var post = [
{title:"BOOK 1",author:"one"},
{title:"BOOK 2",author:"two"},
{title:"BOOK 3",author:"three"}
	];
res.render('post.ejs',{posts : post})
})



app.listen(3000,function(){
	console.log('Server listening on port 3000');
});