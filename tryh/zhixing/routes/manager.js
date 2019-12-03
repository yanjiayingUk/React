var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('manager');
});

router.post("/add", function (req, res, next) {
  var username = req.body.username;
  var realname = req.body.realname;
  var sex = req.body.sex;
  var tel = req.body.tel;
  var mail = req.body.mail;
  var position = req.body.position;
  var con = mysql.createConnection(dbconfig);
  con.connect();

  con.query("select * from manager where username=?", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      con.query("insert into manager(username,realname.sex,tel,mail,position) values(?,?,?,?,?,?)", [username,realname,sex,tel,email,position], function (err, result) {
        if (err) {
          console.log(err);
        }
        else {
          res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
          res.write("添加成功");
          res.end();
        }
      })
    }
  })
})


router.get("/list", function (req, res, next) {
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("select * from manager", function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      console.log(result);
      res.write(result);
      res.end();
    }
  })
})

router.post("/delmanager", function (req, res, next) {
  var busername=req.body.busername;
  var con = mysql.createConnection(dbconfig);
  con.connect();
  con.query("delete from manager where busername=?", [busername], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
      res.write("成功删除该管理员");
      res.end();
    }
  })
})

// update chapters set content=? where chapterid=?

module.exports = router;