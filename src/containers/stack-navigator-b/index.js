import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Screen5 } from '../../Screens/screen1'
import { Screen6 } from '../../Screens/screen2'
import { Screen7 } from '../../Screens/screen3'
import { Screen8 } from '../../Screens/screen4'

export const StackNavBContainer = createStackNavigator()

export const StackNavB = () => {
    return (
        <StackNavBContainer>
            <StackNavAContainer.Navigator>
                <StackNavAContainer.Screen
                    name={'Screen5'}
                    options={{ header: () => null }}
                    component={Screen5}
                />
                <StackNavAContainer.Screen
                    name={'Screen6'}
                    options={{ header: () => null }}
                    component={Screen6}
                />
                <StackNavAContainer.Screen
                    name={'Screen7'}
                    options={{ header: () => null }}
                    component={Screen7}
                />
                <StackNavAContainer.Screen
                    name={'Screen8'}
                    options={{ header: () => null }}
                    component={Screen8}
                />
            </StackNavAContainer.Navigator>
        </StackNavBContainer>
    )
}
