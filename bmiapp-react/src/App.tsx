import { useState } from 'react'
import './App.css'
import { Card } from './components/Card'
import { CondensedButton } from './components/CondensedButton'
import { Header } from './components/Header'
import { Hello } from './components/Hello'
import { Input } from './components/Input'

function App() {

  const [name, setName] = useState('Maria')

  const onChangeFunction = (event: any) => {
    setName(event.target.value);
  }

  const onClickHandler = () => {
    alert('HI Suel!')
  }

  return (
    <div className="App">
      <Header />
      
      <Card>

        <Input name={name} onChangeCallback={onChangeFunction} />

        <Hello name={name} answer={42}/>
        
        <Hello name={name.toUpperCase()} answer={74} />

        <CondensedButton onClickCallback={onClickHandler} />
        <CondensedButton label='Click Here!' onClickCallback={onClickHandler} />

      </Card>
     
    </div>
  )
}

export default App
