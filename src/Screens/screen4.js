import React, { useContext } from 'react'
import { Text, View } from 'react-native'
import { StackNavAContext } from '../contexts/stackNavAContext'
export const Screen4 = ({ navigation }) => {
    const context = useContext(StackNavAContext)
    const { input } = context
    return (
        <View>
            <Text>Input Text Value</Text>
            <Text>{input}</Text>
        </View>
    )
}