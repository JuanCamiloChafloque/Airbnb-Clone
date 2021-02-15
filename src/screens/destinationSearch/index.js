import React, { useState } from 'react';
import { View, Text, TextInput, FlatList, Pressable } from 'react-native';
import styles from './styles';
import searchResults from '../../../assets/data/search';
import { useNavigation } from '@react-navigation/native';
import SuggestionRow from './suggestionRow';
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';

const DestinationSeachScreen = (props) => {

    const navigation = useNavigation();

    return (
        <View style={styles.container}>

            <GooglePlacesAutocomplete
                placeholder={"Where are you going?"}
                onPress={(data, details = null) => {
                    navigation.navigate('Guests');
                }}
                query={{
                    key: 'AIzaSyDh_w5C7HrQ3fja3RhLPuVgEAsZxhjYSG8',
                    language: 'en',
                    types: '(cities)'
                }}
                styles={{
                    textInput: styles.textInput
                }}
                renderRow={(item) => <SuggestionRow item={item} />}
                suppressDefaultStyles
                fetchDetails
            />
        </View>
    );

}

export default DestinationSeachScreen;
