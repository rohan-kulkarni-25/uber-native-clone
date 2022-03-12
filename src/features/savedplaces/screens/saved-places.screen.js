import React from "react";
import { Text, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import styled from "styled-components/native";
import Arrow from "./../../../../assets/down.png";

const StyledTitled = styled.View`
  background-color: #e7e8ec;
  display: flex;

  flex-direction: row;
  padding: 15px;
  align-items: center;
`;

const StyledTitleText = styled.Text`
  font-size: 25;
  margin-left: 10px;
`;

const StyledSavedPlaces = styled.View`
  padding: 15px;
`;
const StyledSavedPlacesHeading = styled.Text`
  font-size: 15;
  margin-left: 10px;
  color: blue;
`;
const StyledSavedPlacesSubHeading = styled.Text`
  font-size: 12;
  margin-top: 5px;
  color: grey;
  margin-left: 10px;
`;
export const SavedPlaces = ({ navigation }) => {
  return (
    <SafeAreaView>
      <StyledTitled>
        <TouchableOpacity onPress={() => navigation.navigate("Home")}>
          <Image source={Arrow} style={{ width: 20, height: 20 }} />
        </TouchableOpacity>

        <StyledTitleText>{"Choose a destination"}</StyledTitleText>
      </StyledTitled>
      <StyledSavedPlaces>
        <StyledSavedPlacesHeading>{"Add saved place"}</StyledSavedPlacesHeading>
        <StyledSavedPlacesSubHeading>
          {"Get to your favourite destinations later"}
        </StyledSavedPlacesSubHeading>
      </StyledSavedPlaces>
    </SafeAreaView>
  );
};
