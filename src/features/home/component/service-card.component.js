import React from "react";
import styled from "styled-components/native";
import { Image } from "react-native";

const StyledServiceCard = styled.View`
  background-color: #e7e8ec;
  width: ${(props) => (props.size === "l" ? "150px" : "100px")};

  height: 90px;
  border-radius: 10px;
  display: flex;
  justify-content: flex-end;
  padding: 8px;
`;

const StyledServiceText = styled.Text`
  text-align: ${(props) => (props.size === "l" ? "left" : "center")};
  font-size: ${(props) => (props.size === "l" ? "20px" : "18px")};
  font-weight: 700;
`;

const StyledServiceImage = styled.Image`
  width: ${(props) => (props.size === "l" ? "100px" : "80px")};
  align-self: ${(props) => (props.size === "l" ? "flex-end" : "center")};
  top: ${(props) => (props.size === "l" ? "0px" : "-5px")};
  bottom: ${(props) => (props.size === "l" ? "0px" : "0")};
  right: ${(props) => (props.size === "l" ? "0px" : "10px")};
  position: absolute;
  height: ${(props) => (props.size === "l" ? "100px" : "80px")};
`;

export const ServiceCard = ({ title, size, image }) => {
  return (
    <StyledServiceCard size={size}>
      <StyledServiceImage size={size} source={image}></StyledServiceImage>
      <StyledServiceText size={size}>{title}</StyledServiceText>
    </StyledServiceCard>
  );
};
