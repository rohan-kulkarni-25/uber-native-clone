import React from "react";
import styled from "styled-components/native";
import star from "../../../../assets/star.png";
import right from "../../../../assets/right.png";
const StyledChoosePlaces = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  margin-top: 0px;
  padding-bottom: 0px;
`;

const BorderView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  border: 2px solid white;
  border-bottom-color: #e7e8ec;
`;

const StyledWhereToText = styled.Text`
  font-size: 18px;
  color: black;
  padding: 10px;
  letter-spacing: 1px;
  font-weight: 700;
  flex: 1;
`;

const StyledNowImage = styled.Image`
  height: 35px;
  width: 35px;
`;
const StyledNowStar = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  background-color: #e7e8ec;
`;
export const ChooseSaved = () => {
  return (
    <StyledChoosePlaces>
      <StyledNowStar source={star}></StyledNowStar>
      <BorderView>
        <StyledWhereToText>{"Choose a saved place"}</StyledWhereToText>
        <StyledNowImage source={right}></StyledNowImage>
      </BorderView>
    </StyledChoosePlaces>
  );
};
