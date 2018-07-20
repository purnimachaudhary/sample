const express = require('express');

const app = express();

app.get('/',(req,res)=>{
    res.send('first github repo');
});

app.listen(process.env.PORT || 3030,()=>{
    console.log('app listening on port 3030');
});






//heroku login
//
//hroku create
//git push heroku master
//heroku open

//heroku logs
