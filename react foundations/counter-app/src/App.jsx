import { useState } from 'react'//hook
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



function App() {
  const [count , setCount] = useState(0);
  

  return (
    <div>
      <CustomButton count ={count} setCount = {setCount}></CustomButton>//you can now reuse this
      
    </div>
        
  )
}

//component
function CustomButton(props){
  function onClickHandler(){
    props.setCount(props.count+1);
  }
  return <button onClick={onClickHandler}>Counter {props.count}</button>
}
export default App
