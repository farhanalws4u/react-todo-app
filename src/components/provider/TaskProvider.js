import React, { createContext, useState } from "react";

export const task = createContext();

function TaskProvider({ children }) {
  const [taskList, setTaskList] = useState([]);

  return (
    <task.Provider value={{ taskList, setTaskList }}>{children}</task.Provider>
  );
}

export default TaskProvider;
