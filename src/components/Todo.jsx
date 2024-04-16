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
    // console.log(newTodoText)
    return (
        <div className="container text-center border rounded-4 py-5">
            <h2 className="">Todo App</h2>
            <div className="row justify-content-center mb-4">
                <div className="col-8 ">
                    <input className="form-control fs-4" value={newTodoText} onChange={(e) => { setNewTodoText(e.target.value) }} type="text" name="addTodoInput" id="addTodoInput" placeholder="Add Todo" />
                </div>
                <button className="col-1 btn btn-primary fs-4 " onClick={handleAddToDoClick}>Add</button>
            </div>

            <div className="d-flex justify-content-around">
                <div className="">
                <FilterButton/>
                </div>

                <div className="row justify-content-center mb-4">
                    <div className="col-auto">
                        <input className="form-control fs-4" value={searchTerm} onChange={(e) => { handleSearchChange(e.target.value) }} type="text" name="addTodoInput" id="addTodoInput" placeholder="Search" />
                    </div>
                    <button className="col-auto btn btn-primary fs-5" onClick={handleAddToDoClick}>Search</button>
                </div>
            </div>

            <TodoList />
        </div>
    )
}

export default Todo;