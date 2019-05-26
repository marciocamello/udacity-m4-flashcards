import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
        justifyContent: 'center',
    },
    logo: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    buttonContainer: {
        width: "50%",
        margin: 10
    },
    buttonStyle: {
        borderRadius: 8,
        backgroundColor: '#FF6600'
    }
});
