import { styled } from "styled-components";

export const Main = styled.div`
  /* padding: 0px 300px; */
  margin-top: 100px;
`;

export const StepBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;
  margin-bottom: 50px;
  @media (min-width: 768px) {
    margin-bottom: 90px;
  }
  @media (min-width: 1280px) {
    margin-bottom: 120px;
  }
`;

export const StepNumber = styled.p`
  margin: 0;
  font-size: 40px;
  font-weight: bold;
  color: #654321;
  @media (min-width: 768px) {
    font-size: 68px;
  }
  @media (min-width: 1280px) {
    font-size: 80px;
  }
`;

export const StepText = styled.p`
  margin: 0;
  font-size: 20px;
  @media (min-width: 768px) {
    font-size: 28px;
  }
  @media (min-width: 1280px) {
    font-size: 32px;
  }
`;
