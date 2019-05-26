import {GET_DECK, ADD_CARD, ADD_DECK, DECKS} from "../actions/types";

export default function decks(state = {}, action) {
    switch (action.type) {
        case DECKS:
            return {
                ...state,
                ...action.decks
            };
        case ADD_DECK:
            return {
                ...state,
                ...action.decks
            };
        case GET_DECK:
            return {
                ...state,
                ...action.deck
            };
        case ADD_CARD:
            return {
                ...state,
                ...action.decks
            };
        default:
            return state;
    }
}
