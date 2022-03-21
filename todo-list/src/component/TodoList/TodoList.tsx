import React from "react";
import * as S from "./Style";
import TodoItem from "../TodoItem/TodoItem";
const TodoList = ({ todos, onRemove }: { todos: any; onRemove: any }) => {
  return (
    <>
      <S.TodoList>
        {todos.map((todo: any) => (
          <TodoItem todo={todo} key={todo.id} onRemove={onRemove} />
        ))}
      </S.TodoList>
    </>
  );
};

export default TodoList;
