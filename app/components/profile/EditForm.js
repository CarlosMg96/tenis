import React, { useState } from "react";
import { View, Text, StyleSheet, Alert } from "react-native";
import { Input, Button, Icon } from "react-native-elements";
import { isEmpty } from "lodash";
import {
  getAuth,
  reauthenticateWithCredential,
  updatePassword,
  } from "firebase/auth";
import Loading from "../Loading";


export default function UpdatePassword(props) {
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(true);
  const [showPasswordVerificated, setShowPasswordVerificated] = useState(true);
  const [formDataPassword, setFormDataPassword] = useState({ password: "" });
  const [errorP, setErrorP] = useState({ password: "" });
  const change = (event, type) => {
    setFormDataPassword({
      ...formDataPassword,
      [type]: event.nativeEvent.text,
    });
  };

  const updateP = () => {
    if (isEmpty(formDataPassword.password)) {
      setErrorP({
        password: "Campo obligatorio",
      });
    } else {
      setErrorP({
        password: "",
      });
      
      //inicio de sesión
      // const resultReauthenticatication = await reauthenticateWithCredential(currentPassword)
      // try {
      //    await FirebaseError.auth().currentUser.updatePassword(formDataPassword.password)
      // } catch (error) {
      //     console.log(error)
      // }
      const auth = getAuth();

      const user = auth.currentUser;
      
    //   const credential = promptForCredentials();

     reauthenticateWithCredential(user, user.password).then(() => {
     updatePassword(user, formDataPassword.password).then(() => {
            setLoading(false)
          }).catch((error) => {
            // An error ocurred
            // ...
          });
      }).catch((error) => {
        // An error ocurred
        // ...
      });
      setLoading(true);
    }
  };

  // Nota cambiar diseño

  return (
    <View style={styles.container}>
      <Input
        placeholder="*****"
        rightIcon={
          <Icon
            type="material-community"
            name={showPassword ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#A0BC32"
            onPress={() => setShowPassword(!showPassword)}
          />
        }
        label="Contraseña:*"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        secureTextEntry={showPassword}
        onChange={(event) => change(event, "password")}
        errorMessage={errorP.password}
      />
       <Input
        placeholder="*****"
        rightIcon={
          <Icon
            type="material-community"
            name={showPasswordVerificated ? "eye-off-outline" : "eye-outline"}
            size={20}
            color="#A0BC32"
            onPress={() => setShowPasswordVerificated(!showPasswordVerificated)}
          />
        }
        label="Verifica contraseña:*"
        containerStyle={styles.containerInput}
        labelStyle={styles.labelInput}
        secureTextEntry={showPassword}
        onChange={(event) => change(event, "password")}
        errorMessage={errorP.password}
      />
      <Button
        title="Guardar contraseña"
        containerStyle={styles.btnContainer}
        buttonStyle={styles.btn}
        icon={
          <Icon name="sign-in" type="font-awesome" size={20} color="#FFF" />
        }
        iconContainerStyle={{ marginRight: 20 }}
        onPress={updateP}
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
      <Loading isVisible={loading} text="Actualizando..." />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 16,
  },
  containerInput: {
    width: "100%",
    marginBottom: 20,
  },
  labelInput: {
    fontSize: 20,
    color: "#A0BC32",
  },
  btnContainer: {
    width: "70%",
  },
  btn: {
    color: "#FFF",
    backgroundColor: "#A0BC32",
  },
  textCreateAccount: {
    color: "#1E84B6",
    marginTop: 16,
  },
});
