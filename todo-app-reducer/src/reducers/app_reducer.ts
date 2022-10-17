import { Task } from "../App";

export interface AppState {
    nextId: number
    tasks: Task[]
}

export enum ActionType{'Added','Changed','Deleted'}

type Action = 
    {type: ActionType.Added, args: {text: string}}
    | {type: ActionType.Changed, args: {task: Task}}
    | {type: ActionType.Deleted, args: {id: number}}

  
export const appStateReducer = (state: AppState, action: Action): AppState => {
    switch (action.type) {
        case ActionType.Added:
            const newTask = {id: state.nextId, text: action.args.text, done: false}
            return {nextId: state.nextId++, tasks: [...state.tasks, newTask]}
        case ActionType.Changed:
            const changedTask = action.args.task
            return {...state, 
                        tasks: state.tasks.map(task => task.id === changedTask.id ? changedTask : task)}
        case ActionType.Deleted:
            const deletedTaskId = action.args.id
            return {...state, tasks: state.tasks.filter(task => task.id !== deletedTaskId)}
        default:
            console.debug('Unknow action' + action)
            return state
    }
}
  