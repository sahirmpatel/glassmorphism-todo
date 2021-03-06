import "./App.css";
import { React, useState } from "react";
import Header from "./components/Header";
import data from "./data.json";
import TodoList from "./components/TodoList";
import AddTodoForm from "./components/AddTodoForm";
import { v4 as uuidv4 } from "uuid";
function App() {
  const [toDoList, setToDoList] = useState(data);

  function togglestrike(id) {
    let newstrikeddata = toDoList.map((task) => {
      return task.id === id
        ? { ...task, complete: !task.complete }
        : { ...task };
    });

    setToDoList(newstrikeddata);
  }

  function filterStrikes() {
    let strikefiltereddata = toDoList.filter((task) => !task.complete);
    setToDoList(strikefiltereddata);
  }

  function addTask(str) {
    let copy = [...toDoList];
    copy = [...copy, { id: uuidv4(), task: str, complete: false }];
    setToDoList(copy);
  }

  return (
    <div className="App">
      <Header />
      <TodoList
        toDoList={toDoList}
        togglestrike={togglestrike}
        filterStrikes={filterStrikes}
      />
      <AddTodoForm addTask={addTask} />
    </div>
  );
}

export default App;
