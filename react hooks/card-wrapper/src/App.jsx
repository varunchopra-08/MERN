import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

// function App(){
//   return <div>
//     <CardWrapper innerComponent= {<TextComponent />}></CardWrapper> 
//     {/* contents inside can change wrpper is same */}
//   </div>

// }
// function TextComponent(){
//   return <div>Hi there</div>
// }
  

// function CardWrapper({innerComponent}){
//   return <div style={{border: "2px solid black"}}>
//     {innerComponent}
    

//   </div>

// }
function App(){
  useEffect(function(){//when someone is mounted or rendered first time 
      alert("hi")
  }, [])
  return <div>
    <CardWrapper>
      hi there
    </CardWrapper>
  </div>
}
function CardWrapper({children}){//children is the content in the cardwrapper component
  return <div style={{border: "2px solid black" , padding:20}}>
    {children}
  </div>


}

export default App
