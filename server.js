const express = require('express');
const app = express(); 
const port = 3000;

app.listen(port,function (err,data)  {
    if(err){
        console.log(err);
    }else{
        console.log("konek");
    }

});
