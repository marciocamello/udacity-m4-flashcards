import React from 'react';
import { createStackNavigator, createAppContainer, createDrawerNavigator } from 'react-navigation';

import BottomTabs from './BottomTabs';

import Main from './components/Main/Main';
import ListDecks from './components/ListDecks/ListDecks';
import ShowDeck from './components/ShowDeck/ShowDeck';
import ScoreQuiz from './components/ScoreQuiz/ScoreQuiz';
import ShowQuiz from './components/ShowQuiz/ShowQuiz';
import AddCard from './components/AddCard/AddCard';
import AddDeck from './components/AddDeck/AddDeck';

const HamburgerNavigation  = createDrawerNavigator(
    {
        Tabs: BottomTabs
    }
);

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

const AppNavigator = createStackNavigator(
    {
        Drawer: {
            screen: HamburgerNavigation,
            navigationOptions: {
                header: null,
            },
        },
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
        },
        DefaultScreen: {
            screen: Main
        }
    }
 );

 let AppContainer = createAppContainer(AppNavigator);

 export default AppContainer