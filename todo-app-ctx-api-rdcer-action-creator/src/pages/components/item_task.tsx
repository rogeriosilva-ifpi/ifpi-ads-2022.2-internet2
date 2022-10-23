import { ChangeEvent, useCallback, useMemo, useState } from "react"
import { Task } from "../../models/models"

interface TaskItemProps{
    task: Task
    onChangeTask: (task: Task) => void
    onDeleteTask: (taskId: number) => void
}

export function TaskItem({task, onChangeTask, onDeleteTask}: TaskItemProps){
    const [taskText, setTaskText] = useState(task.text)
    const [isEditing, setIsEditing] = useState(false)

    const handlerDoneChange = useCallback(() => {
            task.done = !task.done
            onChangeTask(task)
        }, [isEditing]
    )

    // Implantar useCallBack
    const handleTextChange = (event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }

    // Implantar useCallBack
    const handleEditSaveClick = () => {
        if (isEditing){
            onChangeTask({...task, text: taskText})
            setIsEditing(false)
        }else{
            setIsEditing(true)
        }
    }

    // useMemo --> Faz Memória valores entre renderizações/sincronizações
    const buttonLabel = useMemo(() => {
            if (isEditing){
                return "Salvar"}
            else{
                return "Editar"
            }
        }, 
    [isEditing])

    return (
        <li key={task.id}>
            <input type="checkbox" checked={task.done} onChange={handlerDoneChange}/>
            
            {
                isEditing ? 
                        (
                            <input 
                                value={taskText} 
                                onChange={handleTextChange} 
                                autoFocus={isEditing}
                                />
                        ) 
                    : 
                        (<span>{task.text}</span>)
            }

            <button onClick={handleEditSaveClick}>{buttonLabel}</button>
            <button onClick={() => {onDeleteTask(task.id)}} >Apagar</button>
        </li>
    )
}