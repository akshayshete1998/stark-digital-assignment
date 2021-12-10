import React from 'react'
import { Text, View, Button } from 'react-native'
import { StackNavAContext } from '../contexts/stackNavAContext'
export const Screen2 = ({ navigation }) => {
    const { onChange } = useContext(StackNavAContext);
    const [input, setInput] = useState(null);

    return (
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
                    navigation.navigate('Screen3')
                }} />
            </View>
        </View>
    )
}