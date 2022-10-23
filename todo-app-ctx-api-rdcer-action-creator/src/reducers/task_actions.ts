import { Dispatch } from "react";
import { Task } from "../models/models";
import { Action, ActionType } from "./tasks_reducer";

export const GetAllTasksAction = (dispach: Dispatch<Action>) => {
    fetch('http://localhost:3000/tasks')
        .then(response => response.json())
        .then(data => dispach({
            type: ActionType.Loaded,
            args: { tasks: data }
        }))
}

export const AddTaskAction = (dispach: Dispatch<Action>, text: string) => {
    const postPayload = {text, done: false}
    const requestInit = {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(postPayload)
    }
    fetch('http://localhost:3000/tasks', requestInit)
        .then(response => response.json())
        .then((task: Task) => {
                dispach({type: ActionType.Added, args: {task}})
            })

}

export const DeleteTaskAction = (dispach: Dispatch<Action>, id: number) => {
    const requestInit = {
        method: 'DELETE',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
    }

    fetch(`http://localhost:3000/tasks/${id}`, requestInit)
        .then(response => {
            if (response.ok){
                dispach({
                    type: ActionType.Deleted,
                    args: {
                        id
                    }
                })
            }
        })
}

export const UpdateTaskAction = (dispach: Dispatch<Action>, task: Task) => {
    const requestInit = {
        method: 'PUT',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(task)
    }
    fetch(`http://localhost:3000/tasks/${task.id}`, requestInit)
        .then(response => response.json())
        .then((task: Task) => {
                dispach({type: ActionType.Changed, args: {task}})
            })

}