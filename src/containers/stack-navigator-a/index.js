import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Text } from 'react-native'
import { StackNavAContext } from '../../contexts/stackNavAContext'
import { Screen1 } from '../../Screens/screen1'
import { Screen2 } from '../../Screens/screen2'
import { Screen3 } from '../../Screens/screen3'
import { Screen4 } from '../../Screens/screen4'
export const StackNavAContainer = createStackNavigator()

export const StackNavA = () => {
    return (
        <StackNavAContext>
            <StackNavAContainer.Navigator>
                <StackNavAContainer.Screen
                    name={'Screen1'}
                    options={{ header: () => null }}
                    component={Screen1}
                />
                <StackNavAContainer.Screen
                    name={'Screen2'}
                    options={{ header: () => null }}
                    component={Screen2}
                />
                <StackNavAContainer.Screen
                    name={'Screen3'}
                    options={{ header: () => null }}
                    component={Screen3}
                />
                <StackNavAContainer.Screen
                    name={'Screen4'}
                    options={{ header: () => null }}
                    component={Screen4}
                />
            </StackNavAContainer.Navigator>
        </StackNavAContext>
    )
}
