import {
    FETCH_CONTACTS_REQUEST,
    FETCH_CONTACTS_SUCCESS,
    FETCH_CONTACTS_FAILURE,
    FETCH_GROUPS_REQUEST,
    FETCH_GROUPS_SUCCESS,
    FETCH_GROUPS_FAILURE,
    FETCH_FAVORITES_REQUEST,
    FETCH_FAVORITES_SUCCESS,
    FETCH_FAVORITES_FAILURE
} from './actionTypes'

import { ContactDto } from '../../types/dto/ContactDto'
import { GroupContactsDto } from '../../types/dto/GroupContactsDto'
import { FavoriteContactsDto } from '../../types/dto/FavoriteContactsDto'

export const fetchContactsRequest = ()=>({
    type: FETCH_CONTACTS_REQUEST
})
export const fetchContactsSuccess = (contacts: ContactDto[])=>({
    type: FETCH_CONTACTS_SUCCESS,
    payload: contacts
})
export const fetchContactsFailure = (error: string)=>({
    type: FETCH_CONTACTS_FAILURE,
    payload: error
})


export const fetchGroupsRequest = ()=>({
    type: FETCH_GROUPS_REQUEST
})
export const fetchGroupsSuccess = (groups: GroupContactsDto[])=>({
    type: FETCH_GROUPS_SUCCESS,
    payload: groups
})
export const fetchGroupsFailure = (error: string)=>({
    type: FETCH_GROUPS_FAILURE,
    payload: error
})  


export const fetchFavoritesRequest = ()=>({
    type: FETCH_FAVORITES_REQUEST
})
export const fetchFavoritesSuccess = (favorites: FavoriteContactsDto[])=>({
    type: FETCH_FAVORITES_SUCCESS,
    payload: favorites
})
export const fetchFavoritesFailure = (error: string)=>({
    type: FETCH_FAVORITES_FAILURE,
    payload: error
})