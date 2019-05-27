import React from 'react';
import {FlatList, TouchableOpacity, View, ScrollView} from 'react-native';
import {Button, ListItem} from 'react-native-elements';
import {connect} from 'react-redux';
import {AppLoading} from 'expo';
import {handleInitialData} from "../../redux/actions/shared";
import Footer from '../Footer/Footer';

import styles from './styles';

class ListDecks extends React.Component {

    static navigationOptions = ({navigation}) => {
        return {
            headerTitle: "List Decks"
        }
    };

    showDeck = item => {

        this.props.navigation.navigate('ShowDeck', item);
    };

    keyExtractor = (item, index) => index.toString();

    componentDidMount() {

        this.props.fetchInitialData();
    }

    // render deck item
    renderDeckItem = ({item}) => {
        return (
            <TouchableOpacity
                activeOpacity={1}
                onPress={() => this.showDeck(item)}
            >
                <ListItem
                    containerStyle={styles.itemContainer}
                    title={item.title}
                    subtitle={item.title}
                    badge={{
                        value: item.questions.length,
                        textStyle: styles.countStyles,
                        badgeStyle: styles.countStylesContainer,
                    }}
                    rightAvatar={{
                        source: require('../../assets/logo_mini.png'),
                        overlayContainerStyle: styles.avatarStyle,
                        rounded: false
                    }}
                />
            </TouchableOpacity>
        )
    };

    render() {

        const {decks} = this.props;

        if (!decks) {
            return <AppLoading/>
        }

        return (
            <View style={{flex: 1}}>
                <View style={{flex: 0.9}}>
                    <ScrollView>
                        {decks.length > 0 && (
                            <FlatList
                                data={decks}
                                renderItem={this.renderDeckItem}
                                keyExtractor={this.keyExtractor}
                            />
                        )}
                    </ScrollView>
                </View>
                <View style={{flex: 0.1}}>
                    <Footer navigation={this.props.navigation}/>
                </View>
            </View>
        );
    }
}

const mapStateToProps = ({decks}) => {
    return {
        decks: Object.values(decks)
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchInitialData: () => {
            dispatch(handleInitialData());
        }
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListDecks);
