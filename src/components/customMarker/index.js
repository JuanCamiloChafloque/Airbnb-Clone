import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
import { Marker } from 'react-native-maps';

const CustomMarker = (props) => {

    const { coordinate, price, onPress, isSelected } = props;

    return (
        <Marker
            coordinate={coordinate}
            onPress={onPress}>
            <View
                style={{
                    backgroundColor: isSelected ? 'black' : 'white',
                    borderRadius: 20,
                    borderColor: 'grey',
                    borderWidth: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                <Text style={{
                    fontWeight: 'bold',
                    marginHorizontal: 5,
                    marginVertical: 3,
                    color: isSelected ? 'white' : 'black'
                }}>${price}</Text>
            </View>
        </Marker>
    )
}

export default CustomMarker
