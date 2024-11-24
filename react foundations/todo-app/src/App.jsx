import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [todos, setTodos] = useState([{
    title: "Go to gym" ,
    description: "Go to gym frmo 7 to 9",
    completed: false
  }, 
  {
    title: "Study DSA",
    description: "Study dsa from 9 tp 10",
    completed:true 
  },
    ]);
  function addTodo(){
      setTodos([...todos, {
        title: "random",
        description: "random description"
      }

      ])
    }


    return(
      <div>
        <button onClick={addTodo}>Add a random todo</button>
        {todos.map(function(todo) {
          return <Todo title = {todo.title}  description = {todo.description}></Todo>
        })}

        
      </div>
    )

}
function Todo(props){
  return <div>
    <h1>{props.title}</h1>
    <h2>{props.description}</h2>
  </div>
}


export default App