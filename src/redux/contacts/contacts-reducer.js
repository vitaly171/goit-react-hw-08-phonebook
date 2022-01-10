import {createReducer} from '@reduxjs/toolkit';
import { 
    fetchContactsSuccess,
    addContactsSuccess,
    deleteContactSuccess,
    filterContacts,
 } from './contacts-actions';

export const contactsReducer = createReducer([], {
    [fetchContactsSuccess]: (_, { payload }) => payload,
    [addContactsSuccess ]: (state, { payload }) => [...state, payload],
    [deleteContactSuccess]: (state, { payload }) =>
      state.filter(({ id }) => id !== payload),
});


export const filterReducer = createReducer('', {
    [filterContacts.type]: (state, {payload}) => {
        return payload;
    }
} )

