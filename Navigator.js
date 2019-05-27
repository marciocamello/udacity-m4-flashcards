import React from 'react';
import { fromLeft, zoomIn, zoomOut } from 'react-navigation-transitions';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import Main from './components/Main/Main';
import ListDecks from './components/ListDecks/ListDecks';
import ShowDeck from './components/ShowDeck/ShowDeck';
import ScoreQuiz from './components/ScoreQuiz/ScoreQuiz';
import ShowQuiz from './components/ShowQuiz/ShowQuiz';
import AddCard from './components/AddCard/AddCard';
import AddDeck from './components/AddDeck/AddDeck';

const navigationOptions = {
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
};

const handleCustomTransition = ({ scenes }) => {
    const prevScene = scenes[scenes.length - 2];
    const nextScene = scenes[scenes.length - 1];

    // Custom transitions go there
    if (prevScene
        && prevScene.route.routeName === 'ShowQuiz'
        && nextScene.route.routeName === 'ShowDeck') {
        return zoomIn();
    }
    return fromLeft();
};

const AppNavigator = createStackNavigator(
    {
        Main: Main,
        ListDecks: {
            screen: ListDecks,
            navigationOptions: navigationOptions
        },
        ShowDeck: {
            screen: ShowDeck,
            navigationOptions: navigationOptions
        },
        ShowQuiz: {
            screen: ShowQuiz,
            navigationOptions: navigationOptions
        },
        ScoreQuiz: {
            screen: ScoreQuiz,
            navigationOptions: navigationOptions
        },
        AddCard: {
            screen: AddCard,
            navigationOptions: navigationOptions
        },
        AddDeck: {
            screen: AddDeck,
            navigationOptions: navigationOptions
        }
    },
    {
        initialRouteName: 'Main',
        transitionConfig: (nav) => handleCustomTransition(nav)
    },
 );

 let AppContainer = createAppContainer(AppNavigator);

 export default AppContainer
