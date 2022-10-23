import { useReducer } from "react";
import { Task } from "../models/models";

export interface TasksState {
    // nextId: number
    tasks: Task[]
}

export const initialTasksState: TasksState = { 
    // nextId: 0,
    tasks: [
        // {id: 0, text: 'Elaborar Aulas', done: true},
        // {id: 1, text: 'Estudar Flutter', done: false},
        // {id: 2, text: 'Correr 4km', done: false},
    ]
}

export enum ActionType{'Added','Changed','Deleted', 'Loaded'}

export type Action = 
    // {type: ActionType.Added, args: {text: string}}
    {type: ActionType.Added, args: {task: Task}}
    | {type: ActionType.Changed, args: {task: Task}}
    | {type: ActionType.Deleted, args: {id: number}}
    | {type: ActionType.Loaded, args: {tasks: Task[]}}

  
const tasksReducer = (state: TasksState, action: Action): TasksState => {
    switch (action.type) {
        case ActionType.Added:
            // const newTask = {id: state.nextId, text: action.args.text, done: false}
            // return {nextId: state.nextId++, tasks: [...state.tasks, newTask]}
            console.log('New Task')
            console.log(action.args.task)
            return {tasks: [...state.tasks, action.args.task]}
        case ActionType.Changed:
            const uTask = action.args.task
            const tasks = state.tasks.map(task => task.id === uTask.id ? uTask : task)
            return {...state, tasks}
        case ActionType.Deleted:
            const deletedTaskId = action.args.id
            // const nextId = state.nextId--
            // return {nextId, tasks: state.tasks.filter(task => task.id !== deletedTaskId)}
            return {tasks: state.tasks.filter(task => task.id !== deletedTaskId)}
        case ActionType.Loaded:
            // return {nextId: 0, tasks: action.args.tasks}
            return {tasks: action.args.tasks}
        default:
            console.debug('Unknow task action' + action)
            return state
    }
}

export const useTasksReducer = () => {
    return useReducer(tasksReducer, initialTasksState)
}
  