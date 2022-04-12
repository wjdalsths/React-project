import React from "react";
import * as S from "./Styled";

const Profiles = () => {
  return (
    <>
      <S.Container>
        <S.profile></S.profile>
        <S.myblog>
          <S.profileimg></S.profileimg>
          <S.profileinfomation></S.profileinfomation>
        </S.myblog>
      </S.Container>
    </>
  );
};

export default Profiles;
