//write a basic express boilerplate code 
//with express.json() middleware
const express = require('express');
const cors = require('cors');
const { createtodo, updatetodo } = require('./types');
const {todo} = require('./db');
const app = express();
app.use(cors());
app.use(express.json());


// expected body{
//     title: string,
//     description: string
    
// }

app.post('/todo', async (req,res) =>{
    const createPayLoad = req.body;
    const parsePayLoad =  createtodo.safeParse(createPayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    //put it in mongoDb
    await todo.create({
        title: createPayLoad.title,
        description: createPayLoad.description,
        completed: false

    })
    res.json({
        msg: "todo created"
    })


})
app.get('/todos',async (req,res) =>{
    const todos = await todo.find({});
    res.json({
        todos
    });


})
app.put('/completed', async (req,res) =>{
    const updatePayLoad = req.body;
    const parsePayLoad =  updatetodo.safeParse(updatePayLoad);
    if(!parsePayLoad.success){
        res.status(411).json({
            msg: "You sent wrong inputs"
        })
        return;
    }
    await todo.updateOne({
        _id: req.body.id
    },{
        completed: true
    });
    res.json({
    msg: "todo marked as completed"
    })

})
app.listen(3000);
