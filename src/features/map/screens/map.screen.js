import MapView, { Marker } from "react-native-maps";
// import { MapForm } from "./../components/map-form";
import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  Image,
  Button,
  TouchableOpacity,
} from "react-native";
import styled from "styled-components/native";
import Down from "./../../../../assets/star.png";
import star from "./../../../../assets/star.png";
import * as Location from "expo-location";

const StyledMapFormView = styled.View`
  position: absolute;
  top: 50px;
  background-color: white;
  width: 100%;
  padding: 10px;
`;

const StyledView = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin: 5px;

  width: 100%;
`;

const StyledTextInputTo = styled.TextInput`
  border: 1px solid black;
  padding: 5px;
  width: 75%;
`;

const StyledTextInputFrom = styled.TextInput`
  padding: 5px;
  border: 1px solid black;
  width: 75%;
`;
const StyledImage = styled.Image`
  width: 30px;
  height: 30px;
`;

const StyledConnector = styled.Image`
  width: 2px;
  background-color: grey;
  height: 50px;
  left: 46px;
  top: 20px;
  position: absolute;
`;

const StyledButton = styled.Text`
  background-color: black;
  color: white;
  padding: 10px;
  text-align: center;
`;
export const MapScreen = () => {
  const [from, setFrom] = React.useState("");
  const [to, setTo] = React.useState("");
  const [toLocation, setToLocation] = React.useState(null);
  const [coords, setCoords] = React.useState("");
  const [fromLocation, setFromLocation] = React.useState(null);
  const [initialRegionState, setInitialRegionState] = useState({});

  const getLocation = async () => {
    try {
      let toObject = await Location.geocodeAsync(to);
      // let fromObject = await Location.geocodeAsync(from);
      setToLocation(toObject[0]);
      // setFromLocation(fromObject[0]);
    } catch (error) {
      console.log(error);
    }
  };

  // const plotDirection = () => {
  //   console.log(`I AM CALLED`);
  //   if (toLocation && fromLocation) {
  //     const mode = "driving"; // 'walking';
  //     const origin = fromLocation;
  //     const destination = toLocation;
  //     const APIKEY = "AIzaSyAYe0hMjvdpMFt8Av1Grjx2S9xWIT4pjT4";
  //     const url = `https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&destination=${destination}&key=${APIKEY}&mode=${mode}`;

  //     fetch(url)
  //       .then((response) => response.json())
  //       .then((responseJson) => {
  //         if (responseJson.routes.length) {
  //           setCoords({
  //             coords: decode(responseJson.routes[0].overview_polyline.points), // definition below
  //           });
  //           console.log(coords);
  //           setMap(
  //             <MapView.Polyline
  //               coordinates={[
  //                 {
  //                   latitude: fromLocation.latitude,
  //                   longitude: fromLocation.longitude,
  //                 }, // optional
  //                 ...coords,
  //                 {
  //                   latitude: toLocation.latitude,
  //                   longitude: toLocation.longitude,
  //                 }, // optional
  //               ]}
  //               strokeWidth={4}
  //             />
  //           );
  //         }
  //       })
  //       .catch((e) => {
  //         console.warn(e);
  //       });
  //   }
  // };

  // const decode = () => {
  //   for (
  //     var n,
  //       o,
  //       u = 0,
  //       l = 0,
  //       r = 0,
  //       d = [],
  //       h = 0,
  //       i = 0,
  //       a = null,
  //       c = Math.pow(10, e || 5);
  //     u < t.length;

  //   ) {
  //     (a = null), (h = 0), (i = 0);
  //     do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
  //     while (a >= 32);
  //     (n = 1 & i ? ~(i >> 1) : i >> 1), (h = i = 0);
  //     do (a = t.charCodeAt(u++) - 63), (i |= (31 & a) << h), (h += 5);
  //     while (a >= 32);
  //     (o = 1 & i ? ~(i >> 1) : i >> 1),
  //       (l += n),
  //       (r += o),
  //       d.push([l / c, r / c]);
  //   }
  //   return (d = d.map(function (t) {
  //     return { latitude: t[0], longitude: t[1] };
  //   }));
  // };
  // transforms something like this geocFltrhVvDsEtA}ApSsVrDaEvAcBSYOS_@... to an array of coordinates

  const resetMapView = () => {
    console.log(`I AM CALLED`);
    if (toLocation) {
      setInitialRegionState({
        latitude: toLocation.latitude,
        longitude: toLocation.longitude,
        latitudeDelta: 0.006866,
        longitudeDelta: 0.004757,
      });
    }
  };

  // useEffect(() => {
  //   // resetMapView();
  // }, [toLocation, fromLocation]);

  useEffect(() => {
    resetMapView();
  }, [toLocation]);

  return (
    <View>
      <MapView
        style={{ width: "100%", height: "100%" }}
        initialRegion={initialRegionState}
      />
      <StyledMapFormView>
        <View>
          <StyledConnector />
          <StyledView>
            <StyledImage source={Down}></StyledImage>
            <StyledTextInputTo
              label="Email"
              value={from}
              onChangeText={(from) => setFrom(from)}
            />
          </StyledView>
          <StyledView>
            <StyledImage source={Down}></StyledImage>

            <StyledTextInputFrom
              label="Email"
              value={to}
              onChangeText={(to) => setTo(to)}
            />
          </StyledView>
          <TouchableOpacity>
            <StyledButton onPress={getLocation}>{"GET LOCATION"}</StyledButton>
          </TouchableOpacity>
        </View>
      </StyledMapFormView>
    </View>
  );
};
