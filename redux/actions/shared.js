import {fetchInitialData} from "./decks";

export function handleInitialData() {
    return (dispatch) => {
        dispatch(fetchInitialData());
    }
}
