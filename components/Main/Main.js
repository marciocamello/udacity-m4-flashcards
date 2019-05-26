import React from 'react';
import {AsyncStorage, Image, View} from 'react-native';
import {Button} from 'react-native-elements';

import styles from './styles';
import {STORAGE_KEY} from "../../api/_DATA";

export default class Main extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            header: null
        };
    };

    render() {
        return (
            <View style={styles.container}>
                <Image
                    source={require('../../assets/icon.png')}
                    style={styles.logo}
                />
                <View style={[styles.buttonContainer]}>
                    <Button
                        borderRadius={25}
                        onPress={() => this.props.navigation.push('ListDecks')}
                        buttonStyle={styles.buttonStyle}
                        title="DECKS"
                        accessibilityLabel="DECKS"
                    />
                </View>
            </View>
        );
    }
}
