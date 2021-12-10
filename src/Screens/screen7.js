import React from 'react'
import { Text, View } from 'react-native'
export const Screen7 = () => {
    <View>
        <View>
            <input
                type="text"
                value={input}
                onChange={e => {
                    setInput(e.target.value);
                    onChange(e.target.value);
                }}
            />
        </View>
        <View>
            <Button title={'NEXT_SCREEN'} onPress={() => {
                navigation.navigate('Screen8')
            }} />
        </View>
    </View>
}