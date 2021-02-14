import React from 'react';
import { View, Text, FlatList } from 'react-native';
import Post from '../../components/post';
import feed from '../../../assets/data/feed';

const SearchResultsScreen = (props) => {

    return (
        <View>
            <FlatList
                data={feed}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    );

}

export default SearchResultsScreen;
