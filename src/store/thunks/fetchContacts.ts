import { Dispatch } from "redux";
import { fetchContactsFailure, fetchContactsRequest, fetchContactsSuccess } from "../actions/actions";
import { DATA_CONTACT } from "src/__data__";
import { ContactDto } from "src/types/dto/ContactDto";
import { delay } from "src/constants/delay";

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