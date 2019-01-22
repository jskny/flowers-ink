var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
console.log("send mypage.ejs");
	res.render('mypage');
});


module.exports = router;

