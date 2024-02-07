// eslint-disable-next-line
import React from 'react'
// eslint-disable-next-line
const Todo = ({ todo, removeTodo, completeTodo }) => {
  return (
    <div className='todo' 
    // eslint-disable-next-line
    style={ {textDecoration: todo.isCompleted ? "line-through" : ""}}
    >
    <div className='content'>
     {/* eslint-disable-next-line */}
      <p>{todo.text}</p>
      {/* eslint-disable-next-line */}
      <p className="category"> ({todo.category}) </p>
    </div>
    <div>
      {/* eslint-disable-next-line */}
      <button className='complete' onClick={() => completeTodo(todo.id)}
        >Completar
      </button>
      {/* eslint-disable-next-line */}
      <button className='remove' onClick={() => removeTodo(todo.id)}>
        X
      </button>
    </div>
  </div>
  )
}

export default Todo