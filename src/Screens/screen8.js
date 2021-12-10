import React from 'react'
import { Text, View } from 'react-native'
export const Screen8 = () => {
    const context = useContext(StackNavAContext)
    const { input } = context
    return (
        <View>
            <Text>Input Text Value</Text>
            <Text>{input}</Text>
        </View>
    )
}