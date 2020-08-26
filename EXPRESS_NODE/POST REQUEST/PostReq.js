var express= require('express');
var app = express();
var bodyParser= require("body-parser");

//telling express to use body.parser
app.use(bodyParser.urlencoded({extended: true}));

app.set('view engine','ejs')
var friendsss=['ali','khan','ahmed','asad'];
app.get('/',function (req ,res) {
	res.render('home');
	
});

app.get('/friends',function(req,res){
	//we'll move this list outside routes so their 
	//should be no issue with the scope
	//var friendsss=['ali','khan','ahmed','asad'];
	res.render('friends',{f : friendsss});
});

//we will use a form by which will add a friend so we have to use post
// req as we'll req the server and get the res

app.post('/addfriend',function(req,res){
	//req.body = req send krte we ju samaan arha ha hamare pas
	console.log(req.body.newf);
	var newf = req.body.newf
	friendsss.push(newf);
	//redirect will run friend's route code
	res.redirect('/friends')
})
app.listen(3000,function(){
	console.log("SERVER LISTENING ON PORT 3000")
});