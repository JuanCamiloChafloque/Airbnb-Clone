import React, { useEffect, useState } from 'react';
import { View, Text, FlatList } from 'react-native';
import Post from '../../components/post';
import { listPosts } from '../../graphql/queries';
import { API, graphqlOperation } from 'aws-amplify';
import { useRoute } from '@react-navigation/native';


const SearchResultsScreen = (props) => {

    const [posts, setPosts] = useState([]);
    const route = useRoute();
    const { guests } = props;

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const postsResult = await API.graphql(
                    graphqlOperation(listPosts, {
                        filter: {
                            maxGuests: {
                                ge: guests
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
        <View>
            <FlatList
                data={posts}
                renderItem={({ item }) => <Post post={item} />}
            />
        </View>
    );

}

export default SearchResultsScreen;
