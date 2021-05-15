import React from "react";
import "./task.css";

function Task() {
  return (
    <div className="taskContainer">
      <p style={{ marginRight: 30 }}>
        dfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfsdfhomework
      </p>
      <h4 style={{ color: "#FCCA46" }}>Due:</h4>
      <p style={{ marginLeft: 5, color: "#FCCA46" }}>2-2-20</p>
      <div className="trashIconContainer">
        <i
          style={{
            marginLeft: 30,
            display: "flex",
            alignItems: "center",
            color: "#be0000",
            cursor: "pointer",
            fontSize: 19,
          }}
          class="fas fa-trash "
        ></i>
      </div>
    </div>
  );
}

export default Task;
