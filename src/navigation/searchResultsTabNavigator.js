import React from 'react'
import { View, Text } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import SearchResults from '../screens/searchResults';
import SearchResultsMapScreen from '../screens/searchResultsMap';
import { useRoute } from '@react-navigation/native';


const Tab = createMaterialTopTabNavigator();

const SearchResultsTabNavigator = (props) => {

    const route = useRoute();
    const { guests } = route.params;

    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#f15454',
            indicatorStyle: {
                backgroundColor: '#f15454'
            }
        }}>
            <Tab.Screen
                name={"List"}>
                {() => (
                    <SearchResults guests={guests} />
                )}
            </Tab.Screen>
            <Tab.Screen
                name={"Map"}>
                {() => (
                    <SearchResultsMapScreen guests={guests} />
                )}
            </Tab.Screen>
        </Tab.Navigator>
    )
}

export default SearchResultsTabNavigator
