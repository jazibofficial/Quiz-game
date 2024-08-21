import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Startgame from './Compnents/Startgame'
import Quizgame from './Compnents/Quizgame'

function App() {
  const [count, setCount] = useState(0)
   const[linko,setLink]=useState(false)

   const toggle=(e)=>{
setLink(!e)
   }


  return (
   <>
{linko ? <Quizgame/>: <Startgame  toggle={toggle} />}


   
  
   
    </>)
}

export default App
