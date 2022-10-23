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