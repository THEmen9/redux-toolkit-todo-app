import AddTodo from "./components/AddTodo"
import Todos from "./components/Todos"
import { useEffect} from "react"
import { useSelector } from 'react-redux'


function App() {

    const todos = useSelector((state) => state.todo.todos);

    useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);


  return (
    <div className="min-h-screen bg-purple-200 flex items-center justify-center px-4">
      <div id="card" className="bg-purple-300 shadow-md rounded-lg p-6 w-full max-w-md">
        <h1 className="text-center text-2xl font-semibold text-purple-800 mb-4">Redux-Toolkit-Todo</h1>
        <AddTodo/>
        <div className="mt-6">
          <Todos/>
        </div>
      </div>
    </div>
  )
}

export default App
