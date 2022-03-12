import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Platform,
} from "react-native";
import { AroundYou } from "../component/around-you.component";
import { ChooseSaved } from "../component/choose-saved-place.component";
import { ServiceCards } from "../component/service-cards.component";
import { SetDestination } from "../component/set-destination.component";
import { WhereTo } from "../component/where-to.component";
import * as Location from "expo-location";
import { SavedPlaces } from "../../savedplaces/screens/saved-places.screen";
const height = Platform.OS === "android" ? StatusBar.currentHeight : "";
export const HomeScreen = ({ navigation }) => {
  const [location, setLocation] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);
  useEffect(() => {
    (async () => {
      let { status } = await Location.requestForegroundPermissionsAsync();
      if (status !== "granted") {
        setErrorMsg("Permission to access location was denied");
        return;
      }

      let location = await Location.getCurrentPositionAsync({});
      setLocation(location);
    })();
  }, []);
  return (
    <SafeAreaView style={{ marginTop: height, backgroundColor: "white" }}>
      <ScrollView>
        <ServiceCards />
        <TouchableOpacity onPress={() => navigation.navigate("Map")}>
          <WhereTo />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Saved Places")}>
          <ChooseSaved />
        </TouchableOpacity>
        <SetDestination />
        <AroundYou location={location} />
      </ScrollView>
    </SafeAreaView>
  );
};
