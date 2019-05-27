import React from 'react';
import { createStackNavigator, createBottomTabNavigator, createAppContainer } from "react-navigation";
import { Icon } from 'react-native-elements'

import Main from './components/Main/Main';
import About from './components/About/About';

const MainScreen = createStackNavigator({
    Main: Main
});

const AboutScreen = createStackNavigator({
    About: About
});

const Tabs = createBottomTabNavigator(
    {
        Main: MainScreen,
        About: AboutScreen,
    },
    {
        defaultNavigationOptions: ({ navigation }) => ({
            activeTintColor: '#e91e63',
            tabBarOptions: {
                labelStyle: {
                    fontWeight: 'bold',
                    textAlign: "left",
                    color: '#FFFFFF',
                    flex: 1,
                    alignSelf: 'center'
                },
                style: {
                    backgroundColor: '#FF6600',
                    paddingTop: 10,
                },
            },
            tabBarIcon: ({focused, tintColor }) => {
                const { routeName } = navigation.state;
                let tabName;
                let tabActive;
                tabName = routeName === 'Main' ? 'home' : 'info';
                tabActive = focused ? '#293333' : '#FFFFFF';
                return <Icon name={tabName} size={20} color={tabActive}/>
            }
        }
    )
});
export default createAppContainer(Tabs);
