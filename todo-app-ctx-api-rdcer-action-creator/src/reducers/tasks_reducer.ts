import { useReducer } from "react";
import { Task } from "../models/models";

export interface TasksState {
    tasks: Task[]
}

export const initialTasksState: TasksState = { 
    tasks: []
}

export enum ActionType{'Added','Changed','Deleted', 'Loaded'}

export type Action = 
    {type: ActionType.Added, args: {task: Task}}
    | {type: ActionType.Changed, args: {task: Task}}
    | {type: ActionType.Deleted, args: {id: number}}
    | {type: ActionType.Loaded, args: {tasks: Task[]}}

  
const tasksReducer = (state: TasksState, action: Action): TasksState => {
    switch (action.type) {
        case ActionType.Added:
            return {tasks: [...state.tasks, action.args.task]}
        case ActionType.Changed:
            const uTask = action.args.task
            const tasks = state.tasks.map(task => task.id === uTask.id ? uTask : task)
            return {...state, tasks}
        case ActionType.Deleted:
            const deletedTaskId = action.args.id
            return {tasks: state.tasks.filter(task => task.id !== deletedTaskId)}
        case ActionType.Loaded:
            return {tasks: action.args.tasks}
        default:
            return state
    }
}

export const useTasksReducer = () => {
    return useReducer(tasksReducer, initialTasksState)
}
  