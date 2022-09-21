import React, { useState } from 'react';
import { View, Text, StyleSheet, Alert } from 'react-native'
import { Input, Button, Icon } from 'react-native-elements';
import { isEmpty } from 'lodash';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import Loading from '../Loading';

export default function LoginForm(props) {
    const [loading, setLoading] = useState(false)
    const [showPassword, setShowPassword] = useState(true)
    const [formData, setFormData] = useState({ email: "", password: "" })
    const [error, setError] = useState({ email: "", password: "" })
    const change = (event, type) => {
        setFormData({ ...formData, [type]: event.nativeEvent.text })
    }

    const login = () => {
        if (isEmpty(formData.email) || isEmpty(formData.password)) {
            setError({
                email: "Campo obligatorio",
                password: "Campo obligatorio"
            })
        } else {
            setError({
                email: "",
                password: ""
            })
            setLoading(true)
            //inicio de sesión
            const auth = getAuth();
            signInWithEmailAndPassword(auth, formData.email, formData.password)
                .then((userCredential) => {
                    console.log(userCredential);
                    console.log("Hoka");
                    setLoading(false)
                    navigation.navigate("profileStack")
                    
                })
                .catch((error) => {
                   
                    setLoading(false)
                    // alert("Usuaria o contraseña incorrectas");
                //    toastRef.current.show("Usuaria o contraseña incorrectas")
                
            });
        }
    }
    return (
        <View style={styles.container}>
            <Input
                placeholder="villa@email.com"
                keyboardType="email-address"
                rightIcon={
                    <Icon type="material-community"
                        name="email-outline"
                        size={20}
                        color="#A0BC32"
                    />
                }
                label="Correo electrónico:*"
                containerStyle={styles.containerInput}
                inputContainerStyle={styles.inputText}
                labelStyle={styles.labelInput}
                onChange={(event) => change(event, "email")}
                errorMessage={error.email}

            />

            <Input
                placeholder="*****"
                rightIcon={
                    <Icon type="material-community"
                        name={showPassword ? "eye-off-outline" : "eye-outline"}
                        size={20}
                        color="#A0BC32"
                        onPress={() => setShowPassword(!showPassword)}
                    />
                }
                 label="Contraseña:*"
                containerStyle={styles.containerInput}
                labelStyle={styles.labelInput}
                inputContainerStyle={styles.inputText}
                secureTextEntry={showPassword}
                onChange={(event) => change(event, "password")}
                errorMessage={error.password}

            />
            <Button
                title="Iniciar sesión"
                containerStyle={styles.btnContainer}
                buttonStyle={styles.btn}
                icon={
                    <Icon
                        name="sign-in"
                        type="font-awesome"
                        size={20}
                        color="#FFF"
                    />
                }
                iconContainerStyle={{ marginRight: 20 }}
                onPress={login}
            />
            {/* <Text style={styles.textCreateAccount} onPress={() => navigation.navigate("createAccount")}>
                <Icon
                    type="material-community"
                    name="account-plus"
                    size={16}
                    color="#1E84B6"
                />
                Crear cuenta
            </Text> */}
            <Loading isVisible={loading} text="Cargando..." />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
        backgroundColor: "#f1f1f1",
        width: "90%",
        height: 420,
        borderRadius: 15,
        marginLeft: 18.5,

    },
    containerInput: {
        width: "90%",
        marginBottom: 15,
        
        
    },
    inputText: {
        borderColor: "gray",
        borderRadius: 30,
        borderTopWidth: 0,
        borderEndWidth: 0,
        borderColor: "white",
        height: 50,
        backgroundColor:"#FFF",
        paddingStart: 20,
    },
    labelInput: {
        fontSize: 27,
        color: "#A0BC32",
        borderColor:'gray',
        padding: 10,
        
    },
    btnContainer: {
        width: "70%",
       
    },
    btn: {
        color: "#FFF",
        backgroundColor: "#A0BC32",
        borderRadius: 15,
    },
    textCreateAccount: {
        color: "#1E84B6",
        marginTop: 16,

    }
})
