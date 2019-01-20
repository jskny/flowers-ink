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
app.listen(process.env.PORT || 3000);
console.log("PORT : 3000");

