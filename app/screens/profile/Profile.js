import { StyleSheet, Text, View } from 'react-native';
import React, {useEffect, useState} from 'react';
import UserLogges from './UserLogges'
import { getAuth, onAuthStateChanged } from "firebase/auth"
import Loading from '../../components/Loading';
import GuestScreen from './GuestScreen';
import IndexNav from '../../logged/IndexNav'

// IndexNav navigation={navigation} independent={true}

export default function Profile(props) {
    const { navigation } = props;
    const [login, setLogin] = useState(null)

    useEffect(() => {
        const auth = getAuth()
        onAuthStateChanged(auth, (user) => {
          !user ? setLogin(false) : setLogin(true)
        })
      }, [])
    
      if(login === null) return <Loading  isVisible={true} text="Cargando..." />
    
      return login ? <UserLogges />
        : <GuestScreen navigation={navigation} />
    }


