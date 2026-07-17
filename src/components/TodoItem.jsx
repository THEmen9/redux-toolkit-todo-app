import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../features/todo/todoSlice";

export default function TodoItem({todo}) {

  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState(todo.text);

  const dispatch = useDispatch();

  const handleEdit = () => {

    console.log("Button clicked");

      if (!isEditing) {
          setIsEditing(true);
      } else {
          dispatch(
            updateTodo({
                id: todo.id,
                text: text,
            })
        );
      }
  };

  return (
      <li className='flex items-center justify-between p-2 border rounded'>

            {isEditing ? (
                <input 
                value={text}
                onChange={(e) => setText(e.target.value)}
                className="border bg-purple-400 border-gray-300 rounded px-3 py-2 w-64
                focus:outline-none focus:ring-2 focus:ring-purple-400 hover:bg-gray-200"
                />
            ) : (
                <span>{todo.text}</span>
            )}

            <div className="flex gap-2">
            <button 
            className="inline-flex w-8 h-8 rounded-lg text-sm border 
            border-black/8 justify-center items-center 
            bg-purple-300 hover:bg-gray-100 shrink-0"
            onClick={() => dispatch(removeTodo(todo.id))}>
              ❌
            </button>

            <button
            className="inline-flex w-8 h-8 rounded-lg text-sm border 
            border-black/8 justify-center items-center 
            bg-purple-300 hover:bg-gray-100 shrink-0"
            onClick={handleEdit}>
              {isEditing ? "📁" : "✏️" }
            </button>
            </div>
        </li> 
  )
}

 