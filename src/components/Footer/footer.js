import React from "react";
import * as S from "./footer.styles";
import InstaIcon from "../../images/insta.svg";
export const Footer = () => {
  return (
    <S.Main>
      <S.CompName>LederStilMeister</S.CompName>
      <S.Image src={InstaIcon} style={{ width: "30px", height: "30px" }} />
    </S.Main>
  );
};
