import { MouseEventHandler, useState } from 'react'
import './App.css'
import reactLogo from './assets/react.svg'

interface MyHelloProps{
  name: string
  onclick: MouseEventHandler
}

function MyHello({name, onclick}: MyHelloProps){
  return <h1 onClick={onclick}>Hello {name}</h1>
}

function App() {
  const [count, setCount] = useState(0)
  const [valor, setValor] = useState('')

  const names = ['Pedro', 'Suel', 'Williams']

  const helloMary = <MyHello name='Maria' onclick={()=>{}}/>
  
  return (
    <div className="App">
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" className="logo" alt="Vite logo" />
        </a>
        <a href="https://reactjs.org" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>

      {helloMary}
      {
        names.map(name => <MyHello onclick={()=>alert(name)} name={name}/>)
      }

      <input type="text" placeholder='testando' value={valor} onChange={(event)=>setValor(event.target.value)} />

      <h2>Você digitou: {valor}</h2>

      <button hidden={valor.length === 0} onClick={()=>{alert(valor)}}>Show value</button>

      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </div>
  )
}

export default App
