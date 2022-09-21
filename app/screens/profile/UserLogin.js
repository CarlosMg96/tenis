import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, StyleSheet } from "react-native";
import { Image } from "react-native-elements";
import LoginForm from "../../components/profile/LoginForm";
import  Svg, {Path, Defs, Pattern, Use} from 'react-native-svg';

export default function UserLogin() {
  const navigation = useNavigation();
  //   const toastRef = useRef()   //  LoginForm navigation equals navigation toastRef equals toastRef
// import Svg, {Path, Defs, LinearGradient, Stop} from "react-native-svg";
    function SvgTop(){
        return (
          <Svg
          width={428}
          height={278}
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink"
          
        >
          <Path
            d="M-.007 204.2C1.152 137.315 1.781 3.949-1-.488L428-2v206.2c-58.392 113.737-172.792 47.39-217.976 0-94.141-121.401-179.246-50.584-210.03 0Z"
            fill="#A0BC32"
            fillOpacity={0.75}
          />
          <Path
            d="M-.007 204.2C1.152 137.315 1.781 3.949-1-.488L428-2v206.2c-58.392 113.737-172.792 47.39-217.976 0-94.141-121.401-179.246-50.584-210.03 0Z"
            fill="#D9D9D9"
            fillOpacity={0.2}
          />
          <Path
            d="M-.007 204.2C1.152 137.315 1.781 3.949-1-.488L428-2v206.2c-58.392 113.737-172.792 47.39-217.976 0-94.141-121.401-179.246-50.584-210.03 0Z"
            stroke="#A0BC32"
            strokeOpacity={0.5}
          />
          <Path fill="url(#a)" d="M141 133h145v145H141z" />
          <Defs>
            <Pattern
              id="a"
              patternContentUnits="objectBoundingBox"
              width={1}
              height={1}
            >
              <Use xlinkHref="#b" transform="scale(.00024)" />
            </Pattern>
            <Image
          source={require("../../../assets/LOGO.png")}
          resizeMode="contain"
          style={styles.img}
        />
          </Defs>
        </Svg>
        )
    }

  return (
    <View style={styles.container}>
      <ScrollView>
        <SvgTop/>
        
        <LoginForm navigation={navigation} />
      </ScrollView>
      {/* <Toast
                ref={toastRef}
                opacity={0, 9}
                position="center"
            /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
    height: "100%",
  },
  img: {
    width: "80%",
    height: 150,
    marginTop: 137,
  marginLeft: 31,
  },
});
