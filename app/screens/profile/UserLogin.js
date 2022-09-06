import { useNavigation } from "@react-navigation/native";
import React from "react";
import { View, Text, ScrollView, StyleSheet }  from "react-native";
import { Image } from "react-native-elements";
import LoginForm from "../../components/profile/LoginForm";


export default function UserLogin(){
    const navigation = useNavigation()
 //   const toastRef = useRef()   //  LoginForm navigation equals navigation toastRef equals toastRef
    return (
        <View style={styles.container}>
            <ScrollView>
                <Image
                    source={require("../../../assets/logo2.jpg")}
                    resizeMode='contain'
                    style={styles.img}
                />
                <LoginForm navigation={navigation}  />
             

            </ScrollView>
            {/* <Toast
                ref={toastRef}
                opacity={0, 9}
                position="center"
            /> */}
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        backgroundColor: "#FFF",
        height: "100%"
    },
    img: {
        width: "100%",
        height: 150,
        marginTop: 20,
        marginBottom: 20,
    }
});