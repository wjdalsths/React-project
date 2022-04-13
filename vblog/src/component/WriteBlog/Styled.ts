import styled from "styled-components";

export const Write = styled.div`
  width: 80vw;
  margin: auto;
  /* height: 90vh; */
  display: flex;
  flex-direction: column;
`;
export const Board = styled.div`
  width: 100%;
  display: flex;
`;
export const Writeboard = styled.div`
  display: flex;
  flex-direction: column;
  /* background: white; */
  width: 60vw;
  margin-top: 4vh;
  /* height: 70vh; */
`;
export const Title = styled.div`
  width: 90%;
  height: 10vh;
  background: white;
  display: flex;
`;

// export const toolbar = styled.div``;

export const input = styled.input`
  width: 100%;
  height: 100%;
  padding: 0 1vw;
  font-size: 3rem;
  font-weight: bolder;
  border-radius: 10px;

  box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px;

  display: flex;
  ::placeholder {
    font-size: 3rem;
  }
`;
export const Infobox = styled.div`
  width: 86.6%;
  /* height: 100%; */
`;
export const textarea = styled.textarea`
  width: 100%;
  margin-top: 3.5vh;
  padding: 2vh 1vw;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px;
  border-radius: 10px;
  font-size: 1.5rem;
  height: 55vh;
  border: none;
  outline: none;
  resize: none;
  ::placeholder {
    font-style: oblique;
  }
`;

export const SubButton = styled.button`
  margin-top: 3.5vh;
  background-color: #dbceff;
  border-radius: 10px;
  font-size: 1.5rem;
  border: none;
  height: 5vh;
  text-align: center;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px;
`;

export const Imgboard = styled.div`
  margin-top: 4vh;
`;

export const Img = styled.div`
  width: 20vw;
  height: 40vh;
  border: 5px solid gray;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: rgb(0 0 0 / 25%) 0px 4px 10px;
  /* overflow: hidden; */
  img {
    width: 100%;
    height: 100%;
  }
  p {
    font-size: 24px;
    font-weight: lighter;
  }
`;

export const ImgBtnWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-top: 30px;
  input {
    display: none;
  }
  label {
    background-color: #808080;
    color: #ffffff;
    padding: 0;
    font-size: 1.1rem;
    font-weight: bold;
    width: 6vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-sizing: border-box;
    /* box-sizing: border-box; */
    /* transition-property: font-size, width, height;
    transition-duration: 0.5s; */
    :hover {
      /* width: 6.5vw;
      height: 5.5vh;
      font-size: 125%; */
      background-color: skyblue;
      border: 3px solid black;
    }
  }
  button {
    background-color: #808080;
    color: #ffffff;
    padding: 0;
    font-size: 1.1rem;
    font-weight: bold;
    width: 6vw;
    height: 5vh;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 5px;
    box-sizing: border-box;
    /* box-sizing: border-box; */
    /* transition-property: font-size, width, height;
    transition-duration: 0.5s; */
    :hover {
      /* width: 7vw;
      height: 6vh;
      font-size: 150%; */
      background-color: red;
      border: 3px solid black;
    }
  }
`;
