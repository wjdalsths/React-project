import styled from "styled-components";

export const write = styled.div`
  width: 80vw;
  margin: auto;
  /* height: 90vh; */
  display: flex;
  flex-direction: column;
`;
export const board = styled.div`
  width: 100%;
  display: flex;
`;
export const writeboard = styled.div`
  display: flex;
  flex-direction: column;
  /* background: white; */
  width: 60vw;
  margin-top: 4vh;
  /* height: 70vh; */
`;
export const title = styled.div`
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
export const infobox = styled.div`
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

export const subButton = styled.button`
  margin-top: 3.5vh;
  background-color: #dbceff;
  border-radius: 10px;
  font-size: 1.5rem;
  border: none;
  height: 5vh;
  text-align: center;
`;

export const imgboard = styled.div`
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 5vw;
    height: 4.5vh;
    color: #fff;
    background-color: #495057;
    font-size: 16px;
    font-weight: bold;
    outline: none;
    border: none;
    border-radius: 10px;
    box-sizing: border-box;
    cursor: pointer;
    &:hover {
      background-color: #fff;
      border: 3px solid #495057;
      color: #495057;
    }
  }
`;
export const imgbutton = styled.button`
  background-color: #fa5252;
  width: 4.5vw;
  height: 4.5vh;
  color: #fff;
  font-size: 18px;
  font-weight: bold;
  outline: none;
  border: none;
  border-radius: 10px;
  box-sizing: border-box;
  cursor: pointer;
  &:hover {
    background-color: #fff;
    border: 3px solid #fa5252;
    color: #fa5252;
  }
`;
