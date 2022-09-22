import { MouseEventHandler } from "react"

interface CondensedButtonProps{
    onClickCallback: MouseEventHandler
    label?: string
}


export const CondensedButton = ({label = 'Clique aqui!', onClickCallback}:CondensedButtonProps) => {
    return <button onClick={onClickCallback}>{label}</button>
}