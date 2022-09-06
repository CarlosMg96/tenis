import React from "react"
import { View, Text, StyleSheet, ScrollView } from "react-native"
import { Image, Button } from "react-native-elements"

export default function GuestScreen(props) {
const { navigation } = props
return(
    <View style={styles.container}>
 <ScrollView style={styles.scrollb } centerContent={true}>
    <Image 
        source={ require('../../../assets/LOGO.png')}
        resizeMode={'center'}
        style={styles.img}
        />
        <Text style={styles.title}>Bienvenido a la
         Villa Internacional del Tenis
        
        </Text>
                <Text style={styles.description}>
                    Sí quieres ser un socio más contacte con nosotros.
                    
                </Text>
                <Text style={styles.description}>
                Más información da clic en Conócenos
                </Text>
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
    },
    scrollb:{
        marginLeft: 30,
        marginRight: 30,
    },
    img: {
        width: "100%",
        height: 150,
    },
    title: {
        fontWeight: "bold",
        fontSize: 19,
        marginBottom: 30,
        textAlign: "center",
    },
    description: {
        textAlign: "center",
        marginBottom: 16,
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
        width: "70%"
    }
})


