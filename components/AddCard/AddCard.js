import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

import styles from './styles';
import {connect} from 'react-redux';
import {saveCard} from "../../redux/actions/decks";
import Footer from "../Footer/Footer";
import {HeaderBackButton} from "react-navigation";

class AddCard extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: (
                <HeaderBackButton
                    onPress={() => {
                        navigation.push('ShowDeck', navigation.state.params)
                    }}
                    tintColor={'#FFFFFF'}
                />
            ),
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
            answer: this.state.answer
        });

        this.setState({
            question: '',
            answer: ''
        });

        this.props.navigation.navigate('ShowDeck', this.props.deck);
    }

    render() {
        return (
            <View style={styles.gridMain}>
                <View style={styles.gridTop}>
                    <ScrollView>
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
                    </ScrollView>
                </View>
                <View style={styles.gridBottom}>
                    <Footer navigation={this.props.navigation}/>
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
