import React from "react";
import Header from "../component/Header/Header";
import Blogmain from "../component/Blogmain/Blogmain";
import * as S from "./style";

const MainPage = () => {
  return (
    <>
      <S.Container>
        <Header />
        <Blogmain></Blogmain>
      </S.Container>
    </>
  );
};

export default MainPage;
