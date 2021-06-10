import React from "react";
import "./task.css";
import { db } from "../firebase";

function Task({ title, date, id }) {
  const deleteListHandler = () => {
    db.collection("tasks").doc(id).delete();
  };

  return (
    <div className="taskContainer">
      <div className="titleContainer">
        <p
          id="title"
          style={{
            marginRight: 30,
            display: "inline-block",
            maxWidth: 400,
            boxSizing: "border-box  ",
          }}
        >
          {title}
        </p>
      </div>
      <div className="dateContainer">
        <h4 style={{ color: "#FCCA46" }}>Due:</h4>
        <p style={{ color: "#FCCA46" }}>{date}</p>
      </div>
      <div className="trashIconContainer">
        <i
          id="trashIcon"
          style={{
            marginLeft: 30,
            display: "flex",
            alignItems: "center",
            color: "#233D4D",
            cursor: "pointer",
            fontSize: 19,
          }}
          onClick={deleteListHandler}
          class="fas fa-trash "
        ></i>
      </div>
    </div>
  );
}

export default Task;
