import './App.css';
import { TasksProvider } from './hooks/tasks_context';
import Tasks from './pages/Tasks';

export default function App() {

  return (
      <TasksProvider>
        <Tasks />
      </TasksProvider>
  )
}