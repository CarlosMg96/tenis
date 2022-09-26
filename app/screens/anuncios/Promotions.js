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
import  Svg, {Path, Defs, Pattern, Use} from 'react-native-svg';

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

  function Svgg() {
    return (
      <Svg
      width={428}
    height={155}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Path
      d="M-10.963 117.814C-9.753 79.274-9.096 2.428-12-.129L436-1v118.814c-60.978 65.536-180.444 27.307-227.63 0-98.311-69.952-187.185-29.147-219.333 0Z"
      fill="#A0BC32"
      stroke="#A0BC32"
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
       <Text style={styles.TituloP}> Promociones  </Text>
      </Defs>
    </Svg>
    )
  }

return (
 <ScrollView>
<Svgg/>
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
  TituloP: {
    textAlign: "center",
    fontSize: 36,
    fontWeight: "bold",
    margin: 6,
    marginTop: 5,
    color: "#f1f1f1",
  },
})