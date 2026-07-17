import { useSelector } from 'react-redux'
import TodoItem from "../components/TodoItem";

export default function Todos() {

const todos = useSelector((state) => state.todo.todos);
    
  
  return (
    <>
    <h2 className='text-lg font-semibold mb-3'>Todos : -</h2>
    <ul className='space-y-2'>
    {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} />
    ))}
    </ul>
    </>
  )
}
