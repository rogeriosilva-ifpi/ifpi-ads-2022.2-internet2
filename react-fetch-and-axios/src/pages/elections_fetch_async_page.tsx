import { useEffect, useState } from "react"
import { Partido } from "../models/Partido"

export function ElectionsPage(){

    const [name, setName] = useState('Rogério')
    const [partidos, setPartidos] = useState<Partido[]>([])
    const [error, setError] = useState('')

    useEffect(() => {
        
        const getAllPartidos = async () => {
            const URL = 'http://localhost:3000/partidos'
            console.log('API')
            
            try {
                const response = await fetch(URL)
                const data = await response.json()
                setPartidos(data)  
                setError('')
            } catch (error: any) {
                setError('Erro ao carrega os dados')
            }
            
        }

        getAllPartidos()
        
    }, [name])

    return (
        <div className="App">
            <h1>Eleições 2022</h1>

            <h2>Partidos Cadastrados</h2>

            <input type="text" value={name} onChange={(event)=>{setName(event.target.value)}} />

            {error.length > 0 && (<h2>{error}</h2>)}

            <ul>
                {
                partidos.length > 0 
                && partidos.map(partido => (<li key={partido.id}>{partido.nome}</li>))
                }
            </ul>
        </div>
    )
}