import { useEffect, useState } from 'react'
import { sleep } from '../utils/sleep'


interface Car{
  id: number
  name: string
  value: number
}

export function CarsFetchAsyncPage() {
  const [cars, setCars] = useState<Car[]>([])
  const [loading, setLoading] = useState<boolean>(false)

  useEffect(()=>{

    const fetchCars = async () => {
      const URL = 'http://localhost:3000/cars'
      const options: RequestInit = {
        method: 'GET',
      }

      setLoading(true)

      // fake delay
      await sleep(2500)

      const response = await fetch(URL, options)
      const data = await response.json()

      setCars(data)

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

