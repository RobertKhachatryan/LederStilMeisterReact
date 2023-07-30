import React from "react";
import * as S from "./header.styles";
import UKflag from "../../images/UK.svg";
import ArmSymb from "../../images/armsymb.png";
import i18n from "../../i18n";
const Header = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <S.Main>
      <S.Logo>LSM</S.Logo>
      <S.HeaderItemsBlock>
        <S.MainLogo src={ArmSymb} style={{ width: "35px", height: "35px" }} />
      </S.HeaderItemsBlock>
      <div style={{ display: "flex" }}>
        <S.FlagLogo
          src={UKflag}
          style={{ width: "35px", height: "35px" }}
          onClick={() => changeLanguage("en")}
        />
        <div onClick={() => changeLanguage("ru")}>RU</div>
        <div onClick={() => changeLanguage("am")}>AM</div>
      </div>
    </S.Main>
  );
};

export default Header;
