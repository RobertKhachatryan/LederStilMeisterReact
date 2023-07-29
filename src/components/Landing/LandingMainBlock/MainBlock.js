import React from "react";
import * as S from "./MainBlock.styles";
import Bracelet from "../../../images/bracelet.png";
export const MainBlock = () => {
  return (
    <S.Main>
      <S.MainTitle>
        Leder
        <br />
        Stil
        <br /> Meister
      </S.MainTitle>
      <div>
        <S.Image src={Bracelet} />
      </div>
    </S.Main>
  );
};
