import React, { Component, useEffect, useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Alert,
  ScrollView,
  FlatList,
  Button,
  ActivityIndicator
} from 'react-native';
import { db } from '../../utils/firebase';
import { collection, onSnapshot, orderBy, query } from 'firebase/firestore';
import AvisosService from "../../components/Avisos/AvisosCards"


export default function Avisos(){
  const [avisos, setAvisos] = useState([]);

  useEffect(() =>{
    const refCollections = collection(db, 'avisos');
    const q = query(refCollections, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
     setAvisos(
      querySnapshot.docs.map(doc => ({
        id: doc.id,
        file: doc.data().file,
        createdAt: doc.data().createdAt.toDate(),
        titulo: doc.data().titulo,
        descripcion: doc.data().descripcion,
        categoria: doc.data().categoria,
      }))
     ) 
    })
return unsubscribe;
  }, [])
return (
 <ScrollView>
    {avisos[0] ? (avisos.map(avisos => <AvisosService key={avisos.id} {...avisos} /> )):(
            <View style={styles.loaderHouses}>
            <ActivityIndicator size="large" color="#A0BC32" />
            <Text>Cargando avisos...</Text>
        </View>
          )}
 </ScrollView>
)

}
const styles = StyleSheet.create({

})