import React, { useEffect, useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Button,
} from "react-native";
import { Icon, Image, Card } from "react-native-elements";
import { useNavigation } from "@react-navigation/native";
import { Entypo } from "@expo/vector-icons";
import colors from "../../../colors";
import SusPagos from "../../screens/parners/Pagos";
import { Col, Row, Grid } from 'react-native-easy-grid';
import  Svg, {Path, Defs, Pattern, Use, Fill, Stroke} from 'react-native-svg';

export default function SocioCard({
  id,
  email,
  file,
  estado,
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
  fileM,
  nombreEs,
  statusSuscribe,
  montoTP,
  ultimoPa,
}) {
  const navigation = useNavigation();

  const [tipoP, setTipoP] = useState();
  const [pagoTipo, setPagoTipo ] = useState();
  
  
  useEffect(()=>{
    setPagoTipo(tipoPago);
    setTipoP(tipo);
    // envio();
  },[]);

  //  console.log(tipoP);
  //  console.log(pagoTipo);
   
 
  // const envio = async()=>{
  //   const status = await SusPagos(pagoTipo, tipoP);  
  // };


  const handledOnPress = async() => {
    navigation.navigate("Pagos");   
  };

  function Svgg() {
    return (
      <Svg
      width={428}
    height={155}
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M-10.963 117.814C-9.753 79.274-9.096 2.428-12-.129L436-1v118.814c-60.978 65.536-180.444 27.307-227.63 0-98.311-69.952-187.185-29.147-219.333 0Z"
      Fill="#A0BC32"
      Stroke="#A0BC32"
    />
        <Defs>
        <Pattern
          id="a"
          patternContentUnits="objectBoundingBox"
          width={1}
          height={1}
        >
          <Use xlinkHref="#b" transform="scale(.00024)" />
        </Pattern>
       <Text style={styles.TituloP}> Bienvenido  </Text>
      </Defs>
    </Svg>
    )
  }

  return (
    <View style={styles.container}>
     <Svgg/>
     <Card containerStyle={styles.card}>
          <Card.Title style={styles.titulos}> {apelativo} {titular} {"\n"} Membresia No° {noMembresia}</Card.Title>
          <Card.Divider />
          <Grid>
          <Row>
            <Col style={styles.marcoi}>
            <Card.Image
            PlaceholderContent={<ActivityIndicator size="large" color="#A0BC32" />}
            source={file ? { uri: file } : require("../../../assets/LOGO.png")}
            style={styles.imagen}
          />
            </Col>
            <Col style={styles.marcoi}>
            <Card.Image
            PlaceholderContent={<ActivityIndicator size="large" color="#A0BC32" />}
            source={fileM ? { uri: fileM } : require("../../../assets/LOGO.png")}
            style={styles.imagen}
          />
            </Col>
          </Row>

          <Row>
            <Col>
            {/* <Text style={styles.titulos}>Estado</Text> */}
            {estado === "Activo" ? <Text style={styles.activo}>{estado}</Text> :
             <Text style={styles.inactivo}>{estado}</Text>}
  
            </Col>
          </Row>
          <Row>
            <Col>
            {/* <Text style={styles.titulos}>Estado</Text> */}
            {statusSuscribe === "Success" ? <Text style={styles.activoS}>Suscrito</Text> :
             <Text style={styles.inactivoS}>Suscribete</Text>}
  
            </Col>
            <Col style={styles.marco2filas}>
            <Text style={styles.titulos}>Meses con adeudo</Text>
            <Text style={styles.descripcion}>{mesAdeudo}{"\n"}</Text>
            </Col>
          </Row>

          <Row>
          <Col style={styles.marco}>
              <Text style={styles.titulos}>Ultimo Pago</Text>
              <Text style={styles.descripcion} >Falta parsear la fecha{"\n"}</Text>
            </Col>
            <Col style={styles.marco}>
              <Text style={styles.titulos}>Total Pagado</Text>
              <Text style={styles.descripcion}>{montoTP}{"\n"}</Text>
            </Col>
          </Row>

          <Row>
            <Col style={styles.marco}>
            <Text style={styles.titulos}>Correo</Text>
            <Text style={styles.descripcion}>{email}{"\n"}</Text>
            </Col>
          </Row>


          <Row>
            <Col style={styles.marco2filas }>
              <Text style={styles.titulos}>Tipo de membresia: </Text>
              <Text style={styles.descripcion}>{tipo} {"\n"}</Text>
            </Col>
            <Col style={styles.marco}>
            <Text style={styles.titulos}>Tipo de Pago: </Text>
            <Text style={styles.descripcion}>{tipoPago} {"\n"}</Text>
            </Col>
          </Row>
          <Row>
            <Col style={styles.marco }>
              <Text style={styles.titulos}>Suscripción: </Text>
              <View style={styles.containerB}>
        <TouchableOpacity
          onPress={handledOnPress}
          style={styles.chatButton}
        >
          <Entypo name="paypal" size={24} color={colors.white} />
        </TouchableOpacity>
      </View>
            </Col>
            <Col style={styles.marco}>
            <Text style={styles.titulos}>Chat: </Text>
            <View style={styles.containerB}>
           <TouchableOpacity
             onPress={() => navigation.navigate("Chat")}
             style={styles.chatButton}
           >
             <Entypo name="chat" size={24} color={colors.white} />
           </TouchableOpacity>
         </View>
            </Col>
          </Row>
          {nombreEs? <Row>
              <Col style={styles.marco}>
              <Text style={styles.titulos}>Nombre del espos@: </Text>
                <Text style={styles.descripcion}> {nombreEs} {"\n"}</Text>
              </Col>  
          </Row>: null}
          <Row>
            <Col style={styles.marco}>
            <Text style={styles.titulos}>Dirección</Text>
            <Text style={styles.descripcion}>
             {direccion}, cp {cp}, colonia {colonia}, país {pais} {"\n"}
          </Text>
            </Col>
          </Row>
          <Row>
          <Col style={styles.marco}>
            <Text style={styles.titulos}>Contacto</Text>
            <Text style={styles.descripcion}>Teléfono de Celular: {telCelular} {"\n"}
            Teléfono de Casa: {telCasa} {"\n"} </Text>
            </Col>
          </Row>
          <Row>
            <Col style={styles.marco}>
              <Text style={styles.titulos}>Observaciones:</Text>
              {observaciones? <Text style={styles.descripcion}>{observaciones} {"\n"}</Text>:
               <Text style={styles.descripcion}>No hay observaciones {"\n"}</Text>}
            </Col>
          </Row>
         
         </Grid>
          <Button
          onPress={handledOnPress}
            icon={
              <Entypo name="paypal" size={24} color={colors.white} />
            }
            buttonStyle={{
              borderRadius: 0,
              marginLeft: 0,
              marginRight: 0,
              marginBottom: 0,
            }}
            title="Estado de sucripción"
          />
        </Card>

    

      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF",
        height: "100%",
        width: "100%",
  },
  imagen: {
    width: 100,
    height: 100,
    marginBottom: 15,
    borderRadius: 50,
    padding: 1,
    margin:26,
    borderColor: "gray",
  },
  titulos:{
    textAlign: "center",
    fontSize: 17,
    fontWeight: "bold",
    margin: 6,
    color: "gray",
  },
  marco: {
    backgroundColor: "#f1f1f1",
    margin: 10,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
  },
  marcoi: {
    alignItems: "center",
  },
  marco2filas: {
    backgroundColor: "#f1f1f1",
    margin: 10,
    borderRadius: 10,
    borderColor: "white",
    borderWidth: 1,
    width:"52%",
  },
  TituloP: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    margin: 6,
    marginTop: 5,
    color: "gray",
  },
  activo: {
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#A0BC32",
    textAlign: "center",
    borderRadius: 30,
    color: "white",
    marginLeft: 60,
    marginRight: 60,
    marginVertical:10,
  },
  inactivo: {
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "red",
    textAlign: "center",
    borderRadius: 30,
    color: "white",
    marginLeft: 60,
    marginRight: 60,
    marginVertical:10,
  },
  activoS: {
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "#A0BC32",
    textAlign: "center",
    borderRadius: 30,
    color: "white",
    marginLeft: 20,
    marginRight: 20,
    marginVertical:42,
  },
  inactivoS: {
    fontSize: 15,
    fontWeight: "bold",
    backgroundColor: "red",
    textAlign: "center",
    borderRadius: 30,
    color: "white",
    marginLeft: 20,
    marginRight: 20,
    marginVertical:42,
  },


  descripcion: {
    fontSize: 15,
    textAlign: "center",
    
  },

  card: {
    borderRadius: 15,
    backgroundColor: "#fff",
    borderColor: "transparent",
    borderWidth: 1,
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
    marginTop: 10,
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
