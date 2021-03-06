import React from "react";
import ToDo from "./ToDo";

const TodoList = ({ toDoList, togglestrike, filterStrikes }) => {
  return (
    <div>
      {toDoList.map((todo) => (
        <ToDo todo={todo} togglestrike={togglestrike} />
      ))}

      <button onClick={filterStrikes}>Filter completed tasks</button>
    </div>
  );
};

export default TodoList;
