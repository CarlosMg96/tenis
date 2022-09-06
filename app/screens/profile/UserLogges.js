import React, { useEffect, useState } from "react"
import { View, Text, StyleSheet } from "react-native"
import { Button } from "react-native-elements/dist/buttons/Button"
import { useNavigation } from "@react-navigation/native";
import { getAuth } from "firebase/auth"
import UserInfo from "../../components/profile/UserInfo"
import EditForm from "../../components/profile/EditForm"



export default function UserLogged(props) {
    const [reaload, setReaload] = useState(false)
    const [infoUser, setInfoUser] = useState(null)
    const navigation = useNavigation()


    const auth = getAuth()
    useEffect(() => {
        (async () => {
            const user = await auth.currentUser
            setInfoUser(user)
            console.log("datos: " ,infoUser);
        })()
        setReaload(false)
    }, [reaload])
    
    return (
        <View style={styles.container}>
            {infoUser && <UserInfo 
                infoUser={infoUser}
            />}
         <View style={styles.containertwo}>
         <Button
                title="Cerrar sesión"
                buttonStyle={styles.btn}
                titleStyle={styles.btnTitle}
                onPress={() => auth.signOut()}
            />
             <Button
                title="Cambiar contraseña"
                buttonStyle={styles.btn}
                titleStyle={styles.btnTitle}
            onPress={() => navigation.navigate('updateForm')}
            />

         </View>
        </View>
       
    )

}


const styles = StyleSheet.create({
    container: {
        minHeight: "100%",
        backgroundColor: "#FFF"
    },
    containertwo: {
        minHeight: "100%",
        minWidth: "10%",
        backgroundColor: "#FFF",
        flex: 1    },
    btnTitle: {
        color: "#A0BC32"
    },
    btn: {
        marginTop: 30,
        borderRadius: 30,
        backgroundColor: "#FFF",
        borderTopWidth: 1,
        borderTopColor: "#A0BC32",
        borderBottomWidth: 1,
        borderBottomColor: "#A0BC32",
        paddingTop: 10,
        paddingBottom: 10,
    }
})

