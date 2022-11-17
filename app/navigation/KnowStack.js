import {
  StyleSheet,
  Text,
  View,
  Button,
  Alert,
  SafeAreaView,
} from "react-native";
import React, { useEffect, useState, Component, useLayoutEffect } from "react";
import { WebView } from "react-native-webview";
import Toast from "react-native-simple-toast";
import { auth } from "../utils/firebase"

export default function Know() {
  useLayoutEffect(() => {
      console.log(auth?.currentUser)
      if (auth.currentUser) {
        console.log("No paso por aquí")
      } else {
        Alert.alert("¿Tienes cuenta con nosotros?",
        "Si es así da clic en el botón de perfil que se encuentra en la parte inferior derecha, para que inicies sesión.");   
      }
    }, []);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <WebView
        source={{
          uri: "http://www.villainternacionaldetenis.com/",
        }}
        style={{ marginTop: 1 }}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
