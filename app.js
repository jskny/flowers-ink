/*
 * Flowers-ink
 * 2019/1/20
 * jskny
*/

// expressモジュールを読み込む
const express = require('express');
const app = express();

var path = require('path');

const session = require('express-session');
var sessionMiddleware = session({
	secret: '3efvbmju48z',
	resave: false,
	saveUninitialized: false,
	cookie:{
		httpOnly: false,
		secure: true,
		// 1秒 * 60(1分) * 60(1時間) * 24(1日) * 10日保存する。
		maxage: 1000 * 60 * 60 * 24 * 10
	}
});


// view engine setup
var ejs = require('ejs');
// エンジンの設定
app.engine('ejs', ejs.renderFile);

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');


// Contorllerの定義
var index = require('./routes/index');

// Controllerのセット
app.use('/', index);



// 静的ファイルの場所指定
app.use(express.static('static-files'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
	res.send('Error');
});

// error handler
app.use(function(err, req, res, next) {
	res.send('Error 2');
});


// サーバーの起動
// Heroku 対応のためのポート番号指定については、
// 下記の記事を参考
// https://qiita.com/kenju/items/1d61c9fb45496feed1bf
var server = app.listen(process.env.PORT || 3000, function(){
	console.log('Server is running!');
});

