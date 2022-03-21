import React, { useState } from "react";
import TodoTitle from "../component/TodoTitle/TodoTitle";
import TodoInsert from "../component/TodoInsert/TodoInsert";
import TodoList from "../component/TodoList/TodoList";

let list_Id: number = 4;
const TodolistTemplate = () => {
  const [todos, setTodos] = useState([
    {
      id: 1,
      text: "todolist",
    },
    {
      id: 2,
      text: "todolist",
    },
    {
      id: 3,
      text: "todolist",
    },
  ]);

  const onInsert = (text: string) => {
    const todo = {
      id: list_Id,
      text,
    };
    setTodos(todos.concat(todo));
    list_Id += 1;
    console.log(list_Id);
  };
  const onRemove = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <>
      <TodoTitle />
      <div>
        <TodoInsert onSubmit={onInsert} />
        <TodoList todos={todos} onRemove={onRemove} />
      </div>
    </>
  );
};
export default TodolistTemplate;
