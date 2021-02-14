import React from 'react'
import { View, Text } from 'react-native'
import MapView from 'react-native-maps';
import styles from '../destinationSearch/styles';

const SearchResultsMapScreen = (props) => {
    return (
        <View stle={styles.container}>
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 37.78825,
                    longitude: -122.4324,
                    latitudeDelta: 0.0922,
                    longitudeDelta: 0.0421
                }}
            />
        </View>
    )
}

export default SearchResultsMapScreen;