import { React, useState } from "react";

const AddTodoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Task"
          value={userInput}
          onChange={handleChange}
        />
        <button>Add Task</button>
      </form>
    </div>
  );
};

export default AddTodoForm;
