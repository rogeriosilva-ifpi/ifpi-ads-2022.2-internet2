import { UseFormRegister } from 'react-hook-form'
import { FormInputs } from "../../App"

interface InputProps{
    name: "name" | "weight" | "height"
    autoComplete?: string
    type?: string
    register: UseFormRegister<FormInputs>
}

export function Input({autoComplete = 'off', type = 'text', name, register}: InputProps){
    return (
        <input 
            autoComplete={autoComplete}
            type={type} 
            step="0.01"
            {...register(name)}
            />
    )
}