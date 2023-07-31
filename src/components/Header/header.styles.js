import styled from "styled-components";

export const Main = styled.header`
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: 2px solid #964b00;
  width: 100%;
  padding: 15px;
  @media (min-width: 660px) {
    padding: 20px;
    justify-content: space-between;
  }
`;
export const Logo = styled.p`
  margin: 0;
  font-size: 20px;
  font-weight: bold;
  color: #964b00;
  display: none;
  cursor: pointer;
  @media (min-width: 660px) {
    display: flex;
  }
`;

export const HeaderItemsBlock = styled.div`
  display: flex;
`;
export const HaederItem = styled.div`
  margin: 0px 10px;
  color: #964b00;
  font-size: 20px;
`;

export const MainLogo = styled.img`
  margin: 0;
  cursor: pointer;
  max-width: "35px";
  max-height: "35px";
  /* display: none; */
  /* @media (min-width: 660px) {
    display: flex;
  } */
`;
export const FlagLogo = styled.img`
  margin: 0;
  display: none;
  cursor: pointer;
  margin-left: 10px;
  @media (min-width: 660px) {
    width: "35px" !important;
    height: "35px" !important;
    display: flex;
  }
`;
