import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {Icon} from 'react-native-elements';

import styles from './styles';

export default class Footer extends React.Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    style={styles.home}
                    onPress={() => this.props.navigation.navigate('Main')}
                    activeOpacity={.5}
                >
                    <Icon
                        name='home'
                        color='#FFFFFF'
                    />
                    <Text style={styles.text}>HOME</Text>
                </TouchableOpacity>
                <TouchableOpacity
                    style={styles.decks}
                    onPress={() => this.props.navigation.navigate('AddDeck')}
                    activeOpacity={.5}
                >
                    <Icon
                        name='add'
                        color='#FFFFFF'
                    />
                    <Text style={styles.text}>ADD DECK</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
