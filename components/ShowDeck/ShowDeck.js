import React from 'react';
import {Image, Text, View} from 'react-native';
import {Button} from 'react-native-elements';
import {HeaderBackButton} from 'react-navigation';

import styles from './styles';
import {connect} from 'react-redux';

class ShowDeck extends React.Component {

    // navigation settings
    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (
                <HeaderBackButton
                    onPress={() => {
                        navigation.push('ListDecks')
                    }}
                    tintColor={'#FFFFFF'}
                />
            ),
            headerTitle: navigation.state.params.title,
        }
    };

    render() {

        const deck = this.props.decks[this.props.navigation.state.params.id];

        return (
            <View style={styles.container}>
                {deck && (
                    <View style={styles.container}>
                        <Text style={styles.titleStyles}>
                            {deck.title}
                        </Text>
                        <Text style={styles.countStyles}>{deck.questions.length}</Text>
                        <Image
                            source={require('../../assets/logo_deck.png')}
                            style={styles.logo}
                        />
                        <View style={[styles.buttonContainer]}>
                            <Button
                                borderRadius={25}
                                onPress={() => this.props.navigation.push('AddCard', deck)}
                                buttonStyle={styles.buttonStyle}
                                title="ADD CARD"
                                accessibilityLabel="ADD CARD"
                            />
                            <Button
                                borderRadius={25}
                                onPress={() => this.props.navigation.push('ShowQuiz', deck)}
                                buttonStyle={styles.buttonStyleStartQuiz}
                                title="START"
                                accessibilityLabel="QUIZ"
                            />
                        </View>
                    </View>
                )}
            </View>
        );
    }
}

const mapStateToProps = ({decks}, props) => {
    return {
        decks
    }
};

export default connect(mapStateToProps)(ShowDeck);
