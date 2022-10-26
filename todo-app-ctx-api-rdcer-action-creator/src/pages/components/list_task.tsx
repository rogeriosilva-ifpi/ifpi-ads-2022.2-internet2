import { useEffect } from "react"
import { useTasks, useTasksDispatch } from "../../hooks/tasks_context"
import { GetAllTasksAction } from "../../reducers/task_actions"
import { TaskItem } from "./item_task"


export function TaskList(){

    const tasks = useTasks()
    const dispatch = useTasksDispatch()

    useEffect(()=>{
      GetAllTasksAction(dispatch)
    }, [])

    return (
        <>
            <ul>
                {tasks.map(task => (
                   <TaskItem key={task.id} 
                        task={task} />
                ))}
            </ul>
        </>
    )
}

