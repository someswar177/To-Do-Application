import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";


const FilterButton = () => {
    const dispatch = useDispatch()
    const currentFilter = useSelector((state)=> state.filter);
    const handleFilter = (filter)=>{
        dispatch(filterTodos(filter))
    }
    return(
        <div className="flex items-center">
            <select name="" id="" value={currentFilter} onChange={(e)=>{handleFilter(e.target.value)}}>
                <option value="ALL">Default</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>

            <button onClick={()=>dispatch(markAllCompleted())} className="btn btn-succes">Mark All completed</button>
        </div>
    )
}

export default FilterButton;