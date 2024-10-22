const express = require("express")
const mongoose = require("mongoose");
const app = express();

app.use(express.json());
mongoose.connect("mongodb://localhost:27017/user_appnew");//give mongo db URl


//describe schema 
const User = mongoose.model('Users', { name: String , email: String,
    password: String
 });
app.post("/signup",  async function(req,res){
    const username = req.body.username;
    const name = req.body.name;
    const password = req.body.password;
    
    const existingUser = await User.findOne({
        email:username
    });
    //CRUD =>Create , Update, Delete , Read
    if(existingUser){
        return res.status(400).send("Username already exists");
    }

    const user = new User({
        name : name,
        username:username,
        password:password
    });
    user.save(); //put my data in the database
    res.json({
        "msg" : "User created"
    })


});

