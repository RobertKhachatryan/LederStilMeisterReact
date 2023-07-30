import React from "react";
import * as S from "./LandingImages.styles";
import TimeImage from "../../../images/time.jpeg";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useTranslation } from "react-i18next";

export const LandingImages = () => {
  const { t } = useTranslation();

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    // <S.ImagesMainBLock>
    <>
      <S.Title>{t("LandingImages.ourProducts")}</S.Title>
      <Carousel
        swipeable={true}
        draggable={false}
        responsive={responsive}
        infinite={true}
        autoPlay={true}
        autoPlaySpeed={4000}
        minimumTouchDrag={50}
      >
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
      </Carousel>
    </>
    // </S.ImagesMainBLock>
  );
};
