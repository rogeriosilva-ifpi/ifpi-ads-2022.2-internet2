import { useState } from 'react'
import './App.css'
import { Header } from './components/Header'
import { Hello } from './components/Hello'
import { Input } from './components/Input'

function App() {

  const [name, setName] = useState('Maria')

  const onChangeFunction = (event: any) => {
    setName(event.target.value);
  }

  return (
    <div className="App">
      <Header />
      <div className="card">

        <Input name={name} onChangeCallback={onChangeFunction} />

        <Hello name={name} answer={42}/>
        
        <Hello name={name.toUpperCase()} answer={74} />

      </div>
     
    </div>
  )
}

export default App
