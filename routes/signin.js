var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
console.log("send signin.ejs");
	res.render('signin');
});


module.exports = router;

