import React, {Component} from 'react';
import {Provider} from 'react-redux';
import {createStore} from "redux";
import AppNavigator from './Navigator';
import middleware from './redux/middleware';
import {setNotification} from './notifications';

import rootReducer from './redux/reducers';

import {persistReducer, persistStore} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import {PersistGate} from 'redux-persist/integration/react';

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

let store = createStore(persistedReducer, middleware);
let persistor = persistStore(store);

export default class App extends Component {

    componentDidMount() {
        setNotification()
    }

    render() {
        return (
            <Provider store={store}>
                <PersistGate loading={null} persistor={persistor}>
                    <AppNavigator/>
                </PersistGate>
            </Provider>
        );
    }
}
