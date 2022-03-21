import styled from "styled-components";

export const TodoItem = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  margin: 0 auto;
  width: 33rem;
  align-items: center;
  font-size: 1.5rem;
  background: #ffffff;
  & + & {
    border-top: 1px solid #dee2e6;
  }
  @media (max-width: 1440px) {
    width: 30.8rem;
    font-size: 1.2rem;
    padding: 0.7rem;
  }
  @media (max-width: 1025px) {
    width: 28rem;
    font-size: 1rem;
    padding: 0.6rem;
  }

  @media (max-width: 768px) {
    width: 25.2rem;
    font-size: 0.8rem;
    padding: 0.4rem;
  }
`;
export const DelButton = styled.button`
  font-size: 1rem;
  background-color: #868e96;
  color: white;
  cursor: pointer;
  &:hover {
    color: #ff8787;
  }
  @media (max-width: 1440px) {
    font-size: 0.9rem;
  }
  @media (max-width: 1025px) {
    font-size: 0.7rem;
  }

  @media (max-width: 768px) {
    font-size: 0.5rem;
  }
`;
