const { default: mongoose } = require("mongoose");

//defining schema in mongodb using mongoose
const UserSchema = new mongoose.Schema({
    email:String,
    password:String,
    purchasedCourses: [{//aray of references to another table called courses
        type: mongoose.Schema.Types.ObjectId,// object id is randomly generated id by mongo
        ref: 'Course'
    }]
});

const CourseSchema = new mongoose.Schema({
    title:String , 
    price :5999

});


const User = mongoose.model('User',UserSchema);//user table 
const Course = mongoose.model('Course',CourseSchema);//course table

/* 
create - put entry in db in table
User.create({
    username:req.body.username,
    password: req.body.password
});
//a model
//a userschema */

//reading
User.findById("1");
User.findOne({
    username: "harkirat@gmail"
})
User.find({
    usrname : "harkirat"
})


//update 
//add a new entry to push purchased courses
User.updateOne(
    {id:"1"} ,
    {$push: {purchasedCourses: courseId}}
)
User.findByIdAndUpdate({},//change to everyone
    premium: true 
    )


//delete
User.deleteMany({})//delete everything
User.deleteOne({
    username: "harkirat@gmail.com"
})


/* 3argons u want to know in database 
1 Cluster
2 Database 
3 Table
*/
