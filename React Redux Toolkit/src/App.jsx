import { useState } from "react";
import { fetchTodos } from "./redux/slice/todo";

import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);

  if (state.todo.isLoading) {
    return <h1>Loading.....</h1>;
  }

  console.log("State", state);
  return (
    <div>
      <button onClick={(e) => dispatch(fetchTodos())}>fetchTodos</button>
      {state.todo.data && state.todo.data.map((e) => <li>{e.title}</li>)}
    </div>
  );
}

export default App;
