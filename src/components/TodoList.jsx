import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem';

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

    console.log("Filtered Todos :",filteredTodos)
  return (
    <ul>
        <div>All Your Notes Here</div>
        {
            filteredTodos.map((todo, index) => {
                return <TodoItem key={index} todo={todo} index={index}/>;
                // return <li key={index}>{todo.text}</li>;
            })
            
        }      
    </ul>
  )
}

export default TodoList
