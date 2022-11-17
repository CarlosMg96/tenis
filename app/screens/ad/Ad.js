import React, { Component, useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  ActivityIndicator,
} from "react-native";
import { Button } from "react-native-elements";
import { db } from "../../utils/firebase";
import { collection, onSnapshot, orderBy, query, where } from "firebase/firestore";
import AvisosService from "../../components/Avisos/AvisosCards";
import ModalAvisos from "../../components/extras/ModalAvisos";


export default function Avisos() {
  const [avisos, setAvisos] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isOpcionCategory, setIsOpcionCategory] = useState("Yoga");
  const [category, setCategory] = useState();
 
 

  useEffect(() => {
    const refCollections = collection(db, "avisos");
    const q = query(refCollections, where("categoria", "==" ,`${isOpcionCategory}`));

    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      setAvisos(
        querySnapshot.docs.map((doc) => ({
          id: doc.id,
          file: doc.data().file,
          createdAt: doc.data().createdAt.toDate(),
          titulo: doc.data().titulo,
          descripcion: doc.data().descripcion,
          imagen: doc.data().imagen,
          categoria: doc.data().categoria,
        }))
      );
    });
    return unsubscribe;
    HandleOfCategory();
  }, []);
//   const informacion = [{avisos:{...avisos.categoria}}]
// console.log("Lo que necesito esta aquí");
// console.log(informacion);
// console.log({...avisos.categoria})
  /* {avisos.map((doc)=> {
        <Text>key={doc.id} {doc.categoria} {console.log(doc.categoria)}</Text>
        setCategory(doc.categoria)
      })} */
const HandleOfCategory = () => {
  setCategory(
    avisos.map((doc) => {
      key=(doc.id)
      setIsOpcionCategory(doc.categoria)
    })
  )
}
console.log(isOpcionCategory)

  
  return (
    <ScrollView>
      <Button
        title="🔎 Buscar por categoría"
        buttonStyle={buttonStyle}
        type="clear"
        titleStyle={titleStyleV}
        onPress={() => setIsModalOpen(!isModalOpen)}
      />
      {/* {avisos.map((doc)=> {
        <Text>key={doc.id} {doc.categoria} {console.log(doc.categoria)}</Text>
        setCategory(doc.categoria)
      })} */}
      <ModalAvisos isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
      {avisos[0] ? (
        avisos.map((avisos) => <AvisosService key={avisos.id} {...avisos} />)
      ) : (
        <View style={styles.loaderHouses}>
          <ActivityIndicator size="large" color="#A0BC32" />
          <Text>Cargando avisos...</Text>
        </View>
      )}
    </ScrollView>
  );
}
const buttonStyle = {
  backgroundColor: "transparent",
  color: "black",
};
const titleStyleV = {
  color: "#A0BC32",
  fontSize: 20,
  fontWeight: "bold",
};
const styles = StyleSheet.create({});
