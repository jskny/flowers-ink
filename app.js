/*
 * Flowers-ink
 * 2019/1/20
 * jskny
*/

// expressモジュールを読み込む
var express = require('express');
// expressアプリを生成する
var app = express();


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
app.listen(process.env.PORT || 3000);
console.log("SYSTEM HAS RUNNING.");

