import { ChangeEventHandler } from "react"

interface InputProps{
    name: string
    onChangeCallback: ChangeEventHandler
}

export function Input({name, onChangeCallback}:InputProps){
    return (
        <>
        <input type="text" 
          value={name} 
          onChange={onChangeCallback} 
          placeholder='Digite seu nome aqui..' />
        </>
    )
}