import React from "react";
import styled from "styled-components/native";
import clock from "../../../../assets/clock.png";
import down from "../../../../assets/down.png";
import { Image, View, Text } from "react-native";

const StyledWhereToView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  background-color: #e7e8ec;
  padding: 10px;
`;

const StyledWhereToText = styled.Text`
  font-size: 20px;
  color: black;
  padding: 5px;
  letter-spacing: 1px;
  font-weight: 700;
`;

const StyledNowView = styled.View`
  background-color: white;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 5px 10px;
  border-radius: 50px;
`;

const StyledNowText = styled.Text`
  font-size: 15px;
  color: black;
  font-weight: 700;
`;

const StyledNowImage = styled.Image`
  height: 35px;
  width: 35px;
`;

export const WhereTo = () => {
  return (
    <StyledWhereToView>
      <StyledWhereToText>{"Where to?"}</StyledWhereToText>
      <StyledNowView>
        <StyledNowImage source={clock}></StyledNowImage>
        <StyledNowText>{"Now"}</StyledNowText>
        <StyledNowImage source={down}></StyledNowImage>
      </StyledNowView>
    </StyledWhereToView>
  );
};
