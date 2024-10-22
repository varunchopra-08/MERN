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
app.use(express.json());//takes middleware as an input  //if middleware has to be called in every route after it we do this
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
app.delete("/",function(req,res){ //remove
    
    const newKidneys =[];
    if (isthereKidney()) {
        for (let i = 0; i < users[0].kidneys.length; i++) {
        if(users[0].kidneys[i].healthy){
            newKidneys.push({
                healthy :true
            })

        }
        
    }
    users[0].kidneys = newKidneys;
    res.json({msg : "done"});
        
    }else{
        res.status(411).json({
            msg:"You have no bad kidneys"
        });
    }
    
    
})
function isthereKidney() {
    let atLeastOneUnhealthy = false;
    for (let i = 0; i < users[0].kidneys.length; i++) {
        if(!users[0].kidneys[i].healthy){
            atLeastOneUnhealthy = true;

        }
        
    }
    return atLeastOneUnhealthy;

}