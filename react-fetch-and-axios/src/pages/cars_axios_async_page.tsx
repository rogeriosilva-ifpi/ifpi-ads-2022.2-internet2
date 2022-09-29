import axios, { AxiosRequestConfig } from 'axios'
import { useEffect, useState } from 'react'
import { sleep } from '../utils/sleep'


interface Car{
  id: number
  name: string
  value: number
}

export function CarsAxiosAsyncPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(()=>{

    const fetchCars = async () => {
      const URL = 'http://localhost:3000/cars'
      const config: AxiosRequestConfig = {
        headers: {
          Accept: "application/json"
        }
      }

      setLoading(true)

      // fake delay
      await sleep(2500)

      const response = await axios.get<Car[]>(URL, config)

      setCars(response.data)

      setLoading(false)
    }

    fetchCars()

  }, [])

  return (
    <div className="App">
      <h1>Hello Axios and Fetch API</h1>

      {
        loading ? 
        (
          <h2>Loading...</h2>
        ) :
        (<ul>
          {cars.map(car => <li key={car.id}>{car.name}</li>)}
        </ul>)
      }
      
    </div>
  )
}

