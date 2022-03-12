import React, { useEffect, useState } from "react";
import styled from "styled-components/native";
import { Text, Dimensions } from "react-native";
import MapView from "react-native-maps";

const StyledAroundYou = styled.View`
  margin: 10px;
  margin-top: 0;
  padding: 20px;
`;

const StyledAroundYouText = styled.Text`
  font-size: 20px;
  color: black;
  letter-spacing: 1px;
  font-weight: 700;
  flex-grow: 1;
`;

const StyledMapView = styled.View`
  margin-top: 20px;
  border-radius: 10px;
  z-index: 2;
  overflow: hidden;
`;

export const AroundYou = ({ location }) => {
  const [map, setMap] = useState(
    <MapView
      style={{ width: "100%", height: 200, overflow: "hidden", zIndex: 1 }}
    ></MapView>
  );
  const setLocation = () => {
    if (location) {
      let locationValues = {
        latitude: location.coords.latitude,
        longitude: location.coords.longitude,
        latitudeDelta: 0.006866,
        longitudeDelta: 0.004757,
      };
      setMap(
        <MapView
          style={{ width: "100%", height: 200, overflow: "hidden", zIndex: 1 }}
          initialRegion={locationValues}
        ></MapView>
      );
    }
  };
  useEffect(() => {
    setLocation();
  }, [location]);
  return (
    <StyledAroundYou>
      <StyledAroundYouText>{"Around you"}</StyledAroundYouText>
      <StyledMapView>{map}</StyledMapView>
    </StyledAroundYou>
  );
};
