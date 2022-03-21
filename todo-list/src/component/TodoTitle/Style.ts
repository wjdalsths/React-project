import styled from "styled-components";

export const TodoTitle = styled.div`
  width: 100%;
  height: 35%;
  display: flex;
  justify-content: center;
  align-items: center;

  p {
    font-size: 4rem;
  }
  @media (max-width: 1440px) {
    p {
      font-size: 3.5rem;
    }
  }
  @media (max-width: 1025px) {
    p {
      font-size: 3rem;
    }
  }

  @media (max-width: 768px) {
    p {
      font-size: 2.5rem;
    }
  }
`;
