import React from 'react';
import { Button, Text } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import HomeScreen from '../pages/HomeScreen';

const MainStack = createStackNavigator();

export default () => {
    return (
        <MainStack.Navigator screenOptions={{
            headerStyle:{
                backgroundColor: '#CCC',
            },
            headerTitleStyle:{
                fontSize: 18
            }
        }}>
            <MainStack.Screen name='Exercício' component={HomeScreen}  />
        </MainStack.Navigator>
    );
}