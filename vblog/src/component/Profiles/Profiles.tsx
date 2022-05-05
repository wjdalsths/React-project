import { useEffect, useState } from "react";
import axios from "axios";
import * as S from "./Styled";

const Profiles = () => {
  const [profile, setProfile] = useState([]);
  useEffect(() => {
    const url = "";
    axios
      .get(url)
      .then((res) => {
        console.log(res);
        setProfile(res.data);
      })
      .catch((error) => {
        console.log("error");
      });
  }, []);

  return (
    <>
      <S.Container>
        <S.Profile>
          <a>
            <img src="img/tkwls.png" alt="" width="128px" height="128px" />
          </a>
          <S.InformationWrap>
            <S.Name>name</S.Name>
            <S.Description>description</S.Description>
          </S.InformationWrap>
        </S.Profile>
        <S.Line />
        <S.MyblogWrapper>
          <S.Introduce>
            <div>
              tttttttttttttttteeeeeeeeeeeeeeeexxxxxxxxxxxxxxxtttttttttttttttttttttttttteeeeeeeeeeeeeeeexxxxxxxxxxxxxxxtttttttttt
              tttttttttttttttteeeeeeeeeeeeeeeexxxxxxxxxxxxxxxtttttttttttttttttttttttttteeeeeeeeeeeeeeeexxxxxxxxxxxxxxxtttttttttt
              tttttttttttttttteeeeeeeeeeeeeeeexxxxxxxxxxxxxxxtttttttttttttttttttttttttteeeeeeeeeeeeeeeexxxxxxxxxxxxxxxtttttttttt
              tttttttttttttttteeeeeeeeeeeeeeeexxxxxxxxxxxxxxxtttttttttt
            </div>
          </S.Introduce>
          <S.Line />

          <S.Myblog>
            {/* {profile.map((user: any) => ( */}
            {/*key={user.id}*/}
            <S.Blogitem>
              <S.Blogimg>
                <img src="" alt="" />
              </S.Blogimg>
              <S.Blogwrapper>
                <S.Blogtitle>
                  {/* {user.title} */}
                  <p>titletitletitle</p>
                </S.Blogtitle>
                <S.Blogcontent>
                  {/* {user.content} */}
                  <p>ccccccooooooooonnnnnnnnnnttttttteeeeeeennnnnntttttttttt</p>
                </S.Blogcontent>
              </S.Blogwrapper>
            </S.Blogitem>
            {/* ))} */}
          </S.Myblog>
        </S.MyblogWrapper>
      </S.Container>
    </>
  );
};

export default Profiles;
