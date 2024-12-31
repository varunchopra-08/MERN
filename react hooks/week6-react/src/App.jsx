import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [title,setTitle]= useState("My name is Varun1");
  
  function changeTitle(){
    setTitle(`My name is ${Math.random()}`);

  }
  

  return (
    <div>
      <button onClick={changeTitle}>Click me to change the title</button>
      <Header title = {title}></Header>     
      <Header title = "Varun2"></Header>     
      <Header title = "Varun2"></Header>     
      <Header title = "Varun2"></Header>     
      <Header title = "Varun2"></Header>     
      <Header title = "Varun2"></Header>     
      <Header title = "Varun2"></Header>     
      <Header title = "Varun2"></Header>     
    </div>
        
    
  )
}
const Header = React.memo(function Header({title}){
  return <div>
    {title}
  </div>
});


export default App
