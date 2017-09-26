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


router.get("/groupmember1",function(req,res){
  res.sendFile(path + "groupmember1.html");
});

router.get("/groupmember2",function(req,res){
  res.sendFile(path + "groupmember2.html");
});

router.get("/groupmember3",function(req,res){
  res.sendFile(path + "groupmember3.html");
});

router.get("/groupmember4",function(req,res){
  res.sendFile(path + "groupmember4.html");
});

router.get("/groupmember5",function(req,res){
  res.sendFile(path + "groupmember5.html");
});

router.get("/groupmember6",function(req,res){
  res.sendFile(path + "groupmember6.html");
});

app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(17006,function(){
  console.log("Live at Port 17006");
});
