const http = require("http");
const PORT = 8000;
const html = require("fs").readFileSync("./index.html");

// サーバー作成
const server = http.createServer((req,res) => {
    // ブラウザからアクセスが来た時の処理
    res.writeHead(200,{"Content-type":"text/html"});
    res.write(html);
    res.end();

});

server.listen(PORT,() =>{
    console.log("server running!");
});
console.log('Hello Wolrd!');

// const express = require('express');
// const app = express();

// app.length('/',(req,res) => {
//     res.send('Hello,World!');
// });

// app.listen(3001,() => {
//     console.log('サーバーがポート3000で起動しました。')
// });