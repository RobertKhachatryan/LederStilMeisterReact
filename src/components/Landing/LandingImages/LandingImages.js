import React from "react";
import * as S from "./LandingImages.styles";
import TimeImage from "../../../images/time.jpeg";
export const LandingImages = () => {
  return (
    <S.ImagesMainBLock>
      <S.ImageBlock>
        <S.Image src={TimeImage} />
      </S.ImageBlock>
      <S.ImageBlock>
        <S.Image src={TimeImage} />
      </S.ImageBlock>
      <S.ImageBlock>
        <S.Image src={TimeImage} />
      </S.ImageBlock>
      <S.ImageBlock>
        <S.Image src={TimeImage} />
      </S.ImageBlock>
      <S.ImageBlock>
        <S.Image src={TimeImage} />
      </S.ImageBlock>
      <S.ImageBlock>
        <S.Image src={TimeImage} />
      </S.ImageBlock>
    </S.ImagesMainBLock>
  );
};
