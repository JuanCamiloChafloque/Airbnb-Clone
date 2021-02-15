import { Dimensions, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover',
        justifyContent: 'center',
    },

    title: {
        fontSize: 80,
        fontWeight: 'bold',
        color: 'white',
        width: '70%',
        marginLeft: 25
    },

    button: {
        backgroundColor: 'white',
        width: '50%',
        marginLeft: 25,
        marginTop: 25,
        height: 40,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    buttonText: {
        fontSize: 16,
        fontWeight: 'bold'
    },

    searchButton: {
        backgroundColor: 'white',
        width: Dimensions.get('screen').width - 20,
        height: 60,
        marginHorizontal: 10,
        borderRadius: 30,
        justifyContent: 'center',
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        top: '8%'
    },

    searchButtonText: {
        fontSize: 16,
        fontWeight: 'bold'
    }

});

export default styles;
