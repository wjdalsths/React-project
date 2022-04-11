import React from "react";
import * as S from "./Styled";
import { BiTrendingUp } from "react-icons/bi";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiClock } from "react-icons/fi";

const Blogview = () => {
  return (
    <>
      <S.views>
        <S.filter>
          <S.trandwrap>
            <S.tranding>
              <BiTrendingUp />
              트렌딩
            </S.tranding>
            <S.recent>
              <FiClock />
              최신
            </S.recent>
          </S.trandwrap>
          <S.date>
            이번주
            <BsFillCaretDownFill />
          </S.date>
        </S.filter>
        <S.menu>
          <S.dotbt />
        </S.menu>
      </S.views>
    </>
  );
};

export default Blogview;
