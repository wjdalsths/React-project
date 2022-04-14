import React from "react";
import { GlobalStyle } from "./style/global-style";
import TodolistTemplate from "./TodolistTemplate/TodolistTemplate";
function App() {
  return (
    <>
      <GlobalStyle />
      <TodolistTemplate />
    </>
  );
}

export default App;
