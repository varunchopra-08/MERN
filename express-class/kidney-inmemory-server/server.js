const express = require('express');
const app = express();
var users = [{
    name: 'John',
    kidneys: [{
        healthy:false
    }, {
        healthy :true
    }]
}]

app.get("/", function(req,res){ // give input in query param
    const johnK = users[0].kidneys;
    const number  =johnK.length;
    const healthyK = johnK.filter((kidney)=> kidney.healthy === true).length;
    const unhealthyK = johnK.length - healthyK;
    res.json({
        "number of kidneys": number,
        "number of healthy kidneys" :healthyK,
        "number of unhealthy kidneys" :unhealthyK
    })
})
app.listen(3001);
app.use(express.json());
//middleware able to parse and get json body on server
app.post("/", function(req,res){  // give input in body //pushes something new
    const isHealthy = req.body.isHealthy;
    users[0].kidneys.push({
        healthy : isHealthy
    })
    res.json({
        msg: "Done"
    })
})
app.put("/",function(req,res){ //update 
    for (let i = 0; i < users[0].kidneys.length; i++) {
        users[0].kidneys[i].healthy =true;
        
    }
    res.json({});
})