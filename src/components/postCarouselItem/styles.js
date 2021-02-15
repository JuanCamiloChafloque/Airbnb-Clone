import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    container: {
        height: 120,
        padding: 5,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 5
        },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,
        elevation: 10
    },

    innerContainer: {
        flexDirection: 'row',
        backgroundColor: 'white',
        borderRadius: 10,
        overflow: 'hidden',
        margin: 4
    },

    image: {
        height: '100%',
        aspectRatio: 1,
        resizeMode: 'cover',
    },

    bedrooms: {
        marginVertical: 10,
        color: '#5b5b5b'
    },

    description: {
        fontSize: 14,
    },

    newPrice: {
        fontSize: 15,
        marginVertical: 10,
        fontWeight: 'bold'
    }

});

export default styles;