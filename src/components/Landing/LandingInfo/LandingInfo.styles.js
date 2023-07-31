import { styled } from "styled-components";

export const Main = styled.div`
  padding: 0px 60px;
  @media (min-width: 768px) {
    padding: 0px 100px;
  }
`;

export const InfoBlock = styled.div`
  width: 100%;
  margin-top: 150px;
  margin-bottom: 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: column;
  @media (min-width: 1100px) {
    font-size: 80px;
    display: flex;

    justify-content: space-between;
    align-items: center;
    /* flex-direction: row; */
  }
`;

export const MainText = styled.h2`
  width: auto;
  font-size: 24px;
  font-weight: bold;
  color: #654321;
  margin: 0;
  margin-bottom: 10px;
  text-align: "center";
  @media (min-width: 768px) {
    font-size: 60px;
  }
  /* @media (min-width: 1280px) {
    font-size: 85px;
  } */
`;

export const Description = styled.p`
  font-size: 18px;
  /* width: auto; */
  margin: 0;
  @media (min-width: 768px) {
    font-size: 24px;
  }
  @media (min-width: 1280px) {
    font-size: 32px;
  }
`;
