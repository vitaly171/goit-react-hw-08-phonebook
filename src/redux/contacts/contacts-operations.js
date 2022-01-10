// import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import {
    fetchContactsRequst,
    fetchContactsSuccess,
    fetchContactsError,
    addContactsRequst,
    addContactsSuccess,
    addContactsError,
    deleteContactRequst,
    deleteContactSuccess,
    deleteContactError
} from './contacts-actions';


export const fetchContacts = () => async dispatch => {
    dispatch(fetchContactsRequst());
    try {
      const { data } = await axios.get('/contacts');
  
      dispatch(fetchContactsSuccess(data));
    } catch (error) {
      dispatch(fetchContactsError(error.message));
    }
  };


  export const addContact = ({name, number}) => dispatch => {
    const contact = {
      name: name,
      number: number,
    };
  
    dispatch(addContactsRequst());
  
    axios
      .post('/contacts', contact)
      .then(({ data }) => dispatch(addContactsSuccess(data)))
      .catch(error => dispatch(addContactsError(error.message)));
  };



  export const deleteContact = contactId => dispatch => {
    dispatch(deleteContactRequst());
  
    axios
      .delete(`/contacts/${contactId}`)
      .then(() => dispatch(deleteContactSuccess(contactId)))
      .catch(error => dispatch(deleteContactError(error.message)));
  };