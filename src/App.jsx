
import './App.css'
import { TodoProvider } from './Components/To-do_con/ToDoContext'
import ToDoList from './Components/ToDoList'

function App() {
  return (
    <>
      <TodoProvider>
        <ToDoList />
      </TodoProvider>
    </>
  )
}

export default App