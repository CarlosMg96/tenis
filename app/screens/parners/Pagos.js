import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator  } from 'react-native'
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import colors from "../../../colors"
import {  onAuthStateChanged } from "firebase/auth"
import { collection, onSnapshot, orderBy, query, QuerySnapshot, where } from "firebase/firestore"
import { db } from '../../utils/firebase';
import CardPay from "../../components/Partners/CardPay"


export default function Pagos(props) {
    const navigation = useNavigation();
    const [login, setLogin] = useState(null)
    const [email, setEmail] = useState(null)
    const [socioP, setSocioP] = useState([])
    const [reloading, setReloading] = useState(true)

    useEffect(() => {
    const auth = getAuth()
    onAuthStateChanged(auth, (user) => {
      !user ? setLogin(false) : setLogin(true)
    })
   setEmail(auth.currentUser.email)

  }, [])

  useLayoutEffect(() =>{
    const refCollections = collection(db, 'socios');
   const q = query(refCollections, where("email", "==" ,`${email}`));

  const unsubscribe = onSnapshot(q, querySnapshot => {
     setSocioP(
      querySnapshot.docs.map(doc => ({
        id: doc.id,
        file: doc.data().file,
        email: doc.data().email,
        apelativo: doc.data().apelativo,
        importe: doc.data().importe,
        mesAdeudo: doc.data().mesAdeudo,
        noMembresia: doc.data().noMembresia,
        tipo: doc.data().tipo,
        tipoPago: doc.data().tipoPago,
        titular: doc.data().titular,
        estado: doc.data().estado,
        telCelular: doc.data().telcelular,
        statusSuscribe: doc.data().statusSuscribe,
        montoTP: doc.data().montoTP,
      } 
      ))
     ) 
    })
    setReloading(false)
return unsubscribe;
  },[reloading])

    return (
       <ScrollView>
          {socioP[0] ? socioP.map(socioP => <CardPay key={socioP.id} {...socioP} />  )
         
          :
            <View style={styles.loaderHouses}>
            <ActivityIndicator size="large" color="#A0BC32" />
            <Text>Cargando...</Text>
        </View>
          }
        
       </ScrollView>
       
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 16,
    },
    containerInput: {
        width: "100%",
        marginBottom: 20
    },
    labelInput: {
        fontSize: 20,
        color: "#A0BC32"
    },
    btnContainer: {
        width: "70%"
    },
    btn: {
        color: "#FFF",
        backgroundColor: "#A0BC32"
    },
    textCreateAccount: {
        color: "#1E84B6",
        marginTop: 16
    },
    containerB: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        position: "absolute",
    },
    chatButton: {
        backgroundColor: colors.primary,
        height: 50,
        width: 50,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: colors.primary,
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: .9,
        shadowRadius: 8,
        marginRight: 20,
        marginBottom: 50,
    }
})
