import {GET_DECK, ADD_CARD, ADD_DECK, DECKS} from "../actions/types";

export default function decks(state = {}, action) {
    switch (action.type) {
        case DECKS:
            return {
                ...state,
                ...action.payload
            };
        case ADD_DECK:
            return {
                ...state,
                ...action.payload
            };
        case GET_DECK:
            return {
                ...state,
                ...action.payload
            };
        case ADD_CARD:
            return {
                ...state,
                ...action.payload
            };
        default:
            return state;
    }
}
