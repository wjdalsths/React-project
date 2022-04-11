import React from "react";
import Blogview from "../Blogview/Blogview";
import Bloglist from "../Bloglist/Bloglist";
import * as S from "./Styled";

const Blogmain = () => {
  return (
    <>
      <S.blogmain>
        <Blogview></Blogview>
        <Bloglist></Bloglist>
      </S.blogmain>
    </>
  );
};

export default Blogmain;
