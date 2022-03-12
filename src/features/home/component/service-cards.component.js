import React from "react";
import { View, Text } from "react-native";
import { ServiceCard } from "../component/service-card.component";
import uberCar from "./../../../../assets/uber_car.png";
import parcel from "./../../../../assets/parcel.png";
import rentals from "./../../../../assets/rentals.png";
import intercity from "./../../../../assets/intercity.png";
import transit from "./../../../../assets/transit.png";

export const ServiceCards = () => {
  return (
    <View
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        margin: 5,
      }}
    >
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 10,
        }}
      >
        <ServiceCard title="Ride" size="l" image={uberCar}></ServiceCard>
        <ServiceCard title="Parcel" size="l" image={parcel}></ServiceCard>
      </View>
      <View
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-around",
          margin: 10,
        }}
      >
        <ServiceCard title="Rentals" size="s" image={rentals}></ServiceCard>
        <ServiceCard title="Transit" size="s" image={transit}></ServiceCard>
        <ServiceCard title="Intercity" size="s" image={intercity}></ServiceCard>
      </View>
    </View>
  );
};
