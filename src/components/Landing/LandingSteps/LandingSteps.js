import React from "react";
import * as S from "./LandingSteps.styles";
import { StepData } from "./StepData";

export const LandingSteps = () => {
  console.log(StepData);
  return (
    <S.Main>
      {StepData.map((step) => {
        return (
          <S.StepBlock key={step?.id * Math.random()}>
            <S.StepNumber>{step?.number}</S.StepNumber>
            <S.StepText>{step?.text}</S.StepText>
          </S.StepBlock>
        );
      })}
    </S.Main>
  );
};
