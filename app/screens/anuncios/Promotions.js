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
import PromotionsCo from '../../components/Promotions/PromotionsCo'


export default function Promotions(){
  const [promotionsCo, setPromotionsCo] = useState([]);

  useEffect(() =>{
    const refCollections = collection(db, 'promociones');
    const q = query(refCollections, orderBy('createdAt', 'desc'));

    const unsubscribe = onSnapshot(q, querySnapshot => {
     setPromotionsCo(
      querySnapshot.docs.map(doc => ({
        id: doc.id,
        file: doc.data().file,
        createdAt: doc.data().createdAt.toDate(),
        nombre: doc.data().nombre,
        Lugar: doc.data().Lugar,
        descripcion: doc.data().descripcion,
        descuento: doc.data().descuento,
        vigencia: doc.data().vigencia,
      }))
     ) 
    })
return unsubscribe;
  }, [])
return (
 <ScrollView>
 {promotionsCo[0] ? (promotionsCo.map(promotionsCo => <PromotionsCo key={promotionsCo.id} {...promotionsCo} /> )):(
            <View style={styles.loaderHouses}>
            <ActivityIndicator size="large" color="#A0BC32" />
            <Text>Cargando promociones...</Text>
        </View>
          )}
 </ScrollView>
)

}
const styles = StyleSheet.create({

})