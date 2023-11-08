//Notes:
//body-parser works with express
//used to parse data that comes from html form.
// it is installed using "npm install body-parser"

const express=require('express'); //requiring to use the package in our project
const bodyParser=require('body-parser'); //requiring to use the package in our project

const app=express(); //letting app to use the express
app.use(bodyParser.urlencoded({extended:true})); //letting the app use the bodyParser const.
//urlencoded is used to grap information that is posted to a server in a html "form tag".
//extended:true allow use to post nested objects. it is necessary to mentions everything when using body=parser

app.get("/",function(req,res){
  res.sendFile(__dirname+"/index.html"); //dirname specifies the path of your project. respond to get request sent to server by sending the html file
});

app.post("/",function(req,res){ //allow client to enter data
var num1=Number(req.body.num1); //using urlencoded we can tap the names from the html form.
var num2=Number(req.body.num2);
var result= num1 + num2;
res.send("The result of the caculation is:"+result); //take inputs respond with the result
});

app.get("/bmiCalculator",function(req,res){
  res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator",function(req,res){
  var wt=parseFloat(req.body.wt);
  var ht=parseFloat(req.body.ht);
  var bmi=wt/(ht*ht);
  res.send("your BMI is"+bmi);
});


app.listen(3000,function(){
  console.log("server started at 3000");
});
