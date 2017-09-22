var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "index.html");
});

router.get("/",function(req,res){
  res.sendFile(path + "about.html");
});

/*

router.get("/",function(req,res){
  res.sendFile(path + "group_member_1.html");
});

router.get("/",function(req,res){
  res.sendFile(path + "group_member_2.html");
});

router.get("/",function(req,res){
  res.sendFile(path + "group_member_3.html");
});

router.get("/",function(req,res){
  res.sendFile(path + "group_member_4.html");
});

router.get("/",function(req,res){
  res.sendFile(path + "group_member_5.html");
});

router.get("/",function(req,res){
  res.sendFile(path + "group_member_6.html");
});






------------------------------------------
app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});
*/
app.listen(3000,function(){
  console.log("Live at Port 3000");
});