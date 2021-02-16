import React, { useState, useEffect, useRef } from 'react'
import { View, Text, FlatList } from 'react-native'
import MapView, { Marker } from 'react-native-maps';
import styles from '../searchResultsMap/styles';
import places from '../../../assets/data/feed';
import CustomMarker from '../../components/customMarker';
import PostCarouselItem from '../../components/postCarouselItem';
import useWindowDimensions from 'react-native/Libraries/Utilities/useWindowDimensions';
import { listPosts } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';


const SearchResultsMapScreen = (props) => {

    const { guests, viewport } = props;

    const [selectedPlaceId, setSelectedPlaceId] = useState(null);
    const [posts, setPosts] = useState([]);
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
        const index = posts.findIndex(place => place.id === selectedPlaceId);
        refFlatList.current.scrollToIndex({ index });
        const selectedPlace = posts[index];
        const region = {
            latitude: selectedPlace.latitude,
            longitude: selectedPlace.longitude,
            latitudeDelta: 0.8,
            longitudeDelta: 0.8
        }

        map.current.animateToRegion(region);


    }, [selectedPlaceId])

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            and: {
                                maxGuests: {
                                    ge: guests
                                },
                                latitude: {
                                    between: [viewport.southwest.lat, viewport.northeast.lat]
                                },
                                longitude: {
                                    between: [viewport.southwest.lng, viewport.northeast.lng]
                                }
                            }
                        }
                    })
                )
                setPosts(postsResult.data.listPosts.items);
                console.log(postsResult);
            } catch (e) {
                console.log(e);
            }
        }

        fetchPosts();
    }, [])



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
                {posts.map(place => (
                    <CustomMarker
                        isSelected={place.id === selectedPlaceId}
                        coordinate={{ latitude: place.latitude, longitude: place.longitude }}
                        price={place.newPrice}
                        onPress={() => setSelectedPlaceId(place.id)}
                    />)
                )}
            </MapView>

            <View style={styles.items}>
                <FlatList
                    ref={refFlatList}
                    data={posts}
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