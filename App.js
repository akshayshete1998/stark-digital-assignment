import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { StackNavA } from './src/containers/stack-navigator-a/index'
import { StackNavB } from './src/containers/stack-navigator-b/index'
import { StackNavAContextProvider } from './src/contexts/stackNavAContext'
import { StackNavBContextProvider } from './src/contexts/stackNavBContext'

const Stack = createNativeStackNavigator();
const App = () => {
  return (
    <StackNavAContextProvider>
      <StackNavBContextProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="StackNavA" component={StackNavA} options={{ headerShown: false }} />
            <Stack.Screen name="StackNavB" component={StackNavB} options={{ headerShown: false }} />
          </Stack.Navigator>
        </NavigationContainer>
      </StackNavBContextProvider>
    </StackNavAContextProvider>
  )
}
export default App;
