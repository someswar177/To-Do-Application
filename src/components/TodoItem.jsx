import React from 'react'
import { useDispatch } from 'react-redux'
import { markCompleted, markIncomplete, removeTodo } from '../redux/actions';
import { MdDelete } from "react-icons/md";
import '../css/TodoItem.css';

const TodoItem = ({ todo, index }) => {
  const dispatch = useDispatch();
  const todoCompleted = (id) => {
    dispatch(markCompleted(id))
  }
  const todoIncomplete = (id) => {
    dispatch(markIncomplete(id))
  }
  const deleteTodo = (id)=>{
    dispatch(removeTodo(id))
  }
  return (
    <div className='todo-item-container'>
    <div className='todo-item-content'>
      <span className='todo-item-index'>{index + 1} - </span>
      <span className='todo-item-text'>{todo.text}</span>
    </div>
    <div className='todo-item-buttons'>
      {todo.completed ? (
        <button onClick={() => { todoIncomplete(index) }} className='todo-item-button todo-item-button--completed'>Completed</button>
      ) : (
        <button onClick={() => { todoCompleted(index) }} className='todo-item-button todo-item-button--incomplete'>Incomplete</button>
      )}
      <MdDelete onClick={() => { deleteTodo(index) }} className='todo-item-delete-icon' />
    </div>
  </div>
  )
}

export default TodoItem
