import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
  Linking,
} from "react-native";
import { Icon, Image } from "react-native-elements";
import { db } from "../../utils/firebase";
import { deleteDoc, doc } from "firebase/firestore";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import colors from "../../../colors";
import SusPagos from "../../screens/parners/Pagos";
import Pagos from "../../screens/parners/Pagos"

export default function SocioCard({
  id,
  email,
  file,
  activo,
  apelativo,
  casilleros,
  colonia,
  cp,
  direccion,
  fIngreso,
  fNacimiento,
  importe,
  mesAdeudo,
  noMembresia,
  observaciones,
  pais,
  telCasa,
  telCelular,
  tipo,
  tipoPago,
  titular,
}) {
  const navigation = useNavigation();

  const [tipoP, setTipoP] = useState();
  const [pagoTipo, setPagoTipo ] = useState();
  
  useEffect(()=>{
    setPagoTipo(tipoPago);
    setTipoP(tipo);
    envio();
  },[]);

   console.log(tipoP);
   console.log(pagoTipo);
   
 
  const envio = async()=>{
    const status = await SusPagos(pagoTipo, tipoP);  
  };

  const handledOnPress = async() => {
    navigation.navigate("Pagos");   
  };

  return (
    <View style={styles.container}>
      <Image
        PlaceholderContent={<ActivityIndicator size="large" color="#A0BC32" />}
        source={file ? { uri: file } : require("../../../assets/LOGO.png")}
        style={styles.imagen}
      />
      <Text style={styles.titular}>
        {apelativo} {titular} No° {noMembresia}
      </Text>
      <Text style={styles.importe}>Importe: {importe}</Text>
      <Text style={styles.tipo}>
        Tipo: {tipo} Pago: {tipoPago}
      </Text>
      <Text style={styles.email}>Email: {email}</Text>
      <Text style={styles.direccion}>
        {" "}
        Direccion: {direccion} {cp} {colonia} {pais}
      </Text>
      <Text style={styles.ingreso}>Ingreso: {fIngreso}</Text>
      <Text style={styles.nacimiento}>Nacimiento: {fNacimiento}</Text>
      <Text style={styles.cacilleros}>Casillero: {casilleros}</Text>
      <Text style={styles.telefono}>
        Telefono Casa: {telCasa} telefono Celular: {telCelular}{" "}
      </Text>
      <Text style={styles.observaciones}>{observaciones}</Text>
      <Text style={styles.mesAdeudo}>{mesAdeudo}</Text>

      <View style={styles.containerB}>
        <TouchableOpacity
          onPress={handledOnPress}
          style={styles.chatButton}
        >
          <Entypo name="paypal" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>

      <View style={styles.containerB}>
        <TouchableOpacity
          onPress={() => navigation.navigate("Chat")}
          style={styles.chatButton}
        >
          <Entypo name="chat" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
    </View>
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
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 50,
  },
  observaciones: {
    padding: 30,
    backgroundColor: "#fff",
    margin: 30,
    borderRadius: 30,
    textAlign: "center",
  },
  titular: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 50,
  },
  tipo: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#A0BC32",
    textAlign: "center",
  },
  email: {
    fontSize: 15,
    textAlign: "center",
  },
  rebaja: {
    fontSize: 24,
    fontWeight: "bold",
    color: "gray",
    textAlign: "center",
  },
  direccion: {
    fontSize: 15,
    textAlign: "center",
  },

  telefono: {
    fontSize: 17,
    textAlign: "center",
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
  containerB: {
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "flex-end",
  },
  chatButton: {
    backgroundColor: colors.primary,
    height: 50,
    width: 50,
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: colors.primary,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.9,
    shadowRadius: 8,
    marginRight: 20,
    marginBottom: 50,
  },
});
