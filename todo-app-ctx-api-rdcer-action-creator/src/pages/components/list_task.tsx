import { useCallback, useEffect } from "react"
import { useTasks, useTasksDispatch } from "../../hooks/tasks_context"
import { Task } from "../../models/models"
import { DeleteTaskAction, GetAllTasksAction, UpdateTaskAction } from "../../reducers/task_actions"
import { TaskItem } from "./item_task"


export function TaskList(){

    const tasks = useTasks()
    const dispatch = useTasksDispatch()

    useEffect(()=>{
      GetAllTasksAction(dispatch)
    }, [])

    const handlerChangeTask = useCallback((task: Task) => {
      UpdateTaskAction(dispatch, task)
    }, [])
    
    const handlerDeleteTask = useCallback((id: number) => {
      DeleteTaskAction(dispatch, id)
    }, [])

    return (
        <>
            <ul>
                {tasks.map(task => (
                   <TaskItem key={task.id} 
                        task={task} 
                        onChangeTask={handlerChangeTask} 
                        onDeleteTask={handlerDeleteTask} />
                ))}
            </ul>
        </>
    )
}

