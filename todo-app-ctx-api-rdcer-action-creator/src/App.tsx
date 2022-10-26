import './App.css';
import { TasksProvider } from './hooks/tasks_context';
import TasksPage from './pages/Tasks';

export default function App() {

  return (
      <TasksProvider>
        <TasksPage />
      </TasksProvider>
  )
}