import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
import { PanResponder } from "react-native";
import Parner from "../screens/parners/Parner"
import Chat from "../screens/parners/Chat"

const Stack = createStackNavigator();


export default function AnunciosStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#A0BC32' }
            }}
        >
            <Stack.Screen
                name="Parner"
                component={Parner}
                options={{ title: "Socio" }}
            />
            <Stack.Screen
                name="Chat"
                component={Chat}
                options={{ title: "Chat" }}
            />
        </Stack.Navigator>
    )
}

<Stack.Navigator >

</Stack.Navigator>