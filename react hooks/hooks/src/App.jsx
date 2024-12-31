// import { useState } from 'react'
 import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
 import './App.css'
// import { useEffect } from 'react'

import { useState, useMemo } from 'react'

// function App() {
//   const [todos, settodos] = useState(0)
//   useEffect(()=>{
//     axios.get("https://sum-server.100xdevs.com/todos")
//       .then(function(response){
//         settodos(response.data.todos)
//       })

//   }, []);

//   return (
//     <>
//     {
//       todos.map(todo => <Todo title={todo.title} description={todo.description} />)
//     }

//     </>
//   )
// }
// function Todo({title,description}) {
//   return <>
//     <h1>{title}</h1>
//     {description}
//   </>
// }

/* ******-------------************* */

// function App(){
//   const [counter , setCounter] = useState(0);
//   const [inputValue , setInputValue] = useState(1);
//   let count = 0;

//   useMemo(()=>{// if therev is an expensive operation 
//     for(let i = 1 ; i<=inputValue;i++){
//       count+=i;
//     }

//   },[inputValue])
  
//   return <>
//   <input onChange={(e)=>{setInputValue(e.target.value)}}></input>
//   <br />
//   sum is: {count}
//   <br />
//   <button onClick={()=>{setCounter(counter+1)}}>Counter({counter})</button>
    
//   </>
// }
// export default App
//use effect can also be used by making a state variable finalvalue and using operation in useeffect

/* ******-------------************* */

import { memo, useState } from "react";

function App() {
  const [count, setCount] = useState(0)

  function onClick() {
    console.log("child clicked")
  }

  return <div>
    <Child onClick={onClick} />
    <button onClick={() => {
      setCount(count + 1);
    }}>Click me {count}</button>
  </div>
}

const Child = memo(({onClick}) => {
  console.log("child render")

  return <div>
    <button onClick={onClick}>Button clicked</button>
  </div>
})

export default App;