import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";

const ToDo = ({ todo, togglestrike }) => {
  return (
    // <div
    //   onClick={() => togglestrike(todo.id)}
    //   className={todo.complete ? "strike" : ""}
    // >
    //   {todo.task}
    // </div>
    <div className="todoitem" onClick={() => togglestrike(todo.id)}>
      <RoughNotation type="strike-through" show={todo.complete}>
        {todo.task}
      </RoughNotation>
      <div
        className={todo.complete ? "checked check-circle" : "check-circle"}
      ></div>
    </div>
  );
};

export default ToDo;
