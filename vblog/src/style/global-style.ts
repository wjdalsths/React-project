import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

   html body {
    /* width: 1728px;  */
    margin:0;
    padding:0;
    background:#F8F9FA;
    font-family: BlinkMacSystemFont, "Helvetica Neue", "Apple SD Gothic Neo", "Malgun Gothic", "맑은 고딕", 나눔고딕, "Nanum Gothic", "Noto Sans KR", "Noto Sans CJK KR", arial, 돋움, Dotum, Tahoma, Geneva, sans-serif;
  }
  
  input{
    background: none;
    outline: none;
    border: none;
  }
  button {
      cursor: pointer;
      outline: none;
      background: none;
      border: none;
  }
  label {
    cursor: pointer;
  }
  svg{
    margin-right:0.5rem;
  }

`;
