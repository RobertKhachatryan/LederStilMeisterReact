import React from "react";
import * as S from "./header.styles";
import UKflag from "../../images/UK.svg";
import RUflag from "../../images/RU.svg";
import AMflag from "../../images/AM.svg";
import ArmSymb from "../../images/armsymb.png";
import i18n from "../../i18n";

const Header = () => {
  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };
  const handleReload = () => {
    window.location.reload();
  };

  return (
    <S.Main>
      <S.Logo>LSM</S.Logo>
      <S.HeaderItemsBlock>
        <S.MainLogo
          src={ArmSymb}
          onClick={handleReload}
          style={{ width: "35px", height: "35px" }}
        />
      </S.HeaderItemsBlock>
      <div style={{ display: "flex" }}>
        <S.FlagLogo
          src={UKflag}
          onClick={() => changeLanguage("en")}
          style={{ width: "25px", height: "25px" }}
        />
        <S.FlagLogo
          src={RUflag}
          onClick={() => changeLanguage("ru")}
          style={{ width: "25px", height: "25px" }}
        />
        <S.FlagLogo
          src={AMflag}
          onClick={() => changeLanguage("am")}
          style={{ width: "25px", height: "25px" }}
        />
      </div>
    </S.Main>
  );
};

export default Header;
