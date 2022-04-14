import { BiDotsVerticalRounded, BiTrendingUp } from "react-icons/bi";
import { FiClock } from "react-icons/fi";
import styled from "styled-components";

export const views = styled.div`
  display: flex;
  justify-content: space-between;
  width: 80%;
  margin: 1.5rem auto;
`;

export const filter = styled.div`
  display: flex;
  align-items: center;
`;

export const trandwrap = styled.div`
  display: flex;
  width: 14rem;
  height: 3rem;
`;
export const tranding = styled.a`
  width: 7rem;
  display: flex;
  align-items: center;
  font-size: 1.125rem;
  justify-content: center;
`;

export const recent = styled.a`
  width: 7rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1.125rem;
`;
export const date = styled.div`
  background: #fff;
  width: 5.5rem;
  height: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-radius: 4px;
  padding: 0 0.5rem;
  /* font-size: 0.875rem; */
  font-weight: 600;
  box-shadow: rgb(0 0 0 / 5%) 0px 0px 4px;
  cursor: pointer;
`;

export const menu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const dotbt = styled(BiDotsVerticalRounded)`
  cursor: pointer;
  font-size: 1.5rem;
  color: #868e96;
`;
// export const abc = styled(BiTrendingUp)`
//   margin: 0 10px;
// `;

// export const abc2 = styled(FiClock)`
//   margin: 0 10px;
// `;
