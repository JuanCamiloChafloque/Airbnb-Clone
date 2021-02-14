import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        justifyContent: 'space-between',
        height: '100%'
    },

    row: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 20,
        marginHorizontal: 20,
        borderBottomWidth: 1,
        borderColor: 'lightgray'
    },

    adultText: {
        fontWeight: 'bold'
    },

    agesText: {
        color: '#8d8d8d'
    },

    buttonContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },

    button: {
        borderWidth: 1,
        borderRadius: 15,
        width: 30,
        height: 30,
        justifyContent: 'center',
        alignItems: 'center',
        borderColor: '#676767'
    },

    buttonCounter: {
        marginHorizontal: 20,
        fontSize: 16
    },

    buttonText: {
        fontSize: 20,
        color: '#474747'
    },

    buttonContinue: {
        marginBottom: 20,
        backgroundColor: '#f15454',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        marginHorizontal: 20,
        borderRadius: 10
    },

    textContinue: {
        fontSize: 20,
        color: 'white',
        fontWeight: 'bold'
    }

})

export default styles;