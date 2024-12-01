import { useState } from "react";
export function CreateTodo() {//or use module.export instead of export function
    const[title, setTitle] = useState("");
    const [description, setDescription] = useState("");
    return <div>
        <input style= {{
            padding: 10,
            margin: 10
        }}
        type = "text" placeholder="title" onChange={function(e){
            const value = e.target.value;
            setTitle(e.target.value);
        }}></input>
        <input  style= {{
            padding : 10,
            margin : 10
        }}
        type = "text" placeholder="description" 
        onChange={function(e){
            const value = e.target.value;
            setDescription(e.target.value);
        }}></input>
        <button style= {{
            padding : 10,
            margin : 10
        }}
        onClick={()=>{
            fetch("http://localhost:3000/todo" , {
                method : "POST",
                body: JSON.stringify( {
                    title: title, 
                    description: description
                }), 
                headers:{
                    "Content-type": "application/json"
                }
        //unoptimal way of fetching title and description is using state variables for both title and description
        //but it will cause many rerenders which we want to avoid 
        //
            
        })
            .then(async function (res) {
                const json = await res.json();
                alert("Todo added");
            })
        }
        }
        >Add a Todo</button>
    </div>
    
}