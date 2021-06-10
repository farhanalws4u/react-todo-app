import React, { useContext } from "react";
import { task } from "./provider/TaskProvider";
import Task from "./Task";

function AllTasks() {
  var taskData = useContext(task);
  return (
    <div>
      <h2
        style={{
          textDecoration: "underline",
          color: "#233D4D",
          textAlign: "center",
          marginBottom: 20,
        }}
      >
        All Tasks
      </h2>
      <div>
        {taskData.taskList.map((task) => {
          return <Task id={task.id} title={task.title} date={task.date} />;
        })}
      </div>
    </div>
  );
}

export default AllTasks;
