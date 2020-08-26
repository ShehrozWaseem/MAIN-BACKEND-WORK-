var express= require("express");
var app = express();

app.get('/',function (req,res) {
	res.send('HOLA')
})
// app.get("/speak/dog")//now this code is much dry
// app.get("/speak/cow")//as we can see we are repeting route 
// app.get("/speak/cat")//with different name so to avoid this
// app.get("/speak/duck")//we use route params

//--------------------------------------------
app.get("/not_this_one/:animal",function(req,res){
	var animal = req.params.animal;
	//req.params.animal iss ju url ma :animal ki jaga dnga wu ajaega mery pas var ma
	var sound = "";
	if (animal === "cow"){
		sound="moo";
	}
	else if(animal === "cat")
		{sound="meoWWW"}

	res.send("THE " + animal + " says " + sound);
}); //now int his method we've to do single if
// stament for every animal so it avoid it we''l do by other way
//----------------------------------------------
app.get("/speak/:animal",function(req,res){
	var sounds = {
		cat: "meoWWW meoww"
		,cow: " moo moo moo",
		dog: " WufF WufF"
	}
	var animal = req.params.animal;
	var sound =sounds[animal]
	res.send("THE " + animal + " says " + sound);
})
//this function print the :msg number of :time (times)
//written in url like if http://localhost:3000/repeat/cow/10
// tu out put ye aega cow cow cow cow cow cow cow cow cow cow
app.get('/repeat/:msg/:time',function(req,res){
	var msg = req.params.msg
	var time = Number(req.params.time)
	var result = ''
	for (var i=0; i<time ; i++){
		 result += msg + " ";

	}//ab yhan pe ma res.send loop ma ni use krta kio k page pe 
	//srf ek baar request jaati or ha or ek baar response milta ha tu loop ma res.send ni use krnga
	//loop ka ju result ha vu variable ma store krwa ke or res.send() ma dednga

	res.send(result);
})
app.get('*',function(req,res){
	res.send("WRONG ROUTE BRUH !!!");
})



app.listen(3000, function() { 
    console.log('Server listening on port 3000'); 
  });