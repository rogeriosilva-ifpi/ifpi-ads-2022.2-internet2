import { createContext, Dispatch, useContext } from "react";
import { Task } from "../models/models";
import { Action, useTasksReducer } from "../reducers/tasks_reducer";

interface TasksProviderProps{
    children: JSX.Element
}

// Criando context
const TaskContext = createContext<Task[]>([])
const TaskDispatchContext = createContext<Dispatch<Action> | null>(null)

// Usando o context e atualizando seu valor (pois eles nascem com [] e null)
// Encapsulando o Provimento do contexto na árvore
export function TasksProvider({children}: TasksProviderProps){

    const [state, dispatch] = useTasksReducer()

    return (
        <TaskContext.Provider value={state.tasks}>
            <TaskDispatchContext.Provider value={dispatch}>
                {children}
            </TaskDispatchContext.Provider>
        </TaskContext.Provider>
        )

}

// Encapsulando o uso do contexto
export const useTasks = () => useContext(TaskContext)
export const useTasksDispatch = () => useContext(TaskDispatchContext)!