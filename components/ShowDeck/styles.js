import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        width: '100%',
        justifyContent: 'center',
    },
    titleStyles: {
        color: '#293333',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    countStyles: {
        color: '#293333',
        fontSize: 60,
        fontWeight: 'bold',
        textAlign: 'center'
    },
    logo: {
        width: 140,
        height: 140,
        resizeMode: 'contain'
    },
    buttonContainer: {
        width: "80%",
        margin: 10,
        textAlign: 'center'
    },
    buttonStyle: {
        borderRadius: 8,
        width: "100%",
        backgroundColor: '#FF6600',
        marginBottom: 10
    },
    buttonStyleStartQuiz: {
        borderRadius: 8,
        width: "100%",
        backgroundColor: '#293333'
    }
});
