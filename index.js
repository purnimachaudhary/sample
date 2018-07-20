const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('first github repo');
});

app.listen(3030,()=>{
    console.log('app listening on port 3030');
});