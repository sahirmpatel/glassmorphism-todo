import React from "react";
import ToDo from "./ToDo";

const TodoList = ({ toDoList, togglestrike, filterStrikes }) => {
  return (
    <div>
      {toDoList.map((todo) => (
        <ToDo todo={todo} togglestrike={togglestrike} />
      ))}

      <div className="filter-button-parent">
        <button className="filter-button" onClick={filterStrikes}>
          Filter completed
        </button>
      </div>
    </div>
  );
};

export default TodoList;
