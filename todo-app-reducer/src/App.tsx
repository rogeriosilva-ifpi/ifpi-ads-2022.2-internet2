import { useCallback, useReducer } from 'react';
import './App.css';
import { AddTask } from './components/add_task';
import { TaskList } from './components/list_task';
import { ActionType, AppState, appStateReducer } from './reducers/app_reducer';

export default function App() {
  const [state, dispatch] = useReducer(appStateReducer, initialState)

  function handleAddTask(text: string) {
    dispatch({
      type: ActionType.Added,
      args: {text}
    })
  }

  function handleChangeTask(task: Task) {
    dispatch({
      type: ActionType.Changed,
      args: {task}
    })
  }

  const handleDeleteTask = useCallback((id: number) => {
    dispatch({
      type: ActionType.Deleted,
      args: {id}
    })
  }, [])

  return (
    <div className="App">
      <h1>React + Reducer</h1>
      <h3>Tarefas</h3>
      
      <AddTask onAddTask={handleAddTask} />
      
      <TaskList
        tasks={state.tasks}
        onChangeTask={handleChangeTask}
        onDeleteTask={handleDeleteTask}
      />
      
    </div>
  )
}

export interface Task{
  id: number
  text: string
  done: boolean
}

const initialState: AppState = { 
  nextId: 4,
  tasks: [
      {id: 0, text: 'Elaborar Aulas', done: true},
      {id: 1, text: 'Estudar Flutter - Estados', done: false},
      {id: 2, text: 'Correr 4km Av. Raul Lopes', done: false},
  ]
};