import React, { useState } from 'react'
import {useDispatch} from 'react-redux'
import { addTodo } from '../features/todo/todoSlice';

export default function AddTodo() {
    const [input, setInput] = useState('')
    const dispatch = useDispatch();

    const addTodohandler  = (e) => {
        e.preventDefault()
        dispatch(addTodo(input))
        setInput('')
    }

  return (
    <form onSubmit={addTodohandler} className='flex items-center space-x-3 mt-6'>
        <input
        className='border bg-purple-400 border-gray-300 rounded px-3 py-2 w-64
        focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-gray-200'
        type='text'
        placeholder='Enter Todo..'
        value={input}
        onChange={(e) => setInput(e.target.value)}>
        </input>
        <button
        type='submit'
        className='bg-purple-500 text-black px-3 py-2 rounded hover:bg-gray-200'
        >
          Add
        </button>
    </form>
  )
}

 