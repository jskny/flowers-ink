var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
console.log("send signin.ejs");
	res.render('signin');
});


// サインイン処理
router.post('/', function(req, res) {
console.log("send signin AddUser : " + req.body.uid + "<>" + req.body.upass);
	res.render('signin', { msg: "まだ実装中です。" });
});


module.exports = router;

