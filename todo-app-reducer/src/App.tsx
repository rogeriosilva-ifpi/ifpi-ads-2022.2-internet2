import { useCallback, useEffect, useState } from 'react';
import './App.css';
import { AddTask } from './components/add_task';
import { TaskList } from './components/list_task';

export default function App() {
  const [tasks, setTasks] = useState<Task[]>([]);

  useEffect(()=>{
    setTasks(initialTasks)
  },[])

  function handlerAddTask(text: string) {
    setTasks([
      ...tasks,
      {
        id: nextId++,
        text: text,
        done: false,
      },
    ]);
  }

  function handlerChangeTask(task: Task) {
    setTasks(
      tasks.map((t) => {
        if (t.id === task.id) {
          return task;
        } else {
          return t;
        }
      })
    );
  }

  const handlerDeleteTask = useCallback((taskId: number) => {
    setTasks(tasks.filter((t) => t.id !== taskId));
  }, [])

  return (
    <div className="App">
      <h1>React + Reducer</h1>
      <h3>Tarefas</h3>
      
      <AddTask onAddTask={handlerAddTask} />
      
      <TaskList
        tasks={tasks}
        onChangeTask={handlerChangeTask}
        onDeleteTask={handlerDeleteTask}
      />
      
    </div>
  )
}

export interface Task{
  id: number
  text: string
  done: boolean
}

let nextId = 3;

const initialTasks: Task[] = [
  {id: 0, text: 'Elaborar Aulas', done: true},
  {id: 1, text: 'Estudar Flutter - Estados', done: false},
  {id: 2, text: 'Correr avenida Raul Lopres', done: false},
];
