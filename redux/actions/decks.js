import {ADD_CARD, ADD_DECK, DECKS, GET_DECK} from "./types";

import API from '../../api';
import React from "react";

export const fetchInitialData = () => {
    return async (dispatch) => {
        const decks = await API.getInitialData();
        if(decks) {
            dispatch(fetchDecks(decks));
        }
    }
};

export const fetchDecks = (decks) => {
    return {
        type: DECKS,
        decks
    };
};

export const saveCard = (deck, card) => {
    return async (dispatch) => {

        deck.questions.push(card);

        const decks = await API.getDecks();

        const saveDecks = {
            ...decks,
            [deck.id]: deck
        };

        await API.saveDeck(saveDecks);

        dispatch(addCard(saveDecks));
    }
};

export const addCard = (decks) => {
    return {
        type: ADD_CARD,
        decks,
    }
};

export const getDeck = (deckId) => {
    return async (dispatch) => {
        const decks = await API.getDecks();
        dispatch(showDeck(decks[deckId]));
    }
};

export const showDeck = (deck) => {
    return {
        type: GET_DECK,
        deck
    }
};

export const saveDeck = (deck) => {
    return async (dispatch) => {

        const decks = await API.getDecks();

        const saveDecks = {
            ...decks,
            [deck.id]: {
                ...deck
            }
        };

        await API.saveDeck(saveDecks);

        dispatch(addDeck(saveDecks));
    }
};

export const addDeck = (decks) => {
    return {
        type: ADD_DECK,
        decks
    }
};
