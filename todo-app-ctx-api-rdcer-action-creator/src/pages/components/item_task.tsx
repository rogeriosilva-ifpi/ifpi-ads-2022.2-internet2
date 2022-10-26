import { ChangeEvent, useCallback, useMemo, useState } from "react"
import { useTasksDispatch } from "../../hooks/tasks_context"
import { Task } from "../../models/models"
import { DeleteTaskAction, UpdateTaskAction } from "../../reducers/task_actions"

interface TaskItemProps{
    task: Task
}

export function TaskItem({task}: TaskItemProps){
    const [taskText, setTaskText] = useState(task.text)
    const [isEditing, setIsEditing] = useState(false)

    const dispatch = useTasksDispatch()

    const handlerChangeTask = useCallback((task: Task) => {
        UpdateTaskAction(dispatch, task)
      }, [])
      
    const handlerDeleteTask = useCallback((id: number) => {
        DeleteTaskAction(dispatch, id)
    }, [])

    const handlerDoneChange = useCallback(() => {
            task.done = !task.done
            handlerChangeTask(task)
        }, [isEditing])

    const handlerTextChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
        setTaskText(event.target.value)
    }, []) 

    const handlerEditSaveClick = useCallback(() => {
        if (isEditing)
            handlerChangeTask({...task, text: taskText})
        
        setIsEditing(!isEditing)
    }, [isEditing, handlerChangeTask, taskText])

    const buttonLabel = useMemo(
        () => isEditing ? "Salvar" : "Editar", 
        [isEditing])

    return (
        <li key={task.id}>
            <input type="checkbox" checked={task.done} onChange={handlerDoneChange}/>
            
            {
                isEditing ? 
                        (
                            <input 
                                value={taskText} 
                                onChange={handlerTextChange} 
                                autoFocus={isEditing}
                                />
                        ) 
                    : 
                        (<span>{task.text}</span>)
            }

            <button onClick={handlerEditSaveClick}>{buttonLabel}</button>
            <button onClick={() => {handlerDeleteTask(task.id)}} >Apagar</button>
        </li>
    )
}