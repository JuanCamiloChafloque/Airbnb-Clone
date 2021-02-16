import React from 'react'
import { View, Text } from 'react-native'
import styles from './styles';
import Post from '../../components/postDetails';
import places from '../../../assets/data/feed';
import { useRoute } from '@react-navigation/native';

const AcommodationScreen = (props) => {

    const route = useRoute();
    const post = route.params.post;

    return (
        <View style={{ height: '100%', backgroundColor: 'white' }}>
            <Post post={post} />
        </View>
    )
}

export default AcommodationScreen
