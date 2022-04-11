import React from "react";
import * as S from "./Styled";
import { BsFillSunFill, BsFillCaretDownFill } from "react-icons/bs";
import { BiMoon, BiSearch } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <S.Header>
      <S.title>
        <Link
          to="/"
          style={{
            textDecoration: "none",
            color: "black",
            textDecorationLine: "none",
          }}
        >
          <S.Ptitle>vblog</S.Ptitle>
        </Link>
      </S.title>
      <S.menu>
        <S.darklight>
          <BsFillSunFill />
        </S.darklight>
        {/* <BiMoon /> */}
        <S.search>
          <BiSearch />
        </S.search>
        <Link to="/notice">
          <S.newpost>새 글 작성</S.newpost>
        </Link>
        <S.profile>
          <S.profiles>
            <FaUserCircle />
            <BsFillCaretDownFill />
          </S.profiles>
        </S.profile>
      </S.menu>
    </S.Header>
  );
};

export default Header;
