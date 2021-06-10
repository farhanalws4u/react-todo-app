import React, { useContext, useState, useEffect } from "react";
import "./main.css";
import { task } from "./provider/TaskProvider";
import { db } from "../firebase";
import firebase from "firebase";
import { searchString } from "./provider/SearchStringProvider";
import loadable from "@loadable/component";
import LoaderComp from "./LoaderComp";
const AllTasks = loadable(() => import("./AllTasks"));
const SearchedTasks = loadable(() => import("./SearchedTasks"));

const Main = React.memo(() => {
  var taskData = useContext(task);
  const searchStringData = useContext(searchString);
  const [taskInput, setTaskInput] = useState("");
  const [dueDate, setDueDate] = useState("");

  useEffect(() => {
    console.log("main rendered...");
  }, []);

  // Generating keywords of given input to implement search query....

  const generateKeywords = (string) => {
    const items = string.split(" ");
    const result = [];
    for (let i = 0; i < items.length; i++) {
      for (let j = 1; j <= items.length; j++) {
        const slice = items.slice(i, j);
        if (slice.length) result.push(slice.join(" "));
      }
    }
    return result;
  };

  const submitHandler = async (e) => {
    e.preventDefault();
    // saving data to the database..

    db.collection("tasks").add({
      title: taskInput,
      date: dueDate,
      keywords: generateKeywords(taskInput),
      timeStamp: firebase.firestore.FieldValue.serverTimestamp(),
    });
    setTaskInput("");
    setDueDate("");
  };

  // getting the data from database.....
  // note:- docs is an array of objects inside it which are documents.and docs is a complete collection of all documents.

  // useEffect(() => {   // reading data like this is not real time......
  //   const gettingData = async () => {
  //     const snapShot = await db.collection("tasks").get();
  //     const docs = snapShot.docs;
  //     setTaskList(
  //       docs.map((doc) => ({
  //         title: doc.data().title,
  //         date: doc.data().date,
  //         id: doc.id,
  //       }))
  //     );
  //   };
  //   gettingData();
  // }, []);

  // for real time data reading from the server.....

  useEffect(() => {
    db.collection("tasks")
      .orderBy("timeStamp", "desc")
      .onSnapshot((snapShot) => {
        taskData.setTaskList(
          snapShot.docs.map((doc) => ({
            title: doc.data().title,
            date: doc.data().date,
            id: doc.id,
          }))
        );
      });
  });

  return (
    <div className="container">
      <div className="formContainer">
        <form onSubmit={submitHandler}>
          <input
            className="inputField"
            placeholder="Enter Your Task Here"
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
            required
          />
          <label
            style={{
              marginLeft: 10,
              color: "black",
              fontWeight: "600",
            }}
            className="dateLable"
          >
            Due Date
          </label>
          <input
            // type="dateTime-local"
            type="date"
            value={dueDate}
            onChange={(e) => setDueDate(e.target.value)}
            className="dateInput"
            required
          />
          <button className="button" type="submit">
            Submit
          </button>
        </form>
      </div>
      <div className="allTaskContainer">
        {searchStringData.string.length === 0 ? (
          <AllTasks
            fallback={
              <LoaderComp
                type="ThreeDots"
                color="#233D4D"
                height={50}
                width={100}
                timeout={3000}
              />
            }
          />
        ) : (
          <SearchedTasks
            fallback={
              <LoaderComp
                type="ThreeDots"
                color="#233D4D"
                height={50}
                width={100}
                timeout={3000}
              />
            }
          />
        )}
      </div>
    </div>
  );
});

export default Main;
