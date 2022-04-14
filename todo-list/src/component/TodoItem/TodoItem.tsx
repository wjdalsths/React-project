import React from "react";
import * as S from "./Style";

const TodoItem = ({ todo, onRemove }: { todo: any; onRemove: any }) => {
  const { id, text } = todo;

  return (
    <>
      <S.TodoItem>
        {text}
        <S.DelButton onClick={() => onRemove(id)}>삭제</S.DelButton>
      </S.TodoItem>
    </>
  );
};

export default TodoItem;
