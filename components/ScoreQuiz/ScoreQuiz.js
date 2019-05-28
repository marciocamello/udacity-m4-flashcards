import React from 'react';
import {Text, View} from 'react-native';
import {Button} from 'react-native-elements';

import styles from './styles';

class ScoreQuiz extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerLeft: false,
            headerTitle: "Score Quiz"
        }
    };

    render() {

        const { deck, score } = this.props.navigation.state.params;
        const total = (100 * score / deck.questions.length).toFixed(2);

        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.titleStyles}>
                        SCORE
                    </Text>
                    <Text style={styles.scoreTotal}>
                        {total}%
                    </Text>
                    <View style={[styles.buttonContainer]}>
                        <Button
                            borderRadius={25}
                            onPress={() => this.props.navigation.push('ShowQuiz', deck)}
                            buttonStyle={styles.buttonStyle}
                            title="RESTART QUIZ"
                            accessibilityLabel="RESTART QUIZ"
                        />
                        <Button
                            borderRadius={25}
                            onPress={() => this.props.navigation.push('ShowDeck', deck)}
                            buttonStyle={styles.buttonStyleStartQuiz}
                            title="BACK DO DECK"
                            accessibilityLabel="BACK DO DECK"
                        />
                    </View>
                </View>
            </View>
        );
    }
}

export default ScoreQuiz;
