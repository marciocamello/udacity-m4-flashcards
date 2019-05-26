import React from 'react';
import {Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

import styles from './styles';
import {connect} from 'react-redux';
import {getDeck, saveCard} from "../../redux/actions/decks";

class AddCard extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "Add Card"
        }
    };

    constructor(props){
        super(props);
        this.state = {
            question: '',
            answer: ''
        };
    }

    handleSaveCard() {

        const deck = this.props.navigation.state.params;

        this.props.onSaveCard(deck, {
            question: this.state.question,
            answer: this.state.question
        });

        this.setState({
            question: '',
            answer: ''
        });

        this.props.navigation.navigate('ShowDeck', this.props.deck);
    }

    render() {
        return (
            <View style={[styles.container]}>
                <Text>Card Name</Text>
                <Input
                    placeholder='eg. NodeJS use V8?'
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    multiline={false}
                    onChangeText={(question) => this.setState({question})}
                />
                <Text>Card Answer</Text>
                <Input
                    placeholder='eg. Yes'
                    autoCorrect={false}
                    autoCapitalize={'none'}
                    multiline={false}
                    onChangeText={(answer) => this.setState({answer})}
                />
                <View style={[styles.buttonContainer]}>
                    <Button
                        borderRadius={25}
                        onPress={() => this.handleSaveCard()}
                        buttonStyle={styles.buttonStyle}
                        title="SAVE"
                        accessibilityLabel="SAVE"
                    />
                </View>
            </View>
        );
    }
}

function mapStateToProps({deck}) {
    return {
        deck
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveCard: (deck, card) => {
            dispatch(saveCard(deck, card));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddCard);
