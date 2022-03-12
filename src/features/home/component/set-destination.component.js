import React from "react";
import styled from "styled-components/native";
import mappin from "../../../../assets/mappin.png";
import right from "../../../../assets/right.png";

const StyledDestinationView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin: 20px;
  margin-top: 0px;
  padding-bottom: 10px;
`;

const BorderView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 20px;

  margin-top: 0px;
  margin-bottom: 0px;
  border: 2px solid white;
  border-bottom-color: #e7e8ec;
`;

const StyledDestinationText = styled.Text`
  font-size: 18px;
  color: black;
  padding: 10px;
  letter-spacing: 1px;
  font-weight: 700;
  flex: 1;
`;

const StyledDestinationImage = styled.Image`
  height: 35px;
  width: 35px;
`;
const StyledDestinationStar = styled.Image`
  width: 25px;
  height: 25px;
  border-radius: 50px;
  padding: 15px;
  background-color: #e7e8ec;
`;
export const SetDestination = () => {
  return (
    <StyledDestinationView>
      <StyledDestinationStar source={mappin}></StyledDestinationStar>
      <BorderView>
        <StyledDestinationText>
          {"Set destination on map"}
        </StyledDestinationText>
        <StyledDestinationImage source={right}></StyledDestinationImage>
      </BorderView>
    </StyledDestinationView>
  );
};
