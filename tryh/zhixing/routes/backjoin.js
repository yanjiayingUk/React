var express = require('express');
var router = express.Router();
var mysql = require("mysql");
var dbconfig = require("../config/dbconfig.json");

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('backjoin');
});

router.post("/add", function (req, res, next) {
  var username = req.body.busername;
  var pwd = req.body.bpwd;
  var con = mysql.createConnection(dbconfig);
  con.connect();

  con.query("select * from backlogin where busername=?", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      con.query("insert into backlogin(busername,bpwd) values(?,?)", [username, pwd], function (err, result) {
        if (err) {
          console.log(err);
        }
        else {
          res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
          res.write("注册成功");
          res.end();
        }
      })
    }
  })
})

// 判断该用户是否已经注册
router.post("/check", function (req, res, next) {
  var username = req.body.username;
  var con = mysql.createConnection(dbconfig);
  con.connect();

  con.query("select * from chapter where username=?", [username], function (err, result) {
    if (err) {
      console.log(err);
    }
    else {
      if (result[0] == null) {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("用户名符合要求");
        res.end();
      }
      else {
        res.writeHead(200, { "Content-Type": "text/html;charset=utf-8" });
        res.write("该用户已注册");
        res.end();
      }
    }
  })
})

module.exports = router;


