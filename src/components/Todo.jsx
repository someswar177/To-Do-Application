import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
const Todo = () => {
    const dispatch = useDispatch()
    const [newTodoText, setNewTodoText] = useState("");
    const [searchTerm, SetSearchTerm] = useState("");
    const handleAddToDo = (text) => {
        dispatch(addTodo(text))
    }
    const handleAddToDoClick = () => {
        if (newTodoText.trim() !== "") {
            handleAddToDo(newTodoText.trim());
            setNewTodoText("")
        }
    }
    const handleSearchChange = (value) => {
        SetSearchTerm(value);
        dispatch(updateSearchTerm(value))
    }
    console.log(newTodoText)
    return (
        <div className="border rounded-4">
            <h2 className="">Todo App</h2>
            <div className="flex items-center mb-4">
                <input value={newTodoText} onChange={(e) => { setNewTodoText(e.target.value) }} type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo" />
                <button className="btn btn-primary" onClick={handleAddToDoClick}>Add</button>
            </div>
            
            <FilterButton/>

            <div className="flex items-center mb-4">
                <input value={searchTerm} onChange={(e) => { handleSearchChange(e.target.value) }} type="text" name="addTodoInput" id="addTodoInput" placeholder="Search" />
                <button className="btn btn-primary" onClick={handleAddToDoClick}>Search</button>
            </div>

            <TodoList/>
        </div>
    )
}

export default Todo;