import React from "react";
import App from "./App.css"
import Ritesh from "./ritesh"
import TodoLogin from "./components/TodoLogin";
import TodoList from "./components/TodoList";

function App() {
  return (
    <>
      <TodoLogin />
      <TodoList />
      {/* <Ritesh /> */}
    </>
  );
}

export default App;
