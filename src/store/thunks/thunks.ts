import {
    fetchContactsRequest,
    fetchContactsSuccess,
    fetchContactsFailure,
    fetchGroupsRequest,
    fetchGroupsSuccess,
    fetchGroupsFailure,
    fetchFavoritesRequest,
    fetchFavoritesSuccess,
    fetchFavoritesFailure
} from '../action/action'
import { ContactDto } from '../../types/dto/ContactDto'
import { GroupContactsDto } from '../../types/dto/GroupContactsDto'
import { DATA_CONTACT, DATA_GROUP_CONTACT } from '../../__data__/index'
import { Dispatch } from 'redux'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));


export const fetchContacts = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchContactsRequest());
        try{
            await delay(500);
            dispatch(fetchContactsSuccess(DATA_CONTACT as ContactDto[]));
        } catch (error) {
            if (error instanceof Error) {
                dispatch(fetchContactsFailure(error.message));
            } else {
                dispatch(fetchContactsFailure('An unknown error occurred'));
            }
        }
    }
}

export const fetchGroups = () => {
    return async (dispatch: Dispatch) => {
        dispatch(fetchGroupsRequest());
        try{
            await delay(500);
            dispatch(fetchGroupsSuccess(DATA_GROUP_CONTACT as GroupContactsDto[]));
        } catch (error) {
            if (error instanceof Error) {
                dispatch(fetchGroupsFailure(error.message));
            } else {
                dispatch(fetchGroupsFailure('An unknown error occurred'));
            }
        }
    }
}

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