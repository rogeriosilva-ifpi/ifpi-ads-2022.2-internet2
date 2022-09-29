import { useEffect, useState } from 'react'


interface Car{
  id: number
  name: string
  value: number
}

export function CarsFetchPage() {
  const [cars, setCars] = useState<Car[]>([])

  useEffect(()=>{
    const URL = 'http://localhost:3000/cars'
    const options: RequestInit = {
      method: 'GET',
    }

    fetch(URL, options)
    .then((response) => response.json())
    .then((data) => setCars(data))

  }, [])

  return (
    <div className="App">
      <h1>Hello Axios and Fetch API</h1>

      <ul>
      {cars.map(car => (<li key={car.id}>{car.name}</li>))}
      </ul>
      
    </div>
  )
}

