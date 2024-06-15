import { useEffect, useState } from "react";
import "./styles.css";
import AddComponent from "./AddComponent/AddComponent";

export default function TodoList() {
  const [taskCount, setTaskCount] = useState(0);
  const [completedTaskCount, setCompletedTaskCount] = useState(0);
  const [formVisibility, setformVisibility] = useState(false);
  const [taskBox, setTaskBox] = useState([]);

  const mappedTasks = taskBox.map((taskItem, index) => {
    return (
      <div className="card" key={index}>
        <h3 className="card--title">{taskItem.taskName}</h3>
        <div className="card--body">
          <div className="card-body-text">{taskItem.taskDescription}</div>
          <button className="done-button" onClick={() => handleDone(index)}>
            Done
          </button>
        </div>
      </div>
    );
  });

  const handleAddTask = () => {
    setformVisibility(true);
  };

  const handleDone = (index) => {
    const copyArray = [...taskBox];
    copyArray.splice(index, 1);
    setTaskBox(copyArray);
    setCompletedTaskCount((prevCount) => prevCount + 1);
  };

  useEffect(() => {
    setTaskCount(taskBox.length);
  }, [taskBox]);

  return (
    <div className="todo-list--container">
      <div className="todo-list--application">
        <header className="header">
          <h1>Todo List</h1>
        </header>
        <div className="tasks">
          <h2>Tasks {taskCount === 0 ? "Completed" : taskCount}</h2>
          <h2>Completed tasks {completedTaskCount}</h2>
        </div>
        {formVisibility === false && (
          <div className="task--interactive-cards">{mappedTasks}</div>
        )}
        {formVisibility === false && (
          <button type="button" onClick={() => handleAddTask()}>
            Add task
          </button>
        )}
        {formVisibility === true && (
          <AddComponent
            taskBox={taskBox}
            setTaskBox={setTaskBox}
            taskCount={taskCount}
            setTaskCount={setTaskCount}
            setformVisibility={setformVisibility}
          />
        )}
      </div>
    </div>
  );
}
