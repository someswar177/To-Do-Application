import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';
import '../css/TodoList.css'

const TodoList = () => {
    const filteredTodos = useSelector((state) => {
        const todos = state.todos;
        const filter = state.filter;
        const searchTerm = state.searchTerm;
        
        return todos.filter((todo)=>{
            const matchsFilter = (filter === "COMPLETED" && todo.completed) || (filter === "INCOMPLETE" && !todo.completed) ||(filter === "ALL");
            const matchSearch = todo.text.toLowerCase().includes(searchTerm);

            return matchsFilter && matchSearch
        })
    })

    // console.log("Filtered Todos :",filteredTodos)
  return (
    <div className="todo-list-container">
            <h4 className="todo-list-title">All Your Notes Here</h4>
            {filteredTodos.map((todo, index) => (
                <TodoItem key={index} todo={todo} index={index} />
            ))}
    </div>
  )
}

export default TodoList
