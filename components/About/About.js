import React from 'react';
import {Text, View} from 'react-native';

import styles from './styles';

export default class About extends React.Component {

    // navigation settings
    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "About",
            headerStyle: {
                backgroundColor: '#FF6600',
            },
            headerTintColor: '#FFFFFF',
            headerTitleStyle: {
                fontWeight: 'bold',
                textAlign: "left",
                flex: 1,
                alignSelf: 'center'
            }
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>FlashCards 0.1.0</Text>
                <Text style={{fontWeight: 'bold', marginBottom: 15, marginTop: 15}}>Packages</Text>
                <Text>React</Text>
                <Text>React Redux</Text>
                <Text>React Native Navigation</Text>
                <Text>React Native Elements</Text>
                <Text style={{marginTop: 15}}>@marciocamello</Text>
            </View>
        );
    }
}
