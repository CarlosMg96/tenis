import React, { useState } from "react"
import { View, StyleSheet, Text } from "react-native"
import { Avatar } from "react-native-elements";
import * as ImagePicker from "expo-image-picker"
import * as Permissions from "expo-permissions"
import { getAuth, updateProfile } from "firebase/auth";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage"
import Loading from "../Loading";

export default function UserInfo(props) {
    const { infoUser: { uid, photoURL, displayName, email } } = props;
    const [loading, setLoading] = useState(false)

    const changeAvatar = async () => {
        const resultPermissions = await Permissions.askAsync(Permissions.CAMERA)
        if (resultPermissions.permissions.camera.status !== 'denied') {
            let result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.Images,
                allowsEditing: true,
                aspect: [4, 4],
                quality: 1,
                //base64: true
            })
            if (!result.cancelled) {
                uploadImage(result.uri).then((result) => {
                    console.log("entro a actualizar");
                    uploadPhotoUrl()
                }).catch((err) => {
                    setLoading(false)
                    console.log("error-> no se porque: ", err);
                })
            } else {
                console.log("Es necesario seleccionar una imagen");
            }

        } else {
            console.log("Es necesario aceptar los permisos");
        }
    }

    const uploadImage = async (uri) => {
        setLoading(true)
        const response = await fetch(uri)
        const { _bodyBlob } = response
        const storage = getStorage()
        // storageRef se refiere al nombre de la imagen con esto podemos normalizar
        const storageRef = ref(storage, `avatars/socio${uid}`)
        return uploadBytes(storageRef, _bodyBlob)
    }

    const uploadPhotoUrl = () => {
        console.log("llego");
        const storage = getStorage()
        getDownloadURL(ref(storage, `avatars/socio${uid}`))
            .then((url) => {
                console.log(url);
                const auth = getAuth()
                updateProfile(auth.currentUser, {
                    photoURL: url
                }).then(() => {
                    setLoading(false)
                    console.log("foto de perfil actualizada");
                }).catch(() => {
                    setLoading(false)
                    console.log("no se pudo actualizar la imagen de perfil");
                })
            }).catch((err) => {
                setLoading(false)
                console.log("no se pudo actualizar la imagen de perfil");
            })
    }

    return (
        <View style={styles.container}>
            <Avatar
                rounded
                size="large"
                containerStyle={styles.avatarContainer}
                source={photoURL ? { uri: photoURL } : require("../../../assets/person1.png")}
            >
                <Avatar.Accessory
                    size={22}
                    onPress={changeAvatar}
                />
            </Avatar>
            <View>
                <Text style={styles.displayName}>
                    {displayName ? displayName : "Socio"}
                </Text>
                <Text>
                    {email ? email : "Red social"}
                </Text>
            </View>
        <Loading isVisible={loading} text="Actualizando foto de perfil" />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "row",
        backgroundColor: "#FFF",
        paddingTop: 30,
        paddingBottom: 30,
    },
    avatarContainer: {
        marginRight: 20,
    },
    displayName: {
        fontWeight: "bold",
        paddingBottom: 5,
    }


})