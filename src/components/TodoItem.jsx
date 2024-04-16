import React from 'react'

const TodoItem = ({todo,index}) => {
  return (
    <div className='flex flex-col'>
        <div className='flex items-center'>
            <span>{index+1} - </span>
            <span>{todo.text}</span>
        </div> 
        <div>
            <button>{todo.completed ? "Completed" : "Incomplete"}</button>
        </div>     
    </div>
  )
}

export default TodoItem
