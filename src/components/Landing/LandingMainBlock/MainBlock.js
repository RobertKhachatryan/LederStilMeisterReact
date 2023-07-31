import React from "react";
import * as S from "./MainBlock.styles";
import Bracelet from "../../../images/bracelet.png";
import { useTranslation } from "react-i18next";

export const MainBlock = () => {
  const { t } = useTranslation();

  return (
    <S.Main>
      <S.TitlesBLock>
        <S.MainTitle>
          Leder
          <br />
          Stil
          <br /> Meister
        </S.MainTitle>
        <S.MainSubtitle>{t("MainBlock.Subtitle")}</S.MainSubtitle>
      </S.TitlesBLock>
      <div>
        <S.Image src={Bracelet} />
      </div>
    </S.Main>
  );
};
