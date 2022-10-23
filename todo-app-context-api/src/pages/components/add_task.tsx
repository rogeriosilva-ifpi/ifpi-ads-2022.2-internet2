import { ChangeEvent, FormEvent, useState } from "react"
import { useTasksDispatch } from "../../hooks/tasks_context"
import { ActionType } from "../../reducers/tasks_reducer"

export function AddTask(){

    const [taskText, setTaskText] = useState('')
    const dispatch = useTasksDispatch()

    const handleDescriptionChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    const handlerSubmit = (event: FormEvent) => {
        event.preventDefault()
        dispatch({
            type: ActionType.Added,
            args: {text: taskText}
          })
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