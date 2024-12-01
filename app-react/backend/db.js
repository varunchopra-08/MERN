//make schema for our project
const mongoose = require("mongoose");
//.env
mongoose.connect("mongodb+srv://admin:GDUuLTXjLAcCbQg2@cluster0.djyry.mongodb.net/todos")

const TodoSchema =new mongoose.Schema({
    title: String,
    description:String,
    completed: Boolean
})

const todo =mongoose.model('todos' , TodoSchema);

module.exports = {
    todo

}