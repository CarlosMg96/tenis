import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator();
import Ads from "../screens/ad/Ad"

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
                name="Anuncio"
                component={Ads}
                options={{ title: "Anuncio" }}
            />
        </Stack.Navigator>
    )
}

<Stack.Navigator >

</Stack.Navigator>