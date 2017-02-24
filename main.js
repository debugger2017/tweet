var http = require("http");
var express  = require("express");
var path = require("path");
var bodyparser = require("body-parser");

var app = express();
app.set("views",path.resolve(__dirname,"views"));
app.set("view engine","ejs");

app.use(express.static(__dirname + '/public'));

var tweets = [];
app.locals.tweets = tweets;

app.use(bodyparser.urlencoded({extended: false}));

app.get('/', function(request,response){
	response.render("index");
});

app.get('/new-tweet', function(request, response){
	response.render("tweet-form")
});

app.post('/new-tweet', function(request, response){
	if(!request.body.name || !request.body.content){
		response.status(400).send("Both fields must be present");
		return;
	}
	tweets.push({
		"name":request.body.name,
		"content":request.body.content,
	});
	response.redirect("/");
});

http.createServer(app).listen(process.env.PORT ||4000, function(){
	console.log("Server started on port: 4000");
})