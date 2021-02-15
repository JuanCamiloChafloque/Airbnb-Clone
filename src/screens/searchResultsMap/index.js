import React, { useState } from 'react'
import { View, Text, FlatList } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import styles from '../searchResultsMap/styles';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/customMarker';
import PostCarouselItem from '../../components/postCarouselItem';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';

const SearchResultsMapScreen = (props) => {

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const width = useWindowDimensions().width;

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
                {places.map(place => (
                    <CustomMarker
                        isSelected={place.id === selectedPlaceId}
                        coordinate={place.coordinate}
                        price={place.newPrice}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />)
                )}
            </MapView>

            <View style={styles.items}>
                <FlatList
                    data={places}
                    renderItem={({ item }) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'} />
            </View>
        </View>
    )
}

export default SearchResultsMapScreen;