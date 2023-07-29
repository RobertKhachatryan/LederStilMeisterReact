import React from "react";
import * as S from "./header.styles";
import UKflag from "../../images/UK.svg";
import ArmSymb from "../../images/armsymb.png";
const Header = () => {
  return (
    <S.Main>
      <S.Logo>LSM</S.Logo>
      <S.HeaderItemsBlock>
        <S.Image src={ArmSymb} style={{ width: "35px", height: "35px" }} />
      </S.HeaderItemsBlock>

      <S.Image src={UKflag} style={{ width: "35px", height: "35px" }} />
    </S.Main>
  );
};

export default Header;
