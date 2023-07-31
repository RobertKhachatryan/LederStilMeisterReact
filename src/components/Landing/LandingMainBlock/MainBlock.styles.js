import { styled } from "styled-components";

export const Main = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 60px;
  /* margin-top: 50px; */
  margin-bottom: 80px;
  flex-direction: column;
  @media (min-width: 768px) {
    padding: 0px 100px;
    flex-direction: row;
    margin-bottom: 100px;
  }
`;

export const TitlesBLock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const MainTitle = styled.h1`
  color: #654321;
  font-size: 65px;
  cursor: default;
  margin: 0;
  @media (min-width: 768px) {
    font-size: 80px;
  }
  @media (min-width: 1280px) {
    font-size: 124px;
  }
`;

export const MainSubtitle = styled.p`
  margin: 0;
  color: #808000;
  font-size: 24px;
  font-weight: bold;
`;
export const Image = styled.img`
  margin: 0;
  @media (min-width: 1280px) {
    width: 300px;
    height: 300px;
  }
  @media (min-width: 1280px) {
    width: 500px;
    height: 500px;
  }
`;
