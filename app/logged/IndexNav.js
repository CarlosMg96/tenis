import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Icon } from "react-native-elements";
import PartnerStack from "./Partnerstack";
import AnunciosStack from "./AnunciosStack";
import ProfileStack from "../navigation/ProfileStack";
import RecreationStack from "./RecreationStack";
import AdStack from "./AdStack";
import DataStack from "./DataStack"

const Tab = createBottomTabNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="PartnerStack"
        screenOptions={({ route }) => ({
          tabBarIcon: ({ color }) => screenOptions(route, color),
          tabBarActiveTintColor: "#A0BC32",
          tabBarInactiveTintColor: "gray",
          headerShown: false,
        })}
      >
        <Tab.Screen
          name="AdvertisementStack"
          component={AnunciosStack}
          options={{ title: "Promociones" }}
        />
        <Tab.Screen
          name="AdStack"
          component={AdStack}
          options={{ title: "Avisos" }}
        />

        <Tab.Screen
          name="PartnerStack"
          component={PartnerStack}
          options={{ title: "Yo" }}
        />

        <Tab.Screen
          name="RecreationStack"
          component={RecreationStack}
          options={{ title: "Explorar" }}
        />

        <Tab.Screen
          name="ProfileStack2"
          component={ProfileStack}
          options={{ title: "Configuración" }}
        />
        {/* <Tab.Screen
          name="DataStack2"
          component={DataStack}
          options={{ title: "Configuración" }}
        /> */}
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const screenOptions = (route, color) => {
  let iconName;
  switch (route.name) {
    case "AdvertisementStack":
      iconName = "bell-outline";
      break;

    case "AdStack":
      iconName = "bell-ring-outline";
      break;

    case "PartnerStack":
      iconName = "account-outline";
      break;

    case "RecreationStack":
      iconName = "compass-outline";
      break;

    case "ProfileStack2":
      iconName = "cog-outline";
      break;
  
    // case "DataStack2":
    // iconName = "cog-outline";
    // break;
}
   
  return (
    <Icon type="material-community" name={iconName} size={27} color={color} />
  );
};
