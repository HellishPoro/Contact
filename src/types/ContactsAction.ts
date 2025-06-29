import { ContactDto } from "./dto/ContactDto";
import { GroupContactsDto } from "./dto/GroupContactsDto";

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