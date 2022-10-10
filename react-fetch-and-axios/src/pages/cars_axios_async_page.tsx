import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { FormEvent, useEffect, useState } from 'react'
import { sleep } from '../utils/sleep'


interface Car{
  id?: number
  name: string
  value: number
}

export function CarsAxiosAsyncPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState<boolean>(false)
  const [name, setName] = useState('')
  const [value, setValue] = useState('')

  const URL = 'http://localhost:3000/cars'
  const config: AxiosRequestConfig = {
    headers: {
      Accept: "application/json"
    }
  }

  useEffect(()=>{

    const fetchCars = async () => {

      setLoading(true)

      // fake delay
      await sleep(300)

      const response = await axios.get<Car[]>(URL, config)

      setCars(response.data)

      setLoading(false)
    }

    fetchCars()

  }, [])

  const handleSubmit = async (event: FormEvent) => {
    
    event.preventDefault()
    console.log(`Submeteu... Name: ${name}, Valor: R$ ${value}`)

    const response = await axios.post<any, AxiosResponse<Car, any>, Car>(URL, {name, value: Number(value)})

    if (response.status != 201){
      alert('Erro ao cadastrar.')
    }

    if (response.status == 201){
      const car = response.data
      cars.push(car)
      setCars([...cars, car])
      alert('Carro cadastrado!')
    }

  }

  return (
    <div className="App">
      <h1>Hello Axios and Fetch API</h1>

      <form id='form-car' onSubmit={handleSubmit}>
        <input 
          type="text" 
          value={name} 
          name="name" 
          id="name" 
          placeholder='Nome do carro..' 
          onChange={(e)=>{setName(e.target.value)}}
          />
        <input 
          type="number" 
          value={value} 
          name="value" 
          id="value" 
          placeholder='Valor do carro..'
          onChange={(e)=>{setValue(e.target.value)}} 
          />
        <button>Adicionar</button>
      </form>
      
      {
        loading ? 
        (
          <h2>Loading...</h2>
        ) :
        (<ul>
          {cars.map(car => <li key={car.id}>#{car.id}-{car.name} - R$ {car.value}</li>)}
        </ul>)
      }
      
    </div>
  )
}

