import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator();
import AnunciosB from "../screens/anuncios/Promotions"

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
                name="AnunciosB"
                component={AnunciosB}
                options={{ title: "" }}
            />
        </Stack.Navigator>
    )
}

<Stack.Navigator >

</Stack.Navigator>