import { Dispatch } from "redux";
import { fetchFavoritesFailure, fetchFavoritesRequest, fetchFavoritesSuccess } from "../actions/actions";
import { delay } from "src/constants/delay";
import { DATA_CONTACT } from "src/__data__";

export const fetchFavorites = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchFavoritesRequest());
        try{
            await delay(500);
            const favorites = DATA_CONTACT.slice(0, 4).map(c => c.id);
            dispatch(fetchFavoritesSuccess(favorites)); 
        } catch (error) {
            if (error instanceof Error) {
                dispatch(fetchFavoritesFailure(error.message));
            } else {
                dispatch(fetchFavoritesFailure('An unknown error occurred'));
            }
        }
    }
}