import React from "react";
import { useSelector } from "react-redux";
import { getTasks } from "../store/slices/data";
import "./css/tasks.css";

const Tasks = () => {
  const tasks = useSelector(getTasks);

  const displayTasks = (task: string) => {
    return (
      <div key={Math.random().toString()} className="task">
        {task}
      </div>
    );
  };

  return <div className="tasks">{[...tasks, ...tasks].map(displayTasks)}</div>;
};

export default Tasks;
