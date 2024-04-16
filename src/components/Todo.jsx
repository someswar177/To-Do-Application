import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateSearchTerm } from "../redux/actions";
import FilterButton from "./FilterButton";
import TodoList from "./TodoList";
import '../css/Todo.css';
import { FaSearch } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

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
    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            if (e.target.name === 'addTodoInput') {
                handleAddToDoClick();
            } else if (e.target.name === 'searchTodoInput') {
                handleSearchChange();
            }
        }
    };
    return (
        <div className="todo-container">
            <h2 className="todo-heading">Todo App</h2>

            <div className="todo-controls">
                <div className="filter-button">
                    <FilterButton />
                </div>

                <div className="search-input">
                    <input
                        className="search-input__input"
                        onKeyDown={handleKeyDown}
                        value={searchTerm}
                        onChange={(e) => { handleSearchChange(e.target.value) }}
                        type="text"
                        name="searchTodoInput"
                        placeholder="Search"
                    />
                    <button
                        className="search-input__button"
                        onClick={handleAddToDoClick}
                    >
                        <div className="search-input__button-text">Search</div>
                    </button>
                    <FaSearch className="search-input__icon" onClick={handleAddToDoClick}/>
                </div>
            </div>

            <TodoList />

            <div className="add-todo">
                <input
                    className="add-todo__input"
                    onKeyDown={handleKeyDown}
                    value={newTodoText}
                    onChange={(e) => { setNewTodoText(e.target.value) }}
                    type="text"
                    name="addTodoInput"
                    placeholder="Add Todo"
                />
                <button
                    className="add-todo__button"
                    onClick={handleAddToDoClick}
                >
                    <div className="add-todo__button-text">Add</div>
                </button>
                <IoMdAdd className="add-todo__icon" onClick={handleAddToDoClick}/>
            </div>
        </div>
    )
}

export default Todo;