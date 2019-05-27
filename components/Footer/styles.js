import React from 'react';
import {StyleSheet} from 'react-native';

export default styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'row',
        marginTop: 11
    },
    home: {
        width: '50%',
        height: 50,
        backgroundColor: '#FF6600',
        color: '#FFFFFF',
        alignItems: 'center',
        paddingTop: 4,
    },
    decks: {
        width: '50%',
        height: 50,
        backgroundColor: '#293333',
        alignItems: 'center',
        paddingTop: 4,
    },
    text: {
        fontWeight: 'bold',
        textAlign: "left",
        color: '#FFFFFF',
        flex: 1,
        alignSelf: 'center'
    }
});
