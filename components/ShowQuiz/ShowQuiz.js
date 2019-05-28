import React from 'react';
import {Animated, Text, View} from 'react-native';
import {HeaderBackButton} from "react-navigation";
import {Button} from 'react-native-elements';

import styles from './styles';

class ShowQuiz extends React.Component {

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

    constructor(props) {
        super(props);
        this.state = {
            currentQuestion: 0,
            showAnswer: false,
            totalQuestions: this.props.navigation.state.params.length,
            card: this.props.navigation.state.params,
            score: 0,
        };
        this.animatedValue = new Animated.Value(0);
        this.value = 0;
        this.animatedValue.addListener(({value}) => {
            this.value = value;
        });
    }

    getCards() {

        return this.state.card.questions[this.state.currentQuestion];
    }

    showAnswer() {

        this.setState({
            showAnswer: !this.state.showAnswer
        });

        this.flipCard();
    }

    checkCorrect(value) {

        this.setState({
            score: this.state.score + value
        }, () => {

            if (this.state.currentQuestion + 1 === this.state.card.questions.length) {

                this.props.navigation.navigate('ScoreQuiz', {
                    deck: this.props.navigation.state.params,
                    score: this.state.score
                });
            } else {

                this.setState({
                    currentQuestion: this.state.currentQuestion + 1
                });

                this.flipCard()
            }
        })
    }

    flipCard() {

        if (this.value >= 90) {

            Animated.spring(this.animatedValue, {
                toValue: 0,
                tension: 10,
                friction: 8,
            }).start();
        } else {

            Animated.spring(this.animatedValue, {
                toValue: 180,
                tension: 10,
                friction: 8,
            }).start();
        }
    }

    render() {

        this.SetInterpolate = this.animatedValue.interpolate({
            inputRange: [0, 180],
            outputRange: ['0deg', '360deg'],
        });
        const Rotate_Y_AnimatedStyle = {
            transform: [{rotateY: this.SetInterpolate}],
        };

        return (
            <View style={styles.container}>
                {this.getCards() && (
                    <Animated.View style={[Rotate_Y_AnimatedStyle, styles.card]}>
                        <Text style={styles.currentQuestion}>
                            {this.state.currentQuestion + 1} / {this.state.card.questions.length}
                        </Text>
                        <Text style={styles.titleStyles}>
                            {this.state.showAnswer
                                ? this.getCards().answer
                                : this.getCards().question
                            }
                        </Text>
                        <Text
                            style={styles.showAnswer}
                            onPress={() => this.showAnswer()}
                        >
                            {this.state.showAnswer
                                ? 'Answer'
                                : 'Question'
                            }
                        </Text>
                        {!this.state.showAnswer && (<View style={[styles.buttonContainer]}>
                                <Button
                                    borderRadius={25}
                                    onPress={() => this.checkCorrect(1)}
                                    buttonStyle={styles.buttonStyle}
                                    title="CORRECT"
                                    accessibilityLabel="CORRECT"
                                />
                                < Button
                                    borderRadius={25}
                                    onPress={() => this.checkCorrect(0)}
                                    buttonStyle={styles.buttonStyleStartQuiz}
                                    title="INCORRECT"
                                    accessibilityLabel="INCORRECT"
                                />
                            </View>
                        )}
                    </Animated.View>
                )}
            </View>
        );
    }
}

export default ShowQuiz;
