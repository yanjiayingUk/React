var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json");  //两个安装

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('backlogin');
});

router.post("/add",function(req,res,next){
  var busername=req.body.busername;
  // console.log(username);
  var bpwd=req.body.bpwd;
  var con=mysql.createConnection(dbconfig);
  con.connect();  //连接上数据库了的一个方法

  con.query("select * from backlogin where busername=? and bpwd=?",[busername,bpwd],function(err,result){ //需要几个变量，写一个?,对应前边数据
    if(err){
      console.log(err);
    }
    else{
      if(result[0]==null){
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("登录失败");
        res.end();
      }
      else{
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("登录成功");
        res.end();
      }
    }
  })
})

//下两个后台删除用户
router.get("/backlist", function (req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from login", function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      // res.render("backlist", { chapterList: result });
      // console.log(result[0]);
      res.write(result);
      res.end();
    }
  })
})

router.post("/deluser", function (req, res, next) {
  var busername=req.body.busername;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from login where username=?", [busername], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write("成功删除该用户");
      res.end();
    }
  })
})

//获取前台总用户数量bug
router.get("/mount", function (req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select count(*) from login where username!=null", function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      res.end(result);
      // res.render("backlist", { chapterList: result });
    }
  })
})

module.exports = router;
