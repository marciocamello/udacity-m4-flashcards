import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {Button, Input} from 'react-native-elements';

import styles from './styles';
import {connect} from 'react-redux';
import {saveDeck} from "../../redux/actions/decks";
import generateUID from "../../utils/GenerateUUID";
import Footer from "../Footer/Footer";
import {HeaderBackButton} from "react-navigation";

class AddDeck extends React.Component {

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
            headerTitle: "Add Deck"
        }
    };

    constructor(props){
        super(props);
        this.state = {
            name: ''
        };
    }

    handleSaveDeck() {

        const deck = {
            id: generateUID(),
            title: this.state.title,
            questions: []
        };

        this.props.onSaveDeck(deck);

        this.props.navigation.navigate('ShowDeck', deck);

        this.setState({
            title: ''
        });
    }

    render() {
        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0.9}}>
                    <ScrollView>
                        <View style={[styles.container]}>
                            <Text>Deck Name</Text>
                            <Input
                                placeholder='eg. UdacityCards'
                                autoCorrect={false}
                                autoCapitalize={'none'}
                                multiline={false}
                                onChangeText={(title) => this.setState({title})}
                            />
                            <View style={[styles.buttonContainer]}>
                                <Button
                                    borderRadius={25}
                                    onPress={() => this.handleSaveDeck()}
                                    buttonStyle={styles.buttonStyle}
                                    title="SAVE"
                                    accessibilityLabel="SAVE"
                                />
                            </View>
                        </View>
                    </ScrollView>
                </View>
                <View style={{flex: 0.1}}>
                    <Footer navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

function mapStateToProps({decks}) {
    return {
        decks
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onSaveDeck: (deck) => {
            dispatch(saveDeck(deck));
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(AddDeck);
