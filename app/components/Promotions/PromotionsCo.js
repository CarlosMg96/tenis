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
import { Icon, Image, Card } from "react-native-elements";
import { db } from "../../utils/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { Col, Row, Grid } from 'react-native-easy-grid';


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
    <Card containerStyle={styles.card}>
        <Card.Title  style={styles.titulos}>{nombre}</Card.Title>
        <Card.Divider />
        <Grid>
          <Row>
            <Col style={styles.marcoi}>
            <Card.Image
          style={styles.imagen}
          source={file ? { uri: file } : require("../../../assets/LOGO.png")}
        />
            </Col>
          </Row>
      
       
       <Row>
            <Col style={styles.marco}>
            <Text style={styles.descripcion}>{"\n"}{descripcion} {"\n"} </Text>
        <Text style={styles.descripcion}>Valido en {Lugar} </Text>
        <Text style={styles.descripcion}>{descuento?( "Aplica con un descuento de " + descuento ):(null) }{"\n"} </Text>
        <Text style={styles.fecha}>La promoción aplica hasta: {vigencia}{"\n"}</Text>
            </Col>
          </Row>
       </Grid>
      </Card>
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
    borderWidth: 5,
    borderColor: "gray",
    alignItems: "center",
  },
  imagen: {
    width: 330,
    height: 200,
    marginBottom: 15,
    borderRadius: 10,
  },
  marco: {
    backgroundColor: "#f1f1f1",
    margin: 7,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  marcoi: {
    alignItems: "center",
  },
  titulos:{
    textAlign: "center",
    fontSize: 25,
    fontWeight: "bold",
    margin: 6,
    color: "gray",
  },
  descripcion: {
    textAlign: "center",
    fontSize: 15,
  },
  fecha: {
    fontSize: 13,
    textAlign: "center",
    fontStyle: "italic",
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
  

  id: {
    fontSize: 12,
    textAlign: "center",
  },
  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    borderColor: "transparent",
    borderWidth: 1,
  },
});
