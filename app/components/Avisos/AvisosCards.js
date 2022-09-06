import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  Alert,
  SafeAreaView,
  Linking,
} from "react-native";
import { Button, Icon } from "react-native-elements";
import { WebView } from "react-native-webview";

export default function AvisoCards({
  id,
  titulo,
  descripcion,
  file,
  categoria,
}) {
  function handleFile() {
    return file ? Linking.openURL(file) : Alert.alert("No hay archivo");
  }

  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>{titulo} </Text>
      <Text style={styles.description}>{descripcion} </Text>
      <Text style={styles.categoria}>{categoria} </Text>
      <Button title="Abrir Archivo" type="clear" onPress={handleFile}>
        <Icon name="folder-outline" type="material-icons" color="#A0BC32" />
      </Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 30,
  },
  imagen: {
    fontSize: 100,
  },
  titulo: {
    fontSize: 27,
    fontWeight: "bold",
    color: "#A0BC32",
  },
  description: {
    fontSize: 19,
  },
  categoria: {
    fontSize: 15,
    fontWeight: "bold",
    color: "gray",
  },
});
