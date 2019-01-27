var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
console.log("send login.ejs");
	res.render('login');
});


// ログイン処理
router.post('/', function(req, res) {
console.log("login checker");
console.log(req.body.uid + "<>" + req.body.upass);
	if (req.body.uid == "test" && req.body.upass == "test123") {
		res.render('mypage');
	}
	else {
		res.render('login', { msg: "user id or pass isn't correct." });
	}
});


module.exports = router;

