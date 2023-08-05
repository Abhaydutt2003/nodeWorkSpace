const express = require('express');
const port = 8000;

const app = express();


app.get('/',(request,response)=>{
    console.log(request);
    response.send("<h1>The server is running, or is it?<h1>");
});

app.listen(port, function(error){
    if(error){
        console.log(error);
        return;
    }
    console.log("The server is running on port :",port);
});