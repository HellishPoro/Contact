import { createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import { ContactDto } from 'src/types/dto/ContactDto';
import { GroupContactsDto } from 'src/types/dto/GroupContactsDto';

export const contactsApi = createApi({
    reducerPath: 'contactsApi',
    baseQuery: fetchBaseQuery ({ baseUrl: 'https://mocki.io/v1' }),
    endpoints: (builder) => ({
        getContacts: builder.query<ContactDto[], void>({
            query: () => "/704b1f61-c88b-488c-aa0d-498f046214ae"
        }),
        getGroups: builder.query<GroupContactsDto[], void>({
            query: () => "/bfa67566-66c8-4101-a634-edd2d27ba6c7"
        }),
        getFavorites: builder.query<string[], void>({
            query: () => "/704b1f61-c88b-488c-aa0d-498f046214ae",
            transformResponse: (response: ContactDto[]) => {
                return response.slice(0, 4).map(contact => contact.id);
            }
        })
    })
})

export const {
    useGetContactsQuery,
    useGetGroupsQuery,
    useGetFavoritesQuery
} = contactsApi;