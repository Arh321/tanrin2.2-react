import Input from './component/input'
import { useState } from 'react'
import './App.css'

function App() {
  const [numb,setNumb] = useState(0)
  const [text,setText] = useState('')
  const change = (e) =>{
    
      setNumb(e.length)
  }

  return (
    <div>
      <Input change={change}/>
      Your {numb} times entered
    </div>
  )
}

export default App
