import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        alignItems: 'flex-start',
        width: '100%'
    },
    gridMain: {
        flex: 1,
    },
    gridTop: {
        flex: 0.9,
    },
    gridBottom: {
        flex: 0.1,
    },
    itemContainer: {
        borderWidth: 1,
        borderColor: '#293333',
        borderRadius: 8,
        margin: 5
    },
    countStylesContainer: {
        backgroundColor: 'transparent'
    },
    avatarStyle: {
        backgroundColor: 'transparent'
    },
    buttonContainer: {
        width: "100%"
    },
    buttonStyle: {
        borderRadius: 0,
        height: 50,
        backgroundColor: '#FF6600'
    },
    countStyles: {
        color: '#293333',
        backgroundColor: 'transparent',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
