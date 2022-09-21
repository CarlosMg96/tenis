import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  ScrollView,
  Alert,
  TouchableOpacity,
} from "react-native";
import { Icon, Image } from "react-native-elements";
import { db } from "../../utils/firebase";
import { deleteDoc, doc } from "firebase/firestore";

export default function Product({
  id,
  nombre,
  descripcion,
  descuento,
  file,
  Lugar,
  vigencia,

  createAlert = () => {
    Alert.alert("Cupón", `Cupón ${id}`, [
      {
        text: "Cancelar",
        onPress: () => console.log("Cancel Pressed"),
        style: "Cancelar",
      },
      {
        text: "Usar",
        onPress: () => {
          utilizado;
        },
      },
    ]);
  },

  utilizado = () => {
    const [aceptado, setAceptado] = useState("utilizado");
    console.log(id + "utilizado");
  },
}) {
  // Esto va en en la descarga osea en promociones

  return (
    <TouchableOpacity onPress={createAlert}>
      <View style={styles.container}>
        <Image
          PlaceholderContent={
            <ActivityIndicator size="large" color="#A0BC32" />
          }
          source={file ? { uri: file } : require("../../../assets/LOGO.png")}
          style={styles.imagen}
        />
        <Text style={styles.nombre}>{nombre} </Text>
        <Text style={styles.descripcion}>{descripcion} </Text>
        <Text style={styles.lugar}>Valido en {Lugar} </Text>
        <Text style={styles.rebaja}>{descuento?( descuento + "%"):(null) } </Text>
        <Text style={styles.fecha}>La promoción aplica hasta: {vigencia}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    margin: 16,
    borderRadius: 30,
    textAlign: "center",
  },
  imagen: {
    width: 346,
    height: 200,
    marginBottom: 15,
    borderRadius: 8,
  },
  nombre: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#A0BC32",
    textAlign: "center",
  },
  descripcion: {
    fontSize: 20,
    textAlign: "center",
  },
  rebaja: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
  },
  lugar: {
    fontSize: 16,
    textAlign: "center",
  },
  fecha: {
    fontSize: 13,
    textAlign: "center",
  },

  id: {
    fontSize: 12,
    textAlign: "center",
  },
});
