import React, { useState, useLayoutEffect, useEffect } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, ActivityIndicator  } from 'react-native'
import { getAuth } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import colors from "../../../colors"
import {  onAuthStateChanged } from "firebase/auth"
import { collection, onSnapshot, orderBy, query, QuerySnapshot, where } from "firebase/firestore"
import { db } from '../../utils/firebase';
import SocioCard from '../../components/Partners/SociosCard';


export default function Socio(props) {
    const navigation = useNavigation();
    const [login, setLogin] = useState(null)
    const [email, setEmail] = useState(null)
    const [socio, setSocio] = useState([])
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
     setSocio(
      querySnapshot.docs.map(doc => ({
        id: doc.id,
        file: doc.data().file,
        email: doc.data().email,
        apelativo: doc.data().apelativo,
        casilleros: doc.data().casilleros,
        colonia: doc.data().colonia,
        cp: doc.data().cp,
        direccion: doc.data().direccion,
        fIngreso: doc.data().fIngreso,
        fNacimiento: doc.data().fNacimiento,
        importe: doc.data().importe,
        mesAdeudo: doc.data().mesAdeudo,
        noMembresia: doc.data().noMembresia,
        observaciones: doc.data().observaciones,
        pais: doc.data().pais,
        telCasa: doc.data().telCasa,
        telCelular: doc.data().telCelular,
        tipo: doc.data().tipo,
        tipoPago: doc.data().tipoPago,
        titular: doc.data().titular,
        fileM: doc.data().fileM,
        nombreEs: doc.data().nombreEs,
        estado: doc.data().estado,
        montoTP: doc.data().montoTP,
        statusSuscribe: doc.data().statusSuscribe,
        ultimoPa: doc.data().ultimoPa.toDate(),
      } 
      ))
     ) 
    })
    setReloading(false)
return unsubscribe;
  },[reloading])
 
  //MontoTP es el monto actual total pagado

    return (
       <ScrollView>
          {socio[0] ? socio.map(socio => <SocioCard key={socio.id} {...socio} />  )
         
          :
            <View style={styles.loaderHouses}>
            <ActivityIndicator size="large" color="#A0BC32" />
            <Text>Cargando Socio...</Text>
            
           
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
