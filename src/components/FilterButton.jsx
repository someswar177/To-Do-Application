import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { filterTodos, markAllCompleted } from "../redux/actions";
import '../css/FilterButton.css'

const FilterButton = () => {
  const dispatch = useDispatch();
  const currentFilter = useSelector((state) => state.filter);

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter));
  };

  const handleMarkAllCompleted = () => {
    dispatch(markAllCompleted());
  };

  return (
    <div className="filter-button-container">
      <select
        className="filter-select"
        value={currentFilter}
        onChange={(e) => {
          handleFilter(e.target.value);
        }}
      >
        <option value="ALL">All</option>
        <option value="COMPLETED">Completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>
      <button
        onClick={handleMarkAllCompleted}
        className="mark-all-completed-button"
      >
        Mark All Completed
      </button>
    </div>
  );
};

export default FilterButton;
