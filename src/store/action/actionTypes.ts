import { ContactDto } from "src/types/dto/ContactDto"
import { GroupContactsDto } from "src/types/dto/GroupContactsDto"

export const FETCH_CONTACTS_REQUEST = 'FETCH_CONTACTS_REQUEST'
export const FETCH_CONTACTS_SUCCESS = 'FETCH_CONTACTS_SUCCESS'
export const FETCH_CONTACTS_FAILURE = 'FETCH_CONTACTS_FAILURE'

export const FETCH_GROUPS_REQUEST = 'FETCH_GROUPS_REQUEST'
export const FETCH_GROUPS_SUCCESS = 'FETCH_GROUPS_SUCCESS'
export const FETCH_GROUPS_FAILURE = 'FETCH_GROUPS_FAILURE'

export const FETCH_FAVORITES_REQUEST = 'FETCH_FAVORITES_REQUEST'
export const FETCH_FAVORITES_SUCCESS = 'FETCH_FAVORITES_SUCCESS'
export const FETCH_FAVORITES_FAILURE = 'FETCH_FAVORITES_FAILURE'



export type ContactsAction = 
  | { type: 'FETCH_CONTACTS_REQUEST' }
  | { type: 'FETCH_CONTACTS_SUCCESS'; payload: ContactDto[] }
  | { type: 'FETCH_CONTACTS_FAILURE'; payload: string }
  | { type: 'FETCH_GROUPS_REQUEST' }
  | { type: 'FETCH_GROUPS_SUCCESS'; payload: GroupContactsDto[] }
  | { type: 'FETCH_GROUPS_FAILURE'; payload: string }
  | { type: 'FETCH_FAVORITES_REQUEST' }
  | { type: 'FETCH_FAVORITES_SUCCESS'; payload: string[] }
  | { type: 'FETCH_FAVORITES_FAILURE'; payload: string };