import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator();
import NotificacionesP from "../screens/data/NotificacionesP";

export default function AdStack() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerMode: 'screen',
                headerTintColor: 'white',
                headerStyle: { backgroundColor: '#A0BC32' }
            }}
        >
            <Stack.Screen
                name="NotificacionesP"
                component={NotificacionesP}
                options={{ title: "Prueba" }}
            />
        </Stack.Navigator>
    )
}

<Stack.Navigator >

</Stack.Navigator>