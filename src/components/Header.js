import React, { useContext, useState, useEffect } from "react";
import { db } from "../firebase";
import "./header.css";
import { searchString } from "./provider/SearchStringProvider";

const Header = React.memo(() => {
  const searchStringData = useContext(searchString);
  const [searchInput, setSearchInput] = useState("");
  const [searchArray, setSearchArray] = useState([]);
  useEffect(() => {
    console.log("header rendered..");
  }, []);

  useEffect(() => {
    setSearchArray(searchInput.split(" "));
  }, [searchInput]);

  const submitSearch = async (e) => {
    // logic for searching data from the database....
    e.preventDefault();

    const snapShot = await db
      .collection("tasks")
      .where("keywords", "array-contains-any", searchArray)
      .get();
    searchStringData.setString(
      snapShot.docs.map((doc) => ({
        title: doc.data().title,
        date: doc.data().date,
        id: doc.id,
      }))
    );
    setSearchInput("");
  };

  return (
    <div className="header">
      <div className="logoContainer">
        <h1 className="logo">To-Do</h1>
        <p className="slogan">Remember Your Tasks</p>
      </div>
      <div className="searchContainer">
        <div className="searchForm">
          <form className="form" onSubmit={submitSearch}>
            <div className="searchContainer">
              <input
                className="searchField"
                type="text"
                placeholder="Search Your Task"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
              />
              <button className={"searchButton"} type="submit">
                <i id="searchIcon" class="fas fa-search fa-2x "></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
});
export default Header;

// React.memo ==> what it does ? so it basically prevent the component from the unnecessary re renders.....
// for example if we are have component tree and with the render of the parent component the child component will alos be rendered.... so if we dont want the child component to be rendered again and again whenever the parent renders, we can use this.
// another case whenever we wrap any component to memo it will only rendered when the state and props related to that component changes.....
