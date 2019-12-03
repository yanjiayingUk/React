var express = require('express');
var router = express.Router();
var mysql=require("mysql");
var dbconfig=require("../config/dbconfig.json");  //两个安装

/* GET home page. */
router.get('/', function(req, res, next) {//get我的页面
  res.render('my');
});

router.post("/add",function(req,res,next){
  var oldusername=req.body.oldusername;
  var imgpath=req.body.imgpath;
  var username=req.body.username;
  // console.log(username);
  var sex=req.body.sex;
  var birth=req.body.birth;
  var con=mysql.createConnection(dbconfig);
  con.connect();  //连接上数据库了的一个方法
  // update chapters set content=? where chapterid=?  更新，注册创建
  // insert into users(username,imgpath,sex,birth) values(?,?,?,?)
  // update users set username=?,imgpath=?,sex=?,birth=? where oldusername=?
  con.query("update users set username=?,imgpath=?,sex=?,birth=? where oldusername=?",[username,imgpath,sex,birth,oldusername],function(err,result){
    if(err){
      console.log(err);
    }
    else{
      res.end("success");
    }
  })
})


module.exports = router;