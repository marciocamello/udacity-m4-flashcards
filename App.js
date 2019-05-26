import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore } from "redux";
import reducer from './redux/reducers';
import {View} from 'react-native';
import AppNavigator from './Navigator';
import middleware from './redux/middleware';

const store = createStore(reducer, middleware);

export default class App extends Component {
    render() {
        return (
            <Provider store={store}>
                <View style={{ flex: 1 }}>
                    <AppNavigator />
                </View>
            </Provider>
        );
    }
}
