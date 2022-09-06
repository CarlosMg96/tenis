import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { createStackNavigator } from "@react-navigation/stack"
import Profile from '../screens/profile/Profile'
import GuestScreen from '../screens/profile/GuestScreen'
import UserLogges from '../screens/profile/UserLogges'
import UserLogins from '../screens/profile/UserLogin'
import EditForm from '../components/profile/EditForm'

const Stack = createStackNavigator();

export default function ProfileStack() {
  return (
    <Stack.Navigator
    screenOptions={{
        headerMode: 'screen',
        headerTintColor: 'white',
        headerStyle: { backgroundColor: '#A0BC32' }
    }}
>
    <Stack.Screen
        name="profileStack"
        component={Profile}
        options={{ title: "Perfil" }}
    />
    <Stack.Screen
        name="guest"
        component={GuestScreen}
        options={{ title: "Invitado" }}
    />
    <Stack.Screen
        name="logges"
        component={UserLogges}
        options={{ title: "Logges" }}
    />
    <Stack.Screen
        name="login"
        component={UserLogins}
        options={{ title: "Login" }}
    />
      <Stack.Screen
        name="updateForm"
        component={EditForm}
        options={{ title: "Actualización de contraseña" }}
    />
    </Stack.Navigator>
  );
}

const styles = StyleSheet.create({
  container:{
    flex:1,
    justifyContent: "center",
    alignItems: "center"
  },
  
});
