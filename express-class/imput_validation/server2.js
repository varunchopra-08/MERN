const express = require("express");
const app = express();
app.use(express.json());
app.post("/health-checkup" , function (req,res) {
    const kidneys  = req.body.kidneys;
    const kidneyLength = kidneys.length;

    res.send("You have" + kidneyLength + "Kidneys");    
});

//global catches(Error handling middleware) - its just a middleware u put at end after routes if there is an exception
app.use(function(err,req,res,next){
    res.json({
        msg: "Sorry something is wrong"
    })//next for multiple error
    //4 arguments


})
app.listen(3001);
