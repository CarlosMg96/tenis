import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Image, Button } from "react-native-elements"
import  Svg, {Path, Defs, Pattern, Use} from 'react-native-svg';

export default function GuestScreen(props) {
const { navigation } = props

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
        // fillOpacity={0.75}
      />
      {/* <Path
        d="M-.007 204.2C1.152 137.315 1.781 3.949-1-.488L428-2v206.2c-58.392 113.737-172.792 47.39-217.976 0-94.141-121.401-179.246-50.584-210.03 0Z"
        fill="#D9D9D9"
        fillOpacity={0.2}
      /> */}
      <Path
        d="M-.007 204.2C1.152 137.315 1.781 3.949-1-.488L428-2v206.2c-58.392 113.737-172.792 47.39-217.976 0-94.141-121.401-179.246-50.584-210.03 0Z"
        stroke="#A0BC32"
        // strokeOpacity={0.5}
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

return(
    <View style={styles.container}>
 
            <SvgTop/>
        <ScrollView style={styles.scrollb } centerContent={true}>
        <Text style={styles.title}>Bienvenido a la
         Villa Internacional del Tenis
        
        </Text>
        <Text style={styles.description}>
        Sí no eres socio, contáctate con nosotros.

                    
                </Text>
                {/* <Text style={styles.description}>
                Más información da clic en Conócenos
                </Text> */}
                <View style={styles.containerViewBtn}>
                    <Button
                        title="Iniciar sesión"
                        buttonStyle={styles.btn}
                        containerStyle={styles.btnContainer}
                        icon={{
                            name: 'sign-in',
                            type: 'font-awesome',
                            size: 15,
                            color: "white"
                        }}
                        iconContainerStyle={{ marginRight: 10 }}
                        onPress={() => navigation.navigate("login")}
                    />
                </View>
</ScrollView>
    </View>
)

}

const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: "100%",
        width: "100%",
    },
    scrollb:{
        marginLeft: 30,
        marginRight: 30,
    },
    img: {
        width: "100%",
        marginTop: 152,
        height: 150, 
        alignItems: "center",
        marginLeft: -5,

    },
    title: {
        fontWeight: "bold",
        fontSize: 29,
        marginTop: 30,
        textAlign: "center",
        marginTop: 60,
        color: "gray",
    },
    description: {
        textAlign: "center",
        marginTop: 15,
        color: "gray",
    },
    containerViewBtn: {
        flex: 1,
        alignItems: "center"
    },
    btn: {
        backgroundColor: "#A0BC32",
        color: "#FFF"
    },
    btnContainer: {
        width: "70%",
        borderRadius: 15,
        marginTop:70,
    }

})


