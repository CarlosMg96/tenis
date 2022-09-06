import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Icon } from 'react-native-elements';
import KnowStack from './KnowStack'
import ProfileStack from './ProfileStack'

const Tab = createBottomTabNavigator();
export default function Navigation() {
    return (
        <NavigationContainer>
            <Tab.Navigator
                initialRouteName='Know'
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => screenOptions(route, color),
                    tabBarActiveTintColor: '#A0BC32',
                    tabBarInactiveTintColor: 'gray',
                    headerShown: false,
                    tabBarOptions:{
                        style: { borderTopWidth: 0, elevation: 0 }
                      }
                })}
            >
                <Tab.Screen
                    name='Know'
                    component={KnowStack}
                    options={{ title: "Conócenos" }}
                />
    
                <Tab.Screen
                    name='profile'
                    component={ProfileStack}
                    options={{ title: "Perfil" }}
                />

            </Tab.Navigator>
        </NavigationContainer>
    );
}

const screenOptions = (route, color) => {
    let iconName;
    switch (route.name) {
        
        case "Know":
            iconName = "magnify"
            break;

        case "profile":
            iconName = "account-outline"
            break;
    }
    return (
        <Icon type="material-community" name={iconName} size={22} color={color} />
    )
}
