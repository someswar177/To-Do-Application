import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";


const FilterButton = () => {
    const dispatch = useDispatch()
    const currentFilter = useSelector((state)=> state.filter);
    const handleFilter = (filter)=>{
        dispatch(filterTodos(filter))
    }
    return(
        <div className="fs-5">
            <select className="rounded-2 py-2 px-3" name="" id="" value={currentFilter} onChange={(e)=>{handleFilter(e.target.value)}}>
                <option value="ALL">All</option>
                <option value="COMPLETED">Completed</option>
                <option value="INCOMPLETE">Incomplete</option>
            </select>

            <button onClick={()=>dispatch(markAllCompleted())} className="btn btn-success mx-4 fs-5">Mark All completed</button>
        </div>
    )
}

export default FilterButton;