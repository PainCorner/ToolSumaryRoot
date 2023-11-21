const express = require('express');
const app = express();

app.length('/',(req,res) => {
    res.send('Hello,World!');
});

app.listen(3001,() => {
    console.log('サーバーがポート3000で起動しました。')
});