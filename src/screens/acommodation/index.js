import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
import Post from '../../components/postDetails';
import places from '../../../assets/data/feed';
import { useRoute } from '@react-navigation/native';

const AcommodationScreen = (props) => {

    const route = useRoute();
    const post = places.find(place => place.id === route.params.postId);

    return (
        <View style={{ backgroundColor: 'white' }}>
            <Post post={post} />
        </View>
    )
}

export default AcommodationScreen
