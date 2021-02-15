import React, { useState, useEffect, useRef } from 'react'
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
    const refFlatList = useRef(null);
    const viewConfig = useRef({ itemVisiblePercentThreshold: 70 });
    const onViewChanged = useRef(({ viewableItems }) => {
        if (viewableItems.length > 0) {
            const selectedPlace = viewableItems[0].item;
            setSelectedPlaceId(selectedPlace.id);
        }
    });
    const map = useRef();

    useEffect(() => {
        if (!selectedPlaceId || !refFlatList) {
            return;
        }
        const index = places.findIndex(place => place.id === selectedPlaceId);
        refFlatList.current.scrollToIndex({ index });
        const selectedPlace = places[index];
        const region = {
            latitude: selectedPlace.coordinate.latitude,
            longitude: selectedPlace.coordinate.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8
        }

        map.current.animateToRegion(region);


    }, [selectedPlaceId])

    return (
        <View style={styles.container} >
            <MapView
                ref={map}
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
                    ref={refFlatList}
                    data={places}
                    renderItem={({ item }) => <PostCarouselItem post={item} />}
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    snapToInterval={width - 60}
                    snapToAlignment={'center'}
                    decelerationRate={'fast'}
                    viewabilityConfig={viewConfig.current}
                    onViewableItemsChanged={onViewChanged.current} />
            </View>
        </View>
    )
}

export default SearchResultsMapScreen;