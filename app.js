/*
 * Flowers-ink
 * 2019/1/20
 * jskny
*/

// expressモジュールを読み込む
const express = require('express');

// expressアプリを生成する
const app = express();


// 静的ファイルの場所指定
app.use(express.static('static-files'));


// サーバーの起動
// Heroku 対応のためのポート番号指定については、
// 下記の記事を参考
// https://qiita.com/kenju/items/1d61c9fb45496feed1bf
app.listen(process.env.PORT || 3000);
console.log("SYSTEM HAS RUNNING.");

