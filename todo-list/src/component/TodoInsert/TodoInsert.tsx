import React, { useState } from "react";
import * as S from "./Style";

const TodoInsert = (props: any) => {
  const [todos, setTodos] = useState("");

  const onChange = (e: any) => {
    setTodos(e.target.value);
  };

  const onSubmit = (e: any) => {
    console.log(e);

    e.preventDefault();
    if (todos === "") return;
    props.onSubmit(todos);

    setTodos("");
  };

  return (
    <>
      <S.TodoInsert>
        <form onSubmit={onSubmit}>
          <S.Insertbox>
            <input
              type={"text"}
              placeholder={"입력하세요"}
              value={todos}
              onChange={onChange}
            ></input>
          </S.Insertbox>
          <button type="submit" onClick={onSubmit}>
            +
          </button>
        </form>
      </S.TodoInsert>
    </>
  );
};

export default TodoInsert;
