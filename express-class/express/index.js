//creating http server 
//express
//this is not a node default library like fs is 
const express =require('express');
const app = express(); //creating //these 2 lines should always be used 
app.listen (3000); //listenng on this port

function sum(n){
    let ans = 0 ;
    for(let i = 1; i<=n;i++){
        ans+=i;
    }
    return ans;
}
app.get("/", function(req,res){
    const n = req.query.n; // to catch query param
    const ans = sum(n);

    res.send("hi there " + ans); //any request comes here send hi there 
}) // which route you give (1 param) //calllback(2 param)
//ipconfig:port  can open on other device 
//by query parameter you can do stuff route ends on ? and quey param starts  