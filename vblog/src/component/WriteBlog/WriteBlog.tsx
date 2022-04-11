import axios from "axios";
import { useState } from "react";
import * as S from "./Styled";

// const [info, setInfo] = useState<string>("");

const WriteBlog = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const [imgBase64, setimgBase64] = useState("");
  const [imgFile, setimgFile] = useState(null);

  const handleChangeFile = (event: any) => {
    var reader = new FileReader();
    reader.onloadend = () => {
      // 읽기가 완료되면 아래코드 실행
      const base64 = reader.result;
      if (base64) {
        setimgBase64(base64.toString()); // 파일base64 상태 업데이트
      }
    };
    if (event.target.files[0]) {
      reader.readAsDataURL(event.target.files[0]); //파일을 읽어 버퍼에 저장
      setimgFile(event.target.files[0]); //파일상태 업데이트
      // setFileImage(URL.createObjectURL(e.target.files[0]));
    }
  };

  const onChangeTitle = (e: any) => {
    setTitle(e.target.value);
    console.log(e.target.value);
  };
  const onChangeContent = (e: any) => {
    setContent(e.target.value);
    console.log(e.target.value);
  };

  const onSubmit = (e: any) => {
    const url = "http";
    var pattern = /^\s\s*$/;
    if (title.match(pattern) || title === "") {
      console.log("no title");
      alert("제목을 입력해주세요.");
    } else if (content.match(pattern) || content === "") {
      console.log("no content");
      alert("내용을 입력해주세요.");
    } else {
      axios
        .post("url", { title: title, body: content })
        .then((res) => {
          console.log(res);
        })
        .catch((error: any) => {
          console.log("error");
          // if (error.message === "Error: Request failed with status code 400")
          //   alert("제목과 내용을 입력해주세요");
        });
      // e.preventDefault();
      // if (title === "" || info === "") return;
      // props.onSubmit(title);
      // setTitle("");
    }
  };

  return (
    <>
      <S.write>
        <S.board>
          <S.writeboard>
            <S.title>
              <S.input
                type={"text"}
                value={title}
                placeholder={"enter title"}
                onChange={onChangeTitle}
              />
            </S.title>
            <S.infobox>
              <S.textarea
                // id=''
                value={content}
                onChange={onChangeContent}
                placeholder="enter content"
              />
            </S.infobox>
          </S.writeboard>
          <S.imgboard>
            <S.Img>
              {imgFile ? <img alt="image" src={imgFile} /> : <p>no image</p>}
            </S.Img>
            <S.ImgBtnWrapper>
              <input
                id="select"
                name="imgFlie"
                type="file"
                accept="image/*"
                onChange={handleChangeFile}
              />
              <label htmlFor="select">이미지 선택</label>
              {/* <button id="select">이미지 선택</button> */}
              <S.imgbutton>삭제</S.imgbutton>
            </S.ImgBtnWrapper>
          </S.imgboard>
        </S.board>
        <S.subButton type="submit" onClick={onSubmit}>
          UpLoad
        </S.subButton>
      </S.write>
    </>
  );
};

export default WriteBlog;
