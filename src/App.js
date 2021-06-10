import loadable from "@loadable/component";
import TaskProvider from "./components/provider/TaskProvider";
import SearchStringProvider from "./components/provider/SearchStringProvider";
import React from "react";
import Header from "./components/Header";
const Main = loadable(() => import("./components/Main"));

function App() {
  return (
    <div>
      <SearchStringProvider>
        <TaskProvider>
          <Header />
          <Main />
        </TaskProvider>
      </SearchStringProvider>
    </div>
  );
}
export default App;
