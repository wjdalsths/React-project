import { useState, useEffect } from "react";
import axios from "axios";
import * as S from "./Styled";

const Profiles = () => {
  const [blog, setBlog] = useState([]);
  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/posts";
    axios
      .get(url)
      .then((data) => {
        console.log(data);
        setBlog(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  return (
    <>
      <S.Container>
        <S.Profile>
          <a>
            <img src="" alt="" width="128px" height="128px" />
          </a>
          <S.InformationWrap>
            <S.Name>name</S.Name>
            <S.Description>description</S.Description>
          </S.InformationWrap>
          <S.Line />
        </S.Profile>
        <S.Myblog>
          <S.Filter></S.Filter>
          <S.Myblog></S.Myblog>
        </S.Myblog>
      </S.Container>
    </>
  );
};

export default Profiles;
