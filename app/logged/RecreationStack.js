import React from "react"
import { createStackNavigator } from "@react-navigation/stack"
const Stack = createStackNavigator();
import RecreationLobby from "../screens/recreation/Recreation"
import Menu from "../screens/recreation/Menu"
import ActRec from "../screens/recreation/ActRec"
import Information from "../screens/recreation/Information"

export default function RecreationStack() {
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
                component={RecreationLobby}
                options={{ title: "Horarios y más" }}
            />
             <Stack.Screen
                name="Recreativas"
                component={ActRec}
                options={{ title: "Actividades Recreativas" }}
            />
             <Stack.Screen
                name="Information"
                component={Information}
                options={{ title: "Información del hotel" }}
            />
             <Stack.Screen
                name="Menu"
                component={Menu}
                options={{ title: "Menú" }}
            />
        </Stack.Navigator>
    )
}

<Stack.Navigator >

</Stack.Navigator>