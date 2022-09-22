import { StyleSheet, Text, View, ScrollView } from "react-native";
import React from "react";
import { Card, Button, Icon } from "react-native-elements";
//import Card

export default function Menú() {
  return (
    <ScrollView>
      <Card title="Local Modules" elevation={7} style={styles.cardContainer}>
        {/*react-native-elements Card*/}
        <Text style={styles.paragraph}>Paquetes</Text>
        <Text style={styles.subTitulos}>Todos los platillos incluyen:</Text>
        <Text style={styles.descripcion}>
          Sopa (a elegir)
          {"\n"}Plato Fuerte
          {"\n"}Postre
          {"\n"}Agua del día
        </Text>
      </Card>
      <Card style={styles.cardContainer}>
        <Card.Title>Enchiladas Verdes</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri: "https://mejorconsalud.as.com/wp-content/uploads/2015/05/enchiladas-verdes.jpg",
          }}
        />
        <Text style={styles.descripcion}>
          4 piezas gratinadas o espolvoreada, rellenas de Pollo
          o panela
          {"\n"}Precio: 140$ 
        </Text>
      </Card>

      <Card style={styles.cardContainer}>
        <Card.Title>Tampiqueña</Card.Title>
        <Card.Divider />
        <Card.Image
          style={{ padding: 0 }}
          source={{
            uri: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Carne_a_la_tampique%C3%B1a.jpg",
          }}
        />
        <Text style={styles.descripcion}>
          200gr de res, rajas poblanas, frijoles y ensalada
          {"\n"}Precio: 160$ 
        </Text>
      </Card>
      <Card title="Local Modules" elevation={7} style={styles.cardContainer}>
        {/*react-native-elements Card*/}
        <Text style={styles.paragraph}>Bebidas</Text>
        <Text style={styles.descripcion}>
          Corona $40
          {"\n"}Victoria $40
          {"\n"}Modelo Especia $42
          {"\n"}Ultra $42
        </Text>
        <Text style={styles.descripcion}>
          Vaso michelado $10
          {"\n"}Vaso cubano $15
          {"\n"}Vaso con Clamato $20
        </Text>
        <Text style={styles.descripcion}>
          Ron $110
          {"\n"}Whisky $140
          {"\n"}Tequila $120
          {"\n"}Vodka $100
          {"\n"}Mezcal $150
          {"\n"}Ginebra $140
        </Text>
        <Text style={styles.textoPequeño}>
          Tragos de 15 oz al 2 x 1
          {"\n"}Servido con un refresco de 355 ml.
        </Text>
      </Card>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingTop: 40,
    backgroundColor: "white",
    borderRadius: 30,
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: "bold",
    textAlign: "center",
    color: "#34495e",
    borderRadius: 30,
  },
  subTitulos: {
    textAlign: "center",
  },
  descripcion: {
    textAlign: "center",
    marginTop: 10,
    marginBottom: 10,
  },
  cardContainer: {
    borderRadius: 30,
  },
  textoPequeño: { 
    color: "gray",
    textAlign: "center",
    fontSize: 12,
  },
});
