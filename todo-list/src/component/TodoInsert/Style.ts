import styled from "styled-components";

export const TodoInsert = styled.div`
  width: 70%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;

  form {
    background: #544957;
    display: flex;
    justify-content: center;
    width: 35rem;
    height: 2.5rem;

    button {
      background: #868e96;
      font-size: 1.5rem;
      width: 3rem;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    @media (max-width: 1440px) {
      width: 32rem;
      height: 2rem;
      button {
        font-size: 1.3rem;
      }
    }
    @media (max-width: 1025px) {
      width: 29rem;
      height: 1.7rem;
      button {
        font-size: 1.1rem;
      }
    }

    @media (max-width: 768px) {
      width: 26rem;
      height: 1.5rem;
      button {
        font-size: 1rem;
      }
    }
  }
`;
export const Insertbox = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  font-size: 1.5rem;
  input {
    display: flex;
    width: 100%;
    padding: 0.5rem;
    font-size: 1rem;
    line-height: 1;
    color: white;
    &::placeholder {
      color: #dee2e6;
    }
    @media (max-width: 1440px) {
      font-size: 0.8rem;
    }
    @media (max-width: 1025px) {
      font-size: 0.6rem;
    }

    @media (max-width: 768px) {
      font-size: 0.4rem;
    }
  }
`;
