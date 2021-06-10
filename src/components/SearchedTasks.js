import React, { useContext, useEffect } from "react";
import "./SearchedTasks.css";
import { searchString } from "./provider/SearchStringProvider";
import Task from "../components/Task";

const SearchedTasks = React.memo(() => {
  useEffect(() => {
    console.log("searchedTask Rendered...");
  });
  const searchStringData = useContext(searchString);

  console.log(searchStringData.string);

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
        Search Results
      </h2>
      {searchStringData.string.map((task) => {
        return <Task id={task.id} title={task.title} date={task.date} />;
      })}

      <button onClick={() => window.location.reload()} className="btn">
        Back to All Tasks
      </button>
    </div>
  );
});
export default SearchedTasks;
