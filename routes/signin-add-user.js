var express = require('express');
var router = express.Router();

router.post('/', function(req, res) {
console.log("send signinAddUser : " + req.body.uid + "<>" + req.body.upass);
	res.render('signin');
});


module.exports = router;

