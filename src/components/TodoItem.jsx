import React from 'react'

const TodoItem = ({todo,index}) => {
  return (
    <div className='d-flex flex-col shadow-sm rounded-2 py-3 px-4'>
        <div className=''>
            <span className='fs-4'>{index+1} - </span>
            <span className='fs-4'>{todo.text}</span>
        </div> 
        <div className='px-5'>
        {
        todo.completed ? <button className='btn btn-success fs-5'>Completed</button> : <button className='btn btn-warning fs-5'>Incomplete</button>}
        </div>     
    </div>
  )
}

export default TodoItem
