import { React, useState } from "react";
import Header from "./Header";
// import data from "./data.json";
import { useLocalStorageState } from "use-local-storage-state";
import TodoList from "./TodoList";
import AddTodoForm from "./AddTodoForm";
import { v4 as uuidv4 } from "uuid";

function MainCard() {
  // const [toDoList, setToDoList] = useState(data);

  const [toDoList, setToDoList] = useLocalStorageState("localtodos", [
    {
      id: 1,
      task: "Friday reservation at Dorsia",
      complete: true,
    },
  ]);

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
    <div className="MainCard">
      <Header />
      <AddTodoForm addTask={addTask} />
      <TodoList
        toDoList={toDoList}
        togglestrike={togglestrike}
        filterStrikes={filterStrikes}
      />
    </div>
  );
}

export default MainCard;
