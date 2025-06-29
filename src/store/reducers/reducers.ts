import { ContactsAction } from 'src/types/ContactsAction';
import { ContactDto } from '../../types/dto/ContactDto'
import { GroupContactsDto } from '../../types/dto/GroupContactsDto'

interface ContactsState {
    contacts: ContactDto[];
    groups: GroupContactsDto[];
    favorites: string[];
    loading: boolean;
    error: string | null;
}

const initialState: ContactsState = {
  contacts: [],
  groups: [],
  favorites: [],
  loading: false,
  error: null
};

export const contactsReducer = (
  state = initialState, 
  action: ContactsAction 
): ContactsState => {
  switch (action.type) {
    case 'FETCH_CONTACTS_REQUEST':
    case 'FETCH_GROUPS_REQUEST':
    case 'FETCH_FAVORITES_REQUEST':
      return {
        ...state,
        loading: true,
        error: null
      };
      
    case 'FETCH_CONTACTS_SUCCESS':
      return {
        ...state,
        loading: false,
        contacts: action.payload
      };
      
    case 'FETCH_GROUPS_SUCCESS':
      return {
        ...state,
        loading: false,
        groups: action.payload
      };
      
    case 'FETCH_FAVORITES_SUCCESS':
      return {
        ...state,
        loading: false,
        favorites: action.payload
      };
      
    case 'FETCH_CONTACTS_FAILURE':
    case 'FETCH_GROUPS_FAILURE':
    case 'FETCH_FAVORITES_FAILURE':
      return {
        ...state,
        loading: false,
        error: action.payload
      };
      
    default:
      return state;
  }
};