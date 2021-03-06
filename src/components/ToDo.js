import React from "react";

const ToDo = ({ todo, togglestrike }) => {
  return (
    <div
      onClick={() => togglestrike(todo.id)}
      className={todo.complete ? "strike" : ""}
    >
      {todo.task}
    </div>
  );
};

export default ToDo;
