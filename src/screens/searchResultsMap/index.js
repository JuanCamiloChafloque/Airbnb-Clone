import React from 'react'
import { View, Text } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import styles from '../searchResultsMap/styles';

const SearchResultsMapScreen = (props) => {
    return (
        <View style={styles.container} >
            <MapView
                style={styles.map}
                initialRegion={{
                    latitude: 28.3279822,
                    longitude: -16.5124847,
                    latitudeDelta: 0.8,
                    longitudeDelta: 0.8
                }}>
                <Marker coordinate={{ latitude: 28.3279822, longitude: -16.5124847 }} />
            </MapView>
        </View>

    )
}

export default SearchResultsMapScreen;