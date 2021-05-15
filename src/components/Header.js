import React, { useState } from "react";
import "./header.css";

function Header() {
  const submitSearch = (e) => {
    e.preventDefault();
    alert("search");
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
}

export default Header;
