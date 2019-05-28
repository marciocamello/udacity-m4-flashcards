import {AsyncStorage} from 'react-native';

import {initialData, STORAGE_KEY} from './_DATA';

/**
 * ReadableAPI Class
 */
class ReadableAPI {

    getInitialData = async () => {
        try {

            //await AsyncStorage.clear(STORAGE_KEY);

            const decks = await this.getDecks();

            if (!decks) {

                await AsyncStorage.setItem(
                    STORAGE_KEY,
                    this.stringData(initialData)
                );

            }

            return await this.getDecks();

        } catch (e) {

            console.log("INITIAL DATA ERROR", e);
        }
    };

    getDecks = async () => {

        try {

            const decks = await AsyncStorage.getItem(STORAGE_KEY);
            return this.parseData(decks ? decks : {});
        } catch (e) {

            console.log("GET ITEM STORAGE: ", e);
        }
    };

    saveDeck = async data => {
        try {

            return await AsyncStorage.mergeItem(STORAGE_KEY, this.stringData(data));
        } catch (e) {

            console.log("MERGE DATA ERROR", e);
        }
    };

    stringData(data) {

        return JSON.stringify(data);
    };

    parseData(data) {

        return JSON.parse(data);
    };
}

export default new ReadableAPI();
