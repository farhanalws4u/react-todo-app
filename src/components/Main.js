import React from "react";
import "./main.css";
import Task from "./Task";

function Main() {
  const submitHandler = (e) => {
    e.preventDefault();
    alert("submitted...");
  };

  const arr = [1, 2, 3, 4];

  return (
    <div className="container">
      <div className="formContainer">
        <form onSubmit={submitHandler}>
          <input
            className="inputField"
            placeholder="Enter Your Task Here"
            type="text"
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="allTaskContainer">
        {arr.map((arr) => (
          <Task />
        ))}
      </div>
    </div>
  );
}

export default Main;
