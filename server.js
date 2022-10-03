/*
Name:Arshit Gilhotra
Student ID:125619213
Course:WEB322
Email:garshit@myseneca.ca
*/ 
var express = require("express");
var app = express();
var path =require("path");

var HTTP_PORT = process.env.PORT || 8080;

// call this function after the http server starts listening for requests
function onHttpStart() {
  console.log("Express http server listening on: " + HTTP_PORT);
}


// setup a 'route' to listen on the default url path (http://localhost)
app.get("/", function(req,res){
    res.sendFile(path.join(__dirname, "/index.html"));
    });
    app.get("/index", function(req,res){
      res.sendFile(path.join(__dirname, '/index.html'));
    });
  app.get("/blog", function(req,res){
    res.sendFile(path.join(__dirname, '/blog.html'));
  });
  app.get("/article", function(req,res){
    res.sendFile(path.join(__dirname, '/article.html'));
  });
  app.get("/login", function(req,res){
    res.sendFile(path.join(__dirname, '/login.html'));
  });
  app.get("/registration", function(req,res){
    res.sendFile(path.join(__dirname, '/registration.html'));
  });
  app.use(express.static(__dirname));
// setup another route to listen on /about

// setup http server to listen on HTTP_PORT
app.listen(HTTP_PORT,onHttpStart());