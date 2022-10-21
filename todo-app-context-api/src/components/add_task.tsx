import { ChangeEvent, FormEvent, useState } from "react"

interface AddTaskProps{
    onAddTask: (text: string) => void
}

export function AddTask({onAddTask}: AddTaskProps){

    const [taskText, setTaskText] = useState('')

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    const handlerSubmit = (event: FormEvent) => {
        event.preventDefault()
        onAddTask(taskText)
        setTaskText('')
    }

    return (
        <>
            <form onSubmit={handlerSubmit}>
                <input 
                    type="text" 
                    value={taskText} 
                    onChange={handleDescriptionChange}  
                    placeholder="Descrição" />
                <input type="submit" value="Adicionar Tarefa" />
            </form>
        </>
    )
}